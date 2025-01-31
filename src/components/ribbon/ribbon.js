import { Card, Typography, Box } from "@mui/material";
import React from "react";

function Ribbon() {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        boxShadow: 3,
        borderRadius: 2,
        paddingTop: 1,
        paddingBottom: 1,
        width: "100%",
      }}
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
