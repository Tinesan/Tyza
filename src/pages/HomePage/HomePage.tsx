import React from "react";
import styled from "styled-components";

import Advantages from "components/Advantages";
import ColdProduction from "components/ColdProduction";
import Divider from "components/Divider";
import Footer, { CompanyInfo } from "components/Footer";
import Header from "components/Header";
import Map from "components/Map";
import PageContols from "components/PageControls";
import Portion from "components/Portion";
import ProductAdvantages from "components/ProductAdvantages";
import Products from "components/Products";
import Reviews from "components/Reviews";
import Cooperation from "components/Сooperation";

const HomePageWrapper = styled.div`
  position: relative;
`;

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Header />
      <Divider className="d-none d-md-block" size={80} />
      <Advantages />
      <Divider className="d-none d-md-block" size={100} />
      <ProductAdvantages />
      <Divider size={100} />
      <ColdProduction />
      <Divider size={50} />
      <Products />
      <Divider size={100} />
      <Portion />
      <Divider size={40} />
      <Reviews />
      <Divider size={80} />
      <Cooperation />
      <Divider size={80} />
      <Map />
      <Divider size={50} />
      <Footer />
      <Divider size={40} />
      <CompanyInfo />
      <PageContols />
    </HomePageWrapper>
  );
};

export default HomePage;
