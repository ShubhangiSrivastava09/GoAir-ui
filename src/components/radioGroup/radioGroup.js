import React from "react";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";

import styles from "./radioGroup.module.css";

const tripType = [
  { id: 1, trip: "ONE WAY TRIP" },
  { id: 2, trip: "ROUND TRIP" },
];

function RadioGroup() {
  return (
    <Box className={styles.headContainer}>
      {tripType &&
        tripType.map((el) => (
          <Box key={el.id} className={styles.radioContainer}>
            <Radio
              className={styles.radioButton}
              value="one way trip"
              name="radio-buttons"
              size="small"
              inputProps={{ "aria-label": `${el.trip}` }}
            />
            <Typography className={styles.label}>{el.trip}</Typography>
          </Box>
        ))}
    </Box>
  );
}

export default RadioGroup;
