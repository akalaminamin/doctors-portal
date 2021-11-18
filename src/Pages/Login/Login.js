import {
  Grid,
  Paper,
  Box,
  TextField,
  Container,
  Button,
  Typography,
  CircularProgress,
  Alert
} from "@mui/material";
import React, { useState } from "react";
import loginImg from "../../images/login.png";
import { grey } from "@mui/material/colors";
import {Link, useHistory, useLocation} from "react-router-dom"
import useAuth from "../../Hooks/useAuth";
const Login = () => {
  const [user, setUser] = useState({});
  const {email, password} = user;
  const {currentUser, signIn, authError, setAuthError, isLoading, signInWithGoogle} = useAuth();

  const history = useHistory();
  const location = useLocation();
  const handleSubmit = (e) => {
    signIn(email, password, history, location)
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
const handleGoogleSignIn = () =>{
  signInWithGoogle()
}
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
            <Typography variant="h4" color="initial" textAlign="center">
              Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                onChange={handleChange}
                name="email"
                fullWidth
                label="Email Address"
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
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                fullWidth
                sx={{ mt: 3 }}
              >
                Login
              </Button>
              <Button>
                <Link style={{textDecoration:"none"}} to="/register" fullWidth>
                    <Button>Are you new user? Please Register</Button>
                </Link>
              </Button>
              <Button variant="contained" color="primary" sx={{mb:2}} onClick={handleGoogleSignIn}>
                  Google sign In
              </Button>
              {isLoading && <CircularProgress />}
              {currentUser?.email && <Alert severity="success">Login Success full</Alert>}
              {authError && <Alert severity="error">{authError}</Alert>}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={loginImg} width="90%" alt="login " />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
