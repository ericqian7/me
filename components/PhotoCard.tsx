
import React from 'react';
import { motion } from 'framer-motion';

interface PhotoCardProps {
    title: string;
    imageUrl: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ title, imageUrl }) => {
    return (
        <motion.div 
            className="relative rounded-xl overflow-hidden shadow-lg group bg-gray-900/50 backdrop-blur-sm border-2 border-cyan-400/50 hover:border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <img src={imageUrl} alt={title} className="w-full h-80 object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-cyan-300 text-2xl font-bold group-hover:text-pink-400 transition-colors duration-300">{title}</h3>
            </div>
        </motion.div>
    );
};

export default PhotoCard;
