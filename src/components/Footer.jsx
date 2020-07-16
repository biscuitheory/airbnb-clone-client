import React from 'react';
import { Breakpoint } from 'react-socks';

function Footer() {
  return (
    <>
      <Breakpoint small down>
        <footer className="footer">
          <div className="footer__section">
            <h4>À propos</h4>
            <ul className="footer__section-list">
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
            <ul className="footer__section-list">
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
            <ul className="footer__section-list">
              <li>Héberger des voyageurs</li>
              <li>Organiser une expérience en ligne</li>
              <li>Message de Brian Chesky, président d'Airbnb</li>
              <li>Accueil responsable</li>
              <li>Open Homes</li>
              <li>Centre de ressources</li>
              <li>Community Center</li>
            </ul>
          </div>
          <div className="footer__separator" />
          <div className="footer__section">
            <h4>Assistance</h4>
            <ul className="footer__section-list">
              <li>Dernières informations relatives au COVID-19</li>
              <li>Centre d'aide</li>
              <li>Options d'annulation</li>
              <li>Service d'aide aux voisins</li>
            </ul>
          </div>
        </footer>
      </Breakpoint>
      <Breakpoint medium only>
        <footer className="footer">
          <div className="footer__section">
            <h4>À propos</h4>
            <ul className="footer__section-list">
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
            <ul className="footer__section-list">
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
            <ul className="footer__section-list">
              <li>Héberger des voyageurs</li>
              <li>Organiser une expérience en ligne</li>
              <li>Message de Brian Chesky, président d'Airbnb</li>
              <li>Accueil responsable</li>
              <li>Open Homes</li>
              <li>Centre de ressources</li>
              <li>Community Center</li>
            </ul>
          </div>
          <div className="footer__separator" />
          <div className="footer__section">
            <h4>Assistance</h4>
            <ul className="footer__section-list">
              <li>Dernières informations relatives au COVID-19</li>
              <li>Centre d'aide</li>
              <li>Options d'annulation</li>
              <li>Service d'aide aux voisins</li>
            </ul>
          </div>
        </footer>
      </Breakpoint>
      <Breakpoint large up>
        <footer className="footer">
          <div className="footer__section">
            <h4>À propos</h4>
            <ul className="footer__section-list">
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
            <ul className="footer__section-list">
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
            <ul className="footer__section-list">
              <li>Héberger des voyageurs</li>
              <li>Organiser une expérience en ligne</li>
              <li>Message de Brian Chesky, président d'Airbnb</li>
              <li>Accueil responsable</li>
              <li>Open Homes</li>
              <li>Centre de ressources</li>
              <li>Community Center</li>
            </ul>
          </div>
          <div className="footer__separator" />
          <div className="footer__section">
            <h4>Assistance</h4>
            <ul className="footer__section-list">
              <li>Dernières informations relatives au COVID-19</li>
              <li>Centre d'aide</li>
              <li>Options d'annulation</li>
              <li>Service d'aide aux voisins</li>
            </ul>
          </div>
        </footer>
      </Breakpoint>
    </>
  );
}

export default Footer;
