import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./ComoFunciona.css";
import kiosco from "../../assets/images/store.json";

const pasos = [
  {
    numero: "1",
    titulo: "Creá tu cuenta",
    descripcion: "Registrate gratis en pocos minutos.",
  },
  {
    numero: "2",
    titulo: "Cargá tu stock",
    descripcion: "Agregá tus productos fácilmente.",
  },
  {
    numero: "3",
    titulo: "Vendé y controlá",
    descripcion: "Registrá ventas y controlá todo desde un solo lugar.",
  },
];

const ComoFunciona = () => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationContainer.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: kiosco,
    });

    return () => animation.destroy();
  }, []);

  return (
    <section className="como-funciona" id="como-funciona">
      
      <svg
        className="como-funciona-wave-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="var(--background-secondary)"
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        ></path>
      </svg>

      <div className="como-funciona-container">
        <div className="como-funciona-content" data-aos="fade-right" data-aos-delay="200">
          <span className="como-tag">Cómo funciona</span>

          <h2>Empezá en 3 pasos</h2>

          <p>Configurá tu kiosco en minutos y comenzá a vender.</p>

          <div className="pasos">
            {pasos.map((paso) => (
              <div className="paso" key={paso.numero}>
                <div className="paso-numero">{paso.numero}</div>

                <div className="paso-info">
                  <h3>{paso.titulo}</h3>

                  <p>{paso.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="como-funciona-imagen"
          ref={animationContainer}
          data-aos="fade-left"
          data-aos-delay="200"
        />
      </div>

      <svg
        className="como-funciona-wave-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="var(--background-secondary)"
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        ></path>
      </svg>

    </section>
  );
};

export default ComoFunciona;
