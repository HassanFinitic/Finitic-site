import { getUserLocale } from '@/services/locale';
import {getRequestConfig} from 'next-intl/server';
import { defaultLocale } from './config';
 
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = await getUserLocale() || defaultLocale;
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});