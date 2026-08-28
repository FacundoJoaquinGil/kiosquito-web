import "./Hero.css";
import logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-container">
        <div className="hero-logo">
          <img src={logo} alt="Kiosquito" />
        </div>

        <nav className="hero-nav">
          <a href="#beneficios">Beneficios</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#planes">Planes</a>
        </nav>

        <div className="hero-actions">
          <Link to="/login" className="btn-login">
            Iniciar Sesión
          </Link>

          <Link to="/registro-login" className="btn-register">
            Crear Cuenta
          </Link>
        </div>

       
      </div>
    </header>
  );
};

export default Hero;
