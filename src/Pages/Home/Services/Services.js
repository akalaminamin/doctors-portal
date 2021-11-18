import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import treatMent from "../../../images/cavity.png";
import fluoride from "../../../images/fluoride.png";
import whitening from "../../../images/whitening.png";
import Service from "../Service/Service.js";
import Typography from "@mui/material/Typography";

const services = [
  {
    name: "Treatment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae minima velit blanditiis eaque cumque ullam corporis eius ipsam",
    img: treatMent,
  },
  {
    name: "Cavity Filling",
    description:
      "dignissimos deleniti laudantium vol uptatibus sapiente distinctio deserunt? Cupiditate cumque adipisci inventore, amet fugit reprehenderit dicta.",
    img: fluoride,
  },
  {
    name: "Teeth whiteing ",
    description:
      "Nemo, odit earum natus atque tenetur tempore. Beatae obcaecati nesciunt fugiat ea sint odio, aut cumque culpa quisquam corrupti",
    img: whitening,
  },
];

function Services() {
  return (
    <Container style={{paddingTop: "50px"}}>
      <Box sx={{ flexGrow: 1, textAlign:"center" }}>
        <Typography variant="h6" align="center" style={{ sx: "primary", color:"#5CC6C6 " }} gutterBottom>
          OUR SERVICES
        </Typography>
        <Typography variant="h4" color="initial" sx={{fontWeight:"500", mb:3}}  align="center" gutterBottom>
          Service We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3}}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service, index) => (
            <Grid item xs={12} sm={12} md={4} key={index}>
              <Service service={service}></Service>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Services;
