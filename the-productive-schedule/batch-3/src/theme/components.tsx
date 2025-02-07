import { Components } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import palette from "./palette";

const components: Components = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        fontWeight: "bold",
        borderRadius: "4px",
        textTransform: "none",
      },
      disabled: {
        cursor: "not-allowed",
      },
      text: {
        padding: "0px",
        display: "block",
        minWidth: "0px",
        borderRadius: "0px",
      },
    },
  },
  MuiSelect: {
    defaultProps: {
      variant: "outlined",
      color: "primary",
    },
    styleOverrides: {
      root: {
        backgroundColor: "transparent",
        border: "1px solid",
        borderColor: palette.text?.primary,
        borderRadius: "4px",
        color: palette.text?.primary,
      },
      select: {
        padding: "7px 24px",
      },
      icon: {
        color: palette.text?.primary,
      },
    },
  },

  MuiTextField: {
    styleOverrides: {
      root: {
        border: "1px solid",
        borderColor: palette.divider,
        borderRadius: "4px",
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        color: palette.text?.primary,
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        backgroundColor: palette.divider,
        height: "8px",
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        backgroundColor: palette.background?.paper,
        color: palette.text?.primary,
        fontWeight: "bold",
        fontSize: "1.5rem",
        padding: "1rem",
      },
    },
  },
  MuiAccordionSummary: {
    defaultProps: {
      expandIcon: <AddIcon sx={{ color: palette.text?.primary }} />,
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        borderTop: "1px solid",
        borderColor: palette.background?.default,
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        color: palette.text?.secondary,
        textDecorationColor: "inherit",
      },
    },
  },
};

export default components;
