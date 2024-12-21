import React from "react";

const ProjectList = () => {
  const projects = [
    {
      id: 1,
      title: "Revolutionizing Employee Experience",
      date: "2024-11-20",
      description:
        "Discover how our AI solutions are transforming workplaces into digital wonderlands!",
      feedback: "Our employees love the new AI-driven experience!",
      image:
        "https://r.mobirisesite.com/920997/assets/images/photo-1460925895917-afdab827c52f.jpeg",
    },
    {
      id: 2,
      title: "Meet Your New Virtual Assistant",
      date: "2024-11-19",
      description:
        "Say goodbye to mundane tasks! Our virtual assistants are here to save the day!",
      feedback: "Best virtual assistant I've ever used!",
      image:
        "https://r.mobirisesite.com/920997/assets/images/photo-1519389950473-47ba0277781c.jpeg",
    },
    {
      id: 3,
      title: "Affordable Prototyping Solutions",
      date: "2024-11-18",
      description: "Get your ideas off the ground without breaking the bank!",
      feedback: "Helped me kickstart my project with ease.",
      image:
        "https://r.mobirisesite.com/920997/assets/images/photo-1457433575995-8407028a9970.jpeg",
    },
    {
      id: 4,
      title: "Customer Success Stories Unveiled",
      date: "2024-11-17",
      description:
        "Hear from our clients about their jaw-dropping transformations with our AI magic!",
      feedback: "Our business doubled revenue thanks to these AI solutions!",
      image:
        "https://r.mobirisesite.com/920997/assets/images/photo-1421757350652-9f65a35effc7.jpeg",
    },
  ];
  return (
    <section className="container mbr-fullscreen cid-uuGhZ51Si4  bg-[#FFF4E7]">
      <div className=" py-12  mx-auto ">
        <div className="block">
          <div className="row justify-content-center">
            <div className="col-12 content-head">
              <div className="mbr-section-head mb-5">
                <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                  <strong>Latest AI Innovations</strong>
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            {projects.map((project) => (
              <div
                key={project.id}
                className="item features-image col-12 col-md-6 col-lg-3"
              >
                <div className="item-wrapper">
                  <div className="item-img mb-3">
                    <img src={project.image} alt={project.title} title="" />
                  </div>
                  <div className="item-content align-left">
                    <h5 className="item-title mbr-fonts-style mt-0 mb-2 display-5 text-3xl">
                      <strong>{project.title}</strong>
                    </h5>
                    <p className="mbr-text mbr-fonts-style mb-3 display-7">
                      {project.date}
                    </p>
                    <p className="mbr-text mbr-fonts-style mb-3 display-7">
                      {project.description}
                    </p>
                    <div className="mbr-section-btn item-footer">
                      {/* <a
                        href={`/projects/${project.id}`}
                        className="btn item-btn btn-primary display-7"
                      >
                        Explore
                      </a> */}
                      <a
                        href={`/projectdetails/${project.id}`} // Use dynamic path
                        className="btn item-btn btn-primary display-7"
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
