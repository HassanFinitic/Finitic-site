export default function LangLayout({ children, params }) {
    const { lang } = params;
  
    return (
      <html dir={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang}>
        <body>{children}</body>
      </html>
    );
  }