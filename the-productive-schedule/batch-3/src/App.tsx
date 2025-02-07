import { CssBaseline, ThemeProvider } from "@mui/material";
import HomePage from "./pages/Home";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
