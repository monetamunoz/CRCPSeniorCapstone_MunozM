"use client";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ onClose, toggle }) => {
  return createPortal(
    <div className="fixed inset-0 bg-homeBar/60 backdrop-blur-sm flex items-center justify-center">
      <div
        className="bg-homeBar/20 border border-homeBar/30 border-solid backdrop-blur-sm
            py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8"
      >
        <p className="font-itckabel">Play BGM?</p>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={toggle}
            className="px-4 py-2 border border-homeBar/30 border-solid hover:shadow-glass-sm rounded mr-2"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-homeBar/30 border-solid hover:shadow-glass-sm rounded"
          >
            No
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("my-modal")
  );
};

const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSlider, setShowSlider] = useState(false); // State for slider visibility
  const [volume, setVolume] = useState(0.25); // Initial volume

  const handleFirstUserInteraction = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
    ["click", "keydown", "touchstart"].forEach((event) =>
      document.removeEventListener(event, handleFirstUserInteraction)
    );
  };

  useEffect(() => {
    const consent = localStorage.getItem("musicConsent");
    const consentTime = localStorage.getItem("consentTime");

    if (
      consent &&
      consentTime &&
      new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 > new Date()
    ) {
      setIsPlaying(consent === "true");
      if (consent === "true") {
        ["click", "keydown", "touchstart"].forEach((event) =>
          document.addEventListener(event, handleFirstUserInteraction)
        );
      }
    } else {
      setShowModal(true);
    }

    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((e) => console.error("Playback error:", e));
    }

    setIsPlaying(!isPlaying);
    localStorage.setItem("musicConsent", String(!isPlaying));
    localStorage.setItem("consentTime", new Date().toISOString());
    setShowModal(false);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
      {showModal && (
        <Modal onClose={() => setShowModal(false)} toggle={toggle} />
      )}
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
        <motion.input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24 h-2 rounded-full bg-sliderTrack accent-sliderThumb cursor-pointer"
          aria-label="Volume control slider"
          animate={{
            x: showSlider ? 0 : -50, // Slide animation
            opacity: showSlider ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />

        {/* Sound Control Button */}
        <motion.button
          onClick={() => {
            toggle();
            setShowSlider((prev) => !prev); // Toggle slider visibility
          }}
          className="text-gray-800 font-itckabelM rounded-full flex items-center justify-center
                     bg-homeBar/20 border border-homeBar/30 hover:bg-white/20 px-4 py-2 transition-all"
          aria-label={"Sound control button"}
          name={"Sound control button"}
          whileHover={{ scale: 1.1 }}
        >
          {isPlaying ? (
            <Volume2
              className="w-full h-full text-gray-800"
              strokeWidth={1.5}
            />
          ) : (
            <VolumeX
              className="w-full h-full text-gray-800"
              strokeWidth={1.5}
            />
          )}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Sound;
