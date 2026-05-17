import React from 'react';

const Facebook = ({ size = 24, className, ...props }) => (
  <svg 
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 24, className, ...props }) => (
  <svg 
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Twitter = ({ size = 24, className, ...props }) => (
  <svg 
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Youtube = ({ size = 24, className, ...props }) => (
  <svg 
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);


const Footer = () => {
  return (
    <footer className="max-w-[1000px] mx-auto py-16 px-4 text-gray-500 text-sm">
      <div className="flex space-x-6 mb-8 text-white">
        <Facebook size={24} className="cursor-pointer hover:text-gray-300 transition" />
        <Instagram size={24} className="cursor-pointer hover:text-gray-300 transition" />
        <Twitter size={24} className="cursor-pointer hover:text-gray-300 transition" />
        <Youtube size={24} className="cursor-pointer hover:text-gray-300 transition" />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="flex flex-col space-y-3">
          <a href="#" className="hover:underline">Audio Description</a>
          <a href="#" className="hover:underline">Investor Relations</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
        <div className="flex flex-col space-y-3">
          <a href="#" className="hover:underline">Help Centre</a>
          <a href="#" className="hover:underline">Jobs</a>
          <a href="#" className="hover:underline">Legal Notices</a>
          <a href="#" className="hover:underline">Ad Choices</a>
        </div>
        <div className="flex flex-col space-y-3">
          <a href="#" className="hover:underline">Gift Cards</a>
          <a href="#" className="hover:underline">Netflix Shop</a>
          <a href="#" className="hover:underline">Cookie Preferences</a>
        </div>
        <div className="flex flex-col space-y-3">
          <a href="#" className="hover:underline">Media Centre</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Corporate Information</a>
        </div>
      </div>
      
      <div className="mb-4">
        <button className="border border-gray-500 px-2 py-1 hover:text-white transition">
          Service Code
        </button>
      </div>
      
      <p className="text-xs">&copy; 2026 NETFLIX_CLONE | Created by <a href="https://github.com/ItsYanz22" target="_blank" rel="noopener noreferrer" className="hover:underline text-white font-bold">YanZ</a></p>
    </footer>
  );
};

export default Footer;
