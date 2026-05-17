import React, { useState, useEffect } from 'react';
import { Play, Info } from 'lucide-react';
import tmdb, { requests, IMAGE_BASE_URL } from '../../services/tmdb';

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await tmdb.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  if (!movie) return <div className="h-[80vh] bg-netflix-black animate-pulse" />;

  return (
    <header 
      className="relative h-[80vh] md:h-[90vh] text-white overflow-hidden"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${IMAGE_BASE_URL}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      
      <div className="relative pt-48 md:pt-64 px-4 md:px-12 max-w-[800px] h-full flex flex-col justify-start">
        <h1 className="text-4xl md:text-6xl font-black mb-4 text-shadow-lg uppercase tracking-tight">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        
        <p className="text-sm md:text-lg font-medium max-w-[600px] mb-8 text-gray-200 text-shadow drop-shadow-md">
          {truncate(movie?.overview, 150)}
        </p>
        
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 bg-white text-black px-8 py-2 rounded font-bold hover:bg-white/80 transition shadow-lg">
            <Play size={24} fill="currentColor" />
            <span>Play</span>
          </button>
          <button className="flex items-center space-x-2 bg-gray-500/50 text-white px-8 py-2 rounded font-bold hover:bg-gray-500/40 transition backdrop-blur-sm shadow-lg">
            <Info size={24} />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
