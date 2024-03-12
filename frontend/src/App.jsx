import Sidebar from "./components/sidebar";
import Header from "./components/header";
import "./style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Table from "./pages/table";
import Graphics from "./pages/graphics";

function App() {
  return (
    <Router>
      <Sidebar>
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/table" element={<Table />} />
          <Route path="/graphics" element={<Graphics />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
