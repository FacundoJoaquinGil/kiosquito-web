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
    <div className="home-components-container">
      <Hero />
      <section className="home-body-container">
        <div className="home-wave"></div>

        {/* Formas decorativas */}
        <div className="home-decoration home-decoration-1"></div>
        <div className="home-decoration home-decoration-2"></div>
        <div className="home-decoration home-decoration-3"></div>

        <div className="home-content">
          <span className="home-badge" data-aos="fade-down">
            La app para tu kiosco de barrio
          </span>

          <div className="home-title-container" data-aos="fade-right">
            <span className="home-title-background">Gestioná</span>

            <h1 className="home-title">Tu Kiosco</h1>
          </div>

          <p
            className="home-description"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Controlá tu stock, registrá cada venta y mirá cómo va tu día en un
            solo lugar.
          </p>

          <div className="home-buttons" data-aos="fade-up" data-aos-delay="200">
            <Link to="/registro-login" className="home-btn-primary">
              Comenzar gratis
              <img className="home-flecha-cont" src={flecha} alt="" />
            </Link>

            <Link to="/login" className="home-btn-secondary">
              Ya tengo cuenta
              <img src={user} alt="" />
            </Link>
          </div>

          <div
            className="home-benefits"
            data-aos="fade-up"
            data-aos-delay="300"
          >
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

        <div
          className="home-carousel"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <Carousel />
        </div>
      </section>

      <Beneficios />

      <ComoFunciona />
      
      <PlanesSuscripcion />

      <Footer />
    </div>
  );
};

export default Home;
