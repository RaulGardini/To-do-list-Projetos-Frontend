import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import Dashboard from "./screens/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;