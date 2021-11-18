import { Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    axios
      .get("https://dry-mesa-73416.herokuapp.com/doctors")
      .then((res) => setDoctors(res.data));
  }, []);
  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>Our Doctors </h2>
      <Grid container spacing={2}>
        {doctors.map((res) => (
          <Grid item xs={12} sm={6} md={4}>
            <img
              src={`data:image/jpeg;base64,${res.images}`}
              style={{ width: "300px", height: "300px" }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Doctors;
