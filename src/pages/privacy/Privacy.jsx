/**
 * Privacy Policy Page - Drake Interplanetary
 */

import { useTranslation } from "react-i18next";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Privacy.css";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="privacy-page">
      <Header />

      <main className="privacy-main">
        <section className="privacy-header">
          <h1 className="privacy-title">{t('privacy.title')}</h1>
          <p className="privacy-date">{t('privacy.lastUpdated')}</p>
        </section>

        <section className="privacy-content">
          <div className="privacy-section">
            <h2 className="section-title">{t('privacy.section1Title')}</h2>
            <p className="section-text">{t('privacy.section1Text')}</p>
          </div>

          <div className="privacy-section">
            <h2 className="section-title">{t('privacy.section2Title')}</h2>
            <p className="section-text">{t('privacy.section2Text')}</p>
          </div>

          <div className="privacy-section">
            <h2 className="section-title">{t('privacy.section3Title')}</h2>
            <p className="section-text">{t('privacy.section3Text')}</p>
          </div>

          <div className="privacy-section">
            <h2 className="section-title">{t('privacy.section4Title')}</h2>
            <p className="section-text">{t('privacy.section4Text')}</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
