import { Sora } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale} from 'next-intl/server';

const sora = Sora({
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Finitic Technology",
  description: "Finitic develops innovative FinTech solutions that empower brokers/investors to streamline your financial operations. Explore our cutting-edge products and services.",
  keywords: [
    "Forex trading", "Forex broker", "Currency trading", "Forex market", "Best forex trading platform", "Forex trading platform", "Forex trading strategies", 
    "Forex signals", "Forex trading courses", "Forex analysis", "Forex news", "MetaTrader", "Forex trading for beginners", "Forex trading courses online", 
    "Forex trading signals free", "Forex trading demo account", "Forex CRM software", "Forex trading CRM", "Forex broker CRM", "Forex CRM solutions", 
    "Forex CRM system", "Forex CRM tools", "Forex CRM platform", "Forex CRM services", "Forex CRM providers", "Forex CRM solutions for brokers", 
    "Forex automated trading", "What is forex trading", "How to trade forex", "Forex trading basics", "Forex trading tutorial"
  ],
  openGraph: {
    images: [ "/images/logo.png" ],
  },
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/favicon.png",
        type: "image/png",
      },
    ],
  },
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EBV1ZGC3FC"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EBV1ZGC3FC');
          `}
        </script>
        
        {/* Google Tag Manager */}
        <script>
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[]; 
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'}); 
              var f=d.getElementsByTagName(s)[0], j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:''; j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window, document, 'script', 'dataLayer', 'GTM-W6P6VVRR');
          `}
        </script>

        {/* LinkedIn Pixel */}
        <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                _linkedin_partner_id = "8323345";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              `,
            }}
          />
          
          {/* LinkedIn Pixel */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function(l) {
                  if (!l) {
                    window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                    window.lintrk.q=[];
                  }
                  var s = document.getElementsByTagName("script")[0];
                  var b = document.createElement("script");
                  b.type = "text/javascript"; b.async = true;
                  b.src = "https://snap.licdn.com/li.lmsanalytics/insight.min.js";
                  s.parentNode.insertBefore(b, s);
                })(window.lintrk);
              `,
            }}
          />

        {/* Facebook Pixel */}
        <script>
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){
                n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)
              };
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
              t=b.createElement(e);t.async=!0;t.src=v;
              s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)
            }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1312830792810806');
            fbq('track', 'PageView');
          `}
        </script>
        {/* Facebook Pixel noscript */}
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} 
               src="https://www.facebook.com/tr?id=1312830792810806&ev=PageView&noscript=1" />
        </noscript>
      </head>
      <body className={`${sora.variable}`}>
      <NextIntlClientProvider>
        <Header />
        <div
          style={{
            marginTop: "100px",
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
        <Footer />
        </NextIntlClientProvider>

        {/* Google Tag Manager noscript */}
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-W6P6VVRR" 
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} 
        ></iframe>

        {/* LinkedIn Pixel noscript */}
        <noscript> <img height="1" width="1" style={{ display: 'none' }} alt=""
          src="https://px.ads.linkedin.com/collect/?pid=8323345&fmt=gif" /> </noscript>
      </body>
    </html>
  );
}
