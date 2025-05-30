import ProductHeader from "@/components/shared/productHeader/ProductHeader";
import React from "react";
import style from "./pamm.module.css";
import ProductButton from "@/components/shared/productButton/ProductButton";
import Pamm1 from "../../../../public/assets/icons/Pamm1";
import Pamm2 from "../../../../public/assets/icons/Pamm2";
import Pamm4 from "../../../../public/assets/icons/Pamm4";
import { Pamm3 } from "../../../../public/assets/icons/Pamm3";
import PamSolution from "@/components/pamSolution/PamSolution";
import PamBenefits from "@/components/pamBenefits/PamBenefits";
import WhyChooseFinitic from "@/components/whyChooseFinitic/WhyChooseFinitic";
import IconsSection from "@/components/shared/iconsSection/IconsSection";
import Button from "@/components/shared/button/Button";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "PAMM/MAM - Finitic Technology",
};

const page = () => {
  const t = useTranslations("pamm_mam_page");
  return (
    <div className={style["pam-container"]}>
      <ProductHeader
        title={t("PAMM/MAM Solutions")}
        productName={"PAMM/MAM"}
        startDescription={t("Advanced")}
        endDescription={t("Systems for Scalable Forex Management")}
      />
      <p
        data-aos="fade-up"
        data-aos-duration="2000"
        className={style["pam__description"]}
      >
        {t("Optimize Portfolio Performance with Smart Investment Allocation")}
      </p>
      <Button
        data-aos="fade-up"
        data-aos-duration="3000"
        text={t("Book A Demo")}
        url={"/registration"}
        className={style["demoButton"]}
        center={true}
      />
      <IconsSection
        iconsInfo={[
          {
            icon: <Pamm1 />,
            title: t("Multiple Accounts Managed"),
          },
          {
            icon: <Pamm2 />,
            title: t("Performance Tracking"),
          },
          {
            icon: <Pamm3 />,
            title: t("Allocation Methods"),
          },
          {
            icon: <Pamm4 />,
            title: t("System Integration"),
          },
        ]}
      />
      <PamSolution
        image="/assets/images/pam.png"
        highLightTitle="PAMM/MAM"
        title={t("Solutions")}
        description={t("Our PAMM (Percentage Allocation Management Module) and MAM (Multi-Account Manager) systems revolutionize asset and forex trading portfolio management Designed for brokers, they provide efficient, scalable, and customizable solutions tailored for modern trading platforms")}
      />
      <PamBenefits />
      <WhyChooseFinitic />
    </div>
  );
};

export default page;
