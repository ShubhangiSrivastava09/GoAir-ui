import { Button } from "@mui/material";
import React from "react";

import styles from "./customButton.module.css";

function CustomButton({ label }) {
  return (
    <Button
      variant="contained"
      className={styles.buttonBox}
      sx={{ fontSize: "10px" }}
      // onClick={() => handleClick()}
    >
      {label}
    </Button>
  );
}

export default CustomButton;
