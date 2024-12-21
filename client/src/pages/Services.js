import React from "react";

const Services = () => {
  return (
    <section className="container mbr-fullscreen cid-uuGhZ50C2O">
      <div className=" py-12  mx-auto ">
        <div className="block">
          <div className="row justify-content-center">
            <div className="col-12 content-head">
              <div className="mbr-section-head mb-5 text-center">
                <h4 className="mbr-section-title mbr-fonts-style mt-4 mb-0 display-2">
                  <strong>Affordable Plans</strong>
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              {
                title: "Starter Pack",
                price: "$4.99",
                duration: "per month",
                description:
                  "Perfect for small teams wanting to dip their toes into AI.",
                isActive: true,
              },
              {
                title: "Pro Package",
                price: "$19.99",
                duration: "per month",
                description:
                  "For growing businesses ready to embrace AI magic.",
                isActive: false,
              },
              {
                title: "Enterprise Solution",
                price: "$49.99",
                duration: "per month",
                description:
                  "Tailored AI solutions for large organizations with big dreams.",
                isActive: false,
              },
              {
                title: "Custom Plan",
                price: "Contact Us",
                duration: "per month",
                description:
                  "Let’s create something extraordinary together, just for you!",
                isActive: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`item features-without-image col-12 col-md-6 col-lg-3 item-mb ${
                  plan.isActive ? "active" : ""
                }`}
              >
                <div className="item-wrapper">
                  <div className="item-head">
                    <h5 className="item-title mbr-fonts-style mb-0 display-5">
                      <strong>{plan.title}</strong>
                    </h5>
                    <h6 className="item-subtitle mbr-fonts-style mt-0 mb-0 display-7">
                      <strong>{plan.price}</strong>/{plan.duration}
                    </h6>
                  </div>
                  <div className="item-content">
                    <p className="mbr-text mbr-fonts-style display-7">
                      {plan.description}
                    </p>
                  </div>
                  <div className="mbr-section-btn item-footer">
                    <a href="/" className="btn item-btn btn-primary display-7">
                      Start Now
                    </a>
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

export default Services;
