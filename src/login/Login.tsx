import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../service/AuthService";
import {
  Page,
  ContentWrapper,
  BrandingSide,
  BrandingLogo,
  BrandingTitle,
  BrandingHighlight,
  BrandingSubtitle,
  BrandingFeatures,
  BrandingFeature,
  FeatureIcon,
  Divider,
  FormSide,
  Title,
  Subtitle,
  TabRow,
  Tab,
  Form,
  FieldGroup,
  Label,
  Input,
  Button,
  ButtonGlowPink,
  ButtonGlowBlue,
  ButtonText,
  ForgotRow,
  ForgotLink,
  Footer,
  FooterLink,
} from "./Login.style";

type TabType = "login" | "register";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<TabType>("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [loginForm, setLoginForm] = useState({ email: "", senha: "" });
  const [registerForm, setRegisterForm] = useState({ nome: "", email: "", senha: "" });

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await AuthService.login({
        email: loginForm.email,
        senha: loginForm.senha,
      });

      AuthService.saveToken(response.token);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await AuthService.register({
        nome: registerForm.nome,
        email: registerForm.email,
        senha: registerForm.senha,
      });

      AuthService.saveToken(response.token);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const switchTab = (newTab: TabType) => {
    setTab(newTab);
    setError("");
  };

  return (
    <Page>

      <ContentWrapper>
        {/* ── BRANDING ── */}
        <BrandingSide>
          <BrandingLogo>PROJECTS</BrandingLogo>

          <BrandingTitle>
            Gerencie seus projetos com{" "}
            <BrandingHighlight>simplicidade</BrandingHighlight>
          </BrandingTitle>

          <BrandingSubtitle>
            Organize, acompanhe e finalize seus projetos de forma prática.
            Tudo em um só lugar.
          </BrandingSubtitle>

          <BrandingFeatures>
            <BrandingFeature>
              <FeatureIcon>📋</FeatureIcon>
              Controle total de tarefas e status
            </BrandingFeature>
            <BrandingFeature>
              <FeatureIcon>⚡</FeatureIcon>
              Stack de tecnologias organizada
            </BrandingFeature>
            <BrandingFeature>
              <FeatureIcon>🔒</FeatureIcon>
              Dados seguros com autenticação JWT
            </BrandingFeature>
          </BrandingFeatures>
        </BrandingSide>

        <Divider />

        {/* ── FORMULÁRIO ── */}
        <FormSide>
          <Title>
            {tab === "login" ? "Bem-vindo de volta" : "Criar conta"}
          </Title>
          <Subtitle>
            {tab === "login"
              ? "Entre na sua conta para continuar."
              : "Registre-se para começar a usar."}
          </Subtitle>

          <TabRow>
            <Tab $active={tab === "login"} onClick={() => switchTab("login")}>
              Login
            </Tab>
            <Tab $active={tab === "register"} onClick={() => switchTab("register")}>
              Register
            </Tab>
          </TabRow>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          {/* ── LOGIN ── */}
          {tab === "login" && (
            <Form onSubmit={handleLoginSubmit}>
              <FieldGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  required
                />
              </FieldGroup>

              <FieldGroup>
                <Label>Senha</Label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={loginForm.senha}
                  onChange={(e) => setLoginForm({ ...loginForm, senha: e.target.value })}
                  required
                />
              </FieldGroup>

              <ForgotRow>
                <ForgotLink type="button">Esqueceu a senha?</ForgotLink>
              </ForgotRow>

              <Button type="submit" disabled={loading}>
                <ButtonGlowPink />
                <ButtonGlowBlue />
                <ButtonText>{loading ? "Entrando..." : "Entrar"}</ButtonText>
              </Button>
            </Form>
          )}

          {/* ── REGISTER ── */}
          {tab === "register" && (
            <Form onSubmit={handleRegisterSubmit}>
              <FieldGroup>
                <Label>Nome</Label>
                <Input
                  type="text"
                  placeholder="Seu nome completo"
                  value={registerForm.nome}
                  onChange={(e) => setRegisterForm({ ...registerForm, nome: e.target.value })}
                  required
                />
              </FieldGroup>

              <FieldGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={registerForm.email}
                  onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                  required
                />
              </FieldGroup>

              <FieldGroup>
                <Label>Senha</Label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={registerForm.senha}
                  onChange={(e) => setRegisterForm({ ...registerForm, senha: e.target.value })}
                  required
                />
              </FieldGroup>

              <Button type="submit" disabled={loading}>
                <ButtonGlowPink />
                <ButtonGlowBlue />
                <ButtonText>{loading ? "Criando..." : "Criar conta"}</ButtonText>
              </Button>
            </Form>
          )}

          <Footer>
            {tab === "login" ? (
              <span>
                Não tem conta?{" "}
                <FooterLink onClick={() => switchTab("register")}>
                  Registre-se
                </FooterLink>
              </span>
            ) : (
              <span>
                Já tem conta?{" "}
                <FooterLink onClick={() => switchTab("login")}>
                  Faça login
                </FooterLink>
              </span>
            )}
          </Footer>
        </FormSide>
      </ContentWrapper>
    </Page>
  );
};

/* ── Styled component de erro (local) ── */
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const ErrorMessage = styled.div`
  background: rgba(232, 67, 147, 0.1);
  border: 1px solid rgba(232, 67, 147, 0.25);
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 13px;
  color: #e84393;
  margin-bottom: 4px;
  animation: ${slideIn} 0.3s ease;
`;

export default Login;