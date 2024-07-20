import { Grid, Stack, Typography } from "@mui/material";

function Download() {
  return (
    <Grid
      container
      padding="4.5rem 0px"
      justifyContent="center"
      alignItems="center"
      bgcolor="black"
      gap={5}
    >
      <Grid item xs={4.5}>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt=""
        />
      </Grid>
      <Grid item xs={4.5}>
        <Stack gap={2}>
          <Typography
            variant="h3"
            component="h1"
            color="white"
            fontWeight="900"
          >
            Download your shows to watch offline
          </Typography>
          <Typography variant="h5" component="p" color="white" fontWeight="500">
            Save your favorites easily and always have something to watch.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Download;
