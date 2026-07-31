import "./Hero.css";
import logo from "../../assets/images/Logo.svg";

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-container">
        <div className="hero-logo">
          <img src={logo} alt="Kiosquito" />
        </div>

        {/* Navegación */}
        <nav className="hero-nav">
          <a href="#beneficios">Beneficios</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#planes">Planes</a>
        </nav>

        <div className="hero-actions">
          <button className="btn-login">
            Iniciar Sesión
          </button>

          <button className="btn-register">
            Crear Cuenta
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;