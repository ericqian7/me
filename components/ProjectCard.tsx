
import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
    return (
        <motion.div
            className="bg-gray-900/50 backdrop-blur-sm border-2 border-cyan-400/50 rounded-lg overflow-hidden h-full flex flex-col group transition-all duration-300 hover:border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"
            whileHover={{ y: -10 }}
        >
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="p-6 flex-grow">
                <h3 className="text-2xl font-pixel text-cyan-300 group-hover:text-pink-400 transition-colors duration-300 mb-2">{title}</h3>
                <p className="font-mono text-gray-300">{description}</p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
