/**
 * ShipCard Component - Drake Interplanetary
 * 
 * Design Philosophy: Industrial Salvage Brutalism
 * - Reusable component with props for ship data
 * - Metal plate styling with industrial red accents
 * - Displays ship specifications and features
 * - Responsive grid layout
 */

import { useTranslation } from "react-i18next";
import "./ShipCard.css";

export default function ShipCard({
  id,
  name,
  designation,
  image,
  description,
  specs,
  features,
  status,
}) {
  const { t } = useTranslation();
  
  const statusColor = {
    operational: "#8b3a3a",
    development: "#a84c3a",
    legacy: "#5a2a2a",
  };

  return (
    <div className="ship-card">
      {/* Image Section */}
      <div className="ship-card-image">
        <img src={image} alt={t(`ships.${id}.name`)} />
        <div className="ship-status" style={{ borderColor: statusColor[status] }}>
          <span className="status-text">{t(`ship.${status}`).toUpperCase()}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="ship-card-content">
        {/* Header */}
        <div className="ship-card-header">
          <h3 className="ship-name">{t(`ships.${id}.name`)}</h3>
          <p className="ship-designation">{t(`ships.${id}.designation`)}</p>
        </div>

        {/* Description */}
        <p className="ship-description">{t(`ships.${id}.description`)}</p>

        {/* Specifications */}
        <div className="ship-specs">
          <div className="spec-item">
            <span className="spec-label">{t('ship.crew')}:</span>
            <span className="spec-value">{specs.crew}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">{t('ship.cargo')}:</span>
            <span className="spec-value">{specs.cargo}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">{t('ship.range')}:</span>
            <span className="spec-value">{specs.range}</span>
          </div>
        </div>

        {/* Features */}
        <div className="ship-features">
          <h4 className="features-title">{t('ship.features')}</h4>
          <ul className="features-list">
            {t(`ships.${id}.features`, { returnObjects: true }).map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="feature-bullet">▸</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Border */}
      <div className="ship-card-border"></div>
    </div>
  );
}
