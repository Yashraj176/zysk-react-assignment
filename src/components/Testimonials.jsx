import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center">
        {/* Sisyphus Logo and Text Above the Testimonial */}
        <div className="mb-8 flex justify-center items-center">
          {/* Sisyphus Logo */}
          <img
            src="https://cdnb.artstation.com/p/assets/images/images/035/305/027/large/anna-chida-logo-1.jpg?1614631174" // Replace with actual Sisyphus logo URL
            alt="Sisyphus Logo"
            className="w-12 h-12 mr-2"
          />
          <span className="text-1xl font-bold text-[#101828]">Sisyphus</span>
        </div>

        {/* Testimonial Quote */}
        <blockquote className="text-3xl font-bold text-[#101828] max-w-3xl mx-auto">
          We’ve been using Untitled to kickstart every new project and can’t imagine working without it.
        </blockquote>

        {/* Profile Section */}
        <div className="mt-8 flex justify-center items-center">
          {/* Profile Picture */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZ8PEnVJDlw7ulGKS3k2tTjE7zTvtgdodZg&s"  // Replace with actual image URL
            alt="Candice Wu"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* Name and Title */}
        <div className="mt-4">
          <p className="text-xl font-bold">Candice Wu</p>
          <p className="text-sm text-gray-500">Product Manager, Sisyphus</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
