import React from "react";

const LatestProducts = () => {
  const latestproducts = [
    {
      id: 1,
      title: "InnoBot",
      image:
        "https://r.mobirisesite.com/920997/assets/images/photo-1679746584014-fb31d4eb0a5e.jpeg",
    },
    {
      id: 2,
      title: "PrototyperAI",
      image:
        "https://r.mobirisesite.com/920997/assets/images/photo-1519389950473-47ba0277781c.jpeg",
    },
    {
      id: 3,
      title: "Engage360",
      image:
        "https://r.mobirisesite.com/920997/assets/images/photo-1457433575995-8407028a9970.jpeg",
    },
    {
      id: 4,
      title: "InsightFlow",
      image:
        "https://r.mobirisesite.com/920997/assets/images/photo-1421757350652-9f65a35effc7.jpeg",
    },
  ];

  return (
    <section
      data-bs-version="5.1"
      className="people03 cid-uuGhZ50LLs"
      id="team-1-uuGhZ50LLs"
    >
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 content-head">
            <div className="mbr-section-head mb-5">
              <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>Meet Us</strong>
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {latestproducts.map((product) => (
            <div
              key={product.id}
              className="item features-image col-12 col-md-6 col-lg-3"
            >
              <div className="item-wrapper">
                <div className="item-img mb-3">
                  <img src={product.image} alt={product.title} title="" />
                </div>
                <div className="item-content align-left">
                  <h5 className="item-title mbr-fonts-style mt-0 mb-2 display-5">
                    <strong>{product.title}</strong>
                  </h5>
                  <p className="mbr-text mbr-fonts-style mb-3 display-7">
                    {product.description}
                  </p>
                  <div className="mbr-section-btn item-footer">
                    {/* <a
                      href={`/products/${product.id}`}
                      className="btn item-btn btn-primary display-7"
                    >
                      Exploreeeeeee
                    </a> */}
                    <a
                      href={`/latestproductdetails/${product.id}`} // Use dynamic path
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
    </section>
  );
};

export default LatestProducts;
