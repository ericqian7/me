import React from 'react';
import { motion } from 'framer-motion';
import pge from '../images/pge.png';
import sectech from '../images/sectech.png';
import palantir from '../images/palantir.png';
import pdi from '../images/pdi.png';
const workExperiences = [
    {
        company: "Pacific Data Integrators",
        position: "Junior Data Engineer",
        duration: "Summer 2025",
        date: "Sep 2025 - Present",
        logo: pdi,
        description: "Continuing with Pacific Gas & Electric as a part-time Junior Data Engineer contractor, building on my prior internship experience with the same team.",
        responsibilities: [
 
        ],
        technologies: [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Apache Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
            { name: "Foundry", icon: palantir },
            { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
        ]
    },
    {
        company: "Pacific Gas & Electric",
        position: "Data Engineering Intern",
        duration: "Fall 2025",
        date: "May 2025 - Aug 2025",
        logo: pge,
        description: "PG&E is a natural gas and electric utilities company serving 5.2 million households in the northern two-thirds of California.",
        responsibilities: [
            "Created data pipelines to monitor greenhouse gas emissions from meter leaks.",
            "Ensured accurate reporting of emissions data to the California Public Utilities Commission (CPUC)."
        ],
        technologies: [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Apache Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
            { name: "Foundry", icon: palantir },
            { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
        ]
    },
    {
        company: "Securitas Technology",
        position: "Backend Software Engineering Intern",
        duration: "Spring 2024",
        date: "Apr 2024 - May 2025",
        logo: sectech,
        description: `Securitas Technology is a world leader and global provider of security, health and safety technologies.`,
        responsibilities: [
            "Created multithreaded Python scripts to obtain ZIP+4 codes and website fields for 1.25 million Salesforce accounts.",
            "Developed several ETL data pipelines to integrate Emplifi API data into Google Cloud."
        ],
        technologies: [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
            { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
        ]
    }
];

const WorkExperienceCard: React.FC<{
    company: string;
    position: string;
    duration: string;
    date: string;
    logo: string;
    description: string;
    responsibilities?: string[];
    technologies: Array<{ name: string; icon: string }>;
    isLeft: boolean;
    index: number;
}> = ({ company, position, duration, date, logo, description, responsibilities = [], technologies, isLeft, index }) => {
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
                    <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-black shadow-lg"></div>
                    {/* Timeline Line - Hidden on mobile */}
                    {index < workExperiences.length - 1 && (
                        <div className="hidden md:block absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-cyan-400 to-pink-400"></div>
                    )}
                </div>
            </div>

            {/* Date */}
            <div className={`flex-shrink-0 w-full md:w-32 text-center mb-4 md:mb-0
                md:${isLeft ? 'mr-8' : 'ml-8'}`}>
                <p className="text-sm font-mono text-cyan-400 bg-black/50 px-3 py-1 rounded-lg border border-cyan-400/30 inline-block">
                    {date}
                </p>
            </div>

            {/* Content Card */}
            <motion.div
                className="flex-1 max-w-lg bg-white/10 backdrop-blur-sm rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:bg-white/15 w-full"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0">
                        <img
                            src={logo}
                            alt={`${company} logo`}
                            className="w-20 h-20 rounded-lg object-cover bg-white/20 border-2 border-cyan-400/30"
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-cyan-400 mb-1">{company}</h3>
                        <p className="text-lg text-pink-400 font-semibold mb-1">{position}</p>
                    </div>
                </div>
                
                <p className="text-gray-200 leading-relaxed mb-2">{description}</p>
                {responsibilities.length > 0 && (
                    <>
                        <div className="flex items-center my-4">
                            <span className="flex-1 h-px bg-cyan-400/40"></span>
                            <span className="mx-3 text-xs uppercase tracking-widest text-cyan-400/80 font-bold">My Role</span>
                            <span className="flex-1 h-px bg-cyan-400/40"></span>
                        </div>
                        <ul className="list-disc list-inside text-gray-200 mb-6">
                            {responsibilities.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </>
                )}
                
                <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-4">
                        {technologies.map((tech, techIndex) => (
                            <motion.div
                                key={techIndex}
                                className="flex flex-col items-center space-y-2 bg-white/10 rounded-lg px-4 py-3 border border-cyan-400/20"
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

const WorkExperienceSection: React.FC = () => {
    return (
        <motion.section
            id="experience"
            className="min-h-screen py-20 px-4 sm:px-8 relative overflow-hidden cyber-bg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2 
                        className="text-4xl md:text-6xl font-pixel text-cyan-400 mb-4 animate-flicker"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        // Work Experience
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-pink-400 font-mono"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        print("Hello, job.")
                    </motion.p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Central Timeline Line - Hidden on mobile */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-400 via-pink-400 to-cyan-400"></div>
                    
                    {/* Work Experience Cards */}
                    <div className="relative">
                        {workExperiences.map((experience, index) => (
                            <WorkExperienceCard 
                                key={index}
                                {...experience}
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

export default WorkExperienceSection;
