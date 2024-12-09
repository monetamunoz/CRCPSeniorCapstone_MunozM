"use client";

import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSlider, setShowSlider] = useState(false); // State for slider visibility
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const consent = localStorage.getItem("musicConsent");
    if (consent === "true" && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }

    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((e) => console.error("Playback error:", e));
    }

    setIsPlaying(!isPlaying);
    localStorage.setItem("musicConsent", String(!isPlaying));
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 group">
      <audio ref={audioRef} loop>
        <source src={"/audio/Hicks - That's Amore.mp3"} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="flex items-center space-x-2"
      >
        {/* Volume Slider */}
        {showSlider && (
          <motion.input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 h-2 bg-gray-300 accent-gray-700 rounded-full cursor-pointer"
            aria-label="Volume control slider"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          />
        )}

        {/* Sound Control Button */}
        <motion.button
          onClick={() => {
            toggle();
            setShowSlider((prev) => !prev); // Toggle slider visibility
          }}
          className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
        >
          {isPlaying ? <Volume2 /> : <VolumeX />}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Sound;
