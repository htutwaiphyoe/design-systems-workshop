import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Faqs() {
  return (
    <Box bgcolor="black" padding="4.5rem 0px">
      <Container>
        <Stack gap={1} justifyContent="center" mb={5}>
          <Typography
            variant="h3"
            mb={2}
            color="white"
            textAlign="center"
            fontWeight="bolder"
          >
            Frequently Asked Questions
          </Typography>
          <Accordion>
            <AccordionSummary aria-controls="panel1-content" id="panel1-header">
              What is Netflix?
            </AccordionSummary>
            <AccordionDetails>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want without a single commercial – all for
              one low monthly price. There's always something new to discover
              and new TV shows and movies are added every week!
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary aria-controls="panel2-content" id="panel2-header">
              How much does Netflix cost?
            </AccordionSummary>
            <AccordionDetails>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              THB 99 to THB 419 a month. No extra costs, no contracts.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary aria-controls="panel3-content" id="panel3-header">
              Where can I watch?
            </AccordionSummary>
            <AccordionDetails>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. You can also download your
              favorite shows with the iOS or Android app. Use downloads to watch
              while you're on the go and without an internet connection. Take
              Netflix with you anywhere.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary aria-controls="panel3-content" id="panel3-header">
              How do I cancel?
            </AccordionSummary>
            <AccordionDetails>
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary aria-controls="panel3-content" id="panel3-header">
              What can I watch on Netflix?
            </AccordionSummary>
            <AccordionDetails>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary aria-controls="panel3-content" id="panel3-header">
              Is Netflix good for kids?
            </AccordionSummary>
            <AccordionDetails>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              movies in their own space. Kids profiles come with PIN-protected
              parental controls that let you restrict the maturity rating of
              content kids can watch and block specific titles you don’t want
              kids to see.
            </AccordionDetails>
          </Accordion>
        </Stack>
        <Typography
          variant="h6"
          component="p"
          color="white"
          fontWeight="500"
          textAlign="center"
          mb={2}
        >
          Ready to watch? Enter your email to create or restart your membership.
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item xs={4}>
            <TextField
              fullWidth
              placeholder="Email address"
              variant="outlined"
              color="secondary"
            />
          </Grid>
          <Grid item xs={2.3}>
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
      </Container>
    </Box>
  );
}

export default Faqs;
