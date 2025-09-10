import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WalkingThroughGrassAnimation: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

   // Enhanced bird flying animation
   const birdX = useTransform(scrollYProgress, [0, 1], [-15, 500]);
   const birdY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 32, 38, 20]);
   
   // Wing flapping animation - proper V-shaped wings that touch and flap
   const wingFlap = useTransform(scrollYProgress, [0, 1], [0, 20]);



   // Cloud movement - extended duration
   const cloudX = useTransform(scrollYProgress, [0, 1], [0, 150]);

   // Sun rotation - extended duration
   const sunRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

   // Extended animation ranges for longer scrolling experience
   const stickFigureX = useTransform(scrollYProgress, [0.1, 0.9], [-200, 200]);
   const stickFigureY = useTransform(scrollYProgress, [0.1, 0.9], [0, -25]);
   const headBob = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0, -3, 0]);
   const leftLegRotate = useTransform(scrollYProgress, [0.1, 0.3, 0.5, 0.7, 0.9], [-15, 15, -15, 15, -15]);
   const rightLegRotate = useTransform(scrollYProgress, [0.1, 0.3, 0.5, 0.7, 0.9], [15, -15, 15, -15, 15]);
   const leftArmRotate = useTransform(scrollYProgress, [0.1, 0.3, 0.5, 0.7, 0.9], [15, -15, 15, -15, 15]);
   const rightArmRotate = useTransform(scrollYProgress, [0.1, 0.3, 0.5, 0.7, 0.9], [-15, 15, -15, 15, -15]);

    return (
        <section
            ref={sectionRef}
            className="h-[60vh] md:h-screen flex items-center justify-center bg-gradient-to-b from-sky-400 via-sky-200 to-emerald-100 relative overflow-hidden"
        >
            {/* Animated clouds */}
            <motion.div 
                className="absolute top-12 left-10"
                style={{ x: cloudX }}
            >
                <div className="flex items-center">
                    <div className="w-16 h-12 bg-white rounded-full opacity-80"></div>
                    <div className="w-20 h-16 bg-white rounded-full opacity-80 -ml-4"></div>
                    <div className="w-14 h-10 bg-white rounded-full opacity-80 -ml-3"></div>
                </div>
            </motion.div>

            <motion.div 
                className="absolute top-20 right-20"
                style={{ x: useTransform(cloudX, v => v * -0.7) }}
            >
                <div className="flex items-center">
                    <div className="w-12 h-8 bg-white rounded-full opacity-70"></div>
                    <div className="w-16 h-12 bg-white rounded-full opacity-70 -ml-3"></div>
                    <div className="w-10 h-6 bg-white rounded-full opacity-70 -ml-2"></div>
                </div>
            </motion.div>


         

            {/* Realistic birds using SVG silhouettes */}
            <motion.div
                className="absolute left-0 w-full top-1/2 md:top-1/4"
                style={{
                    x: birdX,
                    y: birdY
                }}
            >
                {/* Bird formation */}
                {[
                    { x: 15, size: 1.2, delay: 0, color: '#222' },
                    { x: 22, size: 1, delay: 0.2, color: '#333' },
                    { x: 28, size: 1.3, delay: 0.1, color: '#222' },
                    { x: 35, size: 0.9, delay: 0.3, color: '#444' },
                    { x: 41, size: 1.1, delay: 0.15, color: '#333' }
                ].map((bird, index) => (
                    <motion.div
                        key={index}
                        className="absolute"
                        style={{ left: `${bird.x}%`, scale: bird.size }}
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                            duration: 1.2 + bird.delay * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: bird.delay
                        }}
                    >
                        {/* Cartoonish bird SVG */}
                        <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Tail */}
                            <polygon points="6,20 2,18 7,16" fill="#2563eb" stroke="#222" strokeWidth="1" />
                            {/* Body */}
                            <ellipse cx="16" cy="18" rx="10" ry="7" fill="#3b82f6" stroke="#222" strokeWidth="2" />
                            {/* Head */}
                            <ellipse cx="26" cy="13" rx="5" ry="5" fill="#3b82f6" stroke="#222" strokeWidth="2" />
                            {/* Beak */}
                            <polygon points="31,13 36,15 31,17" fill="#fbbf24" stroke="#b45309" strokeWidth="1" />
                            {/* Eye */}
                            <circle cx="28.5" cy="12.5" r="1.1" fill="#222" />
                            {/* Wing (animated) */}
                            <motion.ellipse
                                cx="13" cy="18" rx="6" ry="3.5"
                                fill="#60a5fa"
                                stroke="#222"
                                strokeWidth="1.5"
                                style={{ rotate: wingFlap, transformOrigin: '13px 18px' }}
                            />
                        </svg>
                    </motion.div>
                ))}
            </motion.div>



            {/* Enhanced floating particles with variety */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className={`absolute rounded-full ${
                        i % 3 === 0 ? 'w-3 h-3 bg-yellow-300' : 
                        i % 3 === 1 ? 'w-2 h-2 bg-emerald-400' : 
                        'w-1 h-1 bg-pink-300'
                    }`}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: '10%',
                        opacity: useTransform(scrollYProgress, [0.1 + i * 0.02, 0.9], [0, 0.8]),
                        y: useTransform(scrollYProgress, [0.1 + i * 0.02, 0.9], [0, -150]),
                        x: useTransform(scrollYProgress, [0.1 + i * 0.02, 0.9], [0, Math.sin(i) * 50])
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.1
                    }}
                />
            ))}

            {/* Twinkling stars */}
            {[...Array(25)].map((_, i) => (
                <motion.div
                    key={`star-${i}`}
                    className="absolute w-1 h-1 bg-yellow-200 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 50}%`,
                    }}
                    animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 2 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                />
            ))}
           {/* Walking Stick Figure */}
           <motion.div
               className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
               style={{
                   x: stickFigureX,
                   y: stickFigureY
               }}
           >
               {/* Head */}
               <motion.div
                   className="w-8 h-8 border-2 border-emerald-600 rounded-full mx-auto mb-1 relative"
                   style={{ y: headBob }}
               >
                   {/* Eyes */}
                   <div className="absolute top-2 left-1.5 w-1 h-1 bg-emerald-600 rounded-full"></div>
                   <div className="absolute top-2 right-1.5 w-1 h-1 bg-emerald-600 rounded-full"></div>
                   {/* Mouth */}
                   <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-emerald-600 rounded-full"></div>
               </motion.div>


               {/* Body (torso) */}
               <div className="relative">
                   <div className="w-0.5 h-16 bg-emerald-600 mx-auto"></div>
                  
                   {/* Left Arm */}
                   <motion.div
                       className="absolute top-2 left-1/2 w-0.5 h-12 bg-emerald-600 origin-top"
                       style={{
                           rotate: leftArmRotate,
                           transformOrigin: 'top center',
                           x: -2
                       }}
                   >
                       {/* Left Hand */}
                       <div className="absolute bottom-0 -left-0.5 w-1.5 h-1.5 border border-emerald-600 rounded-full"></div>
                   </motion.div>


                   {/* Right Arm */}
                   <motion.div
                       className="absolute top-2 left-1/2 w-0.5 h-12 bg-emerald-600 origin-top"
                       style={{
                           rotate: rightArmRotate,
                           transformOrigin: 'top center',
                           x: 2
                       }}
                   >
                       {/* Right Hand */}
                       <div className="absolute bottom-0 -left-0.5 w-1.5 h-1.5 border border-emerald-600 rounded-full"></div>
                   </motion.div>


                   {/* Left Leg */}
                   <motion.div
                       className="absolute -bottom-14 left-1/2 w-0.5 h-14 bg-emerald-600 origin-top"
                       style={{
                           rotate: leftLegRotate,
                           transformOrigin: 'top center',
                           x: -2
                       }}
                   >
                       {/* Left Foot */}
                       <div className="absolute bottom-0 -left-1 w-3 h-0.5 bg-emerald-600 rounded-full"></div>
                   </motion.div>


                   {/* Right Leg */}
                   <motion.div
                       className="absolute -bottom-14 left-1/2 w-0.5 h-14 bg-emerald-600 origin-top"
                       style={{
                           rotate: rightLegRotate,
                           transformOrigin: 'top center',
                           x: 2
                       }}
                   >
                       {/* Right Foot */}
                       <div className="absolute bottom-0 -left-1 w-3 h-0.5 bg-emerald-600 rounded-full"></div>
                   </motion.div>
               </div>
           </motion.div>
            {/* Realistic Sun (no rays, no face) */}
            <motion.div 
                className="absolute top-16 right-16"
                style={{ rotate: sunRotate }}
            >
                {/* Sun core with soft gradient and glow */}
                <div
                    className="w-32 h-32 rounded-full shadow-2xl relative"
                    style={{
                        background: 'radial-gradient(circle at 60% 40%, #fffde4 60%, #ffe066 100%)',
                        boxShadow: '0 0 80px 20px #ffe06688, 0 0 0 0 #fffde4'
                    }}
                >
                    {/* Soft outer glow */}
                    <div
                        className="absolute -inset-6 rounded-full pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, #ffe06655 60%, transparent 100%)',
                            filter: 'blur(12px)',
                            opacity: 0.7
                        }}
                    ></div>
                    {/* Subtle highlight */}
                    <div
                        className="absolute left-8 top-6 w-10 h-6 rounded-full"
                        style={{
                            background: 'linear-gradient(120deg, #fffbe6 60%, transparent 100%)',
                            opacity: 0.7,
                            filter: 'blur(2px)'
                        }}
                    ></div>
                </div>
            </motion.div>

            
        </section>
    );
};

export default WalkingThroughGrassAnimation;