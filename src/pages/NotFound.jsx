import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="relative h-screen w-screen bg-cover bg-center flex items-center justify-center text-center px-4" style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bca1-0746f3368b4a/4e0538a3-2f8d-4f10-b969-95e54611425e/IN-en-20220502-popsignuptwoweeks-perspective_alpha_website_large.jpg')" }}>
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10">
        <h1 className="text-6xl md:text-9xl font-black text-white mb-4">Lost your way?</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Sorry, we can't find that page. You'll find lots to explore on the home page.
        </p>
        <Link 
          to="/" 
          className="bg-white text-black px-8 py-3 rounded font-bold text-lg hover:bg-gray-200 transition"
        >
          NETFLIX_CLONE Home
        </Link>
        <div className="mt-12 border-l-4 border-netflix-red pl-6 py-2 text-left inline-block">
          <span className="text-white text-3xl font-light">Error Code <span className="font-bold">NSES-404</span></span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
