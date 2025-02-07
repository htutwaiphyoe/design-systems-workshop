import { PaletteOptions } from "@mui/material";
import colors from "../styles/colors.module.scss";

const palette: PaletteOptions = {
  primary: {
    main: colors.red,
  },
  error: {
    main: colors.red,
  },
  secondary: {
    main: colors.lightGray,
  },
  success: {
    main: colors.green,
  },
  text: {
    primary: colors.white,
    secondary: colors.lightGray,
  },
  background: {
    default: colors.black,
    paper: colors.darkGray,
  },
  divider: colors.darkerGray,
};

export default palette;
