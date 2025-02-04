import Scheduling from '@/components/scheduling/Scheduling'
import React from 'react'
import style from "./ib.module.css"
import { featuresIB } from '@/data/featuresIB'
import Grid from '@/components/grid/Grid'
import Flex from '@/components/flex/Flex'
import Heading from '@/components/productsRoute/shared/Heading'
import { MdElectricBolt } from "react-icons/md";
import Cards from '@/components/productsRoute/IB/Cards'
import CustomGrid from './../../../components/customGrid/CustomGrid';


export default function page() {

  const cards = [
    { id: 1, title: 'Card 1', content: 'This is card 1 (double width)' },
    { id: 2, title: 'Card 2', content: 'This is card 2 (normal width)' },
    { id: 3, title: 'Card 3', content: 'This is card 3 (normal width)' },
    { id: 4, title: 'Card 4', content: 'This is card 4 (double width)' },
    { id: 5, title: 'Card 5', content: 'This is card 5 (double width)' },
    { id: 6, title: 'Card 6', content: 'This is card 6 (normal width)' },
    { id: 7, title: 'Card 7', content: 'This is card 7 (normal width)' },
    { id: 8, title: 'Card 8', content: 'This is card 8 (double width)' },
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
          <Scheduling  />
          </div>
        </div>

        <div className="container">
          <CustomGrid cards={cards} />
        </div>

        <div className={style.features}>
          <div className="container">
            {/* heading */}
        <Heading
          title={"Key Features of FINITIC’s IB Portal"}
          subTitle={"Powerful Tools to optimize your partners performance and maximize growth."}
        />
        {/* feature box */}
        <Cards data={featuresIB} />
          </div>
        </div>
      </div>
    </div>
  )
}
