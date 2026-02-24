"use client";
import { useEffect, useState } from "react";

type Props = {
  message: string;
  duration?: number;
};

export default function SuccessBanner({ message, duration = 3500 }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
      `}>
      <div
        className="bg-white/95 dark:bg-gray-900/90 backdrop-blur-xl
        border border-green-200 dark:border-green-800
        rounded-2xl shadow-xl px-6 py-3 flex items-center gap-3">
        {/* Зеленый чек */}
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white text-sm">
          ✓
        </div>
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {message}
        </p>
      </div>
    </div>
  );
}
