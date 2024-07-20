import { Box, Divider } from "@mui/material";
import Hero from "../views/Hero";
import Movie from "../views/Movie";
import Download from "../views/Download";
import Watch from "../views/Watch";
import Kids from "../views/Kids";
import Faqs from "../views/Faqs";
import Footer from "../views/Footer";

function HomePage() {
  return (
    <Box component="main">
      <Hero />
      <Divider />
      <Movie />
      <Divider />
      <Download />
      <Divider />
      <Watch />
      <Divider />
      <Kids />
      <Divider />
      <Faqs />
      <Divider />
      <Footer />
    </Box>
  );
}

export default HomePage;
