import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">Aditya</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>

          <a href="#project" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <button
          className="bg-gradient-to-r from-red-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <a href="https://www.linkedin.com/in/adityagawandee/">Connect Me</a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
