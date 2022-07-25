import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen md:px-16 px-4 bg-rockBlue">
      <div className="flex flex-col items-center justify-center bg-white py-10 px-5 sm:p-12 md:p-20 lg:p-32 shadow-xl border border-gray-200">
        <h1 className="text-7xl font-bold pb-2 animate-bounce">404</h1>
        <h2 className="lg:text-5xl md:text-4xl text-2xl font-bold text-gray-800 py-2">
          Page Not Found
        </h2>
        <p className="text-base text-gray-600 py-2 text-center">
          The page you are looking might have been moved or no longer exists.
        </p>
        <Link to="/" className="px-4 py-3 font-bold text-white mt-10 shadow-lg">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
