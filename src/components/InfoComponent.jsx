import React from "react";
import { Typography } from "@mui/material";

const InfoComponent = (props) => {
  return (
    <>
      <Typography
        color="secondary"
        component="h4"
        sx={{ fontSize: "36px" }}
        gutterBottom
      >
        {props.work}
      </Typography>
      <Typography
        color="secondary"
        variant="body1"
        component="p"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        {props.date}
      </Typography>
      <Typography
        color="secondary"
        variant="h5"
        component="p"
        sx={{ fontWeight: 100, fontStyle: "italic" }}
      >
        {props.position}
      </Typography>
    </>
  );
};

export default InfoComponent;
