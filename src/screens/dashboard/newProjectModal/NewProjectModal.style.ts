import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ═══════════════════════════════════════════════
   OVERLAY
   ═══════════════════════════════════════════════ */

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 24px;
  animation: ${fadeIn} 0.2s ease;
`;

/* ═══════════════════════════════════════════════
   MODAL
   ═══════════════════════════════════════════════ */

export const Modal = styled.div`
  width: 100%;
  max-width: 1500px;
  max-height: 90vh;
  background: #141414;
  border: 1px solid #1f1f1f;
  border-radius: 8px;
  overflow-y: auto;
  animation: ${slideUp} 0.3s ease;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #2a2a2a;
    border-radius: 3px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 32px;
  border-bottom: 1px solid #1f1f1f;
  position: sticky;
  top: 0;
  background: #141414;
  z-index: 2;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #e8e8e8;
  margin: 0;
  font-family: "Outfit", sans-serif;
`;

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid #2a2a2a;
  background: none;
  color: #555555;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  font-family: inherit;

  &:hover {
    border-color: #3a3a3a;
    color: #e8e8e8;
  }
`;

export const ModalBody = styled.div`
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-family: "Outfit", sans-serif;
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 20px 32px;
  border-top: 1px solid #1f1f1f;
  position: sticky;
  bottom: 0;
  background: #141414;
  z-index: 2;
`;

export const ObsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`;

/* ═══════════════════════════════════════════════
   SECTIONS
   ═══════════════════════════════════════════════ */

export const SectionTitle = styled.h3`
  font-size: 13px;
  font-weight: 600;
  color: #555555;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0 0 14px 0;
  font-family: "Outfit", sans-serif;
`;

export const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
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
  font-family: "Outfit", sans-serif;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 10px;
  color: #e8e8e8;
  font-size: 14px;
  font-family: "Outfit", sans-serif;
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

export const TextArea = styled.textarea`
  width: 100%;
  height: 8rem;
  padding: 12px 16px;
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 10px;
  color: #e8e8e8;
  font-size: 14px;
  font-family: "Outfit", sans-serif;
  outline: none;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
  resize: vertical;
  min-height: 70px;

  &:focus {
    border-color: #3a3a3a;
  }

  &::placeholder {
    color: #444444;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 10px;
  color: #e8e8e8;
  font-size: 14px;
  font-family: "Outfit", sans-serif;
  outline: none;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
  cursor: pointer;

  &:focus {
    border-color: #3a3a3a;
  }

  option {
    background: #1a1a1a;
    color: #e8e8e8;
  }
`;

export const StackRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StackGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 8px;
  border: 2.5px solid;
  gap: 12px;
`;

/* ═══════════════════════════════════════════════
   BUTTONS
   ═══════════════════════════════════════════════ */

export const CancelButton = styled.button`
  padding: 12px 24px;
  border: 1px solid #2a2a2a;
  border-radius: 10px;
  background: none;
  color: #888888;
  font-size: 14px;
  font-weight: 500;
  font-family: "Outfit", sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #3a3a3a;
    color: #e8e8e8;
  }
`;

export const SubmitButton = styled.button`
  position: relative;
  padding: 12px 28px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  font-family: "Outfit", sans-serif;
  cursor: pointer;
  color: #0a0a0a;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: hidden;

  &:hover {
    transform: translateY(-1px);
    box-shadow:
      0 10px 40px rgba(232, 67, 147, 0.15),
      0 6px 20px rgba(9, 132, 227, 0.1);
    background: #ffffff;
  }

  &:active {
    transform: translateY(0) scale(0.98);
    transition: all 0.1s ease;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const SubmitGlowPink = styled.div`
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

  ${SubmitButton}:hover & {
    opacity: 0.95;
    filter: blur(14px);
  }
`;

export const SubmitGlowBlue = styled.div`
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

  ${SubmitButton}:hover & {
    opacity: 0.95;
    filter: blur(14px);
  }
`;

export const SubmitText = styled.span`
  position: relative;
  z-index: 2;
`;

/* ═══════════════════════════════════════════════
   ERROR
   ═══════════════════════════════════════════════ */

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const ErrorMessage = styled.div`
  background: rgba(232, 67, 147, 0.1);
  border: 1px solid rgba(232, 67, 147, 0.25);
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 13px;
  color: #e84393;
  animation: ${slideIn} 0.3s ease;
  font-family: "Outfit", sans-serif;
`;