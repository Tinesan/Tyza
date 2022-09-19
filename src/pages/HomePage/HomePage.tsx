import React from "react";
import styled from "styled-components";

import Advantages from "components/Advantages";
import ColdProduction from "components/ColdProduction";
import Delivery from "components/Delivery";
import Divider from "components/Divider";
import Footer, { CompanyInfo } from "components/Footer";
import Header from "components/Header";
import Map from "components/Map";
import PageContols from "components/PageControls";
import Portion from "components/Portion";
import ProductAdvantages from "components/ProductAdvantages";
import Products from "components/Products";
import Cooperation from "components/Сooperation";

const HomePageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Header />
      <Divider className="d-none d-md-block" size={80} />
      <div className="d-none d-md-block">
        <Advantages />
      </div>
      <Divider className="d-none d-md-block" size={100} />
      <ColdProduction />
      <Divider className="d-none d-md-block" size={50} />
      <Products />
      <Divider className="d-none d-md-block" size={100} />
      <div className="d-block d-md-none">
        <Divider size={80} />
        <Advantages />
      </div>
      <Portion />
      <ProductAdvantages />
      <Divider size={80} />
      <Cooperation />
      <Divider size={80} />
      <Map />
      <Delivery />
      <Divider size={50} />
      <Footer />
      <Divider size={40} />
      <CompanyInfo />
      <PageContols />
    </HomePageWrapper>
  );
};

export default HomePage;
