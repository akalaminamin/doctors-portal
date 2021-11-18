import React from "react";
import { Grid, Container, Typography, Button } from "@mui/material";
import banner from "../../../images/chair.png";
import bannerBg from "../../../images/bg.png";

const bannerbg ={
    background:`url(${bannerBg})`,
    height:"450px",
    display:"flex",
    alignItems:"center"
}
const Banner = () => {
  return (
    <Container style={bannerbg} sx={{flexGrow:1}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <Typography variant="h3" color="initial" sx={{fontWeight:"500"}} gutterBottom>Your New smile <br /> Starts Here</Typography>
            <Typography variant="body2" color="gray" style={{lineHeight:"30px", marginBottom:"20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>  Repudiandae eveniet distinctio sequi voluptatem, <br/>  nulla architecto omnis. corrupti quae deserunt</Typography>
            <Button variant="contained" style={{background:"red"}}>
              GET APPOINTMENT
            </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={banner} style={{ width: "500px" }} alt="banner img" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
