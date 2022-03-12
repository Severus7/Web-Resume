import React from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  Icon,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item>
              <PhoneIcon color="secondary" />
            </Grid>
            <Grid item>
              <Typography color="secondary">+63 9616045340</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item>
              <EmailIcon color="secondary" />
            </Grid>
            <Grid item>
              <Typography color="secondary">joshuasapz@gmail.com</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item>
              <LinkedInIcon color="secondary" />
            </Grid>
            <Grid item>
              <Link
                color="secondary"
                href="https://www.linkedin.com/in/joshua-sapalaran/"
                sx={{ typography: "body1", textDecoration: "none" }}
              >
                linkedin.com/in/joshua-sapalaran/
              </Link>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item>
              <GitHubIcon color="secondary" />
            </Grid>
            <Grid item>
              <Link
                color="secondary"
                href="https://www.github.com/Severus7"
                sx={{ typography: "body1", textDecoration: "none" }}
              >
                github.com/Severus7
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
