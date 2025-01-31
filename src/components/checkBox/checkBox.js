import React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";

import styles from "./checkBox.module.css";

const fareTypes = [
  { id: 1, type: "Student" },
  { id: 2, type: "Senior Citizen" },
  { id: 3, type: "Armed Forces" },
  { id: 4, type: "Doctors & Nurses" },
];

const CheckBox = () => {
  return (
    <Box className={styles.headContainer}>
      <Typography className={styles.heading}>FARE TYPE</Typography>
      <Box className={styles.checkBoxContainer}>
        {fareTypes &&
          fareTypes.map((el, i) => (
            <Box key={i} className={styles.checkbox}>
              <Checkbox
                key={el.id}
                inputProps={{ "aria-label": "controlled" }}
                size="small"
                sx={{
                  color: "#FFFFFF",

                  "&.Mui-checked": {
                    color: grey[50],
                  },
                }}
              />
              <Typography sx={{ color: "#FFFFFF" }}>{el.type}</Typography>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default CheckBox;
