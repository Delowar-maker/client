import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointmentBg.png";
import { Button, Typography } from "@mui/material";

const appointmentBanner = {
  background: `url(${bg})`,
  marginTop: 175,
  // backgroundPosition: "cover",
  backgroundColor: "rgba(45, 58, 74, 0.8)",
  backgroundBlendMode: "darken, luminosity",
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: 400, marginTop: "-110px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ mb: 5 }}
              style={{ color: "#5CE7ED" }}
            >
              Appointment
            </Typography>
            <Typography style={{ color: "white" }} variant="h4">
              Make an Appointment Today
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 5 }}
              style={{ color: "white", fontSize: 14, fontWeight: 300 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              repudiandae architecto amet tempora facere atque, ab numquam
              dolores. Quod, tempore.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>
              LEARN MORE
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
