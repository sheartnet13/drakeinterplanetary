/**
 * Cookies Policy Page - Drake Interplanetary
 */

import { useTranslation } from "react-i18next";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Cookies.css";

export default function Cookies() {
  const { t } = useTranslation();

  return (
    <div className="cookies-page">
      <Header />

      <main className="cookies-main">
        <section className="cookies-header">
          <h1 className="cookies-title">{t('cookies.title')}</h1>
          <p className="cookies-date">{t('cookies.lastUpdated')}</p>
        </section>

        <section className="cookies-content">
          <div className="cookies-section">
            <h2 className="section-title">{t('cookies.section1Title')}</h2>
            <p className="section-text">{t('cookies.section1Text')}</p>
          </div>

          <div className="cookies-section">
            <h2 className="section-title">{t('cookies.section2Title')}</h2>
            <p className="section-text">{t('cookies.section2Text')}</p>
          </div>

          <div className="cookies-section">
            <h2 className="section-title">{t('cookies.section3Title')}</h2>
            <p className="section-text">{t('cookies.section3Text')}</p>
          </div>

          <div className="cookies-section">
            <h2 className="section-title">{t('cookies.section4Title')}</h2>
            <p className="section-text">{t('cookies.section4Text')}</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
