import React from "react";
import { Typography, Card, Box } from "@mui/material";

import styles from "./aboutGOAir.module.css";

function AboutGoAir() {
  return (
    <Card className={styles.container}>
      <Box>
        <Typography variant="h5" sx={{ textAlign: "left", fontWeight: "700" }}>
          Go First Flights
        </Typography>
        <Typography sx={{ textAlign: "left" }}>
          {" "}
          GoAir, earlier known as Go First is a business unit owned by The Wadia
          Group and was established in the year 2005. GoAir is also one of the
          popular pocket friendly airlines in India that offers cheaper air
          fares to domestic and international travellers. The airlines has
          always been in the forefront to adapt latest technologies that keeps
          their flight fleet ahead of the competition. Their technologically
          advanced features and services provides customers with the best
          onboard experience
        </Typography>
      </Box>
    </Card>
  );
}

export default AboutGoAir;
