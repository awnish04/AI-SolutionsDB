
import React, { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const images = [
    {
      src: "https://pagedone.io/asset/uploads/1688031162.jpg",
      title: "Project One",
      description: "A description of Project One.",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688031232.jpg",
      title: "Project Two",
      description: "A description of Project Two.",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688031357.jpg",
      title: "Project Three",
      description: "A description of Project Three.",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688031375.jpg",
      title: "Project Four",
      description: "A description of Project Four.",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688031396.jpg",
      title: "Project Five",
      description: "A description of Project Five.",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688031414.png",
      title: "Project Six",
      description: "A description of Project Six.",
    },
  ];

  return (
    <div>
      <section className="container mbr-fullscreen cid-uuGhZ50C2O">
        <div className=" py-12  mx-auto ">
          <div className="block">
            <div className="row justify-content-center">
              <div className="col-12 content-head">
                <div className="mbr-section-head mb-5">
                  <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                    <strong>Our Amazing Projects</strong>
                  </h4>
                </div>
              </div>
            </div>
            <div className="columns-1 md:columns-2 xl:columns-3 gap-7">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="break-inside-avoid mb-8 cursor-pointer"
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={image.src}
                    alt={image.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] grid place-items-center bg-black bg-opacity-60 backdrop-blur-lg"
          onClick={handleCloseModal}
        >
          <div
            className="relative m-6 lg:w-6/12 rounded-lg"
            // eslint-disable-next-line jsx-a11y/aria-role
            role="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-2 mt-14">
              <div className="flex items-center justify-end">
                <button
                  className="rounded-full p-1 text-center text-sm text-white hover:bg-[#4FD6C9] hover:text-white hover:ease-linear"
                  onClick={handleCloseModal}
                >
                  <X />
                </button>
              </div>
              <img
                alt={selectedImage.title}
                className="h-[20rem] lg:h-[32rem] lg:w-[90%] mx-auto object-cover object-center"
                src={selectedImage.src}
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
