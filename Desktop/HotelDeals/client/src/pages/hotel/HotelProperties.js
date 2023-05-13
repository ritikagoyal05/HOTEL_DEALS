import React, { useState } from 'react';
import './HotelProperties.css'; // Import your custom CSS file

const HotelProperties = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showHelpline, setShowHelpline] = useState(false);
  const [helplineNumber, setHelplineNumber] = useState('');

  const handleClick = () => {
    setShowFeatures(!showFeatures);
  };

  const handleHelplineClick = () => {
    setShowHelpline(!showHelpline);
    setHelplineNumber('123-456-7890'); // Replace with the actual helpline number
  };

  const handleCommentsClick = (type) => {
    const message = type === 'comments' ? 'Please enter your comment:' : 'Please enter your review:';
    const response = window.prompt(message);
    if (response) {
      // do something with the comment or review, such as send it to a server
      console.log(response);
    }
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
      <button className="toggle-button" onClick={handleClick}>
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
      <button className="comments-button" onClick={() => handleCommentsClick('comments')}>
        Comments
      </button>
      <button className="reviews-button" onClick={() => handleCommentsClick('reviews')}>
        Reviews
      </button>
      <p className="marketing-text">
        BOOKINGS ARE AVAILABLE. BOOK YOUR ROOMS AND ENJOY TO THE FULLEST
      </p>
    </div>
  );
};

export default HotelProperties;
