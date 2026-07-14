import engranaje from "../../assets/images/engranaje.svg";
import logout from "../../assets/images/logout.svg";
import user from "../../assets/images/user.svg";
import "./SidebarProfile.css";

const SidebarProfile = () => {

  const username: string = "Maria Lopez";
  const kioscoName: string = "La Pato";

  return (
    <section className="sidebar-profile-container">
      <button className="settings-button">
        <img src={engranaje} alt="gear-icon" />
        <span>Ajustes</span>
      </button>

      <div className="profile-card">
        <img src={user} alt="Foto de perfil" className="profile-image" />

        <div className="profile-info">
          <span className="profile-name">{username}</span>
          <p className="profile-store">Kiosco "{kioscoName}"</p>
        </div>

        <button className="logout-button" aria-label="Cerrar sesión">
          <img src={logout} />
        </button>
      </div>
    </section>
  );
};

export default SidebarProfile;
