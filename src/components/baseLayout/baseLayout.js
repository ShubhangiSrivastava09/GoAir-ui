import React from "react";
import { Container, Box } from "@mui/material";
import AboutGoAir from "../aboutGoAir/aboutGoAir";
import FlightList from "../flightLists/flightList";
import SideNav from "../sideNav/sidenav";
import styles from "./baseLayout.module.css";
import Ribbon from "../ribbon/ribbon";

const Layout = () => {
  return (
    <Container maxWidth="lg">
      <Ribbon />
      <Box className={styles.layoutGrid}>
        <Box className={styles.sidebar}>
          <SideNav />
        </Box>

        <Box className={styles.mainContent}>
          <AboutGoAir />
          <FlightList />
        </Box>
      </Box>
    </Container>
  );
};

export default Layout;
