import CarouselSlideshow from "../Modules/Carousel";
import Description from "../Modules/Description";
import Footer from "../Modules/Footer";
import Hero from "../Modules/Hero";
import HowItWorks from "../Modules/HowItWorks";
import Reviews from "../Modules/Reviews";

const Home = () => {
  return (
    <>
      <div className="section">
        <CarouselSlideshow />
      </div>
      <div className="section-bottom">
        <Hero />
        <Description />
        <HowItWorks />
        <Reviews />
        <Footer />
      </div>
    </>
  );
};

export default Home;
