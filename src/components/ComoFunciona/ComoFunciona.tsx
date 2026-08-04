import "./ComoFunciona.css";

// import ilustracion from "../../assets/images/como-funciona.svg";

const pasos = [
    {
        numero: "1",
        titulo: "Creá tu cuenta",
        descripcion: "Registrate gratis en pocos minutos."
    },
    {
        numero: "2",
        titulo: "Cargá tu stock",
        descripcion: "Agregá tus productos fácilmente."
    },
    {
        numero: "3",
        titulo: "Vendé y controlá",
        descripcion: "Registrá ventas y controlá todo desde un solo lugar."
    }
];

const ComoFunciona = () => {
    return (
        <section className="como-funciona">

            <div className="como-funciona-container">

                <div className="como-funciona-content">

                    <span className="como-tag">
                        Cómo funciona
                    </span>

                    <h2>
                        Empezá en 3 pasos
                    </h2>

                    <p>
                        Configurá tu kiosco en minutos y comenzá a vender.
                    </p>

                    <div className="pasos">

                        {pasos.map((paso) => (

                            <div
                                className="paso"
                                key={paso.numero}
                            >

                                <div className="paso-numero">
                                    {paso.numero}
                                </div>

                                <div className="paso-info">

                                    <h3>
                                        {paso.titulo}
                                    </h3>

                                    <p>
                                        {paso.descripcion}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                <div className="como-funciona-imagen">

                    <img
                        src={""}
                        alt="Como funciona Kiosquito"
                    />

                </div>

            </div>

        </section>
    );
};

export default ComoFunciona;