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

      <section className="home__services container">
        <h2 className="home__section-title">Nos domaines d'expertise</h2>
        <div className="home__features">
          <div className="home__feature">
            <span className="home__feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </span>
            <h3 className="home__feature-title">Immobilier</h3>
            <p className="home__feature-text">
              Transactions, baux, copropriété
            </p>
          </div>

          <div className="home__feature">
            <span className="home__feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <h3 className="home__feature-title">Famille</h3>
            <p className="home__feature-text">
              Successions, mariages, donations
            </p>
          </div>

          <div className="home__feature">
            <span className="home__feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </span>
            <h3 className="home__feature-title">Entreprise</h3>
            <p className="home__feature-text">
              Constitution, cession, baux commerciaux
            </p>
          </div>
        </div>
      </section>

      <section className="home__quote">
        <blockquote className="home__quote-text container">
          "L'excellence et la rigueur au service de vos actes authentiques"
        </blockquote>
      </section>
    </div>
  );
};

export default Home;
