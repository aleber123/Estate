import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import React from 'react';
import fontStyles from '../Fonts.module.css'; // Adjust the import path according to your project structure

const Footer = () => {
  return (
    <footer className={`${fontStyles.container} footer`}>
      <div className={`${fontStyles.h4} footer-title`}>
        Our Company Inc.
      </div>
      <p className={fontStyles.p}>
        123 Business Ave, City Name, Country 45678
      </p>
      <p className={fontStyles.p}>
        Contact us: (123) 456-7890
      </p>
      <p className={fontStyles.p}>
        <a href="mailto:info@ourcompany.com" className="mail-link">
          <FaEnvelope /> info@ourcompany.com
        </a>
      </p>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      {/* Additional responsive styling for the footer */}
      <style jsx>{`
  .footer.container {
    max-width: 100%; /* Override the .container max-width */
    margin: 0 auto; /* Override the .container margin */
    padding: 40px 20px; /* Maintain the padding but adjust for full width */
    background-color: #f0f0f0; /* Existing styles */
    text-align: center; 
    border-top: 1px solid #ddd;
  }
  /* Existing footer styles */
  .footer-title, .mail-link, .social-links a {
    font-size: 20px; /* Adjusted for consistency */
  }
  .social-links {
    justify-content: center;
    margin-top: 10px;
    flex-wrap: wrap;
  }
  .social-links a {
    width: 40px;
    height: 40px;
    margin: 0 10px;
    color: #304742;
    font-size: 24px;
  }
  .mail-link {
    display: inline-flex;
    align-items: center;
    color: #304742;
  }
  .mail-link svg {
    margin-right: 8px;
  }
  @media (max-width: 768px) {
    .footer {
      padding: 20px 10px;
    }
  }
`}</style>
    </footer>
  );
};

export default Footer;
