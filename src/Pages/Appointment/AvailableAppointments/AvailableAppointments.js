import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonies",
    time: "08:00 AM - 09:00 Am",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "09:00 AM - 10:00 Am",
    space: 8,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "10:00 AM - 11:00 Am",
    space: 9,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "6:00 PM - 07:00 PM",
    space: 5,
  },
  {
    id: 5,
    name: "Pediatric Denta",
    time: "08:00 PM - 09:00 PM",
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "08:00 PM - 09:00 PM",
    space: 10,
  },
];

const AvailableAppointments = ({ date }) => {
  return (
    <Container>
      <Typography
        sx={{ color: "info.main", mb: 3, fontWeight: 600 }}
        variant="h4"
      >
        Available Appointments on {date.toDateString()}{" "}
      </Typography>
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking key={booking.id} booking={booking} date={date} />
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointments;
