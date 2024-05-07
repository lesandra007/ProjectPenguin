import React from "react";
import { motion } from "framer-motion";

export const CodeProgress = ({ percentage }) => {
  const radius = 85;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (circumference * percentage) / 100;

  return (
    <svg width="300" height="300">
      {/* Background Circle */}
      <circle
        cx="150"
        cy="150"
        r={radius}
        fill="none"
        stroke="#ddd"
        strokeWidth="20"
      />

      {/* Progress Circle */}
      <motion.circle
        cx="150"
        cy="150"
        r={radius}
        fill="none"
        stroke="orange"
        strokeWidth="20"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={progressOffset}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: progressOffset }}
      />

      {/* Text (Progress Percentage) */}
      <text
        x="150"
        y="150"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="36"
        fill="white"
      >
        {percentage}%
      </text>
    </svg>
  );
};

