import React from "react";

import Advantages from "components/Advantages";
import ColdProduction from "components/ColdProduction";
import Divider from "components/Divider";
import Footer, { CompanyInfo } from "components/Footer";
import Header from "components/Header";
import Map from "components/Map";
import Portion from "components/Portion";
import ProductAdvantages from "components/ProductAdvantages";
import Products from "components/Products";
import Cooperation from "components/Сooperation";

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
      <Divider size={50} />
      <Products />
      <Divider size={100} />
      <Portion />
      <Cooperation />
      <Divider size={80} />
      <Map />
      <Divider size={50} />
      <Footer />
      <Divider size={40} />
      <CompanyInfo />
    </div>
  );
};

export default HomePage;
