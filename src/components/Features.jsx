import React from 'react';
import { FaInbox, FaRobot, FaChartLine, FaLock, FaHeadphones, FaDatabase } from 'react-icons/fa'; // Importing icons for new features

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      {/* Features Text Above the Analytics Title */}
      <p className="text-center text-xs font-semibold text-[#E63F3A] mb-4">Features</p>

      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-800">Analytics that feels like it's from the future</h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 lg:px-16">
        {/* Feature Items */}
        <FeatureItem
          title="Share team inboxes"
          description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
          icon={<FaInbox className="text-xl text-blue-500" />}
        />
        <FeatureItem
          title="Deliver instant answers"
          description="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
          icon={<FaRobot className="text-xl text-green-500" />}
        />
        <FeatureItem
          title="Manage your team with reports"
          description="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
          icon={<FaChartLine className="text-xl text-purple-500" />}
        />
        <FeatureItem
          title="Connect with customers"
          description="Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
          icon={<FaLock className="text-xl text-red-500" />}
        />
        <FeatureItem
          title="Connect the tools you already use"
          description="Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
          icon={<FaHeadphones className="text-xl text-teal-500" />}
        />
        <FeatureItem
          title="Our people make the difference"
          description="We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
          icon={<FaDatabase className="text-xl text-yellow-500" />}
        />
      </div>
    </section>
  );
};

const FeatureItem = ({ title, description, icon }) => (
  <div className="text-center">
    <div className="mb-4">
      <div className="p-3 bg-blue-100 rounded-full inline-block">
        {icon}
      </div>
    </div>
    <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
    <p className="mt-4 text-gray-600">{description}</p>
  </div>
);

export default Features;
