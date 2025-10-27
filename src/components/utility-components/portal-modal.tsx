"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { ButtonDemo } from "@/app/dashboard/patient-profile/component/reusableTabs/buttonDemo";

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  maxWidth?: string;
}

const PortalModal: React.FC<PortalModalProps> = ({
  isOpen,
  onClose,
  children,
  maxWidth = "1000px",
}) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
  
    const el = document.createElement("div");
    el.className =
      "portal-container fixed inset-0 z-50 flex justify-center items-start bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-60 transition-opacity";
    el.style.overflow = "auto";
    el.style.padding = "2rem 0";
    setContainer(el);
  }, []);

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

  return createPortal(
    <div className="flex justify-center w-full px-4 sm:px-6 md:px-0">
      <div
        className="portal-content bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl shadow-xl w-full sm:w-[85%] transition-colors"
        style={{ maxWidth }}
      >
        <div className="flex justify-between items-center  px-2 py-1 border-b border-gray-200 dark:border-gray-700">
          <ButtonDemo/>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition"
          >
            <X size={24} />
          </button>
        </div>
        <div className="px-1 py-1">{children}</div>
      </div>
    </div>,
    container
  );
};

export default PortalModal;
