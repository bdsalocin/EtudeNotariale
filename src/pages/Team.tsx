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
          <div className="team__member-image">♦</div>
          <h3 className="team__member-name">Me Jean Dupont</h3>
          <p className="team__member-role">Notaire Associé</p>
          <p className="team__member-description">
            Spécialisé en droit immobilier et droit des affaires depuis plus de
            15 ans
          </p>
        </article>

        <article className="team__member">
          <div className="team__member-image">♦</div>
          <h3 className="team__member-name">Me Marie Martin</h3>
          <p className="team__member-role">Notaire Associée</p>
          <p className="team__member-description">
            Experte en droit de la famille et successions depuis plus de 10 ans
          </p>
        </article>

        <article className="team__member">
          <div className="team__member-image">♦</div>
          <h3 className="team__member-name">Me Sophie Bernard</h3>
          <p className="team__member-role">Notaire Assistant</p>
          <p className="team__member-description">
            Spécialisée en droit patrimonial et gestion de fortune
          </p>
        </article>
      </section>

      <section className="team__values container">
        <h2 className="team__values-title">Nos Valeurs</h2>
        <div className="team__values-grid">
          <div className="team__value">
            <h3>Excellence</h3>
            <p>Un travail rigoureux et une expertise pointue</p>
          </div>
          <div className="team__value">
            <h3>Confidentialité</h3>
            <p>La discrétion absolue dans le traitement de vos dossiers</p>
          </div>
          <div className="team__value">
            <h3>Disponibilité</h3>
            <p>Une équipe à l'écoute et réactive à vos besoins</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
