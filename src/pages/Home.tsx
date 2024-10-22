import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="home__hero">
        <div className="home__hero-content">
          <h1 className="home__title">Étude Notariale Élégance</h1>
          <p className="home__subtitle">
            Notre expertise au service de vos projets de vie
          </p>
          <Link to="/contact" className="home__cta">
            Prendre rendez-vous
          </Link>
        </div>
      </section>

      <section className="home__services">
        <h2 className="home__section-title">Nos domaines d'expertise</h2>
        <div className="home__features">
          <div className="home__feature">
            <div className="home__feature-icon">♦</div>
            <h3 className="home__feature-title">Immobilier</h3>
            <p className="home__feature-text">
              Transactions, baux, copropriété
            </p>
          </div>
          <div className="home__feature">
            <div className="home__feature-icon">♦</div>
            <h3 className="home__feature-title">Famille</h3>
            <p className="home__feature-text">
              Successions, mariages, donations
            </p>
          </div>
          <div className="home__feature">
            <div className="home__feature-icon">♦</div>
            <h3 className="home__feature-title">Entreprise</h3>
            <p className="home__feature-text">
              Constitution, cession, baux commerciaux
            </p>
          </div>
        </div>
      </section>

      <section className="home__quote">
        <blockquote className="home__quote-text">
          "L'excellence et la rigueur au service de vos actes authentiques"
        </blockquote>
      </section>
    </div>
  );
};

export default Home;
