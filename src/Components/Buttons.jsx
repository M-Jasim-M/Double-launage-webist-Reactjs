// LanguageSwitcher.js
import React from 'react';
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from './in8';

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>{t('english')}</button>
      <button onClick={() => changeLanguage('fr')}>{t('french')}</button>
    </div>
  );
};

export default LanguageSwitcher;
