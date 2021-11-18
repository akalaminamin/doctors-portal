import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ handleBookingClose, bookingOpen, booking, date, setBookingSuccessfull, price }) => {
  const { name, time } = booking;
  const { currentUser } = useAuth();
  const [bookingInfo, setBookingInfo] = useState({
    patient_name: currentUser?.displayName,
    email: currentUser?.email,
    phone_number: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo({ ...bookingInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    // collect data
    const appoinment = {
      ...bookingInfo,
      serviceType: name,
      time,
      price,
      date: date.toLocaleDateString()
    };  

    // send data in server
    axios.post('https://dry-mesa-73416.herokuapp.com/appoinments', appoinment)
      .then(res => {
        if(res.data.acknowledged){
          setBookingSuccessfull(true)
          handleBookingClose();
        }
      })

    e.preventDefault();

  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={bookingOpen}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={bookingOpen}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                disabled
                id="outlined-size-small"
                size="small"
                sx={{ my: 1, width: "95%" }}
                defaultValue={time}
              />
              <TextField
                id="outlined-size-small"
                size="small"
                onBlur={handleChange}
                name="patient_name"
                sx={{ my: 1, width: "95%" }}
                defaultValue={currentUser?.displayName}
              />
              <TextField
                id="outlined-size-small"
                size="small"
                onBlur={handleChange}
                name="phone_number"
                sx={{ my: 1, width: "95%" }}
                placeholder="Phone Number"
              />
              <TextField
                id="outlined-size-small"
                size="small"
                onBlur={handleChange}
                name="email"
                sx={{ my: 1, width: "95%" }}
                defaultValue={currentUser?.email}
              />
              <TextField
                disabled
                id="outlined-size-small"
                size="small"
                sx={{ my: 1, width: "95%" }}
                defaultValue={date.toDateString()}
              />
              <Button type="submit" variant="contained" color="primary">
                SEND
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default BookingModal;
