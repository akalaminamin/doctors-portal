import * as React from "react";
import Grid from '@mui/material/Grid'
import Calender from "../../Shared/Calender/Calender"
import Appoinments from "../Appoinments/Appoinments"
const DashboardHome = () => {
const [date, setDate] = React.useState(new Date());
  return (
    <Grid container>
      <Grid item sx={12} sm={12} md={5}>
        <Calender date={date} setDate={setDate} />
      </Grid>
      <Grid item sx={12} sm={12} md={7}>
        <Appoinments date={date} />
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
