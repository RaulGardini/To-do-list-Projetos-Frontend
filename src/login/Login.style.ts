import styled, { keyframes } from "styled-components";

/* ═══════════════════════════════════════════════
   ANIMATIONS
   ═══════════════════════════════════════════════ */

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ═══════════════════════════════════════════════
   PAGE — fundo único, conteúdo centralizado
   ═══════════════════════════════════════════════ */

export const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #111111;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Outfit", sans-serif;
  position: relative;
  overflow: hidden;
`;

/* ═══════════════════════════════════════════════
   CONTENT WRAPPER — branding + form lado a lado
   ═══════════════════════════════════════════════ */

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 80px;
  max-width: 900px;
  width: 100%;
  padding: 0 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    padding: 40px 24px;
  }
`;

/* ═══════════════════════════════════════════════
   LEFT — branding
   ═══════════════════════════════════════════════ */

export const BrandingSide = styled.div`
  flex: 1;
  animation: ${fadeIn} 0.6s ease;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const BrandingLogo = styled.div`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: #444444;
  margin-bottom: 20px;
`;

export const BrandingTitle = styled.h1`
  font-size: 38px;
  font-weight: 700;
  color: #e8e8e8;
  margin: 0 0 14px 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const BrandingHighlight = styled.span`
  background: linear-gradient(135deg, #e84393, #0984e3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const BrandingSubtitle = styled.p`
  font-size: 15px;
  color: #666666;
  margin: 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const BrandingFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BrandingFeature = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #555555;
`;

export const FeatureIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #1a1a1a;
  border: 1px solid #222222;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-shrink: 0;
`;

/* ═══════════════════════════════════════════════
   DIVIDER — linha vertical sutil
   ═══════════════════════════════════════════════ */

export const Divider = styled.div`
  width: 1px;
  height: 340px;
  background: #222222;
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

/* ═══════════════════════════════════════════════
   RIGHT — form
   ═══════════════════════════════════════════════ */

export const FormSide = styled.div`
  flex: 1;
  max-width: 380px;
  width: 100%;
  animation: ${fadeIn} 0.5s ease;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

/* ═══════════════════════════════════════════════
   HEADER
   ═══════════════════════════════════════════════ */

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #e8e8e8;
  margin: 0 0 6px 0;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #888888;
  margin: 0 0 28px 0;
  line-height: 1.5;
`;

/* ═══════════════════════════════════════════════
   TABS
   ═══════════════════════════════════════════════ */

export const TabRow = styled.div`
  display: flex;
  margin-bottom: 24px;
  border-bottom: 1px solid #1f1f1f;
`;

export const Tab = styled.button<{ $active?: boolean }>`
  flex: 1;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 2px solid ${({ $active }) => ($active ? "#ffffff" : "transparent")};
  color: ${({ $active }) => ($active ? "#e8e8e8" : "#555555")};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  letter-spacing: 0.5px;

  &:hover {
    color: #888888;
  }
`;

/* ═══════════════════════════════════════════════
   FORM
   ═══════════════════════════════════════════════ */

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: ${fadeIn} 0.3s ease;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #888888;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 10px;
  color: #e8e8e8;
  font-size: 15px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #3a3a3a;
  }

  &::placeholder {
    color: #444444;
  }
`;

/* ═══════════════════════════════════════════════
   BUTTON
   ═══════════════════════════════════════════════ */

export const Button = styled.button`
  position: relative;
  width: 100%;
  padding: 14px 24px;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
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
`;

export const ButtonGlowPink = styled.div`
  position: absolute;
  bottom: -40%;
  left: -25%;
  width: 150%;
  height: 120%;
  background: radial-gradient(circle at bottom left, rgba(232, 67, 147, 0.84), transparent 55%);
  border-radius: 50%;
  pointer-events: none;
  filter: blur(10px);
  transition: all 0.4s ease;

  ${Button}:hover & {
    opacity: 0.95;
    filter: blur(14px);
    width: 95%;
    height: 130%;
  }
`;

export const ButtonGlowBlue = styled.div`
  position: absolute;
  top: -40%;
  right: -25%;
  width: 150%;
  height: 120%;
  background: radial-gradient(circle at top right, rgba(9, 133, 227, 0.83), transparent 55%);
  border-radius: 50%;
  pointer-events: none;
  filter: blur(10px);
  transition: all 0.4s ease;

  ${Button}:hover & {
    opacity: 0.95;
    filter: blur(14px);
    width: 95%;
    height: 130%;
  }
`;

export const ButtonText = styled.span`
  position: relative;
  z-index: 2;
  transition: letter-spacing 0.3s ease;

  ${Button}:hover & {
    letter-spacing: 0.8px;
  }
`;

/* ═══════════════════════════════════════════════
   FORGOT
   ═══════════════════════════════════════════════ */

export const ForgotRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -8px;
`;

export const ForgotLink = styled.button`
  font-size: 12px;
  color: #555555;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  padding: 0;
  transition: color 0.2s ease;

  &:hover {
    color: #888888;
  }
`;

/* ═══════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════ */

export const Footer = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 13px;
  color: #555555;
`;

export const FooterLink = styled.button`
  color: #888888;
  cursor: pointer;
  text-decoration: underline;
  background: none;
  border: none;
  font-size: 13px;
  font-family: inherit;
  padding: 0;
  transition: color 0.2s ease;

  &:hover {
    color: #e8e8e8;
  }
`;