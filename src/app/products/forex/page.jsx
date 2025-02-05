
import Header from '@/components/shared/header/Header';
import Forex from '../../../../public/assets/icons/Forex';
import style from './forex.module.css';
import WhyFinicCrm from '@/components/whyFinicCrm/WhyFinicCrm';
export default function index() {
  return (
    <div className={` ${style["forex-container"]}`}>
       <Header title={"Simplify, Optimize, Succeed"} decription={"Your Complete Forex CRM Solution"} />
       <p className={style.decription}>FINITIC’s Forex CRM: A seamless solution for forex brokers to manage clients, track leads, and scale operations efficiently.</p>
       <button className={style.button}>Get Your CRM in 7 days only</button>
       <WhyFinicCrm />
    </div>
  )
}
