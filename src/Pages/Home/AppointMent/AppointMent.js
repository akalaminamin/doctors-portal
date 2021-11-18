import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bg from "../../../images/appointment-bg.png";
import doctor from "../../../images/doctor.png";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button'

const appointMentBg ={
    background:`url(${bg})`,
    marginTop:"100px",
    backgroundColor:"rgba(26, 39, 86, .8)",
    backgroundBlendMode:"darken, luminosity",
    color:"#fff",
    marginBottom:"50px"
}
const AppointMent = () => {
  return (
    <Box style={appointMentBg} sx={{flexGrow:1}}>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
      >
        <Grid item xs={12} md={6}>
          <img src={doctor} alt="appointment bg" style={{ width: "500px", marginTop:'-120px' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" style={{color:"#13E8D1"}} sx={{mb:2}}>
            APPOINTMENT
          </Typography>
          <Typography variant="h3" sx={{mb:2}}>
            Make an appoinment today
          </Typography>
          <Typography variant="body2" style={{marginBottom:"30px", fontSize:"16px", lineHeight:"27px"}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat <br/>
            odit neque corporis ab ipsa iste.
          </Typography>
          <Button variant="contained" style={{background:"#07BFAB"}}>
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointMent;
