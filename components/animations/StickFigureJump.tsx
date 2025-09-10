import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StickFigureJump: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    // Stick figure jump animation
    const stickFigureY = useTransform(scrollYProgress, [0.2, 0.8], [0, -800]);
    const stickFigureRotate = useTransform(scrollYProgress, [0.2, 0.8], [0, 45]);
    
    // Head animation
    const headScale = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [1, 1.1, 1, 1.1]);
    const headRotate = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 5, -5, 5]);
    
// Arms flailing animation
const leftArmRotate = useTransform(
  scrollYProgress,
  [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
  [-30, -80, -10, -75, -5, -85, -20]
);

const rightArmRotate = useTransform(
  scrollYProgress,
  [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
  [30, 80, 10, 75, 5, 85, 20]
);

    // Legs animation
    const leftLegRotate = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [-20, -45, -30, -50]);
    const rightLegRotate = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [20, 45, 30, 50]);
    
    // Exclamation mark animation
    const exclamationOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
    const exclamationScale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1.2, 0]);
    const exclamationY = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, -20, -30]);

    return (
        <section
            ref={sectionRef}
            className="h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden"
        >
            {/* Cliff */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-gray-700 to-gray-600 rounded-t-full shadow-2xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-24 bg-gradient-to-t from-gray-600 to-gray-500 rounded-t-full"></div>
            </div>

            {/* Stick Figure */}
            <motion.div
                className="absolute bottom-32 left-1/2 transform -translate-x-1/2"
                style={{ 
                    y: stickFigureY, 
                    rotate: stickFigureRotate
                }}
            >
                {/* Head */}
                <motion.div
                    className="w-8 h-8 border-2 border-cyan-400 rounded-full mx-auto mb-1 relative"
                    style={{ 
                        scale: headScale, 
                        rotate: headRotate
                    }}
                >
                    {/* Eyes */}
                    <div className="absolute top-2 left-1.5 w-1 h-1 bg-cyan-400 rounded-full"></div>
                    <div className="absolute top-2 right-1.5 w-1 h-1 bg-cyan-400 rounded-full"></div>
                    {/* Mouth */}
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-cyan-400 rounded-full"></div>
                </motion.div>

                {/* Body (torso) */}
                <div className="relative">
                    <div className="w-0.5 h-16 bg-cyan-400 mx-auto"></div>
                    
                    {/* Left Arm */}
                    <motion.div
                        className="absolute top-2 left-1/2 w-0.5 h-12 bg-cyan-400 origin-top"
                        style={{ 
                            rotate: leftArmRotate,
                            transformOrigin: 'top center',
                            x: -2
                        }}
                    >
                        {/* Left Hand */}
                        <div className="absolute bottom-0 -left-0.5 w-1.5 h-1.5 border border-cyan-400 rounded-full"></div>
                    </motion.div>

                    {/* Right Arm */}
                    <motion.div
                        className="absolute top-2 left-1/2 w-0.5 h-12 bg-cyan-400 origin-top"
                        style={{ 
                            rotate: rightArmRotate,
                            transformOrigin: 'top center',
                            x: 2
                        }}
                    >
                        {/* Right Hand */}
                        <div className="absolute bottom-0 -left-0.5 w-1.5 h-1.5 border border-cyan-400 rounded-full"></div>
                    </motion.div>

                    {/* Left Leg */}
                    <motion.div
                        className="absolute -bottom-14 left-1/2 w-0.5 h-14 bg-cyan-400 origin-top"
                        style={{ 
                            rotate: leftLegRotate,
                            transformOrigin: 'top center',
                            x: -2
                        }}
                    >
                        {/* Left Foot */}
                        <div className="absolute bottom-0 -left-1 w-3 h-0.5 bg-cyan-400 rounded-full"></div>
                    </motion.div>

                    {/* Right Leg */}
                    <motion.div
                        className="absolute -bottom-14 left-1/2 w-0.5 h-14 bg-cyan-400 origin-top"
                        style={{ 
                            rotate: rightLegRotate,
                            transformOrigin: 'top center',
                            x: 2
                        }}
                    >
                        {/* Right Foot */}
                        <div className="absolute bottom-0 -left-1 w-3 h-0.5 bg-cyan-400 rounded-full"></div>
                    </motion.div>
                </div>

                {/* Exclamation mark */}
                <motion.div
                    className="absolute -top-12 -right-6 text-pink-400 text-3xl font-bold"
                    style={{ 
                        opacity: exclamationOpacity, 
                        scale: exclamationScale,
                        y: exclamationY
                    }}
                >
                    !
                </motion.div>
            </motion.div>

            {/* Falling particles effect */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: '20%',
                        opacity: useTransform(scrollYProgress, [0.2 + i * 0.02, 0.8], [0, 1]),
                        y: useTransform(scrollYProgress, [0.2 + i * 0.02, 0.8], [0, 800])
                    }}
                />
            ))}

            {/* Background stars */}
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-pink-400 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        opacity: useTransform(scrollYProgress, [0.1 + i * 0.01, 0.9], [0.3, 1]),
                        scale: useTransform(scrollYProgress, [0.1 + i * 0.01, 0.9], [0.5, 1])
                    }}
                />
            ))}
        </section>
    );
};

export default StickFigureJump;