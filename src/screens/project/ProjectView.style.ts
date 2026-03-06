import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */

export const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #0e0e0e;
  font-family: "Outfit", sans-serif;
  color: #e8e8e8;
  display: flex;
  flex-direction: column;
  border: 1px solid #1a1a1a;
  overflow: hidden;
`;

/* ═══════════════════════════════════════════════
   HEADER
   ═══════════════════════════════════════════════ */

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
  border-bottom: 1px solid #1a1a1a;
  flex-shrink: 0;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LogoText = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #e8e8e8;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #555555;
  font-size: 18px;
  cursor: pointer;
  padding: 0 4px;
  transition: color 0.2s ease;
  font-family: inherit;

  &:hover { color: #e8e8e8; }
`;

export const ProjectTitle = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: #aaaaaa;
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const EditButton = styled.button`
  padding: 6px 14px;
  border: 1px solid #333333;
  border-radius: 6px;
  background: #1a1a1a;
  color: #aaaaaa;
  font-size: 12px;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover { border-color: #444; color: #e8e8e8; }
`;

export const DeleteProjectButton = styled.button`
  padding: 6px 14px;
  border: 1px solid rgba(232, 67, 147, 0.4);
  border-radius: 6px;
  background: none;
  color: #e84393;
  font-size: 12px;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover { border-color: #e84393; background: rgba(232,67,147,0.08); }
`;

export const UserName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #888888;
  margin-left: 8px;
`;

/* ═══════════════════════════════════════════════
   MAIN LAYOUT
   ═══════════════════════════════════════════════ */

export const MainLayout = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;
`;

/* ═══════════════════════════════════════════════
   SIDEBAR
   ═══════════════════════════════════════════════ */

export const Sidebar = styled.aside`
  width: 240px;
  margin:0.5rem;
  border: 3px solid #a7a7a7;
  border-radius: 12px;
  min-width: 240px;
  padding: 20px 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: ${fadeIn} 0.2s ease;
  flex-shrink: 0;
  background: #202020;
`;

export const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SidebarLabel = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: #555555;
`;

export const SidebarValue = styled.span`
  font-size: 13px;
  color: #cccccc;
`;

export const SidebarValueSmall = styled.span`
  font-size: 11px;
  color: #00b894;
`;

export const StatusBadgeSidebar = styled.span<{ $status: string }>`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  width: fit-content;

  ${({ $status }) => {
    switch ($status) {
      case "C": return `background: rgba(0,184,148,0.15); color: #00b894; border: 1px solid rgba(0,184,148,0.25);`;
      case "E": return `background: rgba(253,203,110,0.15); color: #fdcb6e; border: 1px solid rgba(253,203,110,0.25);`;
      default:  return `background: rgba(255,255,255,0.06); color: #888; border: 1px solid rgba(255,255,255,0.1);`;
    }
  }}
`;

export const SidebarDivider = styled.div`
  height: 1px;
  background: #1a1a1a;
`;

export const SidebarTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #e8e8e8;
  margin: 0;
`;

export const StackBadge = styled.span<{ $color?: string }>`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  width: fit-content;

  ${({ $color }) => {
    switch ($color) {
      case "green": return `background: rgba(0,184,148,0.15); color: #00b894; border: 1px solid rgba(0,184,148,0.25);`;
      case "yellow": return `background: rgba(253,203,110,0.15); color: #fdcb6e; border: 1px solid rgba(253,203,110,0.25);`;
      case "purple": return `background: rgba(156,39,176,0.15); color: #ce93d8; border: 1px solid rgba(156,39,176,0.25);`;
      default: return `background: rgba(255,255,255,0.06); color: #888; border: 1px solid rgba(255,255,255,0.1);`;
    }
  }}
`;

export const SidebarButton = styled.button`
  padding: 12px 22px;
  border: none;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 400;
  font-family: inherit;
  cursor: pointer;
  color: #0a0a0a;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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

  ${SidebarButton}:hover & {
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

  ${SidebarButton}:hover & {
    opacity: 0.95;
    filter: blur(14px);
    width: 95%;
    height: 130%;
  }
`;

export const SidebarButtonDanger = styled(SidebarButton)`
  color: #e84393;
  border-color: rgba(232,67,147,0.3);
  &:hover { border-color: #e84393; background: rgba(232,67,147,0.08); }
`;

export const SidebarButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StatusDot = styled.span<{ $status: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;

  ${({ $status }) => {
    switch ($status) {
      case "C": return `background: #00b894;`;
      case "E": return `background: #fdcb6e;`;
      default:  return `background: #888888;`;
    }
  }}
`;

export const StatusSelect = styled.select`
  padding: 4px 8px;
  background: #161616;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
  color: #cccccc;
  font-size: 12px;
  font-family: inherit;
  outline: none;
  cursor: pointer;

  option { background: #161616; color: #e8e8e8; }
`;

export const AlterButton = styled.button`
  padding: 4px 10px;
  border: 1px solid #ff1dff;
  border-radius: 100px;
  background: #e7e7e7;
  color: #3e1cfd;
  font-size: 11px;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover { border-color: #444; color: #e8e8e8; }
`;

export const CloseSidebarTask = styled.button`
  padding: 6px 12px;
  border: 1px solid #2a2a2a;
  border-radius: 6px;
  background: none;
  color: #666666;
  font-size: 12px;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
  align-self: flex-start;

  &:hover { border-color: #3a3a3a; color: #e8e8e8; }
`;

export const OtherTasksLabel = styled.span`
  font-size: 12px;
  color: #555555;
  border-bottom: 1px solid #1a1a1a;
  padding-bottom: 6px;
`;

export const OtherTaskItem = styled.div<{ $active?: boolean }>`
  padding: 6px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: ${({ $active }) => ($active ? "#e8e8e8" : "#888888")};
  background: ${({ $active }) => ($active ? "#1a1a1a" : "transparent")};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover { background: #1a1a1a; color: #cccccc; }
`;

/* ═══════════════════════════════════════════════
   COLUMNS
   ═══════════════════════════════════════════════ */

export const ColumnsArea = styled.div`
  flex: 1;
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
`;

export const Column = styled.div`
  flex: 1;
  min-width: 180px;
  border-right: 1px solid #1a1a1a;
  display: flex;
  flex-direction: column;
  background: #0e0e0e;
  margin:0.5rem;

  &:last-child { border-right: none; }
`;

export const ColumnHeader = styled.div`
  padding: 14px 14px 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-bottom: 1px solid #1a1a1a;
`;

export const ColumnTitle = styled.h3`
  font-size: 13px;
  font-weight: 600;
  color: #e8e8e8;
  margin: 0;
`;

export const ColumnStackLabel = styled.span`
  font-size: 10px;
  color: #555555;
`;

export const ColumnStackBadge = styled.span<{ $color?: string }>`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
  width: fit-content;

  ${({ $color }) => {
    switch ($color) {
      case "green": return `background: rgba(0,184,148,0.15); color: #00b894; border: 1px solid rgba(0,184,148,0.25);`;
      case "yellow": return `background: rgba(253,203,110,0.15); color: #fdcb6e; border: 1px solid rgba(253,203,110,0.25);`;
      case "purple": return `background: rgba(156,39,176,0.15); color: #ce93d8; border: 1px solid rgba(156,39,176,0.25);`;
      default: return `background: rgba(255,255,255,0.06); color: #888; border: 1px solid rgba(255,255,255,0.1);`;
    }
  }}
`;

export const ColumnTasksBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  border-bottom: 1px solid #1a1a1a;
`;

export const ColumnTasksLabel = styled.span`
  font-size: 10px;
  color: #555555;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const ColumnStatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ColumnStatusSelect = styled.select`
  padding: 3px 6px;
  background: #141414;
  border: 1px solid #222222;
  border-radius: 4px;
  color: #888888;
  font-size: 10px;
  font-family: inherit;
  outline: none;
  cursor: pointer;

  option { background: #141414; color: #e8e8e8; }
`;

export const AddTaskButton = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid #2a2a2a;
  background: #e7e7e7;
  color: #000000;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover { border-color: #0300b8; color: #b800af; }
`;

/* ═══════════════════════════════════════════════
   TASK LIST
   ═══════════════════════════════════════════════ */

export const TaskList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: #0a0a0a;

  &::-webkit-scrollbar { width: 3px; }
  &::-webkit-scrollbar-thumb { background: #222; border-radius: 2px; }
`;

export const TaskCard = styled.div<{ $active?: boolean }>`
  padding: 8px 10px;
  background: ${({ $active }) => ($active ? "#1e1e1e" : "transparent")};
  border: 1px solid ${({ $active }) => ($active ? "#2a2a2a" : "transparent")};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover { background: #161616; }
`;

export const TaskName = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #bbbbbb;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const TaskStatusDot = styled.span<{ $status: string }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;

  ${({ $status }) => {
    switch ($status) {
      case "C": return `background: #00b894;`;
      case "E": return `background: #fdcb6e;`;
      default:  return `background: #666666;`;
    }
  }}
`;

/* ═══════════════════════════════════════════════
   ADD TASK INLINE
   ═══════════════════════════════════════════════ */

export const AddTaskInline = styled.div`
  padding: 6px;
`;

export const AddTaskInput = styled.input`
  width: 100%;
  padding: 6px 10px;
  background: #141414;
  border: 1px solid #2a2a2a;
  border-radius: 6px;
  color: #e8e8e8;
  font-size: 12px;
  font-family: inherit;
  outline: none;
  box-sizing: border-box;

  &:focus { border-color: #3a3a3a; }
  &::placeholder { color: #444; }
`;

/* ═══════════════════════════════════════════════
   LOADING
   ═══════════════════════════════════════════════ */

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: #555555;
  font-size: 14px;
`;

export const DeleteTaskButton = styled.button`
  padding: 8px 14px;
  border: 1px solid rgba(232, 67, 147, 0.3);
  border-radius: 6px;
  background: none;
  color: #e84393;
  font-size: 12px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  margin-top: auto;

  &:hover {
    border-color: #e84393;
    background: rgba(232, 67, 147, 0.08);
  }
`;

export const DateInput = styled.input`
  padding: 4px 8px;
  background: #161616;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
  color: #cccccc;
  font-size: 12px;
  font-family: inherit;
  outline: none;
  cursor: pointer;
  color-scheme: dark;

  &:focus { border-color: #3a3a3a; }
`;

export const PrazoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const PrazoStatus = styled.span<{ $overdue: boolean }>`
  font-size: 11px;
  font-weight: 500;
  color: ${({ $overdue }) => ($overdue ? "#e84393" : "#00b894")};
`;

export const CelebrationGif = styled.img`
  width: 100%;
  max-width: 200px;
  border-radius: 8px;
  margin-top: 4px;
`;

export const ObsTextArea = styled.textarea`
  width: 100%;
  padding: 8px 10px;
  background: #161616;
  border: 1px solid #2a2a2a;
  border-radius: 6px;
  color: #cccccc;
  font-size: 12px;
  font-family: inherit;
  outline: none;
  resize: vertical;
  min-height: 60px;
  box-sizing: border-box;
  transition: border-color 0.2s ease;

  &:focus { border-color: #3a3a3a; }
  &::placeholder { color: #444; }
`;