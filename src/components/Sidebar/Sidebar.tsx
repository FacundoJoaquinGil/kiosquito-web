import "./sidebar.css";
import SidebarItem from "./SidebarItems";

const Sidebar = () => {
  return (
    <aside className="sidebar">

      <p className="menu-title">MENÚ</p>

      <nav>
        <SidebarItem
          title="Inicio"
          subtitle="Resumen general"
          active={true}
        />

        <SidebarItem
          title="Stock"
          subtitle="Agregar y editar productos"
        />

        <SidebarItem
          title="Ventas"
          subtitle="Registrar ventas"
        />

        <SidebarItem
          title="Registro del día"
          subtitle="Movimientos de hoy"
        />
      </nav>

      <div className="bottom">
        <SidebarItem title="Ajustes" />

        <div className="profile">
          <div className="avatar">ML</div>

          <div>
            <h4>María López</h4>
            <p>Kiosco "La Pato"</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;