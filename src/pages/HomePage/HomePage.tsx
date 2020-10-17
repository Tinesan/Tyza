import React from "react";
import Header from "components/Header";
import Advantages from "components/Advantages";
import ColdProduction from "components/ColdProduction";
import ProductAdvantages from "components/ProductAdvantages";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Advantages />
      <ProductAdvantages />
      <ColdProduction />
    </div>
  );
};

export default HomePage;
