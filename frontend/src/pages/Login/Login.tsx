import { useState } from "react";

import mail from "../../assets/images/mail.svg";
import password from "../../assets/images/password.svg";
import show from "../../assets/images/show.svg";
import hide from "../../assets/images/hide.svg";
import flecha from "../../assets/images/flecha.svg";
import logo from "../../assets/images/Logo.svg";
import google from "../../assets/images/google.svg";

import Carousel from "../../components/Carousel/Carousel";

import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <section className="login-carousel">
        <Carousel />
      </section>

      <section className="login-form-section" data-aos="fade-left">
        <div className="login-form-container">
          <div className="login-heading-logo">
            <img src={logo} alt="" />
          </div>

          <br />

          <div className="login-heading">
            <h2>Iniciá sesión</h2>

            <p>Volvé a controlar tu stock, ventas y tu día en un solo lugar.</p>
          </div>

          <form className="login-form">
            <div className="login-field">
              <label htmlFor="email">Correo electrónico</label>

              <div className="input-wrapper">
                <img className="input-icon" src={mail} alt="" />

                <input
                  id="email"
                  type="email"
                  placeholder="maria@mikiocso.com"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="login-field">
              <div className="password-label">
                <label htmlFor="password">Contraseña</label>

                <button type="button" className="forgot-password">
                  ¿Olvidaste tu contraseña?
                </button>
              </div>

              <div className="input-wrapper">
                <img className="input-icon" src={password} alt="" />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresá tu contraseña"
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                  }
                >
                  <img src={showPassword ? hide : show} alt="" />
                </button>
              </div>
            </div>

            <label className="remember-session">
              <input type="checkbox" />

              <span>Mantener sesión iniciada</span>
            </label>

            <button type="submit" className="login-button">
              <span>Iniciar sesión</span>

              <img src={flecha} alt="" />
            </button>
          </form>

          <button type="button" className="google-login-button">
            <img src={google} alt="Google" />

            <span>Continuar con Google</span>
          </button>

          <div className="login-divider">
            <span></span>

            <small>o</small>

            <span></span>
          </div>

          <p className="login-register">
            ¿Todavía no tenés cuenta?
            <Link to="/registro-login">Crear cuenta gratis</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
