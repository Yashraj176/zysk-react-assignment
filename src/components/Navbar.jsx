import React, { useState } from "react";

const Header = () => {
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isResourcesOpen, setResourcesOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center border-b border-gray-200">
        {/* Logo and Navigation Container */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="https://zysk.tech/wp-content/uploads/2024/12/cropped-favicon-removebg-preview.png"
              alt="Zysk Logo"
              className="h-10 mr-2"
            />
          </a>

          {/* Navigation Links */}
          <nav className="flex space-x-6 text-sm font-medium">
            {/* Home Link */}
            <a
              href="#"
              className="text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              Home
            </a>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-red-500 flex items-center"
                aria-expanded={isProductsOpen}
              >
                Products
                <svg
                  className="w-4 h-4 ml-1 transform transition-transform"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isProductsOpen && (
                <div className="absolute bg-white border shadow-lg mt-2 p-4 rounded-lg w-48">
                  <a
                    href="#"
                    className="block text-gray-600 hover:text-red-500 py-1"
                  >
                    Overview
                  </a>
                  <a
                    href="#"
                    className="block text-gray-600 hover:text-red-500 py-1"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="block text-gray-600 hover:text-red-500 py-1"
                  >
                    Solutions
                  </a>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-red-500 flex items-center"
                aria-expanded={isResourcesOpen}
              >
                Resources
                <svg
                  className="w-4 h-4 ml-1 transform transition-transform"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isResourcesOpen && (
                <div className="absolute bg-white border shadow-lg mt-2 p-4 rounded-lg w-48">
                  <a
                    href="#"
                    className="block text-gray-600 hover:text-red-500 py-1"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="block text-gray-600 hover:text-red-500 py-1"
                  >
                    Tutorials
                  </a>
                </div>
              )}
            </div>

            {/* Pricing Link */}
            <a
              href="#"
              className="text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              Pricing
            </a>
          </nav>
        </div>

        {/* Profile Avatar */}
        <div
          className="relative"
          onMouseEnter={() => setProfileOpen(true)}
          onMouseLeave={() => setProfileOpen(false)}
        >
          <button
            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shadow-md border"
          >
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>
          {isProfileOpen && (
            <div className="absolute bg-white border shadow-lg mt-2 p-4 rounded-lg w-48 right-0">
              <a
                href="#"
                className="block text-gray-600 hover:text-red-500 py-1"
              >
                My Account
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-red-500 py-1"
              >
                Settings
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-red-500 py-1"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
