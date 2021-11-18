import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Appoinments = ({date}) => {
  const { currentUser } = useAuth();
  const [appoinments, setAppoinments] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dry-mesa-73416.herokuapp.com/appoinments?email=${currentUser?.email}&date=${date.toLocaleDateString()}`)
      .then((res) => {
        setAppoinments(res.data);
      });
  }, [date]);
  return (
    <>
      <h2>Appoinments : {appoinments.length}</h2>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">Patient Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Time</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appoinments.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.patient_name}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.time}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{
                row.payment ? "Paid" : 
                <Button variant="contained" component={Link} to={`/dashboard/payment/${row._id}`}>
                  Pay
                </Button>
                }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Appoinments;
