
import React from 'react';
import { motion } from 'framer-motion';
import PhotoCard from './PhotoCard';
import bear from '../images/bear.jpeg'
import picrocks from '../images/picrocks.jpeg'
import yosemite from '../images/yosemite.jpg'
import pointreyes from '../images/pointreyes.jpg'

const photos = [
    {
        title: "Point Reyes",
        imageUrl: pointreyes
    },
    {
        title: "Bear in Yellowstone",
        imageUrl: bear
    },
    {
        title: "Yosemite",
        imageUrl: yosemite
    },
    {
        title: "Pictured Rocks",
        imageUrl: picrocks
    }
];

const OutdoorsSection: React.FC = () => {
    return (
        <section id="outdoors" className="py-20 px-4 sm:px-8 bg-gray-900">
            <div className="w-full max-w-6xl mx-auto text-center">
                <motion.h2 
                    className="text-4xl md:text-5xl font-bold text-cyan-300 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    The Great Outdoors
                </motion.h2>
                <motion.p 
                    className="font-mono text-lg text-gray-300 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
#backpacking. #bouldering. #orienteering. #summit. #scramble. #campfirecook. #hammocklife. #treeline. #switchback. #basecamp. #waterfilter.
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
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

export default OutdoorsSection;
