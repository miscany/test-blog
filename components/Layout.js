import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer/index";
import styled from "styled-components";
import { DefaultSeo } from "next-seo";
import SEO from "../next.config";

const Center = styled.div`
  width: 100%;
  margin: 0 0;
  @media only screen and (max-width: 1199px) {
    margin: 0 0;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
     
        <Navbar />
        <Center>{children}</Center>
        <Footer />
      
    </>
  );
};

export default Layout;
