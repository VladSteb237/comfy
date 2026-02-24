"use client";
import { useEffect, useState } from "react";

type AppleBannerProps = {
  message: string;
  duration?: number; // Время показа в мс
};

const AppleBanner = ({ message, duration = 6000 }: AppleBannerProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Плавно появляем баннер
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
      `}>
      <div className="bg-white/95 dark:bg-gray-800/90 backdrop-blur-md border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg px-6 py-3 text-gray-900 dark:text-white font-medium text-sm flex items-center gap-3">
        {/* Иконка предупреждения */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-yellow-500"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.68-1.36 3.445 0l6.518 11.595c.75 1.334-.213 2.996-1.723 2.996H3.462c-1.51 0-2.473-1.662-1.723-2.996L8.257 3.1zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-8a1 1 0 00-.993.883L9 6v4a1 1 0 001.993.117L11 10V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        {message}
      </div>
    </div>
  );
};

export default AppleBanner;
