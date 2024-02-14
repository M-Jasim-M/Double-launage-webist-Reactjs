// ExampleComponent.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const ExampleComponent = () => {
    const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('about')}</p>
      <p>{t('contact')}</p>
    </div>
  );
};

export default ExampleComponent;
