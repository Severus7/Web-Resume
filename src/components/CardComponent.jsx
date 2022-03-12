import React from "react";
import { Card, CardMedia } from "@mui/material";

const CardComponent = (props) => {
  return (
    <Card
      sx={{
        width: "223px",
        height: "223px",
        padding: "5px",
        borderRadius: "28px",
      }}
    >
      <CardMedia
        component="img"
        height="100%"
        image={props.image}
        alt={props.alt}
      />
    </Card>
  );
};

export default CardComponent;
