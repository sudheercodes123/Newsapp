// import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-3xl font-bold">
          <Link to="/" className="hover:text-purple-400">
            NewsApp
          </Link>
        </h1>
        <nav className="space-x-6">
          <Link
            to="/"
            className="hover:text-purple-400 font-medium text-lg transition"
          >
            Home
          </Link>
          <Link
            to="/top-headlines"
            className="hover:text-purple-400 font-medium text-lg transition"
          >
            Top Headlines
          </Link>
          <Link
            to="/everything"
            className="hover:text-purple-400 font-medium text-lg transition"
          >
            All News
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
