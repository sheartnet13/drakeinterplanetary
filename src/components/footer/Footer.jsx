import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import "./Footer.css";
import starCitizenIcon from "../../assets/icons/starcitizen.webp";
import githubIcon from "../../assets/icons/github.webp";
import instagramIcon from "../../assets/icons/instagram.webp";
import youtubeIcon from "../../assets/icons/youtube.webp";

const socialLinks = [
  { name: "GitHub", icon: githubIcon, url: "https://github.com/sheartnet13/drakeinterplanetary" },
  { name: "RobertSpaceIndustries", icon: starCitizenIcon, url: "https://robertsspaceindustries.com/en/" },
  { name: "Instagram", icon: instagramIcon, url: "https://www.instagram.com" },
  { name: "YouTube", icon: youtubeIcon, url: "https://www.youtube.com" },
];

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  const legalLinks = [
    { label: t('footer.privacy'), href: "/privacy" },
    { label: t('footer.cookies'), href: "/cookies" },
    { label: t('footer.terms'), href: "/terms" },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Company Info Section */}
        <div className="footer-section">
          <h3 className="footer-title">{t('footer.company')}</h3>
          <p className="footer-description">{t('footer.description')}</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3 className="footer-title">{t('footer.navigation')}</h3>
          <ul className="footer-links">
            <li><Link href="/"><span className="footer-link">{t('footer.home')}</span></Link></li>
            <li><Link href="/specifications"><span className="footer-link">{t('footer.specifications')}</span></Link></li>
            <li><Link href="/careers"><span className="footer-link">{t('footer.careers')}</span></Link></li>
            <li><Link href="/contact"><span className="footer-link">{t('footer.contact')}</span></Link></li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="footer-section">
          <h3 className="footer-title">{t('footer.connect')}</h3>
          <div className="social-links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={link.name}
              >
                <img src={link.icon} alt={link.name} className="social-icon-img" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Divider */}
      <div className="footer-divider"></div>

      {/* Legal Section */}
      <div className="footer-legal">
        <div className="legal-content">
          <p className="copyright">
            © {currentYear} {t('footer.rights')}
          </p>
          <div className="legal-links">
            {legalLinks.map((link, index) => (
              <span key={link.label}>
                <Link href={link.href}>
                  <span className="legal-link">{link.label}</span>
                </Link>
                {index < legalLinks.length - 1 && <span className="separator">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
