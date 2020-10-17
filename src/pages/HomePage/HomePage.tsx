import React from "react";
import Header from "components/Header";
import Advantages from "components/Advantages";
import ColdProduction from "components/ColdProduction";
import ProductAdvantages from "components/ProductAdvantages";
import Portion from "components/Portion";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Advantages />
      <ProductAdvantages />
      <ColdProduction />
      <Portion />
    </div>
  );
};

export default HomePage;
