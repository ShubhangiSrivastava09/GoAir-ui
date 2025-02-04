import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HotelIcon from "@mui/icons-material/Hotel";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

import styles from "./header.module.css";

const Header = () => {
  return (
    <AppBar position="static" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <Box display="flex" alignItems="center" gap={1}>
          <Button startIcon={<FlightTakeoffIcon />}>Flights</Button>
          <Button startIcon={<HotelIcon />}>Hotels</Button>
          <Button startIcon={<TrainIcon />}>Trains</Button>
          <Button startIcon={<DirectionsCarIcon />}>Cabs</Button>
          <Button startIcon={<DirectionsBusIcon />}>Bus</Button>
          <Button startIcon={<CurrencyExchangeIcon />}>Forex</Button>
          <Button startIcon={<HealthAndSafetyIcon />}>Insurance</Button>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <Button
            variant="text"
            className={styles.booking}
            startIcon={<BusinessCenterIcon />}
          >
            Manage Booking
          </Button>
          <Button variant="contained" color="primary">
            Login / Signup
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
