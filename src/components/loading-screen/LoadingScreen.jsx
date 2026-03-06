import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./LoadingScreen.css";

export default function LoadingScreen({ onLoadComplete }) {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            onLoadComplete?.();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className={`loading-screen ${isComplete ? 'fade-out' : ''}`}>
      <div className="loading-content">
        {/* Logo */}
        <div className="loading-logo">
          <div className="logo-text">
            <span className="logo-main">DRAKE</span>
            <span className="logo-sub">INTERPLANETARY</span>
          </div>
        </div>

        {/* Loading Bar Container */}
        <div className="loading-bar-container">
          <div className="loading-bar-wrapper">
            <div 
              className="loading-bar-fill"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          
          {/* Progress Percentage */}
          <div className="loading-percentage">
            {Math.floor(Math.min(progress, 100))}%
          </div>
        </div>

        {/* Loading Text */}
        <div className="loading-text">
          <span className="loading-status">{t('loading.initializing')}</span>
          <div className="loading-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        {/* Industrial Grid Pattern */}
        <div className="loading-grid">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="grid-line" />
          ))}
        </div>
      </div>
    </div>
  );
}
