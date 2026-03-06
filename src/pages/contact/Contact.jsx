/**
 * Contact Page - Drake Interplanetary
 * 
 * Design Philosophy: Industrial Salvage Brutalism
 * - Contact form with validation
 * - Location information
 * - Industrial styling
 */

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Contact.css";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <Header />

      <main className="contact-main">
        {/* Page Header */}
        <section className="contact-header">
          <h1 className="contact-title">{t('contact.title')}</h1>
          <p className="contact-subtitle">
            {t('contact.subtitle')}
          </p>
        </section>

        {/* Contact Content */}
        <section className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="section-title">{t('contact.sendMessage')}</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  {t('contact.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder={t('contact.subjectPlaceholder')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>

              <button type="submit" className="form-submit-button">
                {isSubmitted ? t('contact.sent') : t('contact.send')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <h2 className="contact-info-title">{t('contact.infoTitle')}</h2>

            <div className="info-block">
              <h3 className="info-block-title">{t('contact.salesDept')}</h3>
              <p className="info-text" style={{whiteSpace: 'pre-line'}}>
                {t('contact.salesInfo')}
              </p>
            </div>

            <div className="info-block">
              <h3 className="info-block-title">{t('contact.supportDept')}</h3>
              <p className="info-text" style={{whiteSpace: 'pre-line'}}>
                {t('contact.supportInfo')}
              </p>
            </div>

            <div className="info-block">
              <h3 className="info-block-title">{t('contact.serviceCenters')}</h3>
              <p className="info-text" style={{whiteSpace: 'pre-line'}}>
                {t('contact.centers')}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
