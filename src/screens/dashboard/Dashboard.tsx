import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../service/AuthService";
import { ProjetoService } from "../../service/ProjetoService";
import type { ReadProjetoDTO } from "../../service/models/ProjetoModels";
import NewProjectModal from "./newProjectModal/NewPrejoctModal";
import {
    Page,
    Header,
    Logo,
    UserArea,
    UserName,
    Avatar,
    LogoutButton,
    ButtonDiv,
    NewButton,
    NewButtonGlowPink,
    NewButtonGlowBlue,
    NewButtonText,
    Content,
    ProjectGrid,
    ProjectCard,
    ProjectName,
    StatusBadge,
    Loading,
    EmptyState,
    EmptyTitle,
    EmptySubtitle,
} from "./Dashboard.style";

const statusLabel = (status: string): string => {
    switch (status) {
        case "C": return "Concluído";
        case "E": return "Em andamento";
        case "P": return "Pendente";
        default: return status;
    }
};

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [projetos, setProjetos] = useState<ReadProjetoDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (!AuthService.isAuthenticated()) {
            navigate("/");
            return;
        }

        // Decodifica o token JWT pra pegar o nome
        const token = AuthService.getToken();
        if (token) {
            try {
                const payload = JSON.parse(atob(token.split(".")[1]));
                const name =
                    payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] ||
                    payload.name ||
                    "Usuário";
                setUserName(name);
            } catch {
                setUserName("Usuário");
            }
        }

        loadProjetos();
    }, [navigate]);

    const loadProjetos = async () => {
        try {
            const data = await ProjetoService.getAll();
            setProjetos(data);
        } catch (err) {
            console.error("Erro ao carregar projetos:", err);
        } finally {
            setLoading(false);
        }
    };

    const getInitials = (name: string): string => {
        return name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")
            .toUpperCase();
    };

    const handleLogout = () => {
        AuthService.logout();
        navigate("/");
    };

    return (
        <Page>
            <Header>
                <Logo>PROJECTS</Logo>
                <UserArea>
                    <UserName>{userName}</UserName>
                    <Avatar>{getInitials(userName)}</Avatar>
                    <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
                </UserArea>
            </Header>

            <ButtonDiv>
                <NewButton onClick={() => setShowModal(true)}>
                    <NewButtonGlowPink />
                    <NewButtonGlowBlue />
                    <NewButtonText>+ Novo Projeto</NewButtonText>
                </NewButton>
            </ButtonDiv>

            <Content>
                {loading ? (
                    <Loading>Carregando projetos...</Loading>
                ) : projetos.length === 0 ? (
                    <EmptyState>
                        <EmptyTitle>Nenhum projeto ainda</EmptyTitle>
                        <EmptySubtitle>Crie seu primeiro projeto clicando no botão Novo Projeto.</EmptySubtitle>
                    </EmptyState>
                ) : (
                    <ProjectGrid>
                        {projetos.map((projeto) => (
                            <ProjectCard key={projeto.projetoId} onClick={() => navigate(`/project/${projeto.projetoId}`)}>
                                <ProjectName>{projeto.nome}</ProjectName>
                                <StatusBadge $status={projeto.status}>
                                    {statusLabel(projeto.status)}
                                </StatusBadge>
                            </ProjectCard>
                        ))}
                    </ProjectGrid>
                )}
            </Content>
            {showModal && (
                <NewProjectModal
                    onClose={() => setShowModal(false)}
                    onCreated={() => loadProjetos()}
                />
            )}
        </Page>

    );

};

export default Dashboard;