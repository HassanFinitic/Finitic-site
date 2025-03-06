import Header from "@/components/shared/header/Header";
import style from "./partnership.module.css";
import Image from "next/image";
import WhyFintic from "@/components/whyFintic/WhyFintic";
import PartnershipModels from "@/components/partnershipModels/page";
import HowItWorksPartnership from "@/components/howItWorksPartnership/HowItWorksPartnership";
import Subscribe from "@/components/subscribe/Subscribe";
import Faq from "@/components/faq/Faq";
import { partnershipModels } from "@/data/partnershipData";
import Flex from "@/components/flex/Flex";

export const metadata = {
  title: "Partner with Us | Finitic Partnership Programs",
  description:
    "Grow your business with our forex and fintech partnership programs. Earn commissions, expand your reach, and collaborate with a trusted industry leader. Join our partnership program today! ",
  keywords: [
    "forex partnership",
    "fintech affiliate program",
    "forex IB program",
    "trading partnerships",
    "forex broker partnership",
    "fintech business collaboration",
  ],
};

const slogin = [
  {
    text: "Customizable",
    icon: "./assets/images/Partnet-Customization.svg",
  },
  {
    text: "Peak Performance",
    icon: "./assets/images/Partner-Peak Performance.svg",
  },
  {
    text: "Top Security",
    icon: "./assets/images/Partner-Security.svg",
  },
];

const page = () => {
  return (
    <div>
      <Header
        title={"FINITIC Partnership Program"}
        decription={"Collaborate, Earn, and Grow"}
      />
      <p className={style.p}>
        Enhance your brokerage with advanced technology for smarter growth.
      </p>
      <Flex
        justify="center"
        align="center"
        gap="20px"
        className={style.slogins}
        wrap="wrap"
        directionSmall="column"
      >
        {slogin.map((item, index) => (
          <Flex
            gap="5px"
            className={style.slogin}
            justify="center"
            align="center"
            key={index}
          >
            <div className={style.img}>
              <Image src={item.icon} width={30} height={40} alt="image" />
            </div>
            <span>{item.text}</span>
          </Flex>
        ))}
      </Flex>
      <div className={`container ${style["partnership-flex"]}`}>
        <div>
          <h6>Partnership Program</h6>
          <p>
            We recognize the transformative power of partnerships. By aligning
            with innovators and industry leaders in forex trading, we deliver
            solutions that empower forex brokers and create opportunities for
            our partners to earn and grow with us in the forex market.
          </p>
        </div>
        {/* <div>
                <Image src={img}  width={400} height={300} alt="image" />
             </div> */}
      </div>
      <WhyFintic />
      <PartnershipModels toggleData={partnershipModels} />
      <HowItWorksPartnership />
      <Subscribe />
      <Faq landingPage={true} />
    </div>
  );
};

export default page;
