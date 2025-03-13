import Header from "@/components/shared/header/Header";
import DataAccessOptions from "@/components/dataAccessOptions/DataAccessOptions";
import Heading from "@/components/productsRoute/shared/Heading";
import Grid from "@/components/grid/Grid";
import Button from "@/components/shared/button/Button";
import Flex from "@/components/flex/Flex";
import Subscribe from "@/components/subscribe/Subscribe";

export default function page() {
  return (
    <div>
      <Header
        title="Advanced Market Data Tools"
        decription="Real-Time Market Data APIs"
        fontSizeDescription={"3rem"}
      />
      <Header
        title="Forex, Commodities, and Crypto"
        decription="Ultra-fast, highly accurate, and seamlessly integrated for uninterrupted trading."
        fontSizeDescription={"1rem"}
      />


      <Flex gap="40px" align="center" justify="center" >
        <Button background={"black"} text="Get your Free API Key" url="/registration" />
        <Button text="View Pricing" url="/registration" />
      </Flex>

      
      <br />
      <br />
      <br />

      <Header
        title="Real-time & Historical"
        decription="Extensive Market Data APIs"
        fontSizeDescription={"1.5rem"}
      />

      <DataAccessOptions />

      <Subscribe />

    </div>
  );
}
