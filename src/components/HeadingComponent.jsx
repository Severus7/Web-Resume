import React from "react";
import { Typography } from "@mui/material";

const HeadingComponent = (props) => {
  return (
    <Typography
      color="secondary"
      variant="h3"
      component="h3"
      sx={props.sx}
      gutterBottom
    >
      {props.heading}
    </Typography>
  );
};

export default HeadingComponent;
