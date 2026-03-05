import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */

export const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #111111;
  font-family: "Outfit", sans-serif;
  color: #e8e8e8;
`;

/* ═══════════════════════════════════════════════
   HEADER
   ═══════════════════════════════════════════════ */

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  border-bottom: 1px solid #1a1a1a;
  animation: ${fadeIn} 0.4s ease;

  @media (max-width: 768px) {
    padding: 16px 20px;
  }
`;

export const Logo = styled.div`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #444444;
`;

export const UserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const UserName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #888888;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(232, 67, 147, 0.3), rgba(9, 132, 227, 0.3));
  border: 1px solid #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: #e8e8e8;
`;

export const LogoutButton = styled.button`
  background: none;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 500;
  color: #555555;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #3a3a3a;
    color: #888888;
  }
`;

/* ═══════════════════════════════════════════════
   BUTTON BAR
   ═══════════════════════════════════════════════ */

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 40px;
  animation: ${fadeIn} 0.4s ease;

  @media (max-width: 768px) {
    padding: 16px 20px;
  }
`;

export const NewButton = styled.button`
  position: relative;
  padding: 12px 22px;
  border: none;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  color: #0a0a0a;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  margin-top: 4px;
  overflow: hidden;
  letter-spacing: 0.3px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 10px 40px rgba(232, 67, 147, 0.15),
      0 6px 20px rgba(9, 132, 227, 0.1);
    background: #ffffff;
  }

  &:active {
    transform: translateY(0) scale(0.98);
    transition: all 0.1s ease;
  }

  @media (max-width: 768px) {
    padding: 16px 20px;
  }
`;

export const NewButtonGlowPink = styled.div`
  position: absolute;
  bottom: -20%;
  left: -15%;
  width: 90%;
  height: 120%;
  background: radial-gradient(circle at bottom left, rgba(232, 67, 147, 0.55), transparent 55%);
  border-radius: 50%;
  pointer-events: none;
  filter: blur(10px);
  transition: all 0.4s ease;

  ${NewButton}:hover & {
    opacity: 0.95;
    filter: blur(14px);
    width: 95%;
    height: 130%;
  }
`;

export const NewButtonGlowBlue = styled.div`
  position: absolute;
  top: -20%;
  right: -15%;
  width: 90%;
  height: 120%;
  background: radial-gradient(circle at top right, rgba(9, 132, 227, 0.55), transparent 55%);
  border-radius: 50%;
  pointer-events: none;
  filter: blur(10px);
  transition: all 0.4s ease;

  ${NewButton}:hover & {
    opacity: 0.95;
    filter: blur(14px);
    width: 95%;
    height: 130%;
  }
`;

export const NewButtonText = styled.span`
  position: relative;
  z-index: 2;
  transition: letter-spacing 0.3s ease;

  ${NewButton}:hover & {
    letter-spacing: 0.8px;
  }
`;

/* ═══════════════════════════════════════════════
   CONTENT
   ═══════════════════════════════════════════════ */

export const Content = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 32px;
  animation: ${fadeIn} 0.5s ease;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`;

export const Greeting = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #e8e8e8;
  margin: 0 0 6px 0;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const GreetingHighlight = styled.span`
  background: linear-gradient(135deg, #e84393, #0984e3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const SubGreeting = styled.p`
  font-size: 15px;
  color: #555555;
  margin: 0 0 32px 0;
`;

/* ═══════════════════════════════════════════════
   PROJECT GRID
   ═══════════════════════════════════════════════ */

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
`;

export const ProjectCard = styled.div`
  background: #1a1a1a;
  border: 3px solid #222222;
  border-radius: 14px;
  padding: 22px 20px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    border-color: #333333;
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }
`;

export const ProjectName = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #e8e8e8;
  margin: 0 0 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StatusBadge = styled.span<{ $status: string }>`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.3px;

  ${({ $status }) => {
    switch ($status) {
      case "C":
        return `
          background: rgba(0, 184, 148, 0.12);
          color: #00b894;
          border: 1px solid rgba(0, 184, 148, 0.2);
        `;
      case "E":
        return `
          background: rgba(9, 132, 227, 0.12);
          color: #74b9ff;
          border: 1px solid rgba(9, 132, 227, 0.2);
        `;
      default:
        return `
          background: rgba(255, 255, 255, 0.06);
          color: #888888;
          border: 1px solid rgba(255, 255, 255, 0.08);
        `;
    }
  }}
`;

/* ═══════════════════════════════════════════════
   LOADING
   ═══════════════════════════════════════════════ */

export const Loading = styled.p`
  text-align: center;
  color: #555555;
  font-size: 14px;
  padding: 40px 0;
`;

/* ═══════════════════════════════════════════════
   EMPTY STATE
   ═══════════════════════════════════════════════ */

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  border-radius: 16px;
  text-align: center;
`;

export const EmptyIcon = styled.div`
  font-size: 40px;
  margin-bottom: 16px;
`;

export const EmptyTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #666666;
  margin: 0 0 6px 0;
`;

export const EmptySubtitle = styled.p`
  font-size: 13px;
  color: #444444;
  margin: 0;
`;