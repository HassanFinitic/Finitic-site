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
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Top Prop Trading Firm | Funded Forex Trading Accounts ",
  description:"Join our leading proprietary trading firm and trade with a funded forex account. Access top-tier trading capital, risk management tools, and expert support. Start trading with no personal risk today!",
  keywords: ["prop trading firm", "proprietary trading", "funded forex accounts", "forex prop firm", "trade with funded account", "best prop firm","forex funding programs", "prop firm trading challenge" ],
};

const page = () => {
    const t = useTranslations("prop_firm_page");
  return (
    <div className={style["prop-firm-container"]}>
      <ProductHeader
        title={t("Prop Firm System")}
        productName={t("Prop Trading Firms")}
        startDescription={t("Empowering Brokers to lead the")}
      />
      <p className={style.description}>
        {t("Build, manage, and scale your proprietary trading firm with a fully customizable and automated system")}
      </p>
      <ProductButton title={t("Book A Demo")} />
      <PamSolution
        image="/assets/images/propfirm.jpg"
        highLightTitle="Prop Firm"
        title={t("System")}
        description={t("Our Prop Firm System is a complete solution designed for brokers looking to establish and expand their proprietary trading firms With advanced automation, seamless platform integration, and risk management tools, you can efficiently attract, evaluate, and manage traders while maximizing profitability")}
      />
      <IconsSection
        iconsInfo={[
          {
            icon: <Prop1 />,
            title: t("Multiple Accounts Managed"),
          },
          {
            icon: <Prop2 />,
            title: t("Performance Tracking"),
          },
          {
            icon: <Prop3 />,
            title: t("Allocation Methods"),
          },
          {
            icon: <Prop4 />,
            title: t("System Integration"),
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
