import React from "react";
import BackGroundVideo from "../assets/backgroundVideo.mp4";
const Hero = () => {
  return (
    <section
      data-bs-version="5.1"
      className="header18 cid-uuGhZ4ZLJm mbr-fullscreen"
    >
      <div className="mbr-overlay opacity-90">
        <video autoplay="{true}" loop muted src={BackGroundVideo}></video>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="content-wrap col-12 col-md-12">
            <h1 className="mbr-section-title mbr-fonts-style mbr-white mb-4 text-7xl">
              <strong>AI Awesomeness</strong>
            </h1>
            <p className="mbr-fonts-style mbr-text mbr-white mb-4 display-7">
              Transforming the digital workplace with cutting-edge AI solutions!
            </p>
            <div className="mbr-section-btn">
              <a className="btn btn-primary display-7" href="/">
                Join Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
