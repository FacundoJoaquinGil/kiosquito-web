import { useEffect, useState } from "react";
import "./Carousel.css";

import car1 from "../../assets/images/car-01.webp";
import car2 from "../../assets/images/car-02.webp";
import car3 from "../../assets/images/car-03.webp";


const slides = [
    car1,
    car2,
    car3
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
        <section className="carousel" data-aos="zoom-in-left" data-aos-delay="250">
            <div
                className="carousel-track"
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((image, index) => (
                    <div
                        key={index}
                        className="carousel-slide"
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            <div className="carousel-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${current === index ? "active" : ""}`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Carousel;