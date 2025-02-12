import Header from '@/components/shared/header/Header';
import style from './forex.module.css';
import WhyFiniticCrm from '@/components/whyFiniticCrm/WhyFiniticCrm';
import Products from '@/components/products/Products';
import { productsDataForex } from '@/data/productsDataForex';
import StayAHead from '@/components/stayAHead/StayAHead';
import Faq from '@/components/faq/Faq';
import Subscribe from '@/components/subscribe/Subscribe';
import ForexFeatures from '@/components/forexFeatures/ForexFeatures';
import ProductHeader from '@/components/shared/productHeader/ProductHeader';

export const metadata = {
  title: "Forex - Finitic Technology",
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
