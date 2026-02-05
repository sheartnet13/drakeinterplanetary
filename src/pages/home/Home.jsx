/**
 * Home Page - Drake Interplanetary
 * 
 * Design Philosophy: Industrial Salvage Brutalism
 * - Hero section with industrial imagery
 * - Array of ship objects displayed as cards
 * - Responsive grid layout
 * - Industrial aesthetic throughout
 */

import { useTranslation } from "react-i18next";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ShipCard from "../../components/ship-card/ShipCard";
import drakeHeroImg from "../../assets/images/drake-hero.jpg";
import drakeInteriorImg from "../../assets/images/drake-interior.jpg";
import cutlassImg from "../../assets/images/cutlass.png";
import dragonflyImg from "../../assets/images/dragonfly.png";
import heraldImg from "../../assets/images/herald.png";
import vultureImg from "../../assets/images/vulture.png";
import buccaneerImg from "../../assets/images/buccaneer.png";
import corsairImg from "../../assets/images/corsair.png";
import shipsData from "../../data/ships.json";
import statsData from "../../data/stats.json";
import "./Home.css";

// Map images to ships based on image filename
const imageMap = {
  "drake-hero.jpg": drakeHeroImg,
  "drake-interior.jpg": drakeInteriorImg,
  "cutlass.png": cutlassImg,
  "dragonfly.png": dragonflyImg,
  "herald.png": heraldImg,
  "vulture.png": vultureImg,
  "buccaneer.png": buccaneerImg,
  "corsair.png": corsairImg,
};

// Process ships data to include actual image imports
const drakeShips = shipsData.map(ship => ({
  ...ship,
  image: imageMap[ship.image]
}));

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <div className="home-page">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">{t('home.title')}</h1>
          <p className="hero-subtitle">
            {t('home.subtitle')}
          </p>
          <p className="hero-description">
            {t('home.description')}
          </p>
          <div className="hero-cta">
            <button className="cta-button">{t('home.exploreFleet')}</button>
            <button className="cta-button secondary">{t('home.contactSales')}</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={drakeHeroImg} alt="Drake Interplanetary" />
        </div>
      </section>

      {/* Fleet Section */}
      <section className="fleet-section">
        <div className="fleet-header">
          <h2 className="section-title">{t('home.ourFleet')}</h2>
          <p className="section-subtitle">
            {t('home.fleetSubtitle')}
          </p>
        </div>

        <div className="fleet-grid">
          {drakeShips.map((ship) => (
            <ShipCard key={ship.id} {...ship} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {statsData.map((stat) => (
            <div key={stat.id} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
