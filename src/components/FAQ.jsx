import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "Is there a free trial available?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
    { question: "Can I change my plan later?", answer: "Yes, you can switch plans at any time." },
    { question: "What is your cancellation policy?", answer: "You can cancel anytime, no questions asked." },
    { question: "Can other info be added to an invoice?", answer: "You can reach support via email at support@zysk.com or chat with us through the website." },
    { question: "How does billing work?", answer: "No, we are transparent with all pricing. You only pay the listed price for your plan." },
    { question: "How do I change my account email?", answer: "We accept major credit cards, PayPal, and bank transfers." },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-4">Frequently asked questions</h2>
      <p className="text-center text-lg text-gray-600 mb-8">
        Everything you need to know about the product and billing.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md bg-white"
          >
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              <span className="text-red-500 text-xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Profile Pictures and Text */}
      <div className="mt-12 text-center">
        <div className="flex justify-center space-x-[-12px] mb-4">
          {/* Profile Images in Circles (Attached) */}
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <img src="https://www.shutterstock.com/image-vector/male-face-avatar-on-white-260nw-562359640.jpg" alt="Profile 1" className="w-full h-full object-cover" />
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <img src="https://thumbs.dreamstime.com/b/colourful-male-face-circle-flat-style-cartoon-vector-icon-modern-design-men-person-silhouette-avatar-profile-round-portrait-171296941.jpg" alt="Profile 2" className="w-full h-full object-cover" />
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <img src="https://thumbs.dreamstime.com/b/colourful-male-face-circle-flat-style-cartoon-vector-icon-modern-design-men-person-silhouette-avatar-profile-round-portrait-171297201.jpg" alt="Profile 3" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Texts */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Still have questions?</h3>
        <p className="text-gray-600 mb-6">
          Can't find the answer you're looking for? Please chat to our friendly team.
        </p>
        {/* Button */}
        <button className="bg-[#E63F3A] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default FAQ;
