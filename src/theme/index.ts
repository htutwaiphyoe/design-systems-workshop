import { Theme, createTheme } from "@mui/material/styles";
import typography from "./typography";
import components from "./components";
import palette from "./palette";

const theme: Theme = createTheme({
  direction: "ltr",
  palette,
  typography,
  components,
});

export default theme;
