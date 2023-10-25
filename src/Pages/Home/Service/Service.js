import { Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

const Service = (props) => {
  const { name, discription, img } = props.service;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <CardMedia
        component="img"
        style={{ width: "auto", height: "80px", margin: "0 auto" }}
        image={img}
        alt="green iguana"
      />
      <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {discription}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
