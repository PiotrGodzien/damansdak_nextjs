import React from 'react';
import i18nConfig from '../i18n.json';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router'

const SwitchLanguage = () => {
  const { locales, defaultLocale } = i18nConfig;
  const { t, lang } = useTranslation('common');
  const { asPath } = useRouter();

  return (
    <div>
      <div id="dropdown-basic-button" title="Switch Lang">
        {locales.map(lng => {
          if (lng === lang) return null;
          return (
            <div key={lng}>
              <Link href="/" locale={lng} key={lng}>
                {t(`common:language-name-${lng}`)}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SwitchLanguage;