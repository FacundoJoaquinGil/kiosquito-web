import "./Footer.css";
import logo from "../../assets/images/Logo.svg";

const Footer = () => {
    return (
        <footer className="kiosquito-footer">

            <div className="kiosquito-footer__container">

                <div className="kiosquito-footer__brand">

                    <div className="kiosquito-footer__encabezado">
                        <img
                        src={logo}
                        alt="Kiosquito"
                        className="kiosquito-footer__logo"
                    />

                    <h3>Kiosquito</h3>
                    </div>

                    <p>
                        La forma más simple de administrar tu kiosco.
                    </p>

                </div>

                <div className="kiosquito-footer__links">

                    <div className="kiosquito-footer__column">

                        <h4>Información</h4>

                        <a href="#">Ayuda</a>
                        <a href="#">Privacidad</a>
                        <a href="#">Términos</a>

                    </div>

                    <div className="kiosquito-footer__column">

                        <h4>Contacto</h4>

                        <a href="mailto:contacto@kiosquito.app">
                            contacto@kiosquito.app
                        </a>

                    </div>

                    <div className="kiosquito-footer__column kiosquito-footer__column--developers">

                        <h4>Desarrollado por</h4>

                        <div className="kiosquito-footer__developer">

                            <h5>Joaquín Gil</h5>

                            <div className="kiosquito-footer__developer-links">

                                <a
                                    href="https://github.com/TU_GITHUB"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>

                                <span>•</span>

                                <a
                                    href="https://linkedin.com/in/TU_LINKEDIN"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    LinkedIn
                                </a>

                            </div>

                        </div>

                        <div className="kiosquito-footer__developer">

                            <h5>Matías Bordenave</h5>

                            <div className="kiosquito-footer__developer-links">

                                <a
                                    href="https://github.com/TU_GITHUB"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>

                                <span>•</span>

                                <a
                                    href="https://linkedin.com/in/TU_LINKEDIN"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    LinkedIn
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="kiosquito-footer__bottom">

                <p>
                    © {new Date().getFullYear()} Kiosquito App. Todos los derechos reservados.
                </p>

            </div>

        </footer>
    );
};

export default Footer;
