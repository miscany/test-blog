import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { DefaultSeo } from "next-seo";
import SEO from "../next.config";

const Center = styled.div`
  width: 80%;
  margin: 0 10% 0 10%;
  @media only screen and (max-width: 1199px) {
    margin: 0 0;
    width: 100%;
  }
`;
const Layout = ({ children }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Navbar />
      <Center>{children}</Center>
    </>
  );
};

export default Layout;
