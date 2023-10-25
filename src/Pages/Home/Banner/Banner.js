import React from "react";
import chair from "../../../images/chair.png";
import bg from "../../../images/chairBg.png";
import Grid from "@mui/material/Grid";
import { Box, Button, Container, Typography } from "@mui/material";

const bannerBg = {
  background: `url(${bg})`,
  // backgroundSize: "cover",
  backgroundSize: "100% 100%",
};

const varticalCenter = {
  display: "flex",
  alignItems: "center",
  height: "500px",
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          style={{ ...varticalCenter, textAlign: "left" }}
          item
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Start Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 3, fontSize: 13, fontWeight: 300, color: "gray" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              adipisci reiciendis ipsa sequi voluptatem laudantium. Enim dicta
              est aut veritatis?
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid style={varticalCenter} item xs={12} md={6}>
          <img style={{ width: "500px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
