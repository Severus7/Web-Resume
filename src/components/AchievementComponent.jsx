import React from "react";
import { Grid, Typography } from "@mui/material";

const AchievementComponent = (props) => {
  return (
    <Grid item>
      <Typography variant="h4" component="h4" color="secondary" gutterBottom>
        {props.title}
      </Typography>
      <Typography
        variant="h6"
        color="secondary"
        sx={{ fontWeight: 100, fontStyle: "italic" }}
        gutterBottom
      >
        {props.date}
      </Typography>
      <Typography variant="h5" color="secondary" gutterBottom>
        {props.award}
      </Typography>
    </Grid>
  );
};

export default AchievementComponent;
