import "./Header.css";
import logo from "../../assets/images/Logo.svg";

function Header() {
  return (
    <header className="header">

      <div className="header_logo">
        <img src={logo} alt="Kiosquito" />
        <h2>kiosquito</h2>
      </div>

      <div className="header_buscador">
        <input type="text" placeholder="Buscar producto..."/>
      </div>

    </header>
  );
}

export default Header;