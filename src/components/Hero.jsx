import React, { useState } from 'react';

const Hero = () => {
  const [selection, setSelection] = useState(null);  // State to track user selection

  const handleSelection = (choice) => {
    setSelection(choice);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-20 bg-white">
        {/* Badge Above the Center */}
        <div className="mb-8">
          <div className="flex justify-center">
            {/* Single Hollow Badge containing both elements */}
            <span className="px-6 py-4 text-sm text-[#E63F3A] bg-white border-2 border-[#E63F3A] rounded-full shadow-md font-semibold flex items-center space-x-6">
              {/* "New Features" Text */}
              <span className="text-xs font-medium">New Features</span>

              {/* "Check out the new dashboard" Text with Airplane Flight Icon */}
              <span className="text-xs font-medium flex items-center space-x-2">
                {/* Airplane Icon */}
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 16l4-4-4-4M18 12H3" />
                </svg>
                <span>Check out the new dashboard</span>
              </span>
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold leading-tight text-gray-800 max-w-4xl mx-auto mb-6">
          Beautiful analytics to grow smarter
        </h1>
        {/* Subheading */}
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        {/* Buttons */}
        <div className="mt-6 flex justify-center space-x-6">
          {/* Demo Button (White with Play Icon) */}
          <button className="px-6 py-3 bg-white text-[#344054] rounded-full text-lg font-semibold shadow-md hover:bg-[#E63F3A] hover:text-white transition duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2">
            {/* Play Icon */}
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
            <span>Demo</span>
          </button>

          {/* Sign Up Button (Smaller Size) */}
          <button className="px-6 py-3 bg-red-600 text-white rounded-full text-lg font-semibold shadow-md hover:bg-red-500 transition duration-300 ease-in-out transform hover:scale-105">
            Sign up
          </button>
        </div>
      </section>

      {/* Below Hero: Image Section */}
      <section className="text-center py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl">
          {/* Display the provided image */}
          <img
            src="https://s3-alpha-sig.figma.com/img/77d8/9fa1/a69b18701253a32f7e394acfc433d49b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YS-Jtc0-Ve3jaOlOlp-9BpWzlsaMDBADGur869~rLULf71EfaukCJIkRchKg-DjBbHimGJwC3GM-lXYm30LtvL0akS~RqwVXYKhLcTwpqKuZpBNHn4ruGFvsQn-3eTDILJNHJqeu5ZLWTSn1YUSzRuLAKh04dIXPRI16Iss4z8lzFWeSCelmpRBjrIrcnEyuhstpzderuRACZmfRHygbOpj9hN4r9gyUfZ3tNyM8saQGuW8UgF7Yg-XbdeMJWnJ4EaYMyl91Yy3Pb7saIyc5IK1zVcVUljHvUHqOkpwHoUY-LKgk2QQDSm3jKVpYzSuIzCu6-U3qmF~EtGM9nYpS3g__"
            alt="Custom Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="text-center py-20 bg-white">
        <h2 className="text-xl font-semibold text-gray-600 mb-6">
          Join 4000+ companies already growing
        </h2>
        {/* Logos */}
        <div className="flex justify-center space-x-8">
          {/* Example logos */}
          <div className="flex items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQ6PBmWCp-4EMsN8AaC7nSYE22ArRodyrZA&s" // Example logo
              alt="Company 1"
              className="h-12"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://nordiclightbox.com/wp-content/uploads/2024/08/Lightbox-logo.svg" // Example logo
              alt="Company 2"
              className="h-12"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUMRNtY5nxywgK7RBs8j-u1i-feTnXgGFIg&s" // Example logo
              alt="Company 3"
              className="h-12"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://cdn.prod.website-files.com/64c3d4eb4782619c91c82cad/64c3e0641b5a21af97cb4a14_logo-03.png" // Example logo
              alt="Company 3"
              className="h-12"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/007/933/469/non_2x/bank-logo-global-bank-symbol-free-vector.jpg" // Example logo
              alt="Company 3"
              className="h-12"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://i.ytimg.com/vi/MN1WiK2P4jU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA5QjxJOLrb8hOjtfZghsKgS50IaQ" // Example logo
              alt="Company 3"
              className="h-12"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
