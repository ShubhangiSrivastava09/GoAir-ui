import React from "react";
import { Box, Typography, Button } from "@mui/material";
import SideCards from "../sideCards/sideCards";
import AirplanemodeActiveSharpIcon from "@mui/icons-material/AirplanemodeActiveSharp";

import styles from "./sideNav.module.css";

const SideNav = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2} p={2} width="100%">
      <SideCards image="https://www.shutterstock.com/image-photo/white-passenger-airplane-flying-sky-600nw-2331577059.jpg">
        <Box className={styles.offerContianer}>
          <Box className={styles.offerDetails}>
            <Typography
              className={styles.heading}
              variant="subtitle1"
              fontWeight="bold"
            >
              Tap to get up to 30% discount
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Valid till: Limited period Offers
            </Typography>
          </Box>
          <Box>
            <Button
              className={styles.button}
              variant="contained"
              color="warning"
              size="small"
            >
              View Details
            </Button>
          </Box>
        </Box>
      </SideCards>

      <SideCards>
        <Box className={styles.contactCard}>
          <Box className={styles.cardTitle}>
            <AirplanemodeActiveSharpIcon />
            <Typography
              className={styles.heading}
              variant="subtitle1"
              fontWeight="bold"
            >
              Go first Contact information
            </Typography>
          </Box>
        </Box>
        <Box className={styles.detailsContainer}>
          <Box sx={{ width: "50%" }}>
            <Typography variant="body2" color="text.secondary">
              Airline Email:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone Number:
            </Typography>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Typography variant="body2" color="text.secondary">
              gofirst@goairin
            </Typography>
            <Typography variant="body2" color="text.secondary">
              092-2322-2111
            </Typography>
          </Box>
        </Box>
      </SideCards>
    </Box>
  );
};

export default SideNav;
