import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import Dashboard from "./screens/dashboard/Dashboard";
import ProjectView from "./screens/project/ProjectView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/project/:id" element={<ProjectView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;