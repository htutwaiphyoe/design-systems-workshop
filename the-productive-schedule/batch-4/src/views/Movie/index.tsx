import { Grid, Stack, Typography } from "@mui/material";

function Movie() {
  return (
    <Grid
      container
      padding="4.5rem 0px"
      justifyContent="center"
      alignItems="center"
      bgcolor="black"
    >
      <Grid item xs={4.5}>
        <Stack gap={2}>
          <Typography
            variant="h3"
            component="h1"
            color="white"
            fontWeight="900"
          >
            Enjoy on your TV
          </Typography>
          <Typography variant="h5" component="p" color="white" fontWeight="500">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={4.5} padding={5}>
        <video
          data-uia="nmhp-card-animation-asset-video"
          autoPlay
          playsInline
          muted
          loop
        >
          <source
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            type="video/mp4"
          />
        </video>
      </Grid>
    </Grid>
  );
}

export default Movie;
