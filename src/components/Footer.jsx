import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-start space-y-8 md:space-y-0">
        <FooterColumn
          title="Product"
          links={[
            { name: "Overview" },
            { name: "Features" },
            { name: "Solutions", highlight: true },
            { name: "Tutorials" },
            { name: "Pricing" },
            { name: "Releases" },
          ]}
        />
        <FooterColumn
          title="Company"
          links={[
            { name: "About us" },
            { name: "Careers" },
            { name: "Press" },
            { name: "News" },
            { name: "Media kit" },
            { name: "Contact" },
          ]}
        />
        <FooterColumn
          title="Resources"
          links={[
            { name: "Blog" },
            { name: "Newsletter" },
            { name: "Events" },
            { name: "Help centre" },
            { name: "Tutorials" },
            { name: "Support" },
          ]}
        />
        <FooterColumn
          title="Use cases"
          links={[
            { name: "Startups" },
            { name: "Enterprise" },
            { name: "Government" },
            { name: "SaaS centre" },
            { name: "Marketplaces" },
            { name: "Ecommerce" },
          ]}
        />
        <FooterColumn
          title="Social"
          links={[
            { name: "Twitter" },
            { name: "LinkedIn" },
            { name: "Facebook" },
            { name: "GitHub" },
            { name: "AngelList" },
            { name: "Dribbble" },
          ]}
        />
        <FooterColumn
          title="Legal"
          links={[
            { name: "Terms" },
            { name: "Privacy" },
            { name: "Cookies" },
            { name: "Licenses" },
            { name: "Settings" },
            { name: "Contact" },
          ]}
        />
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 flex justify-between items-center border-t border-gray-200 pt-6 space-x-6">
        <div className="flex items-center space-x-4 ml-36"> {/* Added ml-4 here */}
          <img
            src="https://zysk.tech/wp-content/uploads/2024/12/cropped-favicon-removebg-preview.png"
            alt="Zysk Logo"
            className="h-10"
          />
        </div>
        <div className="flex items-center justify-end">
          <p className="text-gray-600 text-sm mr-24">
            © 2077 Zysk Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => (
  <div className="w-full md:w-auto flex-shrink-0">
    <h4 className="text-lg font-semibold mb-4 text-gray-800">{title}</h4>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.name} className="flex items-center justify-between">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition-colors flex items-center"
          >
            {link.name}
            {link.highlight && (
              <span className="ml-2 px-1.5 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">
                New
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
