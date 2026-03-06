import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="language-switcher"
      title={i18n.language === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
    >
      <Globe size={20} />
      <span>{i18n.language.toUpperCase()}</span>
    </button>
  );
}
