import {
  Grid,
  Paper,
  Box,
  TextField,
  Container,
  Button,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import loginImg from "../../images/login.png";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [user, setUser] = useState({});
  const { email, password, name } = user;
  console.log(name)
  const { createNewAccount, setAuthError, authError, isLoading, currentUser } =
    useAuth();
const notify = () => toast.success({authError});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      setAuthError("Password Don't match");
      return;
    }
    createNewAccount(email, password, name);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            component={Box}
            width="65%"
            px={5}
            py={8}
            elevation={5}
            sx={{ color: grey[500] }}
          >
            {!isLoading && (
              <>
                <Typography variant="h4" color="initial" textAlign="center">
                  Register
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                  <TextField
                    onChange={handleChange}
                    name="name"
                    fullWidth
                    label="User name"
                    variant="standard"
                    type="text"
                    required
                    margin="normal"
                  />
                  <TextField
                    onChange={handleChange}
                    name="email"
                    fullWidth
                    label="Your Email"
                    variant="standard"
                    type="email"
                    required
                    margin="normal"
                  />
                  <TextField
                    onChange={handleChange}
                    name="password"
                    fullWidth
                    label="Password"
                    variant="standard"
                    required
                    type="password"
                    margin="normal"
                  />
                  <TextField
                    onChange={handleChange}
                    name="confirmPassword"
                    fullWidth
                    label="Confirm Password"
                    variant="standard"
                    required
                    type="password"
                    margin="normal"
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    fullWidth
                    sx={{ mt: 3 }}
                    onClick={notify}
                  >
                    Create an Account
                  </Button>
                  <Button>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/login"
                      fullWidth
                    >
                      <Button>Already have an Account? Login</Button>
                    </Link>
                  </Button>
                </Box>
              </>
            )}
            {isLoading && <CircularProgress />}
            {currentUser?.email ? (
              <Alert severity="success">Account Successfully created</Alert>
            ) : null }
            {authError ? <Alert severity="error">{authError}</Alert> : null}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={loginImg} width="90%" alt="login " />
        </Grid>
      </Grid>
      <ToastContainer />
    </Container>
  );
};

export default Register;
