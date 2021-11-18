import React, { useState } from "react";
import { Box, TextField, Button, Paper } from "@mui/material";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { token } = useAuth();
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    const user = { email };

    axios
      .put("http://localhost:5000/users/admin", user, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res));
    e.preventDefault();
  };

  return (
    <Paper
      component={Box}
      p={3}
      sx={{
        width: 500,
        mx: "auto",
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          sx={{ mt: 2 }}
        >
          Make Admin
        </Button>
      </form>
    </Paper>
  );
};

export default MakeAdmin;
