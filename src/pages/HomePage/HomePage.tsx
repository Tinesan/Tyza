import React from "react";
import Map from "components/Map";
import Header from "components/Header";
import Portion from "components/Portion";
import Advantages from "components/Advantages";
import Cooperation from "components/Сooperation";
import ColdProduction from "components/ColdProduction";
import ProductAdvantages from "components/ProductAdvantages";
import Divider from "components/Divider";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Divider size={80} />
      <Advantages />
      <Divider size={100} />
      <ProductAdvantages />
      <Divider size={100} />
      <ColdProduction />
      <Divider size={100} />
      <Portion />
      <Cooperation />
      <Divider size={80} />
      <Map />
    </div>
  );
};

export default HomePage;
