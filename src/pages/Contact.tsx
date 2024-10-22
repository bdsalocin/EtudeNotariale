import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <div className="contact__hero">
        <h1 className="contact__title">Contactez-nous</h1>
        <p className="contact__subtitle">Notre équipe est à votre écoute</p>
      </div>

      <div className="container">
        <div className="contact__grid">
          <section className="contact__info">
            <h2 className="contact__section-title">Coordonnées</h2>

            <div className="contact__info-item">
              <h3>Adresse</h3>
              <p>1 rue de la Paix</p>
              <p>75001 Paris</p>
            </div>

            <div className="contact__info-item">
              <h3>Horaires</h3>
              <p>Lundi - Vendredi : 9h - 18h</p>
              <p>Sur rendez-vous uniquement</p>
            </div>

            <div className="contact__info-item">
              <h3>Contact</h3>
              <p>Tél : 01 23 45 67 89</p>
              <p>Email : contact@etude-elegance.fr</p>
            </div>
          </section>

          <section className="contact__form">
            <h2 className="contact__section-title">Demande de rendez-vous</h2>
            <form>
              <div className="contact__form-group">
                <label htmlFor="name">Nom complet</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="contact__form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="contact__form-group">
                <label htmlFor="phone">Téléphone</label>
                <input type="tel" id="phone" name="phone" required />
              </div>

              <div className="contact__form-group">
                <label htmlFor="subject">Objet</label>
                <select id="subject" name="subject" required>
                  <option value="">Sélectionnez un sujet</option>
                  <option value="immobilier">Droit immobilier</option>
                  <option value="famille">Droit de la famille</option>
                  <option value="entreprise">Droit des entreprises</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="contact__form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact__form-submit">
                Envoyer la demande
              </button>
            </form>
          </section>
        </div>
      </div>

      <section className="contact__map">
        <div className="container">
          <h2 className="contact__section-title">Nous trouver</h2>
          <div className="contact__map-container">
            <div className="contact__map-placeholder">Carte interactive</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;