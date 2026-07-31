import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import RegistroLogin from "./pages/RegistroLogin/RegistroLogin";

import PanelControl from "./pages/PanelControl/PanelControl";
import Registro from "./pages/RegistroVentas/RegistroVentas";
import Stock from "./pages/Stock";
import Ventas from "./pages/Ventas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Públicas */}
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro-login" element={<RegistroLogin />} />

        {/* Privadas */}
        <Route element={<DashboardLayout />}>
          <Route path="/panel-control" element={<PanelControl />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/ventas" element={<Ventas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;