import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import Registro from "./pages/Registro";
import Stock from "./pages/Stock";
import Ventas from "./pages/Ventas";

function App() {
  return (
    <Router>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="content">
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/Registro" element={<Registro />} />
            <Route path="/Stock" element={<Stock />} />
            <Route path="/Ventas" element={<Ventas />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
