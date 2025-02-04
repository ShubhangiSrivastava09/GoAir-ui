import React from "react";

import styles from "./bookingDash.module.css";
import Searchbar from "../components/searchBar/searchbar";
import Header from "../components/header/header";
import Layout from "../components/baseLayout/baseLayout";

function BookingDashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Header />
        <Searchbar />
      </div>
      <Layout />
    </div>
  );
}

export default BookingDashboard;
