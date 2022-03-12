import React from "react";
import { Grid, Typography } from "@mui/material";

const AffiliationComponent = (props) => {
  return (
    <Grid container item spacing={20}>
      <Grid item lg={4}>
        <Typography variant="h5" color="secondary" sx={{ fontWeight: 100 }}>
          {props.organization}
        </Typography>
      </Grid>
      <Grid item lg={8}>
        <Typography variant="h5" color="secondary" sx={{ fontWeight: 100 }}>
          {props.position}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AffiliationComponent;
