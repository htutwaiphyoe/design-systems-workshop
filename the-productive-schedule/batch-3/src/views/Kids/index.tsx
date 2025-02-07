import { Grid, Stack, Typography } from "@mui/material";

function Kids() {
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
          src="https://occ-0-2340-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
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
            Create profiles for kids
          </Typography>
          <Typography variant="h5" component="p" color="white" fontWeight="500">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Kids;
