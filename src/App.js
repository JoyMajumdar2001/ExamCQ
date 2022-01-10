import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Compose from "./pages/Compose";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="compose" element={<Compose />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
