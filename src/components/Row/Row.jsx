import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import tmdb from '../../services/tmdb';
import MovieCard from '../MovieCard/MovieCard';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const request = await tmdb.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const slide = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-4 px-4 md:px-12 group relative">
      <h2 className="text-lg md:text-2xl font-bold mb-4">{title}</h2>
      
      <div className="relative">
        <button 
          onClick={() => slide('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-black/80"
        >
          <ChevronLeft size={32} />
        </button>
        
        <div 
          ref={rowRef}
          className="flex space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth py-4"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} isLargeRow={isLargeRow} />
          ))}
        </div>
        
        <button 
          onClick={() => slide('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-black/80"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default Row;
