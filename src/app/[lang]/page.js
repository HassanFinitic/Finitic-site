import useTranslation from '../../hooks/useTranslation';

export default function Home({ params }) {
  const { lang } = params;
  const t = useTranslation(lang);

  return (
    <div>
      <h1>{t.welcome}</h1>
      <p>{t.about}</p>
    </div>
  );
}