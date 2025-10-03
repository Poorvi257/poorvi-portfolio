import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-center py-6 border-t border-gray-800">
      <p className="text-gray-500">
        &copy; {new Date().getFullYear()} Poorvi Shrivastava. All Rights
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;
