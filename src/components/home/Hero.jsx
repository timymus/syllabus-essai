// Import necessary dependencies from React Router for navigation
import { Link } from 'react-router-dom';
// Import the celebration image asset
import celebratingImage from '../celebrating.jpg';

// Define and export the Hero component
export default function Hero() {
  return (
    // Main container with relative positioning and white background
    <div className="relative bg-white overflow-hidden">
      {/* Background image container with group hover functionality */}
      <div className="absolute inset-0 group">
        {/* Container for image with specific height and overflow control */}
        <div className="relative w-full h-[120vh] overflow-hidden">
          {/* Hero image with hover animation effect */}
          <img
            src={celebratingImage}
            alt="Students celebrating"
            // Classes for image sizing, cover fitting, and hover animation
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform group-hover:-translate-y-6"
          />
          {/* Gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent"></div>
        </div>
      </div>

      {/* Content container with maximum width constraint */}
      <div className="max-w-7xl mx-auto h-[80vh]">
        {/* Content positioning with z-index and vertical centering */}
        <div className="relative z-10 h-full flex items-center">
          {/* Main content area with responsive padding */}
          <main className=" max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Text content container with responsive alignment */}
            <div className="sm:text-left lg:text-left">
              {/* Main heading with responsive text sizing */}
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Votre avenir commence</span>
                {/* Highlighted text in indigo color */}
                <span className="block text-indigo-600">à l'international</span>
              </h1>
              {/* Descriptive paragraph with responsive styling */}
              <p className="mt-3 text-base text-gray-900 sm:mt-5 text-left sm:max-w-xl  md:mt-5 md:text-xl lg:mx-0">
                Découvrez les meilleures opportunités <br /> d'études à l'étranger. <br />Nous vous accompagnons dans toutes <br />les étapes de votre projet d'études.
              </p>
              {/* Call-to-action buttons container */}
              <div className="mt-5 sm:mt-8 sm:flex  lg:justify-start">
                {/* Primary CTA button */}
                <div className="rounded-md shadow">
                  <Link
                    to="/register"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Commencer
                  </Link>
                </div>
                {/* Secondary CTA button */}
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/programs"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Voir les programmes
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}