
import React from 'react';
import { motion } from 'framer-motion';
import PhotoCard from './PhotoCard';
import chicken from '../images/chicken.jpg'
import curry from '../images/curry.jpg'
import soup from '../images/soup.jpg'
import taco from '../images/taco.jpg'

const photos = [
    {
        title: "Soy Sauce Glazed Chicken",
        imageUrl: chicken
    },
    {
        title: "Thai Curry",
        imageUrl: curry
    },
    {
        title: "French Onion Soup",
        imageUrl: soup
    },
    {
        title: "Taco Tuesday",
        imageUrl: taco
    }
];

const CookingSection: React.FC = () => {
    return (
        <section id="cooking" className="py-20 px-4 sm:px-8 bg-gray-900">
            <div className="w-full max-w-6xl mx-auto text-center">
                <motion.h2 
                    className="text-4xl md:text-5xl font-bold text-cyan-300 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    From Code to Cuisine
                </motion.h2>
                <motion.p 
                    className="font-mono text-lg text-gray-300 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    #sousvide. #emulsify. #blanch. #braise. #deglaze. #render. #poach. #temper. #reduce. #caramelize. #julienne. #sear. #whip. #proof. #infuse. #laminate. #ferment. #confit. #clarify. #torch.
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <PhotoCard {...photo} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CookingSection;
