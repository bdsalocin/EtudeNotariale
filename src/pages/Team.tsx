import React from "react";

const Team: React.FC = () => {
  return (
    <div className="team">
      <div className="team__hero">
        <h1 className="team__title">Notre Équipe</h1>
        <p className="team__subtitle">
          Une équipe expérimentée à votre service
        </p>
      </div>

      <section className="team__grid container">
        <article className="team__member">
          <span className="team__member-image">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </span>
          <h3 className="team__member-name">Me Jean Dupont</h3>
          <p className="team__member-role">Notaire Associé</p>
          <p className="team__member-description">
            Spécialisé en droit immobilier et droit des affaires depuis plus de
            15 ans
          </p>
        </article>

        <article className="team__member">
          <span className="team__member-image">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </span>
          <h3 className="team__member-name">Me Marie Martin</h3>
          <p className="team__member-role">Notaire Associée</p>
          <p className="team__member-description">
            Experte en droit de la famille et successions depuis plus de 10 ans
          </p>
        </article>

        <article className="team__member">
          <span className="team__member-image">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </span>
          <h3 className="team__member-name">Me Sophie Bernard</h3>
          <p className="team__member-role">Notaire Assistant</p>
          <p className="team__member-description">
            Spécialisée en droit patrimonial et gestion de fortune
          </p>
        </article>
      </section>
    </div>
  );
};

export default Team;
