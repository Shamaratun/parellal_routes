
"use client";

import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { BackButton } from "@/app/dashboard/patient-profile/component/reusableTabs/backButton";

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  maxWidth?: string;
  type?: "image" | "video" | "pdf" | "custom";
}

const PortalModal: React.FC<PortalModalProps> = ({
  isOpen,
  onClose,
  children,
  maxWidth = "1600px",
  type = "custom",
}) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const contentRef = useRef<HTMLDivElement | null>(null);

  // Create portal container
  useEffect(() => {
    const el = document.createElement("div");
    el.className =
      "portal-container fixed inset-0 z-50 flex justify-center items-start bg-gray-400 bg-opacity-10 dark:bg-black dark:bg-opacity-60 transition-opacity";
    el.style.overflow = "auto";
    el.style.padding = "2rem 0";
    setContainer(el);
  }, []);

  // Append / remove container
  useEffect(() => {
    if (!container || !isOpen) return;
    document.body.style.overflow = "hidden";
    document.body.appendChild(container);

    return () => {
      document.body.style.overflow = "auto";
      if (document.body.contains(container)) {
        document.body.removeChild(container);
      }
    };
  }, [isOpen, container]);

  if (!isOpen || !container) return null;

  // Zoom handlers
  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 4));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5));
  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  // Drag handlers (mouse)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({ x: e.clientX - startPos.x, y: e.clientY - startPos.y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers (mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoom <= 1) return;
    const touch = e.touches[0];
    setIsDragging(true);
    setStartPos({ x: touch.clientX - position.x, y: touch.clientY - position.y });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    setPosition({ x: touch.clientX - startPos.x, y: touch.clientY - startPos.y });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const isZoomable = type === "image" || type === "video";

  return createPortal(
    <div className="flex justify-center w-full px-4 sm:px-6 md:px-0">
      <div
        className="portal-content bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl shadow-xl w-full sm:w-[85%] transition-colors"
        style={{ maxWidth }}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-2 py-1 border-b border-gray-200 dark:border-gray-700">
          <BackButton />
          <div className="flex items-center gap-2">
            {isZoomable && (
              <>
                <button
                  onClick={handleZoomOut}
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                >
                  <ZoomOut size={20} />
                </button>
                <button
                  onClick={handleZoomIn}
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                >
                  <ZoomIn size={20} />
                </button>
                <button
                  onClick={resetZoom}
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                >
                  <RotateCcw size={20} />
                </button>
                <span className="text-sm text-gray-500 dark:text-gray-400 select-none">
                  {(zoom * 100).toFixed(0)}%
                </span>
              </>
            )}
            <button
              onClick={onClose}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className={`px-2 py-2 flex justify-center items-center ${
            isZoomable ? "overflow-hidden cursor-grab active:cursor-grabbing" : ""
          }`}
          onMouseDown={isZoomable ? handleMouseDown : undefined}
          onMouseMove={isZoomable ? handleMouseMove : undefined}
          onMouseUp={isZoomable ? handleMouseUp : undefined}
          onMouseLeave={isZoomable ? handleMouseUp : undefined}
          onTouchStart={isZoomable ? handleTouchStart : undefined}
          onTouchMove={isZoomable ? handleTouchMove : undefined}
          onTouchEnd={isZoomable ? handleTouchEnd : undefined}
        >
          {isZoomable ? (
            <div
              style={{
                transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                transformOrigin: "center center",
                transition: isDragging ? "none" : "transform 0.2s ease",
              }}
            >
              {children}
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </div>,
    container
  );
};

export default PortalModal;