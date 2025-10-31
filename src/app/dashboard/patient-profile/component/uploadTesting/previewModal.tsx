"use client";

import React from "react";

const API_URL = "https://sdms-api.onrender.com/api/v1/drive/downloadfile";

export default function PreviewFile() {
  const handlePreview = async () => {
    const fileid = "1PkOAfjWeMLyQEX9ldP41AXbgQWQ1Ye39"; // your file id

    try {
      const formData = new FormData();
      formData.append("file_id", fileid); // ✅ fixed field name

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Download failed: ${errorText}`);
      }

      const blob = await response.blob();

      if (blob.type.startsWith("application/json")) {
        const text = await blob.text();
        console.error("Server said:", text);
        throw new Error("File type not supported for preview.");
      }

      const fileURL = URL.createObjectURL(blob);
      window.open(fileURL, "_blank");
    } catch (err: unknown) {
      // ✅ Safe error handling
      if (err instanceof Error) {
        console.error("Download failed:", err);
        alert(`Download failed: ${err.message}`);
      } else {
        console.error("Unknown error:", err);
        alert("An unknown error occurred while downloading the file.");
      }
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={handlePreview}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Preview File
      </button>
    </div>
  );
}