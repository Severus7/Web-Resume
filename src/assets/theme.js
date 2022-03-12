import { createTheme } from "@mui/material/styles";

const primaryMain = "#292929";
const secondaryMain = "#FFFFFF";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
    },
  },
});

export default theme;
