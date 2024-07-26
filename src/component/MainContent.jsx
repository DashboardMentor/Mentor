import React from 'react';
import { FaVideo } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import availabilityImage from './availabilityImage.png';
// import educationImage from './educationImage.png';
// import paymentImage from './paymentImage.jpg';
// import topRightImage from './RightImage.png';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="welcome-box">
        <div className="welcome-content">
          Welcome to our mentor community
          <button className="share-template-btn">Share Template</button>
        </div>
        <img src={topRightImage} alt="Top Right" className="top-right-image" />
      </div>
      <div className="next-steps">
        <h2>Next Steps for You</h2>
        <div className="steps-section">
          <div className="step">
            <img src={availabilityImage} alt="Add Availability" className="step-image" />
            <h3>Add Availability</h3>
          </div>
          <div className="step">
            <img src={paymentImage} alt="Add Payment" className="step-image" />
            <h3>Add Payment</h3>
          </div>
          <div className="step">
            <img src={educationImage} alt="Add Education" className="step-image" />
            <h3>Add Education</h3>
          </div>
        </div>
      </div>
      <div className="additional-steps">
        <h2>Get Started</h2>
        <div className="steps-section-horizontal">
          <div className="horizontal-step">
            <FaVideo className="horizontal-step-icon" />
            <div className="horizontal-step-content">
              <div className="horizontal-step-text">
                <h3>Quick Call</h3>
              </div>
              <p className="horizontal-step-description">30 mins quick call</p>
            </div>
          </div>
          <div className="horizontal-step">
            <FaVideo className="horizontal-step-icon" />
            <div className="horizontal-step-content">
              <div className="horizontal-step-text">
                <h3>Mentor Meet</h3>
              </div>
              <p className="horizontal-step-description">1:1 mentorship session</p>
            </div>
          </div>
          <div className="horizontal-step">
            <FaVideo className="horizontal-step-icon" />
            <div className="horizontal-step-content">
              <div className="horizontal-step-text">
                <h3>Ask a Query</h3>
              </div>
              <p className="horizontal-step-description">Query</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <Link to="/profile" className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded">
          Go to Profile
        </Link>
      </div>
    </div>
  );
};

export default MainContent;
