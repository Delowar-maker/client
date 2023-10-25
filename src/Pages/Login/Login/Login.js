import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hocks/useAuth";
import login from "../../../images/loginBg.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onsubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              type="password"
              name="password"
              onChange={handleOnChange}
              label="Password"
              variant="standard"
            />

            <Button
              sx={{ width: "75%", m: 1 }}
              variant="contained"
              type="submit"
            >
              Login
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button variant="text">New Uset ? Please Register</Button>
            </NavLink>
          </form>
        </Grid>
        {isLoading && <CircularProgress />}
        {user?.email && (
          <Alert severity="success">
            User Created successfully alert — check it out!
          </Alert>
        )}
        {authError && <Alert severity="error">{authError}</Alert>}
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
///start 3
