import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import resume from '../Eric_Qian_resume.pdf';
const ResumePreview: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleExpansion = () => {
        // Directly open the PDF in full screen
        window.open(resume, '_blank');
    };

    return (
        <div className="relative">
            {/* Preview Card */}
            <motion.div
                className={`bg-gray-900/50 backdrop-blur-sm border-2 border-cyan-400/50 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] ${
                    isExpanded ? 'hidden' : 'block'
                }`}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={toggleExpansion}
            >
                <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-20 bg-cyan-400/20 border-2 border-cyan-400/50 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-cyan-300 mb-1">Eric Qian - Resume</h3>
                        <p className="text-gray-300 font-mono text-sm">Software Engineer</p>
                        <p className="text-pink-400 text-xs">Click to open resume</p>
                    </div>
                </div>
                
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Education:</span>
                        <span className="text-cyan-300">Purdue University</span>
                    </div>
                </div>
            </motion.div>

            {/* Expanded Resume */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) {
                                setIsExpanded(false);
                            }
                        }}
                    >
                        <motion.div
                            className="bg-gray-900 border-2 border-cyan-400/50 rounded-xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden"
                            initial={{ y: 50 }}
                            animate={{ y: 0 }}
                            exit={{ y: 50 }}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-cyan-400/30">
                                <h2 className="text-xl font-bold text-cyan-300">Eric Qian - Resume</h2>
                                <button
                                    onClick={() => setIsExpanded(false)}
                                    className="text-gray-400 hover:text-pink-400 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* PDF Viewer */}
                            <div className="flex-1 p-4">
                                <iframe
                                    src={resume}
                                    className="w-full h-full rounded-lg border border-cyan-400/30"
                                    title="Resume PDF"
                                />
                            </div>

                            {/* Footer */}
                            <div className="p-4 border-t border-cyan-400/30 flex justify-between items-center">
                                <p className="text-sm text-gray-400 font-mono">
                                std::cout &lt;&lt; "#Employed\n";
                                </p>
                                <a
                                    href={resume}
                                    download
                                    className="inline-flex items-center bg-cyan-400 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-pink-500 transition-colors"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download PDF
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ResumePreview; 