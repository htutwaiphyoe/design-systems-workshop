import { Grid, Stack, Typography } from "@mui/material";

function Watch() {
  return (
    <Grid
      container
      padding="4.5rem 0px"
      justifyContent="center"
      alignItems="center"
      bgcolor="black"
      gap={5}
    >
      <Grid item xs={3.4}>
        <Stack gap={2}>
          <Typography
            variant="h3"
            component="h1"
            color="white"
            fontWeight="900"
          >
            Watch everywhere
          </Typography>
          <Typography variant="h5" component="p" color="white" fontWeight="500">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={2.5}></Grid>
    </Grid>
  );
}

export default Watch;
