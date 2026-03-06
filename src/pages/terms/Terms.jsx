/**
 * Terms of Service Page - Drake Interplanetary
 */

import { useTranslation } from "react-i18next";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Terms.css";

export default function Terms() {
  const { t } = useTranslation();

  return (
    <div className="terms-page">
      <Header />

      <main className="terms-main">
        <section className="terms-header">
          <h1 className="terms-title">{t('terms.title')}</h1>
          <p className="terms-date">{t('terms.lastUpdated')}</p>
        </section>

        <section className="terms-content">
          <div className="terms-section">
            <h2 className="section-title">{t('terms.section1Title')}</h2>
            <p className="section-text">{t('terms.section1Text')}</p>
          </div>

          <div className="terms-section">
            <h2 className="section-title">{t('terms.section2Title')}</h2>
            <p className="section-text">{t('terms.section2Text')}</p>
          </div>

          <div className="terms-section">
            <h2 className="section-title">{t('terms.section3Title')}</h2>
            <p className="section-text">{t('terms.section3Text')}</p>
          </div>

          <div className="terms-section">
            <h2 className="section-title">{t('terms.section4Title')}</h2>
            <p className="section-text">{t('terms.section4Text')}</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
