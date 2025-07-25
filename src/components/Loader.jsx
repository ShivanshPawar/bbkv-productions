// components/Loader.jsx
import { useEffect, useState } from "react";
import bbkvLogo from "../assets/logo.png";
import gsap from "gsap";
// import "../styles/loader.css";

export default function Loader({ onFinish }) {
  const [typedText, setTypedText] = useState("");
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const text = " Loading...";
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setTypedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev < 100) {
          const next = prev + 1;
          if (next === 99) transitionToHero();
          return next;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const transitionToHero = () => {
    gsap.to(".loader-container", {
      y: "-100%",
      duration: 1.5,
      ease: "power3.inOut",
      onComplete: () => onFinish(),
    });
    gsap.to(".hero-section", {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  };

  return (
    <div className="loader-container fixed inset-0 bg-[#FFD400] z-[-1] overflow-hidden flex items-center justify-center flex-col font-pressStart">
      {/* CRT Overlay */}
      <div className="absolute inset-0 pointer-events-none crt-lines z-0" />

      {/* Vintage Border Overlay */}
      <div className="vintage-overlay" />

      {/* Loader Content */}
      <div className="loader relative h-screen w-screen flex items-center justify-center flex-col z-10">
        <img
          src={bbkvLogo}
          alt="BBKV Logo"
          className="logo w-[600px] max-w-[90vw] animate-glitch drop-shadow-lg z-10"
        />
        <p className="loading-text absolute bottom-5 left-5 text-xs z-10">
          <span>{typedText}</span>
          <span className="cursor"></span>
        </p>
        <p className="percentage absolute bottom-5 right-5 text-xs z-10">
          {percent}%
        </p>
      </div>

      {/* White Flash (Optional) */}
      <div className="white-screen absolute inset-0 bg-white z-50 opacity-0 pointer-events-none" />
    </div>
  );
}
