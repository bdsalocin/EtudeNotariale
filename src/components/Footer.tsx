import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h4 className="footer__title">Contactez-nous</h4>
          <p className="footer__text">1 rue de la Paix</p>
          <p className="footer__text">75001 Paris</p>
          <p className="footer__text">01 23 45 67 89</p>
          <p className="footer__text">contact@etude-elegance.fr</p>
        </div>
        <div className="footer__section">
          <h4 className="footer__title">Horaires</h4>
          <p className="footer__text">Lundi - Vendredi : 9h - 18h</p>
          <p className="footer__text">Sur rendez-vous uniquement</p>
        </div>
        <div className="footer__section">
          <h4 className="footer__title">Mentions légales</h4>
          <p className="footer__text">© 2024 Étude Notariale Élégance</p>
          <p className="footer__text">Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
