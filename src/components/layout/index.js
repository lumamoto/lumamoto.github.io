import React from "react";
import PropTypes from "prop-types";
import Footer from "./footer";

import { GlobalStyle, ContainerLayout, MainContent } from "../common";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <MainContent>
        <ContainerLayout></ContainerLayout>
        <ContainerLayout>
          <main>{children}</main>
        </ContainerLayout>
      </MainContent>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
