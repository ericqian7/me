import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import chefImg from '../../images/chef.png';
import pan from '../../images/pan.png';
import egg from '../../images/egg.png';
import kitchen from '../../images/kitchen.png';

const ChefFlipAnimation: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Egg flip animation
  const eggY = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, -150, 0]);
  const eggRotate = useTransform(scrollYProgress, [0.3, 0.7], [0, 720]);
  
  // Speech bubble appears near the end of the scroll
  const bubbleOpacity = useTransform(scrollYProgress, [0.5, 0.9], [0, 1]);
  const bubbleScale = useTransform(scrollYProgress, [0.5, 0.9], [0.95, 1]);

  return (
    <section
      ref={sectionRef}
      id="cooking"
      className="h-1/2 bg-cover flex items-center justify-center relative overflow-hidden"

    >
      {/* Chef with cooking elements positioned relative to chef */}
      <div className="relative flex items-center justify-center">
        {/* Chef Image */}
        <img
          src={chefImg}
          alt="Chef"
          className="w-64 h-auto relative z-10"
        />

        {/* Pan Image - positioned relative to chef */}
        <img
          src={pan}
          alt="Pan"
          className="w-32 absolute bottom-8 -left-5 z-0"
        />

        {/* Egg Animation - positioned relative to pan */}
        <motion.img
          src={egg}
          alt="Egg"
          className="w-16 absolute bottom-16 -left-1 z-0"
          style={{ 
            y: eggY, 
            rotate: eggRotate
          }}
        />

        {/* Speech bubble - fades in near the end */}
        <motion.div 
          className="absolute top-16 left-3/4 md:left-52 -translate-x-1/2 md:translate-x-0 z-20"
          style={{ opacity: bubbleOpacity, scale: bubbleScale }}
        >
          <div className="relative">
            <div className="px-4 py-2 bg-white text-gray-900 rounded-xl shadow-lg border border-gray-200 font-semibold">
              #skills
            </div>
            {/* Tail */}
            <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-r-white border-t-transparent border-b-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChefFlipAnimation;
