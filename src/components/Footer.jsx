import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__section">
        <h4>À propos</h4>
        <ul className="">
          <li>Fonctionnement d'Airbnb</li>
          <li>Diversité et intégration</li>
          <li>Accessibilité</li>
          <li>Confiance et sécurité</li>
          <li>Airbnb Citizen</li>
          <li>Jeux olympiques</li>
          <li>Newsroom</li>
        </ul>
      </div>
      <div className="footer__separator" />
      <div className="footer__section">
        <h4>Communauté</h4>
        <ul>
          <li>Airbnb Magazine</li>
          <li>Partenaires Airbnb</li>
          <li>Airbnb for Work</li>
          <li>Inviter des amis</li>
          <li>Carrières</li>
        </ul>
      </div>
      <div className="footer__separator" />
      <div className="footer__section">
        <h4>Hôte</h4>
        <ul>
          <li>Héberger des voyageurs</li>
          <li>Organiser une expérience en ligne</li>
          <li>Message de Brian Chesky, président d'Airbnb</li>
          <li>Accueil responsable</li>
          <li>Open Homes</li>
          <li>Centre de ressources</li>
          <li>Community Center</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
