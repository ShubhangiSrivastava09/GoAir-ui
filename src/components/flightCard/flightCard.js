import React from "react";
import { Card, Typography, Box, Button } from "@mui/material";

import styles from "./flightCard.module.css";

const FlightCard = ({
  airlineLogo,
  airlineName,
  departure,
  arrival,
  price,
}) => {
  return (
    <Card className={styles.cardContainer}>
      <Box className={styles.contentContainer}>
        <Box className={styles.flightName}>
          <img src={airlineLogo} alt={airlineName} className={styles.img} />
          <Typography variant="subtitle1" fontWeight="bold">
            {airlineName}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: "bold" }}>{departure}</Typography>
        </Box>
        <Typography>----------------------</Typography>
        <Box>
          <Typography sx={{ fontWeight: "bold" }}>{arrival}</Typography>
        </Box>
      </Box>

      <Box textAlign="right" className={styles.price}>
        <Typography variant="h6" fontWeight="bold">
          ₹{price}
        </Typography>
        <Button variant="contained" color="warning" size="small">
          Book Now
        </Button>
      </Box>
    </Card>
  );
};

export default FlightCard;
