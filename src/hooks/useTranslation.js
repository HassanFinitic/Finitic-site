"use client"
import { useRouter } from 'next/router';
import en from '../locales/en/common.json';
import ar from '../locales/ar/common.json';

const translations = { en, ar };

export default function useTranslation() {
  const { locale } = useRouter();
  return translations[locale];
}