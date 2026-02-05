/**
 * Careers Page - Drake Interplanetary
 * 
 * Design Philosophy: Industrial Salvage Brutalism
 * - Job listings in array format
 * - Career information
 * - Industrial styling
 */

import { useTranslation } from "react-i18next";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Careers.css";

const jobListings = [
  {
    id: "eng-001",
    title: "Spacecraft Engineer",
    department: "Engineering",
    location: "Port Olisar Station",
    type: "full-time",
    description:
      "Design and develop next-generation Drake spacecraft. Work with our engineering team to push the boundaries of industrial spacecraft design.",
  },
  {
    id: "sales-001",
    title: "Sales Representative",
    department: "Sales",
    location: "Stanton System",
    type: "full-time",
    description:
      "Represent Drake Interplanetary and close deals with corporate clients. Build relationships and expand our market presence.",
  },
  {
    id: "maint-001",
    title: "Maintenance Technician",
    department: "Service",
    location: "Multiple Locations",
    type: "contract",
    description:
      "Provide maintenance and repair services for Drake vessels. Ensure customer satisfaction and vessel reliability.",
  },
  {
    id: "design-001",
    title: "Industrial Designer",
    department: "Design",
    location: "Port Olisar Station",
    type: "full-time",
    description:
      "Create functional and aesthetically industrial designs for Drake products. Contribute to our signature brutalist aesthetic.",
  },
  {
    id: "qa-001",
    title: "Quality Assurance Specialist",
    department: "Quality Control",
    location: "Port Olisar Station",
    type: "full-time",
    description:
      "Test and verify Drake spacecraft systems. Ensure all vessels meet our high standards of durability and reliability.",
  },
  {
    id: "logistics-001",
    title: "Logistics Coordinator",
    department: "Operations",
    location: "Stanton System",
    type: "full-time",
    description:
      "Manage supply chains and logistics for Drake operations. Keep our production lines running smoothly.",
  },
];

export default function Careers() {
  const { t } = useTranslation();
  
  const jobListings = [
    {
      id: "eng-001",
      title: t('careers.jobs.engineer.title'),
      department: t('careers.jobs.engineer.dept'),
      location: t('careers.jobs.engineer.location'),
      type: "full-time",
      description: t('careers.jobs.engineer.desc'),
    },
    {
      id: "sales-001",
      title: t('careers.jobs.sales.title'),
      department: t('careers.jobs.sales.dept'),
      location: t('careers.jobs.sales.location'),
      type: "full-time",
      description: t('careers.jobs.sales.desc'),
    },
    {
      id: "maint-001",
      title: t('careers.jobs.maintenance.title'),
      department: t('careers.jobs.maintenance.dept'),
      location: t('careers.jobs.maintenance.location'),
      type: "contract",
      description: t('careers.jobs.maintenance.desc'),
    },
    {
      id: "design-001",
      title: t('careers.jobs.designer.title'),
      department: t('careers.jobs.designer.dept'),
      location: t('careers.jobs.designer.location'),
      type: "full-time",
      description: t('careers.jobs.designer.desc'),
    },
    {
      id: "qa-001",
      title: t('careers.jobs.qa.title'),
      department: t('careers.jobs.qa.dept'),
      location: t('careers.jobs.qa.location'),
      type: "full-time",
      description: t('careers.jobs.qa.desc'),
    },
    {
      id: "logistics-001",
      title: t('careers.jobs.logistics.title'),
      department: t('careers.jobs.logistics.dept'),
      location: t('careers.jobs.logistics.location'),
      type: "full-time",
      description: t('careers.jobs.logistics.desc'),
    },
  ];
  
  return (
    <div className="careers-page">
      <Header />

      <main className="careers-main">
        {/* Page Header */}
        <section className="careers-header">
          <h1 className="careers-title">{t('careers.title')}</h1>
          <p className="careers-subtitle">
            {t('careers.subtitle')}
          </p>
        </section>

        {/* About Section */}
        <section className="about-section">
          <h2 className="section-title">{t('careers.whyDrake')}</h2>
          <div className="about-content">
            <div className="about-item">
              <h3 className="about-item-title">{t('careers.innovation')}</h3>
              <p className="about-item-text">
                {t('careers.innovationText')}
              </p>
            </div>
            <div className="about-item">
              <h3 className="about-item-title">{t('careers.durability')}</h3>
              <p className="about-item-text">
                {t('careers.durabilityText')}
              </p>
            </div>
            <div className="about-item">
              <h3 className="about-item-title">{t('careers.team')}</h3>
              <p className="about-item-text">
                {t('careers.teamText')}
              </p>
            </div>
            <div className="about-item">
              <h3 className="about-item-title">{t('careers.growth')}</h3>
              <p className="about-item-text">
                {t('careers.growthText')}
              </p>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="jobs-section">
          <h2 className="section-title">{t('careers.openPositions')}</h2>
          <div className="jobs-list">
            {jobListings.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <h3 className="job-title">{job.title}</h3>
                  <span className="job-type">{t(`careers.jobTypes.${job.type.replace('-', '')}`)}</span>
                </div>

                <div className="job-meta">
                  <div className="meta-item">
                    <span className="meta-label">{t('careers.department')}</span>
                    <span className="meta-value">{job.department}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">{t('careers.location')}</span>
                    <span className="meta-value">{job.location}</span>
                  </div>
                </div>

                <p className="job-description">{job.description}</p>

                <button className="apply-button">{t('careers.applyNow')}</button>
              </div>
            ))}
          </div>
        </section>

        {/* Application Info */}
        <section className="application-section">
          <h2 className="section-title">{t('careers.processTitle')}</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">01</div>
              <h3 className="step-title">{t('careers.step1Title')}</h3>
              <p className="step-text">
                {t('careers.step1Text')}
              </p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <h3 className="step-title">{t('careers.step2Title')}</h3>
              <p className="step-text">
                {t('careers.step2Text')}
              </p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <h3 className="step-title">{t('careers.step3Title')}</h3>
              <p className="step-text">
                {t('careers.step3Text')}
              </p>
            </div>
            <div className="step">
              <div className="step-number">04</div>
              <h3 className="step-title">{t('careers.step4Title')}</h3>
              <p className="step-text">
                {t('careers.step4Text')}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
