import "./Home.css";
import Hero from "../../components/Hero/Hero";
import swip1 from "../../assets/images/swip-1.webp";
import flecha from "../../assets/images/flecha.svg";
import user from "../../assets/images/user.svg";
import check from "../../assets/images/check.svg";

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

            <button className="home-btn-primary">
              Crear mi cuenta
              <img src={flecha} alt="" className="home-flecha-cont"/>
            </button>

            <button className="home-btn-secondary">
              Ya tengo cuenta
              <img src={user} alt="" />
            </button>
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

        <div className="home-image">

          {/* SWIPPER O CAROUSEL */}

          {/* Acá va el carrusel más adelante */}

          {/* <img src={swip1} alt="Kiosquito" /> */}
        </div>
      </section>
    </>
  );
};

export default Home;
