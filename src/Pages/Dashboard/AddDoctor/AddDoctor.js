import React, { useState } from "react";
import { Button, TextField, Input } from "@mui/material";
import axios from 'axios';

const AddDoctor = () => {
  const [inputValue, setInputValue] = useState({});
  const [image, setImage] = useState(null);

  const {name, email} = inputValue;
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!image){
        return;
    }
    const formData = new FormData();
    formData.append ("name", name)
    formData.append("email", email)
    formData.append("image", image)
    axios.post(`http://localhost:5000/doctors`, formData)
    .then(res => {
      if(res.data.acknowledged){
        alert("doctors added successfully")
      }
    })
  };

  return (
    <>
      <h2>Add Doctors</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="name"
          type="text"
          name="name"
          required
          onChange={handleInput}
          sx={{ width: "50%" }}
          variant="standard"
        />
        <br />
        <TextField
          label="Email"
          type="email"
          name="email"
          required
          onChange={handleInput}
          sx={{ width: "50%" }}
          variant="standard"
        />
        <br />
        <Input
          accept="image/*"
          name="image"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </>
  );
};

export default AddDoctor;
