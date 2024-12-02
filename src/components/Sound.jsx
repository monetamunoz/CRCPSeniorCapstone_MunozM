"use client";

import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ onClose, toggle }) => {
  return createPortal(
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-4 text-center">
        <p className="font-medium text-gray-800">Play Background Music?</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={toggle}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
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
  const [volume, setVolume] = useState(0.5);

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
      new Date(consentTime).getTime() + 72 * 60 * 60 * 1000 > new Date()
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
    <div className="fixed top-4 right-4 z-50 group">
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          toggle={toggle}
        />
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
          className="bg-gray-800 text-white p-3 pt-6 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none">
          {isPlaying ? <Volume2 /> : <VolumeX />}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Sound;
