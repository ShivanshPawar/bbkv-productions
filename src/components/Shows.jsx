import React, { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { motion } from 'framer-motion'


const videos = [
    {
        title: "Revolutionaries – Official Trailer",
        videoId: "QwGwe6_ZVMQ",
        rating: "Coming Soon",
        description:
            "A gripping period drama showcasing India’s unsung freedom fighters. Produced by BBKV & Amazon Prime, releasing in 2026.",
    },
    {
        title: "Dhindora",
        videoId: "IUsiTOUo3HE",
        rating: "8.8",
        description:
            "Bhuvan Bam plays 10 quirky characters in this hilarious story of a middle-class lottery twist. A viral BBKV original with over 500M+ views.",
    },
    {
        title: "Plus Minus",
        videoId: "jKyXUJceZ6k",
        rating: "8.5",
        description:
            "A thoughtful short film about two strangers sharing life lessons on a train. Starring Bhuvan Bam and Divya Dutta, Filmfare winner.",
    },
    {
        title: "Taaza Khabar",
        videoId: "zm6xa3ggt5A",
        rating: "8.1",
        description:
            "A sanitation worker's life changes after gaining future-reading powers. Bhuvan Bam shines in this fantasy-thriller series on Hotstar.",
    },
    {
        title: "Rafta-Rafta",
        videoId: "jflj9Watzl4",
        rating: "7.2",
        description:
            "A light-hearted romantic comedy series on Amazon miniTV about newlyweds Karan (Bhuvan Bam) and Nithya (Srishti Ganguli Rindani) navigating everyday marriage moments comically and emotionally",
    },
];

export default function shows() {
    const playerRef = useRef(null);
    const sectionRef = useRef(null);
    const [activeVideo, setActiveVideo] = useState(videos[0]);

    // Load YouTube IFrame API
    useEffect(() => {
        if (!window.YT) {
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            document.body.appendChild(tag);
        } else {
            loadPlayer();
        }

        window.onYouTubeIframeAPIReady = loadPlayer;
    }, []);

    // Load player with current video ID
    const loadPlayer = () => {
        playerRef.current = new window.YT.Player("ytplayer", {
            videoId: activeVideo.videoId,
            playerVars: {
                autoplay: 1,
                controls: 0,
                modestbranding: 1,
                loop: 1,
                rel: 0,
                showinfo: 0,
                mute: 0,
                playlist: activeVideo.videoId,
            },
            events: {
                onReady: (event) => {
                    event.target.unMute();
                    event.target.playVideo();
                },
            },
        });
    };

    // Re-load video on list click
    const handleVideoChange = (video) => {
        setActiveVideo(video);
        if (playerRef.current) {
            playerRef.current.loadVideoById(video.videoId);
            playerRef.current.unMute();
        }
    };

    // Play/pause on intersection
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (playerRef.current) {
                    if (entry.isIntersecting) {
                        playerRef.current.unMute();
                        playerRef.current.playVideo();
                    } else {
                        playerRef.current.pauseVideo();
                    }
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="shows"
            ref={sectionRef}
            className="w-full min-h-screen bg-black text-white px-6 md:px-20 py-16"
        >
            {/* Heading */}
            <div className="w-full bg-black py-12 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          BBKV <span className="text-yellow-400 cursor-target">SHOWS</span>
        </motion.h2>
      </div>

            {/* Layout */}
            <div className="flex flex-col md:flex-row gap-10">
                {/* Video Section */}
                <div className="relative w-full md:w-3/5 aspect-video rounded-xl overflow-hidden shadow-2xl">
                    {/* YouTube API player */}
                    <div className="absolute inset-0 z-0">
                        <div id="ytplayer" className="w-full h-full" />
                    </div>

                    {/* Overlay Description */}
                    <div className="absolute -bottom-2 left-0 w-full bg-black/80 z-20 p-4 backdrop-blur-sm">
                        <h3 className="text-lg font-semibold text-white">
                            🎬 {activeVideo.title}
                        </h3>
                        <p className="text-yellow-300">IMDb Rating: ⭐ {activeVideo.rating}/10</p>
                        <p className="text-sm text-white">{activeVideo.description}</p>
                    </div>
                </div>

                {/* Sidebar - Other Videos */}
                <div className="w-full md:w-2/5 flex flex-col gap-4">
                    <h4 className="px-4 text-2xl font-semibold mb-4 text-white">
                        More from BB Ki Vines
                    </h4>
                    {videos.map((video, i) => (
                        <button
                            key={i}
                            onClick={() => handleVideoChange(video)}
                            className={`cursor-target bg-white/5 hover:bg-white/10 px-4 py-3 rounded flex justify-between items-center ${video.videoId === activeVideo.videoId ? "border border-yellow-400" : ""
                                }`}
                        >
                            <div className="flex flex-col text-left">
                                <span className="text-white">{video.title}</span>
                                <span className="text-sm text-yellow-300">⭐ {video.rating} IMDb</span>
                            </div>
                            <Play className="w-4 h-4 text-yellow-300" />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
