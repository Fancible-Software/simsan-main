"use client";

import { useEffect } from "react";
import Box from "@mui/material/Box";

interface ToastProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Toast({
  message,
  type,
  isVisible,
  onClose,
  duration = 4000,
}: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <Box
        className="fixed top-4 right-4 z-50 min-w-[300px] max-w-[500px] p-4 rounded-lg shadow-2xl toast-slide-in"
        style={{
          backgroundColor: type === "success" ? "#10b981" : "#ef4444",
        }}
      >
        <Box className="flex items-center gap-3">
          {/* Icon */}
          <Box className="flex-shrink-0">
            {type === "success" ? (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </Box>

          {/* Message */}
          <Box className="flex-1">
            <p className="text-white text-sm font-medium">{message}</p>
          </Box>

          {/* Close Button */}
          <Box
            className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onClose}
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Box>
        </Box>
      </Box>
  );
}

