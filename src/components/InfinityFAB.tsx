import { Link, useLocation } from 'react-router';
import { Infinity as InfinityIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InfinityFAB() {
  const location = useLocation();

  // Hide FAB when user is already on the Infinity page
  if (location.pathname === '/products/infinity') return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100]"
    >
      <Link
        to="/products/infinity"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-black text-white rounded-full shadow-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-110 group relative border-2 border-white/10 overflow-hidden"
        title="Discover Infinity"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <InfinityIcon className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 animate-pulse group-hover:animate-none" />
      </Link>
    </motion.div>
  );
}
