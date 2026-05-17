import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { POSTER_SIZE, IMAGE_BASE_URL } from '../../services/tmdb';

const MovieCard = ({ movie, isLargeRow }) => {
  const [isHovered, setIsHovered] = useState(false);

  const imagePath = isLargeRow ? movie.poster_path : movie.backdrop_path || movie.poster_path;

  return (
    <div 
      className={`relative flex-shrink-0 transition-all duration-300 ease-out cursor-pointer ${isLargeRow ? 'w-[160px] md:w-[220px]' : 'w-[200px] md:w-[280px]'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`${isLargeRow ? POSTER_SIZE : IMAGE_BASE_URL}${imagePath}`}
        alt={movie.name || movie.title}
        className={`w-full h-full object-cover rounded-md shadow-lg transform transition duration-300 ${isHovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'}`}
      />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 0 }}
            animate={{ opacity: 1, scale: 1.1, y: -20 }}
            exit={{ opacity: 0, scale: 0.8, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full z-20 bg-netflix-dark rounded-md shadow-2xl overflow-hidden"
          >
            <img
              src={`${IMAGE_BASE_URL}${movie.backdrop_path || movie.poster_path}`}
              alt={movie.name || movie.title}
              className="w-full h-32 md:h-40 object-cover"
            />
            
            <div className="p-4 bg-netflix-dark">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center bg-white text-black hover:bg-white/80 transition">
                    <Play size={16} fill="currentColor" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-gray-500 flex items-center justify-center hover:border-white transition">
                    <Plus size={16} />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-gray-500 flex items-center justify-center hover:border-white transition">
                    <ThumbsUp size={16} />
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-gray-500 flex items-center justify-center hover:border-white transition">
                  <ChevronDown size={16} />
                </div>
              </div>
              
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-green-500 font-bold text-sm">
                  {Math.round(movie.vote_average * 10)}% Match
                </span>
                <span className="border border-gray-500 px-1 text-[10px] text-gray-300">18+</span>
                <span className="text-gray-300 text-sm">{movie.release_date?.split('-')[0] || movie.first_air_date?.split('-')[0]}</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-white font-medium">{movie.title || movie.name}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MovieCard;
