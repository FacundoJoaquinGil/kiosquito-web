import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-brand">

                    <h2>Kiosquito</h2>

                    <p>
                        La forma más simple de administrar tu kiosco.
                    </p>

                </div>

                <div className="footer-links">

                    <div className="footer-column">

                        <h4>Información</h4>

                        <a href="#">Ayuda</a>
                        <a href="#">Privacidad</a>
                        <a href="#">Términos</a>

                    </div>

                    <div className="footer-column">

                        <h4>Contacto</h4>

                        <a href="mailto:contacto@kiosquito.app">
                            contacto@kiosquito.app
                        </a>

                    </div>

                    <div className="developer">

                        <span>Desarrollado por</span>

                        <h4>Joaquin Gil</h4>

                        <div className="developer-links">
                            <a
                                href="https://github.com/TU_GITHUB"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>

                            <span>|</span>

                            <a
                                href="https://linkedin.com/in/TU_LINKEDIN"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                        </div>

                    </div>

                    <div className="developer">

                        <h4>Matias Bordenave</h4>

                        <div className="developer-links">
                            <a
                                href="https://github.com/TU_GITHUB"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>

                            <span>|</span>

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

            <div className="footer-bottom">

                <p>
                    © {new Date().getFullYear()} Kiosquito App
                </p>

                <div className="footer-developers">

                    

                </div>

            </div>

        </footer>
    );
};

export default Footer;