import React, {useState} from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonics",
    time: "08:00 AM - 08:00 PM",
    space: 10,
    price:50,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "10:00 AM - 06:00 PM",
    space: 34,
    price:50,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "09:00 AM - 12:00 PM",
    space: 14,
    price:50,
  },
  {
    id: 4,
    name: "Teeth Orthodonics",
    time: "08:00 AM - 08:00 PM",
    space: 10,
    price:50,
  },
  {
    id: 5,
    name: "Cavity Protection",
    time: "07:00 AM - 05:00 PM",
    space: 15,
    price:50,
  },
  {
    id: 6,
    name: "Teeth Orthodonics",
    time: "08:00 AM - 08:00 PM",
    space: 10,
    price:50,
  },
];
const AvailableAppointment = ({ date }) => {
  const [bookingSuccessfull, setBookingSuccessfull] = useState(false)
  return (
    <Container sx={{my:3}}>
    <Typography variant="h4" color="primary" Align="center" sx={{my:3}}>Available Appointment on {date.toDateString()}</Typography>
    {bookingSuccessfull && <Alert severity="success">Appoinment Booking Success full</Alert>}
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking booking={booking} setBookingSuccessfull={setBookingSuccessfull}  date={date}></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
