"use client";
import React, { useEffect, useState } from "react";

const createFloating = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

const FloatingBackground = () => {
  const [floating, setFloating] = useState([]);

  useEffect(() => {
    const addFloatingPeriodically = () => {
      const newFloating = createFloating();
      setFloating((currentFloating) => [
        ...currentFloating.slice(-14),
        newFloating,
      ]);
    };

    const interval = setInterval(addFloatingPeriodically, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {floating.map((floating) => {
        return (
          <div
            key={floating.id}
            className="absolute rounded-full w-[10px] h-[10px] bg-floating-radial"
            style={{
              top: floating.top,
              left: floating.left,
              animation: `move ${floating.animationDuration} infinite alternate`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default FloatingBackground;