import React, { useEffect, useRef } from "react";

const Gallery = () => {
  const gridContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (gridContainerRef.current) {
        const scrollPosition = window.scrollY; // Get the vertical scroll position
        gridContainerRef.current.style.transform = `translateX(-${scrollPosition}px)`; // Move the grid left
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section
        data-bs-version="5.1"
        className="gallery07 cid-uuGhZ4ZBca"
        id="gallery-16-uuGhZ4ZBca"
      >
        <div className="container-fluid gallery-wrapper">
          <div className="row justify-content-center">
            <div className="col-12 content-head">
              <div className="mbr-section-head mb-5">
                <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                  <strong>Our Amazing Projects</strong>
                </h4>
              </div>
            </div>
          </div>
          <div className="grid-container" ref={gridContainerRef}>
            <div
              className="grid-container-3 moving-left"
              style={{ transform: "translate3d(-200px, 0px, 0px)" }}
            >
              <div className="grid-item">
                <img
                  src="https://r.mobirisesite.com/920997/assets/images/photo-1498050108023-c5249f4df085.jpeg"
                  alt="Project 1"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://r.mobirisesite.com/920997/assets/images/photo-1423666639041-f56000c27a9a.jpeg"
                  alt="Project 2"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://r.mobirisesite.com/920997/assets/images/photo-1649972904349-6e44c42644a7.jpeg"
                  alt="Project 3"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://r.mobirisesite.com/920997/assets/images/photo-1434494878577-86c23bcb06b9.jpeg"
                  alt="Project 4"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://r.mobirisesite.com/920997/assets/images/photo-1498050108023-c5249f4df085.jpeg"
                  alt="Project 1"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://r.mobirisesite.com/920997/assets/images/photo-1423666639041-f56000c27a9a.jpeg"
                  alt="Project 2"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://r.mobirisesite.com/920997/assets/images/photo-1649972904349-6e44c42644a7.jpeg"
                  alt="Project 3"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://r.mobirisesite.com/920997/assets/images/photo-1434494878577-86c23bcb06b9.jpeg"
                  alt="Project 4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-bs-version="5.1"
        class="article15 cid-uuGhZ51dwe"
        id="about-us-15-uuGhZ51dwe"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md">
              <h6 class="mbr-section-subtitle mbr-fonts-style mt-0 mb-4 display-5">
                <strong>
                  AI-Solutions: Where Innovation Meets Imagination!
                </strong>
              </h6>
            </div>
            <div class="col-md-12 col-lg-6">
              <p class="mbr-text mbr-fonts-style display-7">
                Welcome to AI-Solutions, the Sunderland startup that’s shaking
                up the digital landscape! We specialize in AI-powered solutions
                that make work feel less like work.
              </p>
              <p class="mbr-text mbr-fonts-style display-7">
                Our mission? To enhance the digital employee experience with
                innovative virtual assistants and affordable prototyping that
                even your grandma could use!
              </p>
              <p class="mbr-text mbr-fonts-style display-7">
                We believe in a future where technology and creativity collide,
                making every workplace a hub of productivity and fun!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
