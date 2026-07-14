import "./Home.css";

const Home = () => {
  const nameUser: string = "Maria";
  const kiscoName: string = "La Pato";

  const fecha = new Date();

  const fechaFormateada = fecha.toLocaleDateString("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const fechaCapitalizada =
    fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);

  return (
    <div className="home-container">
      <h1 className="titulo-home">¡Hola, {nameUser}! 👋🏼</h1>
      <h3 className="subtitulo-home">
        Panel de tu kiosco <span className="kiosco-name">"{kiscoName}"</span>
      </h3>
      <p className="fecha">{fechaCapitalizada}</p>
    </div>
  );
};

export default Home;
