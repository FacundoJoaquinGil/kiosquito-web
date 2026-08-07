import "./PlanesSuscripcion.css";

const planes = [
    {
        nombre: "Gratuito",
        precio: "$0",
        periodo: "/mes",
        destacado: false,
        boton: "Comenzar Gratis",
        caracteristicas: [
            "Hasta 50 productos",
            "Registro de ventas",
            "Control básico de stock",
            "Historial de ventas",
            "Acceso desde un dispositivo",
            "Soporte por correo"
        ]
    },
    {
        nombre: "Estándar",
        precio: "$5.000",
        periodo: "/mes",
        destacado: true,
        boton: "Elegir Estándar",
        caracteristicas: [
            "Productos ilimitados",
            "Control inteligente de stock",
            "Estadísticas mensuales",
            "Productos más vendidos",
            "Acceso desde múltiples dispositivos",
            "Copias de seguridad automáticas",
            "Soporte prioritario"
        ]
    },
    {
        nombre: "Premium",
        precio: "$10.000",
        periodo: "/mes",
        destacado: false,
        boton: "Elegir Premium",
        caracteristicas: [
            "Todo lo del plan Estándar",
            "Dashboard avanzado",
            "Gráficos de ventas",
            "Control de deudores",
            "Gestión de empleados",
            "Exportación de reportes",
            "Funciones nuevas antes que nadie",
            "Soporte Premium 24/7"
        ]
    }
];

const PlanesSuscripcion = () => {
    return (
        <section className="planes" id="planes">

            <div className="planes-header" data-aos="zoom-in">
                <span className="planes-tag">
                    Planes
                </span>

                <h2>
                    Elegí el plan ideal para tu kiosco
                </h2>

                <p>
                    Comenzá gratis y actualizá cuando necesites más funciones.
                </p>
            </div>

            <div className="planes-grid" >

                {planes.map((plan) => (

                    <div
                        key={plan.nombre}
                        className={`plan-card ${plan.destacado ? "featured" : ""}`} data-aos="fade-up"
                    >

                        {plan.destacado &&
                            <div className="plan-badge">
                                Más popular
                            </div>
                        }

                        <h3>{plan.nombre}</h3>

                        <div className="plan-price">
                            <span>{plan.precio}</span>
                            <small>{plan.periodo}</small>
                        </div>

                        <ul>

                            {plan.caracteristicas.map((item) => (
                                <li key={item}>
                                    ✔ {item}
                                </li>
                            ))}

                        </ul>

                        <button>
                            {plan.boton}
                        </button>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default PlanesSuscripcion;