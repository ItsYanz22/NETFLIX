import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Bell, User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center space-x-4 md:space-x-10">
          <Link to="/" className="text-netflix-red text-2xl md:text-3xl font-black uppercase tracking-tighter">
            NETFLIX_CLONE
          </Link>
          <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
            <li className="hover:text-white transition cursor-pointer"><Link to="/">Home</Link></li>
            <li className="hover:text-white transition cursor-pointer">TV Shows</li>
            <li className="hover:text-white transition cursor-pointer">Movies</li>
            <li className="hover:text-white transition cursor-pointer">New & Popular</li>
            <li className="hover:text-white transition cursor-pointer">My List</li>
          </ul>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="flex items-center bg-black/40 border border-white/20 rounded-md px-2 py-1">
            <Search size={18} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Titles, people, genres" 
              className="bg-transparent border-none outline-none text-sm ml-2 w-24 md:w-48 focus:w-64 transition-all duration-300"
            />
          </div>
          <button className="text-white hover:text-gray-300 transition hidden sm:block">
            <Bell size={20} />
          </button>
          
          {user ? (
            <div className="group relative">
              <div className="flex items-center space-x-2 cursor-pointer">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                  alt="Profile" 
                  className="w-8 h-8 rounded"
                />
                <span className="hidden sm:inline text-sm font-medium">{user.email?.split('@')[0]}</span>
              </div>
              
              <div className="absolute right-0 mt-2 w-48 bg-black border border-white/10 rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-3 border-b border-white/10">
                  <p className="text-xs text-gray-400">Account</p>
                  <p className="text-sm font-medium truncate">{user.email}</p>
                </div>
                <Link to="/profile" className="flex items-center space-x-2 px-4 py-3 hover:bg-white/10 transition text-sm">
                  <User size={16} />
                  <span>Profile</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-2 px-4 py-3 hover:bg-white/10 transition text-sm text-netflix-red"
                >
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="bg-netflix-red text-white px-4 py-1.5 rounded text-sm font-bold hover:bg-[#ff0a16] transition">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
