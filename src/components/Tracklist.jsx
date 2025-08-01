import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';

const videos = [
    {
        id: 1,
        title: 'Song : Paisa',
        url: 'https://www.youtube.com/embed/Tb3x5I0ulCg',
    },
    {
        id: 2,
        title: 'Song : Dhindora',
        url: 'https://www.youtube.com/embed/l8zlKap1JEo',
    },
    {
        id: 3,
        title: 'Song : Safar',
        url: 'https://www.youtube.com/embed/Zqv5CBWt9yA',
    },
];

export default function BBKVCinema() {
    const videoRefs = useRef([]);
    const swiperRef = useRef();
    const sectionRef = useRef();
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentFullscreenIndex, setCurrentFullscreenIndex] = useState(null);

    const playVideo = (index) => {
        const iframe = videoRefs.current[index];
        if (iframe) {
            iframe.contentWindow.postMessage(
                JSON.stringify({ event: 'command', func: 'playVideo' }),
                '*'
            );
        }
    };

    const pauseAllVideos = () => {
        videoRefs.current.forEach((iframe) => {
            if (iframe) {
                iframe.contentWindow.postMessage(
                    JSON.stringify({ event: 'command', func: 'pauseVideo' }),
                    '*'
                );
            }
        });
    };

    const toggleFullScreen = (index) => {
        const iframe = videoRefs.current[index];
        if (!iframe) return;

        const wrapper = iframe.parentElement;

        if (!document.fullscreenElement) {
            wrapper.requestFullscreen?.();
            setIsFullscreen(true);
            setCurrentFullscreenIndex(index);
        } else {
            document.exitFullscreen?.();
            setIsFullscreen(false);
            setCurrentFullscreenIndex(null);
        }
    };

    const handleSlideChange = (swiper) => {
        swiperRef.current = swiper;
        pauseAllVideos();
        playVideo(swiper.activeIndex);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    pauseAllVideos();
                } else {
                    if (swiperRef.current) {
                        playVideo(swiperRef.current.activeIndex);
                    }
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    // Handle F key for fullscreen toggle
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key.toLowerCase() === 'f' && swiperRef.current) {
                toggleFullScreen(swiperRef.current.activeIndex);
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <section
            id='tracklist'
            ref={sectionRef}
            className="w-full bg-black text-white py-12 px-4 relative overflow-hidden"
        >
            {/* Animated Heading */}
            <div className="w-full bg-black py-2 text-center">
                <motion.h2
                    className="text-3xl md:text-5xl font-bold text-white"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    BBKV <span className="text-yellow-400 cursor-target">TRACKS</span>
                </motion.h2>
            </div>

            {/* Swiper Slider */}
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                loop={false}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                onSlideChange={handleSlideChange}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setTimeout(() => playVideo(swiper.activeIndex), 1000);
                }}
                className="w-full md:w-2/3 mx-auto"
            >
                {videos.map((video, index) => (
                    <SwiperSlide key={video.id}>
                        <div className="relative rounded-xl overflow-hidden shadow-2xl">
                            <iframe
                                ref={(el) => (videoRefs.current[index] = el)}
                                className="w-full aspect-video"
                                src={`${video.url}?enablejsapi=1&autoplay=1&mute=0&controls=0&loop=0&playlist=${video.url.split('/').pop()}`}
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title={video.title}
                            />
                            <button
                                onClick={() => toggleFullScreen(index)}
                                className="cursor-target absolute top-2 right-2 bg-yellow-400 text-black px-3 py-1 text-sm rounded hover:bg-yellow-500 transition-all"
                            >
                                {isFullscreen && currentFullscreenIndex === index
                                    ? 'Minimize'
                                    : 'Fullscreen'}
                            </button>
                        </div>
                        <p className="mt-3 text-center text-gray-300">{video.title}</p>
                    </SwiperSlide>
                ))}

                {/* Navigation Arrows */}
                <div className="swiper-button-prev !text-yellow-400 !text-3xl cursor-target"></div>
                <div className="swiper-button-next !text-yellow-400 !text-3xl cursor-target"></div>
            </Swiper>
        </section>
    );
}
