import * as React from "react";

import Header from "./Header";
import { Container } from "@mui/material";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Container maxWidth={"lg"}>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
