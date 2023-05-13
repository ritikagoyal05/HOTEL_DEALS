// import React, { useState } from 'react';
// import './HotelProperties.css';

// const HotelProperties = () => {
//   const [showFeatures, setShowFeatures] = useState(false);
//   const [showHelpline, setShowHelpline] = useState(false);
//   const [helplineNumber, setHelplineNumber] = useState('');
//   const [comments, setComments] = useState([]);
//   const [reviews, setReviews] = useState([]);

//   const handleFeaturesClick = () => {
//     setShowFeatures(!showFeatures);
//   };

//   const handleHelplineClick = () => {
//     setShowHelpline(!showHelpline);
//     setHelplineNumber('123-456-7890'); // Replace with the actual helpline number
//   };

//   const handleCommentsClick = () => {
//     const comment = window.prompt('Please enter your comment:');
//     if (comment) {
//       setComments([...comments, comment]);
//     }
//   };

//   const handleReviewsClick = () => {
//     const review = window.prompt('Please enter your review:');
//     if (review) {
//       setReviews([...reviews, review]);
//     }
//   };

//   const hotelFeatures = [
//     { name: 'Swimming pool', icon: '🏊' },
//     { name: 'Gym', icon: '💪' },
//     { name: 'Free WiFi', icon: '📶' },
//     { name: 'Restaurant', icon: '🍽️' },
//     { name: 'Bar', icon: '🍸' },
//     { name: 'Spa', icon: '💆' },
//     { name: 'Conference rooms', icon: '👥' },
//     { name: 'Business center', icon: '💼' },
//   ];

//   return (
//     <div className="hotel-properties-container">
//       <h1>Hotel Properties</h1>
//       <button className="toggle-button" onClick={handleFeaturesClick}>
//         {showFeatures ? 'Hide features' : 'Show features'}
//       </button>
//       {showFeatures && (
//         <ul className="features-list">
//           {hotelFeatures.map(({ name, icon }) => (
//             <li key={name}>
//               <span className="icon">{icon}</span>
//               <span className="feature-name">{name}</span>
//             </li>
//           ))}
//         </ul>
//       )}
//       <button className="helpline-button" onClick={handleHelplineClick}>
//         Need Help? Click Here
//       </button>
//       {showHelpline && (
//         <p className="helpline-number">
//           Helpline Number: {helplineNumber}
//         </p>
//       )}
//       <button className="comments-button" onClick={handleCommentsClick}>
//         Comments
//       </button>
//       <button className="reviews-button" onClick={handleReviewsClick}>
//         Reviews
//       </button>
//       <div className="comments-container">
//         <h2>Comments:</h2>
//         <ul>
//           {comments.map((comment, index) => (
//             <li key={index}>{comment}</li>
//           ))}
//         </ul>
//       </div>
//       <div className="reviews-container">
//         <h2>Reviews:</h2>
//         <ul>
//           {reviews.map((review, index) => (
//             <li key={index}>{review}</li>
//           ))}
//         </ul>
//       </div>
//       <p className="marketing-text">
//         BOOKINGS ARE AVAILABLE. BOOK YOUR ROOMS AND ENJOY TO THE FULLEST
//       </p>
//     </div>
//   );
// };

// export default HotelProperties;

import React, { useState } from 'react';
import './HotelProperties.css';
import { FaStar } from 'react-icons/fa';

const HotelProperties = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showHelpline, setShowHelpline] = useState(false);
  const [helplineNumber, setHelplineNumber] = useState('');
  const [comments, setComments] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);

  const handleFeaturesClick = () => {
    setShowFeatures(!showFeatures);
  };

  const handleHelplineClick = () => {
    setShowHelpline(!showHelpline);
    setHelplineNumber('123-456-7890'); // Replace with the actual helpline number
  };

  const handleCommentsClick = () => {
    const comment = window.prompt('Please enter your comment:');
    if (comment) {
      setComments([...comments, comment]);
    }
  };

  const handleReviewsClick = () => {
    const review = window.prompt('Please enter your review:');
    if (review) {
      setReviews([...reviews, review]);
    }
  };

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const hotelFeatures = [
    { name: 'Swimming pool', icon: '🏊' },
    { name: 'Gym', icon: '💪' },
    { name: 'Free WiFi', icon: '📶' },
    { name: 'Restaurant', icon: '🍽️' },
    { name: 'Bar', icon: '🍸' },
    { name: 'Spa', icon: '💆' },
    { name: 'Conference rooms', icon: '👥' },
    { name: 'Business center', icon: '💼' },
  ];

  return (
    <div className="hotel-properties-container">
      <h1>Hotel Properties</h1>
      <button className="toggle-button" onClick={handleFeaturesClick}>
        {showFeatures ? 'Hide features' : 'Show features'}
      </button>
      {showFeatures && (
        <ul className="features-list">
          {hotelFeatures.map(({ name, icon }) => (
            <li key={name}>
              <span className="icon">{icon}</span>
              <span className="feature-name">{name}</span>
            </li>
          ))}
        </ul>
      )}
      <button className="helpline-button" onClick={handleHelplineClick}>
        Need Help? Click Here
      </button>
      {showHelpline && (
        <p className="helpline-number">
          Helpline Number: {helplineNumber}
        </p>
      )}
      <button className="comments-button" onClick={handleCommentsClick}>
        Comments
      </button>
      <button className="reviews-button" onClick={handleReviewsClick}>
        Reviews
      </button>
      <div className="comments-container">
        <h2>Comments:</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
      <div className="reviews-container">
        <h2>Reviews:</h2>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
        <div>
          <h3>Rate the hotel:</h3>
          <fieldset>
            <legend>Choose a rating:</legend>
            <div className="star-rating">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      checked={rating === ratingValue}
                      onChange={handleRatingChange}
                    />
                    <FaStar
                      className="star"
                      color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                      size={50}
                    />
                  </label>
                );
              })}
            </div>
          </fieldset>

        </div>
        {rating > 0 && (
          <p className="rating">
            You have rated the hotel: {rating} star{rating !== 1 && 's'}.
          </p>
        )}
      </div>
    </div>
  );
};

export default HotelProperties;