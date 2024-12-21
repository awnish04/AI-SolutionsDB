import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review"; // Importing the Review component
// import { FaStar } from "react-icons/fa";
const ProjectsDetails = ({ rating }) => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("description");
  // Simulating project details (could be fetched from an API)

  const projectDetails = {
    1: {
      title: "Revolutionizing Employee Experience",
      description:
        "Discover how our AI solutions are transforming workplaces into digital wonderlands!",
      feedback: "Our employees love the new AI-driven experience!",
      image:
        "https://r.mobirisesite.com/920997/assets/images/photo-1460925895917-afdab827c52f.jpeg",
      features: [
        "Fast implementation",
        "24/7 customer support",
        "Robust security features",
      ],
      reviews: [
        {
          reviewerName: "Kristin Watson",
          reviewDate: "March 14, 2021",
          reviewText:
            "The AI-driven experience has been transformative for our workplace!",
          initialRating: 4,
        },
        {
          reviewerName: "Jenny Wilson",
          reviewDate: "January 28, 2021",
          reviewText: "This has streamlined our processes like never before!",
          initialRating: 5,
        },
        {
          reviewerName: "Michael Brown",
          reviewDate: "May 10, 2021",
          reviewText:
            "The onboarding process was smooth and quick. Highly recommend!",
          initialRating: 4,
        },
      ],
      support: {
        contactEmail: "support@aiworkplace.com",
        contactNumber: "+1 800 123 4567",
        faqs: [
          "How do I integrate the AI solution with existing systems?",
          "Is there a trial period available?",
          "What are the system requirements?",
        ],
      },
    },
    2: {
      title: "Meet Your New Virtual Assistant",
      description:
        "Say goodbye to mundane tasks! Our virtual assistants are here to save the day!",
      feedback: "Best virtual assistant I've ever used!",
      image:
        "https://r.mobirisesite.com/920997/assets/images/photo-1519389950473-47ba0277781c.jpeg",
      features: [
        "Cost-effective solutions",
        "User-friendly design",
        "Highly customizable",
      ],
      reviews: [
        {
          reviewerName: "Bessie Cooper",
          reviewDate: "February 11, 2021",
          reviewText: "This virtual assistant has saved me hours every week!",
          initialRating: 5,
        },
        {
          reviewerName: "Robert Fox",
          reviewDate: "June 15, 2021",
          reviewText:
            "Intuitive and easy to set up. Fantastic value for money!",
          initialRating: 4,
        },
        {
          reviewerName: "Angela Peterson",
          reviewDate: "August 9, 2021",
          reviewText: "It seamlessly handles all my scheduling needs!",
          initialRating: 5,
        },
      ],
      support: {
        contactEmail: "support@virtualassistant.com",
        contactNumber: "+1 888 987 6543",
        faqs: [
          "Can I customize the assistant's behavior?",
          "What languages does the assistant support?",
          "How secure is the data handled by the assistant?",
        ],
      },
    },
    3: {
      title: "Affordable Prototyping Solutions",
      description: "Get your ideas off the ground without breaking the bank!",
      feedback: "Helped me kickstart my project with ease.",
      image:
        "https://r.mobirisesite.com/920997/assets/images/photo-1457433575995-8407028a9970.jpeg",
      features: [
        "Fast implementation",
        "Robust security features",
        "24/7 customer support",
      ],
      reviews: [
        {
          reviewerName: "Samantha Lee",
          reviewDate: "July 18, 2021",
          reviewText: "Great for startups looking for affordable solutions!",
          initialRating: 5,
        },
        {
          reviewerName: "John Doe",
          reviewDate: "October 5, 2021",
          reviewText: "Easy to use and delivers excellent results.",
          initialRating: 4,
        },
      ],
      support: {
        contactEmail: "support@prototypingsolutions.com",
        contactNumber: "+1 900 654 3210",
        faqs: [
          "What is the typical turnaround time for prototyping?",
          "Can I get a custom quote for large-scale projects?",
          "Are there any additional fees involved?",
        ],
      },
    },
    4: {
      title: "Customer Success Stories Unveiled",
      description:
        "Hear from our clients about their jaw-dropping transformations with our AI magic!",
      feedback: "Our business doubled revenue thanks to these AI solutions!",
      image:
        "https://r.mobirisesite.com/920997/assets/images/photo-1421757350652-9f65a35effc7.jpeg",
      features: [
        "24/7 customer support",
        "Cloud-based platform",
        "Robust security features",
      ],
      reviews: [
        {
          reviewerName: "Emily White",
          reviewDate: "November 12, 2021",
          reviewText:
            "Our business has grown exponentially since adopting these solutions!",
          initialRating: 5,
        },
        {
          reviewerName: "Chris Martin",
          reviewDate: "December 8, 2021",
          reviewText: "Fantastic product with great customer support!",
          initialRating: 4,
        },
      ],
      support: {
        contactEmail: "support@aistories.com",
        contactNumber: "+1 700 321 0987",
        faqs: [
          "How can I submit my success story?",
          "What industries are most suitable for these solutions?",
          "Do you provide onboarding assistance?",
        ],
      },
    },
  };

  const project = projectDetails[id];

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    // <div className="container mbr-fullscreen">
    <section className="container mbr-fullscreen bg-[#fff4e7]">
      <div className=" py-12 mx-auto ">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500 py-14">
          <a href="/" className="hover:underline">
            <span>Home</span>
          </a>
          <a href="/projectlist" className="hover:underline">
            / <span>Products</span>
          </a>
          / <span>Product Details</span>
        </nav>

        <div className="lg:flex block">
          {/* Product Images */}
          <div className="lg:w-3/4 ">
            <div className="mb-4">
              <img
                src={project.image}
                alt={project.title} // You can use the project title as the alt text for better accessibility
                className="border p-1"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-2/3 pl-8">
            <h1 className="lg:text-4xl font-semibold mb-4">{project.title}</h1>

            <div className="mb-4">
              <h2 className="font-semibold mb-2">Features</h2>
              <ul className="list-disc list-inside text-gray-700">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Tab Navigation */}
            <div className="mt-8">
              <div className="border-b border-gray-300 mb-4">
                {["description", "reviews", "support"].map((tab) => (
                  <button
                    key={tab}
                    className={`text-gray-700 font-semibold pb-2 mr-4 ${
                      activeTab === tab ? "border-b-2 border-blue-600" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === "description" && (
                <div>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <h2 className="font-semibold text-lg mb-4">
                    Customer Reviews
                  </h2>
                  {project.reviews && project.reviews.length > 0 ? (
                    project.reviews.map((review, index) => (
                      <Review
                        key={index}
                        reviewerName={review.reviewerName}
                        reviewDate={review.reviewDate}
                        reviewText={review.reviewText}
                        initialRating={review.initialRating}
                      />
                    ))
                  ) : (
                    <p className="text-gray-700">
                      No reviews available for this project.
                    </p>
                  )}
                </div>
              )}

              {activeTab === "support" && project && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Support</h2>

                  <p className="text-gray-700 mb-4">
                    Need help? You can contact our support team for assistance
                    with the product.
                  </p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-lg">Contact Us</h3>
                    <p>
                      Email:{" "}
                      <a
                        href={`mailto:${project.support.contactEmail}`}
                        className="text-blue-600"
                      >
                        {project.support.contactEmail}
                      </a>
                    </p>
                    <p>
                      Phone:{" "}
                      <a
                        href={`tel:${project.support.contactNumber}`}
                        className="text-blue-600"
                      >
                        {project.support.contactNumber}
                      </a>
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-lg">
                      Frequently Asked Questions
                    </h3>
                    <ul className="list-disc list-inside text-gray-700">
                      {project.support.faqs.map((faq, index) => (
                        <li key={index} className="mb-2">
                          {faq}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsDetails;
