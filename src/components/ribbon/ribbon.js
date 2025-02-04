import { Card, Typography, Box } from "@mui/material";
import React from "react";

import styles from "./ribbon.module.css";

function Ribbon() {
  return (
    <Card
      // sx={{
      //   display: "flex",
      //   alignItems: "center",
      //   flexDirection: "column",
      //   boxShadow: 3,
      //   borderRadius: 2,
      //   paddingTop: 1,
      //   paddingBottom: 1,
      //   width: "100%",
      // }}
      className={styles.card}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Typography color="rgb(86, 86, 230)">
          Home → Flights Booking →{"  "}
        </Typography>
        <Typography> Go First Airlines</Typography>
      </Box>
    </Card>
  );
}

export default Ribbon;
