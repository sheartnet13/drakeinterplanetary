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
  onEdit,
  onDelete,
}) {
  const { t } = useTranslation();

  // Use i18n when the key exists; fall back to direct props for custom ships
  const displayName = t(`ships.${id}.name`, { defaultValue: name });
  const displayDesignation = t(`ships.${id}.designation`, { defaultValue: designation });
  const displayDescription = t(`ships.${id}.description`, { defaultValue: description });
  const displayFeatures = t(`ships.${id}.features`, {
    returnObjects: true,
    defaultValue: features,
  });

  const statusColor = {
    operational: "#8b3a3a",
    development: "#a84c3a",
    legacy: "#5a2a2a",
  };

  return (
    <div className="ship-card">
      {/* Image Section */}
      <div className="ship-card-image">
        <img src={image} alt={displayName} />
        <div className="ship-status" style={{ borderColor: statusColor[status] }}>
          <span className="status-text">{t(`ship.${status}`).toUpperCase()}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="ship-card-content">
        {/* Header */}
        <div className="ship-card-header">
          <h3 className="ship-name">{displayName}</h3>
          <p className="ship-designation">{displayDesignation}</p>
        </div>

        {/* Description */}
        <p className="ship-description">{displayDescription}</p>

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
            {Array.isArray(displayFeatures) && displayFeatures.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="feature-bullet">▸</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* CRUD Buttons — only shown when handlers provided */}
        {(onEdit || onDelete) && (
          <div className="ship-crud-actions">
            {onEdit && (
              <button className="ship-action-btn edit-btn" onClick={onEdit}>
                ✎ {t('fleet.edit')}
              </button>
            )}
            {onDelete && (
              <button className="ship-action-btn delete-btn" onClick={onDelete}>
                ✕ {t('fleet.delete')}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Card Border */}
      <div className="ship-card-border"></div>
    </div>
  );
}
