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
import WhyPropFirm from '@/components/whyPropFirm/WhyPropFirm'
import Subscribe from '@/components/subscribe/Subscribe'
import Faq from '@/components/faq/Faq'

export const metadata = {
  title: "Top Prop Trading Firm | Funded Forex Trading Accounts ",
  description:"Join our leading proprietary trading firm and trade with a funded forex account. Access top-tier trading capital, risk management tools, and expert support. Start trading with no personal risk today!",
  keywords: ["prop trading firm", "proprietary trading", "funded forex accounts", "forex prop firm", "trade with funded account", "best prop firm","forex funding programs", "prop firm trading challenge" ],
};

const page = () => {
  return (
    <div className={style["prop-firm-container"]}>
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
        image="/assets/images/propfirm.jpeg"
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
