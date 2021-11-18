import React from "react";
import { Grid, Container } from "@mui/material";
import chair from "../../../images/chair.png";
import Calender from "../../Shared/Calender/Calender";

const AppointmentHeader = ({date, setDate}) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={chair} style={{ width: "100%" }} alt="chair img" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppointmentHeader;
