import React from "react";

const Blog = () => {
  const blogs = [
    {
      title: "UX Review Presentations",
      date: "10 Jan 2024",
      image: "https://static.vecteezy.com/system/resources/thumbnails/026/428/296/small/3d-web-designer-programmer-or-freelancer-work-on-web-and-ui-application-development-usability-ui-and-ux-designers-creating-functional-web-interface-design-for-websites-png.png", 
      author: "John Doe", 
      authorProfilePic: "https://randomuser.me/api/portraits/men/1.jpg", 
      category: "Design",
      description: "A detailed guide on how to present your UX review effectively, making your ideas clear and actionable for your team and clients.",
    },
    {
      title: "Migrating to Linear 101",
      date: "09 Jan 2024",
      image: "https://cdn-icons-png.flaticon.com/512/10169/10169718.png",
      author: "Jane Smith",
      authorProfilePic: "https://randomuser.me/api/portraits/women/1.jpg",
      category: "Product",
      description: "Learn the basics of Linear and how to smoothly migrate your project management tasks from legacy systems to Linear.",
    },
    {
      title: "Building Your API Stack",
      date: "08 Jan 2024",
      image: "https://www.webstackacademy.com/wp-content/uploads/2023/01/Full-Stock-Hero.png",
      author: "Alex Johnson",
      authorProfilePic: "https://randomuser.me/api/portraits/men/2.jpg",
      category: "Software Engineering",
      description: "This post covers how to build and structure an API stack from scratch, providing the foundation for your web applications.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="flex justify-between items-center mb-12 px-6 lg:px-16">
        <div>
          <h2 className="text-2xl font-extrabold text-[#E63F3A]">Our blog</h2>
          {/* Latest Blog Posts section heading */}
          <h3 className="text-3xl font-semibold text-[#101828] mt-6">Latest blog posts</h3>
          <p className="mt-3 text-lg text-[#475467]">Tools and strategies modern teams need to help their companies grow.</p>
        </div>
        <button className="text-sm text-white font-semibold bg-[#E63F3A] hover:bg-[#d73831] transition duration-300 py-2 px-6 rounded-full">
          View All Posts
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 lg:px-16">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            date={blog.date}
            image={blog.image}
            author={blog.author}
            authorProfilePic={blog.authorProfilePic}
            category={blog.category}
            description={blog.description}
          />
        ))}
      </div>

      {/* Call-to-Action (CTA) Section */}
      <div className="bg-[#F9FAFB] py-16 px-6 lg:px-16 mt-16 text-center">
        <h2 className="text-4xl font-extrabold text-[#101828]">Start your free trial</h2>
        <p className="mt-4 text-lg text-[#475467]">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          {/* Learn More Button */}
          <button className="px-8 py-3 bg-[#D0D5DD] text-[#101828] font-semibold rounded-full hover:bg-[#C0C7CD] transition duration-300">
            Learn More
          </button>
          {/* Get Started Button */}
          <button className="px-8 py-3 bg-[#E63F3A] text-white font-semibold rounded-full hover:bg-[#d73831] transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ title, date, image, author, authorProfilePic, category, description }) => (
  <div className="overflow-hidden rounded-lg shadow-xl bg-white transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
    {/* Blog Image */}
    <img src={image} alt={title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />

    {/* Blog Content */}
    <div className="p-6">
      <div className="flex items-center mb-3">
        <img src={authorProfilePic} alt={author} className="w-10 h-10 rounded-full mr-4" />
        <p className="text-sm text-gray-600">{author}</p>
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-gray-600 transition duration-300">
        {title}
      </h3>
      <p className="text-gray-500 text-sm">{date}</p>
      {/* Blog Category */}
      <p className="mt-2 text-sm text-gray-500 italic">{category}</p>
      {/* Blog Description */}
      <p className="mt-3 text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

export default Blog;
