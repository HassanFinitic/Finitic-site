import style from './forex.module.css';
import WhyFiniticCrm from '@/components/whyFiniticCrm/WhyFiniticCrm';
import Products from '@/components/products/Products';
import { useProductsDataForex } from '@/data/productsDataForex';
import Faq from '@/components/faq/Faq';
import Subscribe from '@/components/subscribe/Subscribe';
import ForexFeatures from '@/components/forexFeatures/ForexFeatures';
import ProductHeader from '@/components/shared/productHeader/ProductHeader';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const metadata = {
  title: "Forex CRM | CRM for Forex Brokers & Investors | Finitic Technologies",
  description:"Streamline your forex brokerage with our powerful Forex CRM. Manage clients, automate tasks, and boost efficiency with our tailored CRM solutions.",
  keywords: [ "Forex CRM", "CRM for forex brokers", "client management", "forex brokerage", "trading platform", "forex client portal" ],
};

export default function index() {
const t = useTranslations('Forex_CRM_Page');
const productsDataForex = useProductsDataForex();
  return (
    <div className={`  ${style["forex-container"]}`}>
        <ProductHeader  title={t("Simplify, Optimize, Succeed")} productName={t("Forex CRM")} startDescription={t("Your Complete")} endDescription={t("Solution")}/>
       <p className={style.decription}>{t("FINITIC’s Forex CRM: A seamless solution for forex brokers to manage clients, track leads, and scale operations efficiently")}</p>
       <Link href={`/contact-us`}><button className={style.button}>{t("Get Your CRM in 7 days only")}</button></Link>
       <WhyFiniticCrm />
       <ForexFeatures />
       <Products productsData={productsDataForex} 
        description={t("How FINITIC's Forex CRM Benefits Your Brokerage ?")}
       />
       <Subscribe />
       <Faq />
    </div>
  )
}
