import style from './forex.module.css';
import WhyFiniticCrm from '@/components/whyFiniticCrm/WhyFiniticCrm';
import Products from '@/components/products/Products';
import { productsDataForex } from '@/data/productsDataForex';
import Faq from '@/components/faq/Faq';
import Subscribe from '@/components/subscribe/Subscribe';
import ForexFeatures from '@/components/forexFeatures/ForexFeatures';
import ProductHeader from '@/components/shared/productHeader/ProductHeader';

export const metadata = {
  title: "Forex CRM | CRM for Forex Brokers & Investors | Finitic Technologies",
  description:"Streamline your forex brokerage with our powerful Forex CRM. Manage clients, automate tasks, and boost efficiency with our tailored CRM solutions.",
  keywords: [ "Forex CRM", "CRM for forex brokers", "client management", "forex brokerage", "trading platform", "forex client portal" ],
};

export default function index() {
  return (
    <div className={`  ${style["forex-container"]}`}>
        <ProductHeader  title={"Simplify, Optimize, Succeed"} productName={"Forex CRM"} startDescription={"Your Complete"} endDescription={"Solution"}/>
       <p className={style.decription}>FINITIC’s Forex CRM: A seamless solution for forex brokers to manage clients, track leads, and scale operations efficiently.</p>
       <button className={style.button}>Get Your CRM in 7 days only</button>
       <WhyFiniticCrm />
       <ForexFeatures />
       <Products productsData={productsDataForex} 
        description={"How FINITIC's Forex CRM Benefits Your Brokerage ?"}
       />
       <Subscribe />
       <Faq />
    </div>
  )
}
