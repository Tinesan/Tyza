import React from "react";
import Map from "components/Map";
import Header from "components/Header";
import Divider from "components/Divider";
import Portion from "components/Portion";
import Products from "components/Products";
import Advantages from "components/Advantages";
import Cooperation from "components/Сooperation";
import ColdProduction from "components/ColdProduction";
import Footer, { CompanyInfo } from "components/Footer";
import ProductAdvantages from "components/ProductAdvantages";
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
