import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Review = ({ reviewerName, reviewDate, reviewText, initialRating }) => {
  const [rating, setRating] = useState(initialRating);

  // eslint-disable-next-line no-unused-vars
  const handleStarClick = (newRating) => {
    setRating(newRating); // Update the rating when a star is clicked
  };

  return (
    <div className="flex items-start mb-4">
      <img
        src="https://placehold.co/50x50"
        alt={reviewerName}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <div className="flex items-center mb-1">
          <div className="flex items-center text-yellow-500">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`cursor-pointer ${
                  index < rating ? "text-yellow-500" : "text-gray-300"
                }`}
                // Update rating on click
              />
            ))}
          </div>
        </div>
        <p className="text-gray-700 mb-1">{reviewText}</p>
        <p className="text-gray-500 text-sm">
          {reviewerName} - {reviewDate}
        </p>
      </div>
    </div>
  );
};

export default Review;
