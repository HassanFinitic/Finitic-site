'use client'
import Grid from '@/components/grid/Grid'
import style from "../../../app/products/ib/ib.module.css"
import { useEffect } from 'react'
import Flex from '@/components/flex/Flex'
import { MdElectricBolt } from 'react-icons/md'
import Aos from "aos";
import { useTranslations } from 'next-intl';

export default function Cards({data}) {

    const t = useTranslations("IB_Portal_Page");
    useEffect(() => {
        Aos.init({
          duration: 1000, 
        });
      }, []);

  return (
<div className={style.cards}>
          <Grid colsLarge={3} colsMedium={2} colsSmall={1} gap="30px">
          {
            data.map((feature) => (
              <div data-aos="zoom-in-up" key={feature.id} className={style.feature}>
                <Flex direction={'column'} gap={'10px'}>
                <div className={style.iconContainer}>
                  <div className={style.icon}>
                    <MdElectricBolt />
                  </div>
                
                </div>
                <div className={style.title}>{t(feature.title)}</div>
                <div className={style.description}>{t(feature.description)}</div>
                </Flex>
              </div>
            ))
          }
          </Grid>
          </div>
  )
}
