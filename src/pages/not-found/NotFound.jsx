import { AlertTriangle, Home, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import "./NotFound.css";

export default function NotFound() {
  const [, setLocation] = useLocation();
  const { t } = useTranslation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="notfound-page">
      {/* Grid Pattern Background */}
      <div className="notfound-grid">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="grid-line" />
        ))}
      </div>

      <div className="notfound-container">
        {/* Warning Banner */}
        <div className="notfound-banner">
          <span className="banner-text">SYSTEM ERROR</span>
        </div>

        {/* Main Content */}
        <div className="notfound-content">
          {/* Error Icon */}
          <div className="notfound-icon-wrapper">
            <AlertTriangle className="notfound-icon" />
            <div className="icon-glow" />
          </div>

          {/* Error Code */}
          <h1 className="notfound-code">{t('notFound.title')}</h1>

          {/* Error Message */}
          <div className="notfound-message">
            <h2 className="message-title">{t('notFound.subtitle')}</h2>
            <p className="message-description">
              {t('notFound.description')}
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={handleGoHome}
            className="notfound-button"
          >
            <Home className="button-icon" />
            <span>{t('notFound.buttonBack')}</span>
            <ArrowLeft className="button-arrow" />
          </button>
        </div>

        {/* Bottom Banner */}
        <div className="notfound-footer">
          <span className="footer-text">DRAKE INTERPLANETARY - INDUSTRIAL SYSTEMS</span>
        </div>
      </div>
    </div>
  );
}
