import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">
          <Link to="/" className="header__logo-link">
            Étude Notariale
            <br />
            <span className="header__logo-subtitle">Élégance</span>
          </Link>
        </div>
        <ul className="header__list">
          <li className="header__item">
            <Link to="/" className="header__link">
              Accueil
            </Link>
          </li>
          <li className="header__item">
            <Link to="/services" className="header__link">
              Services
            </Link>
          </li>
          <li className="header__item">
            <Link to="/team" className="header__link">
              Notre Équipe
            </Link>
          </li>
          <li className="header__item">
            <Link to="/contact" className="header__link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
