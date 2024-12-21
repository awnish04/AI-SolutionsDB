import { useState, useEffect, useCallback } from "react";



const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    image: "images.unsplash.com/photo-1494790108377-be9c29b29330",
    testimonial:
      "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence is unmatched.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "UX Designer",
    image: "images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    testimonial:
      "The innovative solutions and creative approach have transformed our project outcomes significantly.",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "CEO",
    image: "images.unsplash.com/photo-1438761681033-6461ffad8d80",
    testimonial:
      "Outstanding service and exceptional results. Highly recommend their expertise to anyone looking for quality.",
  },
];

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);
  return (
    <div>
      

      <section>
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
          <div
            className="relative overflow-hidden rounded-xl shadow-lg bg-white"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onKeyDown={handleKeyDown}
            tabIndex="0"
            role="region"
            aria-label="Testimonials carousel"
          >
            <div className="relative h-[400px] md:h-[440px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
                    index === currentSlide
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  }`}
                  aria-hidden={index !== currentSlide}
                >
                  <div className="flex flex-col md:flex-row items-center h-full p-6 md:p-8">
                    <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                      <img
                        src={`https://${testimonial.image}`}
                        alt=""
                        className="w-full h-full object-cover rounded-full shadow-md"
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1494790108377-be9c29b29330";
                          e.target.alt = "Fallback profile picture";
                        }}
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-gray-700 text-lg md:text-xl mb-4 italic">
                        "{testimonial.testimonial}"
                      </p>
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-blue-600 w-4" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsCarousel;
