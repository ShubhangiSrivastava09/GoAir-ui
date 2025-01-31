import React from "react";
import { Box, Typography } from "@mui/material";
import FlightCard from "../flightCard/flightCard";

const flights = [
  {
    airlineLogo:
      "https://w7.pngwing.com/pngs/773/201/png-transparent-airplane-aircraft-flight-logo-airplane-blue-logo-flight-thumbnail.png",
    airlineName: "Go First",
    departure: "DEL",
    arrival: "BOM",
    price: "250",
  },
  {
    airlineLogo:
      "https://w7.pngwing.com/pngs/773/201/png-transparent-airplane-aircraft-flight-logo-airplane-blue-logo-flight-thumbnail.png",
    airlineName: "Go First",
    departure: "DXB",
    arrival: "JFK",
    price: "1200",
  },
  {
    airlineLogo:
      "https://w7.pngwing.com/pngs/773/201/png-transparent-airplane-aircraft-flight-logo-airplane-blue-logo-flight-thumbnail.png",
    airlineName: "Go First",
    departure: "DOH",
    arrival: "LHR",
    price: "900",
  },
  {
    airlineLogo:
      "https://w7.pngwing.com/pngs/773/201/png-transparent-airplane-aircraft-flight-logo-airplane-blue-logo-flight-thumbnail.png",
    airlineName: "Go First",
    departure: "DEL",
    arrival: "BOM",
    price: "250",
  },
  {
    airlineLogo:
      "https://w7.pngwing.com/pngs/773/201/png-transparent-airplane-aircraft-flight-logo-airplane-blue-logo-flight-thumbnail.png",
    airlineName: "Go First",
    departure: "DXB",
    arrival: "JFK",
    price: "1200",
  },
  {
    airlineLogo:
      "https://w7.pngwing.com/pngs/773/201/png-transparent-airplane-aircraft-flight-logo-airplane-blue-logo-flight-thumbnail.png",
    airlineName: "Go First",
    departure: "DOH",
    arrival: "LHR",
    price: "900",
  },
];

const FlightList = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2} p={2} width="100%">
      <Typography
        sx={{ textAlign: "left", fontWeight: "700", fontSize: "16px" }}
      >
        Go first airlines popular domestic routes
      </Typography>
      {flights.map((flight, index) => (
        <FlightCard key={index} {...flight} />
      ))}
    </Box>
  );
};

export default FlightList;
