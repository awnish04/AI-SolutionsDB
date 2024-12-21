import React from "react";
import { Toaster } from "react-hot-toast";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import CallToAction from "../components/CallToAction";
import TestimonialsCarousel from "../components/Testimonials";
import Partners from "../components/Partners";
import FAQ from "../components/FAQ";

import LatestProducts from "../components/LatestProducts";


const Home = () => {
  return (
    <div>
      <Toaster position="top-center" />
      <Hero />
      
      <Gallery />
      <LatestProducts />
      <CallToAction />
      <TestimonialsCarousel />
      <Partners />
      <FAQ />
    </div>
  );
};

export default Home;
