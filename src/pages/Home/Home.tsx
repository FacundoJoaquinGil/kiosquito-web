import "./Home.css";
import Hero from "../../components/Hero/Hero";
import flecha from "../../assets/images/flecha.svg";
import user from "../../assets/images/user.svg";
import check from "../../assets/images/check.svg";
import Carousel from "../../components/Carousel/Carousel";
import PlanesSuscripcion from "../../components/PlanesSuscripcion/PlanesSuscripcion";
import Beneficios from "../../components/Beneficios/Beneficios";
import Footer from "../../components/Footer/Footer";
import ComoFunciona from "../../components/ComoFunciona/ComoFunciona";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="home-body-container">
        <div className="home-content">
          <span className="home-badge">La app para tu kiosco de barrio</span>

          <h1 className="home-title">
            Gestioná tu kiosco
            <br />
            <span>sin complicaciones</span>
          </h1>

          <p className="home-description">
            Controlá tu stock, registrá cada venta y mirá cómo va tu día en un
            solo lugar. kiosquito es simple, rápido y funciona desde el celular
            o la compu.
          </p>

          <div className="home-buttons">
            <Link to="/registro-login" className="home-btn-primary">
              Comenzar gratis
              <img className="home-flecha-cont" src={flecha} alt="" />
            </Link>

            <Link to="/login" className="home-btn-secondary">
              Ya tengo cuenta
              <img src={user} alt="" />
            </Link>
          </div>

          <div className="home-benefits">
            <div className="benefit">
              <img src={check} alt="" />
              <span>Gratis para empezar</span>
            </div>

            <div className="benefit">
              <img src={check} alt="" />
              <span>Sin tarjeta de crédito</span>
            </div>

            <div className="benefit">
              <img src={check} alt="" />
              <span>Listo en 2 minutos</span>
            </div>
          </div>
        </div>

        <Carousel />
      </section>
  
      <Beneficios />
      <ComoFunciona />
      <PlanesSuscripcion />

      <Footer />
    </>
  );
};

export default Home;
