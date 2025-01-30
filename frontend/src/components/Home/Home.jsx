import { SwiperComponent } from "./section/Swiper";
import { FeaturedTutors } from "./section/Featured";
import Hero from "./section/Hero";
import { HowItWorks } from "./section/HowItWorks";
import TestimonialSection from "./section/Testimonial";
import ContactUs from "./section/ContactUs";
const Home = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <FeaturedTutors />
      <TestimonialSection />
      <ContactUs />
    </>
  );
};

export default Home;
