import {
  AppBar,
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Toolbar,
} from "@mui/material";
import { Logo } from "../assets/icons";

function Navigation() {
  return (
    <AppBar
      position="static"
      variant="outlined"
      color="transparent"
      sx={{ border: "none", padding: "16px 0" }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Logo />
          </Box>
          <Stack gap={3} direction="row">
            <FormControl>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value="english"
              >
                <MenuItem value="english">English</MenuItem>
                <MenuItem value="thai">Thai</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained">Sign In</Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;
