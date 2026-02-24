import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Careers.css";

// Firebase imports
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Careers() {
  const { t } = useTranslation();
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "careers"));
        const jobs = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: t(data.title),
            department: t(data.department),
            location: t(data.location),
            type: data.type,
            description: t(data.description),
          };
        });
        setJobListings(jobs);
      } catch (error) {
        console.error("Error fetching jobs from Firestore:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [t]);

  const filteredJobs = jobListings.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.department.toLowerCase().includes(search.toLowerCase()) ||
    job.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="careers-page">
      <Header />

      <main className="careers-main">
        {/* Page Header */}
        <section className="careers-header">
          <h1 className="careers-title">{t('careers.title')}</h1>
          <p className="careers-subtitle">{t('careers.subtitle')}</p>
        </section>

        {/* Jobs Section Search */}
        <section className="jobs-section">
          <div className="jobs-section-header">
            <h2 className="section-title">{t('careers.openPositions')}</h2>
            <input
              type="text"
              placeholder={t('careers.searchPlaceholder')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="jobs-list">
            {loading ? (
              <p>{t('careers.loading')}</p>
            ) : filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
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
              ))
            ) : (
              <p>{t('careers.noResults')}</p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
