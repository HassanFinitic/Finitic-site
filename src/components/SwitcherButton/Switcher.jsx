import { locales } from '@/i18n/config';
import { setUserLocale, getUserLocale } from '@/services/locale';
import React, { useEffect, useState } from 'react';
import './Switcher.css';

const localeLabelMap = {
  en: 'English',
  ar: 'العربية',
};

export default function Switcher() {
  const [currentLocale, setCurrentLocale] = useState('en');

  useEffect(() => {
    const fetchLocale = async () => {
      const storedLocale = await getUserLocale();
      setCurrentLocale(storedLocale || 'en');
    };

    fetchLocale();
  }, []);

  const handleClick = () => {
    const newLocale = currentLocale === 'en' ? 'ar' : 'en';
    console.log("newLocale", newLocale);
    setUserLocale(newLocale);
    setCurrentLocale(newLocale);
  };

  return (
    <button className="switcher-button" onClick={handleClick}>
      <p>{currentLocale === 'en' ? 'العربية' : 'English'}</p>
      <span className="globe-icon" role="img" aria-label="language switcher">
        🌐
      </span>
    </button>
  );
}
