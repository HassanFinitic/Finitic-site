import ProductHeader from '@/components/shared/productHeader/ProductHeader'
import React from 'react'
import style from "./propFirm.module.css"
import ProductButton from '@/components/shared/productButton/ProductButton'
import PamSolution from '@/components/pamSolution/PamSolution'
import Prop1 from '../../../../public/assets/icons/Prop1'
import Prop2 from '../../../../public/assets/icons/Prop2'
import Prop3 from '../../../../public/assets/icons/Prop3'
import Prop4 from '../../../../public/assets/icons/Prop4'
import IconsSection from '@/components/shared/iconsSection/IconsSection'

export const metadata = {
  title: "Prop Firm - Finitic Technology",
};

const page = () => {
  return (
    <div className=" ">
      <ProductHeader
        title={"Prop Firm System"}
        productName={"Prop Trading Firms"}
        startDescription={"Empowering Brokers to lead the"}
      />
      <p className={style.description}>
        Build, manage, and scale your proprietary trading firm with a fully
        customizable and automated system.
      </p>
      <ProductButton title={"Book A Demo"} />
      <PamSolution
        image="/assets/images/propfirm.png"
        highLightTitle="Prop Firm"
        title="System"
        description="Our Prop Firm System is a complete solution designed for brokers looking to establish and expand their proprietary trading firms. With advanced automation, seamless platform integration, and risk management tools, you can efficiently attract, evaluate, and manage traders while maximizing profitability."
      />
      <IconsSection
        iconsInfo={[
          {
            icon: <Prop1 />,
            title: "Multiple Accounts Managed",
          },
          {
            icon: <Prop2 />,
            title: "Performance Tracking",
          },
          {
            icon: <Prop3 />,
            title: "Allocation Methods",
          },
          {
            icon: <Prop4 />,
            title: "System Integration",
          },
        ]}
      />
      <WhyPropFirm />
      <Subscribe />
      <Faq  />
      </div>
  );
};

export default page;
