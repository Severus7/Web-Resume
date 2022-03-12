import React from "react";
import { Grid, Typography } from "@mui/material";

const SeminarComponent = (props) => {
  return (
    <Grid item>
      <Typography
        variant="h5"
        component="h5"
        color="secondary"
        sx={{ fontWeight: 100 }}
        gutterBottom
      >
        {props.seminar}
      </Typography>
    </Grid>
  );
};

export default SeminarComponent;
