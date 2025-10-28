"use client";

import React, { useEffect, useState } from "react";
import { PostOpsData } from "../../type";
import { downloadFileById } from "@/lib/actions/fileApi"; // your new fetch-based file API

interface Props {
  postOps: PostOpsData[];
}

export default function PatientFilesList({ postOps }: Props) {
  const [records, setRecords] = useState<PostOpsData[]>([]);
  const [loading, setLoading] = useState(true);

  // modal state
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewType, setPreviewType] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setRecords(postOps || []);
    setLoading(false);
  }, [postOps]);

  const handlePreview = async (file: PostOpsData) => {
    if (!file.id || !file.patient_id || !file.admission_id) {
      alert("Missing required file info!");
      return;
    }

    try {
      const blob = await downloadFileById(
        String(file.id),
        String(file.patient_id),
        String(file.admission_id)
      );

      const blobUrl = URL.createObjectURL(blob);
      const fileType = blob.type;

      setPreviewUrl(blobUrl);
      setPreviewType(fileType);
      setIsModalOpen(true);
    } catch (err) {
      console.error("Preview failed:", err);
      alert("Failed to preview file");
    }
  };

  const closeModal = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setIsModalOpen(false);
    setPreviewUrl(null);
    setPreviewType("");
  };

  if (loading) return <p>Loading files...</p>;
  if (!records || records.length === 0) return <p>No files available.</p>;

  return (
    <div>
      <h2 className="text-lg font-semibold text-blue-700 mb-2">List of Docs</h2>

      <table className="min-w-full rounded-lg text-sm border">
        <thead className="bg-blue-100 text-gray-700">
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">File Name</th>
            <th className="p-2 border">Document Type</th>
            <th className="p-2 border">View File</th>
          </tr>
        </thead>
        <tbody>
          {records.map((item, index) => (
            <tr key={item.id} className="border-t text-center hover:bg-blue-50">
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border text-blue-800 font-medium">
                {item.file_name || "N/A"} ({item.file_type || "N/A"})
              </td>
              <td className="p-2 border">{item.document_type || "N/A"}</td>
              <td className="p-2 border">
                <button
                  onClick={() => handlePreview(item)}
                  className="bg-blue-400 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl font-bold hover:scale-110 transition"
          >
            ✕
          </button>

          {!previewUrl ? (
            <p className="text-white">Loading preview...</p>
          ) : previewType.startsWith("image/") ? (
            <img
              src={previewUrl}
              alt="Preview"
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-xl"
            />
          ) : previewType === "application/pdf" ? (
            <iframe
              src={previewUrl}
              className="w-[90vw] h-[90vh] rounded-xl shadow-xl bg-white"
              title="PDF Preview"
            ></iframe>
          ) : previewType.startsWith("video/") ? (
            <video
              src={previewUrl}
              controls
              autoPlay
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-xl"
            />
          ) : (
            <p className="text-white">Unsupported file type</p>
          )}
        </div>
      )}
    </div>
  );
}
