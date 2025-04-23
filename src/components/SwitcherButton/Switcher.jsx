import { locales } from '@/i18n/config';
import { setUserLocale } from '@/services/locale';
import React from 'react';
import './Switcher.css'; // Create this CSS file for styles

const localeFlagMap = {
  en: 'gb',  // English -> Great Britain
  ar: 'sa',  // Arabic -> Saudi Arabia
  // Add more mappings as needed
};

export default function Switcher() {
  const handleClick = (locale) => {
    setUserLocale(locale);
  };

  return (
    <div className="switcher-container">
      {locales.map((locale) => (
        <button
          className="flag-button"
          onClick={() => handleClick(locale)}
          key={locale}
          aria-label={`Switch language to ${locale}`}
        >
          <img
            src={`https://flagcdn.com/24x18/${localeFlagMap[locale]}.png`}
            alt={`${locale} flag`}
            className="flag-icon"
          />
        </button>
      ))}
    </div>
  );
}
