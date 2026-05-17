import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <motion.h1 
          initial={{ letterSpacing: '0px', filter: 'blur(10px)' }}
          animate={{ letterSpacing: '10px', filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-netflix-red text-6xl md:text-8xl font-black uppercase tracking-tighter"
        >
          NETFLIX_CLONE
        </motion.h1>
        <motion.div 
          className="h-1 bg-netflix-red mt-2"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default Loader;
