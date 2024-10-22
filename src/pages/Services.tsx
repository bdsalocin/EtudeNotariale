import React from "react";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  return (
    <div className="services">
      <div className="services__hero">
        <h1 className="services__title">Nos Services</h1>
        <p className="services__subtitle">
          Une expertise complète au service de vos projets
        </p>
      </div>

      <section className="services__grid container">
        <article className="services__item">
          <h3 className="services__item-title">Droit Immobilier</h3>
          <ul className="services__list">
            <li>Vente et achat immobilier</li>
            <li>Promesse de vente</li>
            <li>Bail commercial et d'habitation</li>
            <li>Copropriété et division</li>
            <li>Servitudes et urbanisme</li>
          </ul>
        </article>

        <article className="services__item">
          <h3 className="services__item-title">Droit de la Famille</h3>
          <ul className="services__list">
            <li>Contrat de mariage</li>
            <li>PACS</li>
            <li>Donation et succession</li>
            <li>Protection des mineurs</li>
            <li>Testament et partage</li>
          </ul>
        </article>

        <article className="services__item">
          <h3 className="services__item-title">Droit des Entreprises</h3>
          <ul className="services__list">
            <li>Constitution de société</li>
            <li>Cession d'entreprise</li>
            <li>Transmission d'entreprise</li>
            <li>Statuts et pactes d'associés</li>
            <li>Baux commerciaux</li>
          </ul>
        </article>
      </section>

      <section className="services__contact">
        <div className="container">
          <h2 className="services__contact-title">Besoin d'un conseil ?</h2>
          <p className="services__contact-text">
            Notre équipe est à votre disposition pour étudier votre projet
          </p>
          <Link to="/contact" className="services__contact-btn">
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
