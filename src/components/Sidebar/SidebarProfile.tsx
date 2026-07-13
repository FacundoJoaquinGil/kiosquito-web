import engranaje from "../../assets/images/engranaje.svg";
import logout from "../../assets/images/logout.svg";
import user from "../../assets/images/user.svg";
import "./SidebarProfile.css";

const SidebarProfile = () => {
  return (
    <section className="sidebar-profile">
      <button className="settings-button">
        <img src={engranaje} alt="" />
        <span>Ajustes</span>
      </button>

      <div className="profile-card">
        <img src={user} alt="Foto de perfil" className="profile-image" />

        <div className="profile-info">
          <span className="profile-name">Username</span>
          <p className="profile-store">Kiosco Name</p>
        </div>

        <button className="logout-button" aria-label="Cerrar sesión">
          <img src={logout} alt="" />
        </button>
      </div>
    </section>
  );
};

export default SidebarProfile;
