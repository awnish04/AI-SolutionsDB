import React from "react";
import { useParams } from "react-router-dom";

const LatestProductDetails = () => {
  const { id } = useParams();

  const productDetails = {
    1: {
      title: "InnoBot",
      description:
        "An AI-powered virtual assistant designed to assist employees with real-time problem-solving, improving productivity and digital employee experience.",
      image:
        "https://r.mobirisesite.com/920997/assets/images/photo-1460925895917-afdab827c52f.jpeg",
    },
    2: {
      title: "PrototyperAI",
      description:
        "A solution that leverages AI to rapidly create affordable prototypes, helping businesses speed up product design and innovation cycles.",
      image:
        "https://r.mobirisesite.com/920997/assets/images/photo-1519389950473-47ba0277781c.jpeg",
    },
    3: {
      title: "Engage360",
      description:
        "An AI-driven platform for enhancing employee engagement by providing tailored insights, feedback, and automation for HR and management teams.",
      image:
        "https://r.mobirisesite.com/920997/assets/images/photo-1457433575995-8407028a9970.jpeg",
    },
    4: {
      title: "InsightFlow",
      description:
        "A data-driven AI solution for analytics and reporting, offering businesses actionable insights that drive decisions and improve operational efficiency.",
      image:
        "https://r.mobirisesite.com/920997/assets/images/photo-1421757350652-9f65a35effc7.jpeg",
    },
  };
  const product = productDetails[id];

  if (!product) {
    return <p>product not found.</p>;
  }
  return (
    <section className="container mbr-fullscreen bg-[#fff4e7]">
      <div className=" py-12 mx-auto  ">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500 py-14">
          <a href="/" className="hover:underline">
            <span>Home</span>
          </a>
          / <span>Product Details</span>
        </nav>

        <div className="lg:flex block">
          {/* Product Images */}
          <div className="lg:w-3/4">
            <div className="mb-4">
              <img
                src={product.image}
                alt={product.title} // You can use the project title as the alt text for better accessibility
                className="border p-1"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full justify-center text-justify lg:pl-8">
            <h1 className="lg:text-4xl font-semibold mb-4">{product.title}</h1>
            <div className="lg:text-2xl mb-4">{product.description}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProductDetails;
