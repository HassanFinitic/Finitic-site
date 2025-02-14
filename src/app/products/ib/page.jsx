import Scheduling from '@/components/scheduling/Scheduling'
import React from 'react'
import style from "./ib.module.css"
import { featuresIB } from '@/data/featuresIB'
import Heading from '@/components/productsRoute/shared/Heading'
import Cards from '@/components/productsRoute/IB/Cards'
import CustomGrid from './../../../components/customGrid/CustomGrid';
import commission from '../../../../public/assets/icons/commission2.png'
import CustomizableFrequency from '../../../../public/assets/icons/CustomizableFrequency.png'
import Rewards from '../../../../public/assets/icons/Rewards.png'
import MultipleCurrencies from '../../../../public/assets/icons/MultipleCurrencies.png'
import Subscribe from '@/components/subscribe/Subscribe'
import Faq from '@/components/faq/Faq'
import WhyFintic from '@/components/productsRoute/IB/WhyFinitic'

export const metadata = {
  title: "IB Portal | Introducing Broker Program | Finitic Technologies",
  description:" Join our Introducing Broker (IB) program and earn commissions by referring clients. Access marketing materials, tracking tools, and dedicated support.",
  keywords: [ "IB portal", "introducing broker", "forex IB program", "forex partnership", "earn commissions" ],
};


export default function page() {

  const cards = [
    {
      id: 1,
      icon: commission,
      title: "Commission",
      content: "Offer partners a percentage of the trading commissions generated by their referred clients. This model aligns their success with your revenue, incentivizing them to drive more trading activity."
    },
    {
      id: 2,
      icon: Rewards,
      title: "Lot-Based Rewards",
      content: "Fixed rewards for each lot traded by clients in the forex market."
    },
    {
      id: 3,
      icon: MultipleCurrencies,
      title: "Multiple Currencies",
      content: "Offer rewards in any cryptocurrency or fiat currency for maximum flexibility."
    },
    {
      id: 4,
      icon: CustomizableFrequency,
      title: "Customizable Frequency",
      content: "Enable partners to choose when they get paid—hourly, daily, weekly, or monthly—offering convenience and catering to their cash flow needs. This adaptability keeps them engaged and motivated."
    }
  ];
  

  return (
    <div className={style.ib_Full_container}>
      <div className={` ${style.ib_container}`}>
        <div className={`container ${style.landing}`}>
          <div className={style.left_top}>
            <div className={style.title}><span className={style.span_1}>IB Portal</span> The best marketing tool</div>
            <p className={style.subTitle}>The Ultimate IB Portal for <span className={style.span_2}>Partner Success</span></p>
            <p className={style.description}>The most effective marketing and management tool for introducing brokers. With advanced features and customizable options, it empowers your partners to achieve more in the forex market.</p>
          </div>
          <div className={style.right_bottom}>
          <Scheduling subTitle={"Boost Your IB Performance"} buttonTitle={"Become a Partner"}  />
          </div>
        </div>

      <div className={`${style.custom_Grid}`}>
        <div className="container">
        <div className="container">
        <Heading
          title={"Flexible Rewards"}
          subTitle={"Program for Partners"}
        />
          <CustomGrid cards={cards} />
        </div>
        </div>
      </div>
        

        <div className={style.features}>
          <div className="container">
            {/* heading */}
        <Heading
          title={"Key Features of FINITIC’s IB Portal"}
          subTitle={"Powerful Tools to optimize your partners performance and maximize growth"}
        />
        {/* feature box */}
        <Cards data={featuresIB} />
          </div>
        </div>

        <div style={{ padding: "0 50px", backgroundColor: "white", marginTop: "100px", borderRadius: "24px"}} className={`container ${style.howItWorks}`}>
          <WhyFintic />
        </div>

        <div className={`container ${style.subscribe}`}>
          <Subscribe />
        </div>

        <br />

        <div className={`container ${style.faqs}`}>
          <Faq />
        </div>

      </div>
    </div>
  )
}
