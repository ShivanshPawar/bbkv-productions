import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../index.css'
import LightRays from "./Background.js/LightRays/LightRays";

const textVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.8, ease: 'easeOut' }
    }),
};

const Hero = () => {
    useEffect(() => {
        const audio = new Audio('/rays-sound.mp3');
        audio.play();

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    return (
        <section id='home' className="hero w-full h-screen flex items-center justify-center relative overflow-hidden bg-black text-white px-4">
            {/* Light Rays Background */}
            <div className="absolute inset-0 z-0">
                <LightRays />
            </div>

            {/* Foreground Content */}
            <div className=" top-6 relative z-10 flex flex-col items-center text-center gap-8">
                <motion.h1
                    className="text-[10vw] md:text-[10vw] font-extrabold leading-none"
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={textVariant}
                >
                    BBKV
                </motion.h1>

                <motion.h1
                    className="cursor-target text-[14vw] md:text-[10vw] font-black leading-none"
                    style={{ color: "#FEC700" }}
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={textVariant}
                >
                    PRODUCTIONS
                </motion.h1>

                {/* Glitch Paragraph */}
                <motion.p
                    className="text-sm md:text-lg max-w-2xl text-gray-300 glitch-font relative after:content-[attr(data-text)] after:absolute after:left-0 after:w-full after:h-full after:text-gray-400 after:animate-glitch"
                    //   data-text="Lights. Camera. Laughter. Enter the world of stories, humor, and heart."
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={textVariant}
                >
                    Lights. Camera. Laughter.
                    <br />Enter the world of stories, humor, and heart.
                </motion.p>

                <hr className='w-[50%]' />

                {/* Scroll Down CTA */}
                <motion.div
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={textVariant}
                    className="mt-6 text-sm uppercase tracking-wide text-gray-300 animate-bounce"
                >
                    Scroll Down
                    <br />   👇
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
