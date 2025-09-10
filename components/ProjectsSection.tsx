
import React from 'react';
import { motion } from 'framer-motion';
import beboiler from '../images/bb.png'
import tdintigami from '../images/tdintigami.png'
import c_terminal from '../images/c_terminal.jpeg'
const projects = [
    {
        title: "TDINTigami",
        category: "Data Visualization",
        duration: "2023",
        date: "Nov 2023",
        image: tdintigami,
        description: "An interactive platform featuring every unique quarterback touchdown-interception ratio in a season in the history of the NFL. Check it out at",
        websiteUrl: "https://tdintigami.com",
        technologies: [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" }
        ]
    },
    {
        title: "BeBoiler",
        category: "Mobile App",
        duration: "2024",
        date: "Dec 2024",
        image: beboiler,
        description: "A full stack social media app for Purdue students to explore and share local monuments.",
        websiteUrl: null,
        technologies: [
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactnative/reactnative-original-wordmark.svg" }
        ]
    },
    {
        title: "Custom Shell in C",
        category: "Low-Level Programming",
        duration: "2025",
        date: "Apr 2025",
        image: c_terminal,
        description: "A fully functional shell interpreter built from the ground up that combines features from other shells such as bash and csh.",
        websiteUrl: null,
        technologies: [
            { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" }
        ]
    }
];

const ProjectCard: React.FC<{
    title: string;
    category: string;
    duration: string;
    date: string;
    image: string;
    description: string;
    websiteUrl: string | null;
    technologies: Array<{ name: string; icon: string }>;
    isLeft: boolean;
    index: number;
}> = ({ title, category, duration, date, image, description, websiteUrl, technologies, isLeft, index }) => {
    return (
        <motion.div
            className={`flex items-center w-full mb-16 
                md:flex-row md:${isLeft ? 'flex-row' : 'flex-row-reverse'}
                flex-col`}
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
        >
            {/* Timeline Node */}
            <div className="flex-shrink-0 w-full md:w-24 flex justify-center mb-4 md:mb-0">
                <div className="relative">
                    <div className="w-4 h-4 bg-pink-400 rounded-full border-4 border-black shadow-lg"></div>
                    {/* Timeline Line - Hidden on mobile */}
                    {index < projects.length - 1 && (
                        <div className="hidden md:block absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-pink-400 to-cyan-400"></div>
                    )}
                </div>
            </div>

            {/* Date */}
            <div className={`flex-shrink-0 w-full md:w-32 text-center mb-4 md:mb-0
                md:${isLeft ? 'mr-8' : 'ml-8'}`}>
                <p className="text-sm font-mono text-pink-400 bg-black/50 px-3 py-1 rounded-lg border border-pink-400/30 inline-block">
                    {date}
                </p>
            </div>

            {/* Content Card */}
            <motion.div
                className="flex-1 max-w-lg bg-white/10 backdrop-blur-sm rounded-xl border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 hover:bg-white/15 w-full"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0">
                        <img
                            src={image}
                            alt={`${title} preview`}
                            className="w-20 h-20 rounded-lg object-cover bg-white/20 border-2 border-pink-400/30"
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-pink-400 mb-1">{title}</h3>
                        <p className="text-lg text-cyan-400 font-semibold mb-1">{category}</p>
                    </div>
                </div>
                
                <p className="text-gray-200 leading-relaxed mb-6">
                    {description}
                    {websiteUrl && (
                        <span className="ml-1">
                            <a 
                                href={websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-300 hover:text-pink-400 font-bold font-mono text-lg underline decoration-pink-400/50 hover:decoration-pink-400 transition-all duration-300 hover:scale-105 inline-block transform hover:-translate-y-0.5"
                            >
                                tdintigami.com
                            </a>
                        </span>
                    )}
                </p>
                
                <div>
                    <h4 className="text-sm font-semibold text-pink-400 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-4">
                        {technologies.map((tech, techIndex) => (
                            <motion.div
                                key={techIndex}
                                className="flex flex-col items-center space-y-2 bg-white/10 rounded-lg px-4 py-3 border border-pink-400/20"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-8 h-8"
                                />
                                <span className="text-xs text-gray-200 font-mono text-center">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const ProjectsSection: React.FC = () => {
    return (
        <motion.section
            id="projects"
            className="min-h-screen py-20 px-4 sm:px-8 relative overflow-hidden cyber-bg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2 
                        className="text-4xl md:text-6xl font-pixel text-pink-400 mb-4 animate-flicker"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        // Projects
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-cyan-400 font-mono"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        print("Showcasing my work.")
                    </motion.p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Central Timeline Line - Hidden on mobile */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-pink-400 via-cyan-400 to-pink-400"></div>
                    
                    {/* Project Cards */}
                    <div className="relative">
                        {projects.map((project, index) => (
                            <ProjectCard 
                                key={index}
                                {...project}
                                isLeft={index % 2 === 0}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default ProjectsSection;
