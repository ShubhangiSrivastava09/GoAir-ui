import React from "react";
import { Box, Card, CardContent, CardMedia } from "@mui/material";

import styles from "./sideCards.module.css";

const SideCards = ({ image, children }) => {
  return (
    <Card className={styles.container}>
      {image && (
        <CardMedia
          className={styles.img}
          component="img"
          image={image}
          alt="SideCards Image"
        />
      )}

      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default SideCards;
