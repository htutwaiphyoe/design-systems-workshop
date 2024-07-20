import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Navigation from "../../components/Navigation";

function Hero() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.865), rgba(0, 0, 0, 0.475),rgba(0, 0, 0, 0.73)), url('https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/4e962cee-32f2-4250-9df9-d4dac6677e6f/TH-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_527d9111-c56c-48d6-b6ad-043ccba4d8b5_large.jpg') no-repeat;",
        backgroundPosition: "top top",
        backgroundSize: "cover",
      }}
    >
      <Navigation />
      <Stack
        gap={2}
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <Typography variant="h3" component="h1" color="white" fontWeight="900">
          Unlimited movies, TV shows, and more
        </Typography>
        <Typography variant="h5" component="p" color="white" fontWeight="500">
          Watch anywhere. Cancel anytime.
        </Typography>
        <Typography variant="h6" component="p" color="white" fontWeight="500">
          Ready to watch? Enter your email to create or restart your membership.
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item xs={3}>
            <TextField
              fullWidth
              placeholder="Email address"
              variant="outlined"
              color="secondary"
            />
          </Grid>
          <Grid item xs={1.8}>
            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{ fontSize: "24px" }}
              endIcon={<ArrowForwardIosIcon />}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default Hero;
