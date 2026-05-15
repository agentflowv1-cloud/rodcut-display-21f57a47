import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-200 text-gray-600 p-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <h5 className="uppercase text-gray-700 font-bold mb-2">Contact Us</h5>
            <ul>
              <li className="mb-2">
                <a href="mailto:info@example.com" className="text-gray-600 hover:text-gray-900">info@example.com</a>
              </li>
              <li className="mb-2">
                <a href="tel:1234567890" className="text-gray-600 hover:text-gray-900">123-456-7890</a>
              </li>
              <li className="mb-2">
                <a href="https://www.example.com" className="text-gray-600 hover:text-gray-900">https://www.example.com</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <h5 className="uppercase text-gray-700 font-bold mb-2">Social Media</h5>
            <ul>
              <li className="mb-2">
                <a href="https://www.facebook.com/example" className="text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="https://www.twitter.com/example" className="text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="https://www.instagram.com/example" className="text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a href="https://www.linkedin.com/example" className="text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
