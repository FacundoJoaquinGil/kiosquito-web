import { useState } from "react";

import mail from "../../assets/images/mail.svg";
import password from "../../assets/images/password.svg";
import show from "../../assets/images/show.svg";
import hide from "../../assets/images/hide.svg";
import flecha from "../../assets/images/flecha.svg";
import logo from "../../assets/images/Logo.svg";
import user from "../../assets/images/user.svg";

import Carousel from "../../components/Carousel/Carousel";

import "./RegistroLogin.css";
import { Link } from "react-router-dom";

const RegistroLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="registro-page">
      {/* =====================================================
          PANEL IZQUIERDO - CAROUSEL
      ===================================================== */}

      

      {/* =====================================================
          PANEL DERECHO
      ===================================================== */}

      <section className="registro-form-section" data-aos="fade-left">
        <div className="registro-form-container">
          <div className="registro-head-body">
            <div className="registro-heading-logo">
              <img src={logo} alt="Kiosquito" />
            </div>

            <div className="registro-heading">
              <h2>Creá tu cuenta</h2>

              <p>Empezá a gestionar tu kiosco de forma simple y rápida.</p>
            </div>
          </div>

          <form className="registro-form">
            {/* =====================================================
                NOMBRE Y APELLIDO
            ===================================================== */}

            <div className="registro-fields-row">
              <div className="registro-field">
                <label htmlFor="nombre">Nombre</label>

                <div className="registro-input-wrapper">
                  <img className="registro-input-icon" src={user} alt="" />

                  <input
                    id="nombre"
                    type="text"
                    placeholder="María"
                    autoComplete="given-name"
                  />
                </div>
              </div>

              <div className="registro-field">
                <label htmlFor="apellido">Apellido</label>

                <div className="registro-input-wrapper">
                  <input
                    id="apellido"
                    type="text"
                    placeholder="Gómez"
                    autoComplete="family-name"
                  />
                </div>
              </div>
            </div>

            {/* =====================================================
                NOMBRE DEL KIOSCO
            ===================================================== */}

            <div className="registro-field">
              <label htmlFor="kiosco">Nombre del kiosco</label>

              <div className="registro-input-wrapper">
                <input
                  id="kiosco"
                  type="text"
                  placeholder="Kiosco La Esquina"
                  autoComplete="organization"
                />
              </div>
            </div>

            {/* =====================================================
                EMAIL
            ===================================================== */}

            <div className="registro-field">
              <label htmlFor="registro-email">Correo electrónico</label>

              <div className="registro-input-wrapper">
                <img className="registro-input-icon" src={mail} alt="" />

                <input
                  id="registro-email"
                  type="email"
                  placeholder="maria@kiosquito.com"
                  autoComplete="email"
                />
              </div>
            </div>

            {/* =====================================================
                CONTRASEÑA
            ===================================================== */}

            <div className="registro-field">
              <label htmlFor="registro-password">Contraseña</label>

              <div className="registro-input-wrapper">
                <img className="registro-input-icon" src={password} alt="" />

                <input
                  id="registro-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresá una contraseña"
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="registro-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                  }
                >
                  <img src={showPassword ? hide : show} alt="" />
                </button>
              </div>
            </div>

            {/* =====================================================
                CONFIRMAR CONTRASEÑA
            ===================================================== */}

            <div className="registro-field">
              <label htmlFor="confirm-password">Confirmar contraseña</label>

              <div className="registro-input-wrapper">
                <img className="registro-input-icon" src={password} alt="" />

                <input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Repetí tu contraseña"
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="registro-password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={
                    showConfirmPassword
                      ? "Ocultar contraseña"
                      : "Mostrar contraseña"
                  }
                >
                  <img src={showConfirmPassword ? hide : show} alt="" />
                </button>
              </div>
            </div>

            {/* =====================================================
                TERMINOS
            ===================================================== */}

            <label className="registro-terms">
              <input type="checkbox" />

              <span>Acepto los términos y condiciones</span>
            </label>

            {/* =====================================================
                BOTON REGISTRAR
            ===================================================== */}

            <button type="submit" className="registro-button">
              <span>Crear cuenta</span>

              <img src={flecha} alt="" />
            </button>
          </form>

          {/* =====================================================
              DIVISOR
          ===================================================== */}

          <div className="registro-divider">
            <span></span>

            <small>o</small>

            <span></span>
          </div>

          {/* =====================================================
              LOGIN
          ===================================================== */}

          <p className="registro-login">
            ¿Ya tenés una cuenta?
            <Link to="/login">Iniciá sesión</Link>
          </p>
        </div>
      </section>

      <section className="registro-carousel">
        <Carousel />
      </section>
    </div>
  );
};

export default RegistroLogin;
