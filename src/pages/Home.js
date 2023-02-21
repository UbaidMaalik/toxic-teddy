import React from "react";
import Banner from "../component/banner/Banner";
import Cards from "../component/card/Cards";
import SiteSlider from "../component/crousel/SiteSlider";
import Faqs from "../component/faq/Faqs";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
import RoadMap from "../component/roadmap/RoadMap";
import StoryOfTeddy from "../component/story/StoryOfTeddy";
import Team from "../component/team/Team";
import Utilities from "../component/utilities/Utilities";
import Welcome from "../component/welcome/Welcome";

const Home = () => {
  return (
    <div>
      <Header />
      <div
        className="container-fluid"
        style={{
          backgroundImage: "url(/images/bannerBg.png)",
        }}
      >
        <Banner />
        <Welcome />
        <StoryOfTeddy />
      </div>
      <Utilities />
      <Cards />
      <RoadMap />
      <SiteSlider />
      <Faqs />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
