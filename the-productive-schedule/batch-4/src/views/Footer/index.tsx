import {
  Box,
  Container,
  Grid,
  Link,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

function Footer() {
  return (
    <Box bgcolor="black" padding="4.5rem 0px">
      <Container>
        <Stack gap={3}>
          <Link href="" variant="body1" fontWeight={500}>
            Questions? Call 1-800-012-298
          </Link>
          <Grid container>
            <Grid item xs={3}>
              <Stack gap={2}>
                <Link href="" variant="body2">
                  FAQ
                </Link>
                <Link href="" variant="body2">
                  Investor Relations
                </Link>
                <Link href="" variant="body2">
                  Ways to Watch
                </Link>
                <Link href="" variant="body2">
                  Corporate Information
                </Link>
                <Link href="" variant="body2">
                  Only on Netflix
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack gap={2}>
                <Link href="" variant="body2">
                  Help Center
                </Link>
                <Link href="" variant="body2">
                  Jobs
                </Link>
                <Link href="" variant="body2">
                  Terms of Use
                </Link>
                <Link href="" variant="body2">
                  Contact Us
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack gap={2}>
                <Link href="" variant="body2">
                  Account
                </Link>
                <Link href="" variant="body2">
                  Redeem Gift Cards
                </Link>
                <Link href="" variant="body2">
                  Privacy
                </Link>
                <Link href="" variant="body2">
                  Speed Test
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack gap={2}>
                <Link href="" variant="body2">
                  Media Center
                </Link>
                <Link href="" variant="body2">
                  Buy Gift Cards
                </Link>
                <Link href="" variant="body2">
                  Cookie Preferences
                </Link>
                <Link href="" variant="body2">
                  Legal Notices
                </Link>
              </Stack>
            </Grid>
          </Grid>
          <Box>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="english"
            >
              <MenuItem value="english">English</MenuItem>
              <MenuItem value="thai">Thai</MenuItem>
            </Select>
          </Box>
          <Typography variant="body2" color="lightgray">
            Netflix Thailand
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
