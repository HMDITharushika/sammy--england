import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import Spices from "./Spices";
import Services from "./Services";
import TestimonialCarousel from "./TestimonialCarousel";
import Form from "./Form";
// import { Analytics } from "@vercel/analytics/react";

const Home = () => {
  return (
    <main className="overflow-y-hidden text-neutral-950 antialiased">
      <HeroSection />
      
      <AboutUs />
      <Spices />
      <Services />
      <TestimonialCarousel />
      <Form />
      {/* <Analytics /> */}
    </main>
  );
};

export default Home;
