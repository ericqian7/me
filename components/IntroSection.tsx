import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ResumePreview from './ResumePreview';
import pge from '../images/pge.png'
import outdoor from '../images/outdoor.jpg'
import purdue from '../images/purdue.png'
import noodles from '../images/noodles.jpg'
import code from '../images/code.jpg'
import climb from '../images/climb.jpg'
const ArrowDownIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const IntroSection: React.FC = () => {
  const phrasesWithImages = [
    {
      phrase: "a passionate developer",
      image: code
    },
    {
      phrase: "an outdoorsman",
      image: outdoor
    },
    {
      phrase: "a Senior at Purdue",
      image: purdue
    },
    {
      phrase: "an aspiring chef",
      image: noodles
    },
    {
      phrase: "a climbing enthusiast",
      image: climb
    }

  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) =>
        prevIndex === phrasesWithImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [phrasesWithImages.length]);

  return (
        <section 
        id="intro" 
        className="min-h-screen flex items-center justify-center p-4 sm:p-8 bg-gray-900 relative overflow-hidden pt-20"
        >
        <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div className="md:w-1/3 w-1/2">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentPhraseIndex}
                src={phrasesWithImages[currentPhraseIndex].image}
                alt={phrasesWithImages[currentPhraseIndex].phrase}
                className="rounded-full shadow-2xl object-cover w-full h-auto aspect-square border-4 border-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>
          
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-cyan-300 mb-2">Eric Qian</h1>
            
            <div className="text-xl md:text-2xl font-semibold text-pink-400 mb-4">
              <div className="mb-2">I am...</div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhraseIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-pink-400"
                >
                  {phrasesWithImages[currentPhraseIndex].phrase}
                </motion.div>
              </AnimatePresence>
            </div>
            
            <p className="font-mono text-gray-300 leading-relaxed mb-6">
              Hello! I'm Eric Qian, a senior at Purdue University studying Computer Science. I'm interested in solving complex problems with code. I'm graduating in December 2025 and looking for new grad roles in software engineering, so feel free to check out my resume below and reach out!
            </p>
            <ResumePreview />
          </div>
        </motion.div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform duration-200"
        onClick={() => {
          const nextSection = document.getElementById('experience');
          if (nextSection) {
            const targetPosition = nextSection.offsetTop;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 3000; // 3 seconds for very slow scroll
            let startTime: number | null = null;
            
            const animateScroll = (currentTime: number) => {
              if (startTime === null) startTime = currentTime;
              const timeElapsed = currentTime - startTime;
              const progress = Math.min(timeElapsed / duration, 1);
              
              // Easing function for smooth deceleration
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              
              window.scrollTo(0, startPosition + distance * easeOutQuart);
              
              if (progress < 1) {
                requestAnimationFrame(animateScroll);
              }
            };
            
            requestAnimationFrame(animateScroll);
          }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowDownIcon />
      </motion.div>
    </section>
  );
};

export default IntroSection;