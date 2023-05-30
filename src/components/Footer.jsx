import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto flex justify-center">
      <p className="text-sm md:text-base lg:text-lg">
        &copy; {new Date().getFullYear()} Elementric. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
// dark:text-gray-200 text-gray-700 text-center
