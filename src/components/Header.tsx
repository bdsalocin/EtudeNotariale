import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Empêcher le défilement quand le menu est ouvert
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

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

        <button
          className={`header__burger ${isMenuOpen ? "is-active" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`header__list ${isMenuOpen ? "is-open" : ""}`}>
          <li className="header__item">
            <Link to="/" className="header__link" onClick={toggleMenu}>
              Accueil
            </Link>
          </li>
          <li className="header__item">
            <Link to="/services" className="header__link" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li className="header__item">
            <Link to="/team" className="header__link" onClick={toggleMenu}>
              Notre Équipe
            </Link>
          </li>
          <li className="header__item">
            <Link to="/contact" className="header__link" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
