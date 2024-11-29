// import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-12 w-full fixed bottom-0">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} NewsApp. All rights reserved.
        </p>
        {/* <div className="mt-4 text-gray-300 text-xs">
          <a href="/privacy" className="hover:text-purple-400">
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a href="/terms" className="hover:text-purple-400">
            Terms & Conditions
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;

