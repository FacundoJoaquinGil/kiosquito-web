import { useEffect, useState } from "react";
import "./Carousel.css";

import car1 from "../../assets/images/car-01.webp";
import car2 from "../../assets/images/car-02.webp";
import car3 from "../../assets/images/car-03.webp";

const slides = [
  {
    image: car1,
    title: "Gratis para empezar",
    description: "Empezá a gestionar tu kiosco sin complicaciones.",
  },
  {
    image: car2,
    title: "Sin tarjeta de crédito",
    description: "Probá Kiosquito sin compromisos.",
  },
  {
    image: car3,
    title: "Listo en 2 minutos",
    description: "Configurá tu kiosco y empezá a trabajar.",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="carousel">

      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="carousel-slide"
          >
            <img
              src={slide.image}
              alt={slide.title}
            />

            {/* Degradado para mejorar la lectura */}
            <div className="carousel-overlay"></div>

            {/* Información del slide */}
            <div className="carousel-content">

              <h2>{slide.title}</h2>

              <p>{slide.description}</p>

            </div>

          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="carousel-dots">

        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${
              current === index ? "active" : ""
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}

      </div>

    </section>
  );
};

export default Carousel;