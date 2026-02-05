/**
 * Header Component - Drake Interplanetary
 * 
 * Design Philosophy: Industrial Salvage Brutalism
 * - Dark gunmetal and charcoal background
 * - Industrial red accents for navigation highlights
 * - Monospace typography for technical aesthetic
 * - Visible structural elements and grid patterns
 * - Metal plate styling with inset shadows
 */

import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../language-switcher/LanguageSwitcher";
import "./Header.css";

export default function Header() {
  const { t } = useTranslation();
  
  const navItems = [
    { label: t('nav.home'), href: "/" },
    { label: t('nav.specifications'), href: "/specifications" },
    { label: t('nav.careers'), href: "/careers" },
    { label: t('nav.contact'), href: "/contact" },
  ];
  
  return (
    <header className="header-container">
      <div className="header-content">
        {/* Logo Section */}
        <div className="header-logo">
          <Link href="/">
            <div className="logo-text">
              <span className="logo-main">DRAKE</span>
              <span className="logo-sub">INTERPLANETARY</span>
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="header-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href} className="nav-item">
                <Link href={item.href}>
                  <span className="nav-link">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Warning Indicator */}
          <div className="header-warning">
            <span className="warning-badge">{t('header.status')}</span>
          </div>
        </div>
      </div>

      {/* Industrial Divider */}
      <div className="header-divider"></div>
    </header>
  );
}
