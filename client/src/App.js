// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index.css";
// import Home from "./pages/Home";
// // import { Toaster } from "react-hot-toast";
// // import ContactForms from "./components/ContactForms";
// import Navbar from "./components/Navbar";
// // import Hero from "./components/Hero";
// // import Gallery from "./components/Gallery";
// // import Team from "./components/Team";
// // import Pricing from "./components/Pricing";
// // import CallToAction from "./components/CallToAction";
// // import Testimonials from "./components/Testimonials";
// // import Partners from "./components/Partners";
// // import FAQ from "./components/FAQ";
// import ProjectList from "./pages/ProjectList";
// import ProjectsDetails from "./pages/ProjectDetails";
// import Footer from "./components/Footer";
// import Project from "./pages/Project";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="./pages/ProjectList.js" element={<Project />} />
//         <Route path="./pages/ProjectList.js" element={<ProjectList />} />
//         <Route path="./pages/ProjectDetails.js" element={<ProjectsDetails />} />
//       </Routes>
//       <Footer />
//     </Router>
//     // <div>
//     //   <Toaster position="top-center" />

//     //   <Navbar />
//     //   <Hero />
//     //   <Gallery />
//     //   <Team />
//     //   <Pricing />
//     //   <CallToAction />
//     //   <ProjectList/>
//     //   <Testimonials />
//     //   <Partners />
//     //   <FAQ />

//     //   {/* <ContactForm /> */}
//     //   <ContactForms />
//     //   <Footer />
//     // </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProjectList from "./components/ProjectList";
import ProjectsDetails from "./components/ProjectDetails";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import { Toaster } from "react-hot-toast";
import Gallery from "./pages/Gallery";
import LatestProductDetails from "./components/LatestProductDetails";
import ChatBot from "./components/ChatBot";


function App() {
  return (
    <Router>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/latestproductdetails/:id"
          element={<LatestProductDetails />}
        />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/product" element={<ProjectList />} />
        <Route path="/projectdetails/:id" element={<ProjectsDetails />} />
      </Routes>
      <ChatBot />
      <Footer />
    </Router>
  );
}

export default App;
