import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Service({ service }) {
  const { img, name, description } = service;
  return (
    <Card sx={{ maxWidth: 345, boxShadow:0, }}>
      <CardMedia
        sx={{ width: "25%" }}
        component="img"
        style={{width:"auto", height:"80px", margin:"0 auto"}}
        image={img}
        alt="doctors img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
