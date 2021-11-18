import React from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import BookingModal from "../BookingModal/BookingModal";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
  globalColor:{
    color:"black"
  }
})

const Booking = ({ booking, date, setBookingSuccessfull }) => {
  const classes = useStyles();
  const [bookingOpen, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);

  const { name, time, space, price } = booking;
  return (
    <>
      <Grid item xs={12} sm={6} md={4} align="center">
        <Paper sx={{ p: 4 }} elevation={2}>
          <Typography variant="h5" className={classes.globalColor} sx={{ mb: 1 }}>
            {name}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", fontWeight: "600" }}
          >
            {time}
          </Typography>
          <Typography variant="subtitle2" color="initial" sx={{ mb: 1 }}>
            Price $ {price}
          </Typography>
          <Typography variant="subtitle2" color="initial" sx={{ mb: 1 }}>
            {space} SPACE AVALIABLE
          </Typography>
          <Button
          fullwidth
          size="large"
          variant="contained"
          color="secondary"
          onClick={handleBookingOpen}
          >
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal
      setBookingSuccessfull={setBookingSuccessfull}
        date={date}
        booking={booking}
        bookingOpen={bookingOpen}
        price={price}
        handleBookingClose={handleBookingClose}
      >
      </BookingModal>
    </>
  );
};

export default Booking;
