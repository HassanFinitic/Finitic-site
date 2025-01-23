import useTranslation from '../../../hooks/useTranslation';

export default function About({ params }) {
  const { lang } = params;
  const t = useTranslation(lang);

  return (
    <div>
      <h1>{t.about}</h1>
      <p>This is the about page.</p>
    </div>
  );
}