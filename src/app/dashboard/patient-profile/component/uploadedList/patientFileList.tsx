"use client";

import React, { useEffect, useState } from "react";
import { PostOpsData } from "../../type";
import fileAPI from "@/lib/actions/fileApi";

interface Props {
  postOps: PostOpsData[];
}

type PreviewType = "pdf" | "video" | "image";

export default function PatientFilesList({ postOps }: Props) {
  const [records, setRecords] = useState<PostOpsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [previewType, setPreviewType] = useState<PreviewType | null>(null);

  useEffect(() => {
    setRecords(postOps || []);
    setLoading(false);
  }, [postOps]);

  const getMimeType = (type?: string): string => {
    if (!type) return "application/octet-stream";
    if (type.includes("/")) return type;
    if (type === "pdf") return "application/pdf";
    if (["mp4", "mov", "avi", "mkv"].includes(type)) return `video/${type}`;
    if (["png", "jpg", "jpeg", "gif"].includes(type)) return `image/${type}`;
    return "application/octet-stream";
  };

  const handlePreview = async (file: PostOpsData) => {
    if (!file.id) {
      alert("File ID missing!");
      return;
    }

    try {
      const blobData: Blob = await fileAPI.downloadFileById(
        String(file.id),
        String(file.patient_id),
        String(file.admission_id)
      );

      const mimeType = getMimeType(file.file_type);
      const url = window.URL.createObjectURL(blobData);

      if (mimeType.startsWith("video/")) setPreviewType("video");
      else if (mimeType === "application/pdf") setPreviewType("pdf");
      else if (mimeType.startsWith("image/")) setPreviewType("image");
      else {
        alert("Only PDF, video, and images are supported for preview!");
        return;
      }

      setPreviewUrl(url);
      setTimeout(() => window.URL.revokeObjectURL(url), 10000);
    } catch (err: unknown) {
      console.error("Preview failed:", err);
      alert("Failed to preview file");
    }
  };

  if (loading) return <p>Loading files...</p>;
  if (!records || records.length === 0) return <p>No files available.</p>;


  const pdfFiles = records.filter((f) => f.file_type?.includes("pdf"));
  const imageFiles = records.filter((f) =>
    ["png", "jpg", "jpeg", "gif"].includes(f.file_type || "")
  );
  const videoFiles = records.filter((f) =>
    ["mp4", "mov", "avi", "mkv"].includes(f.file_type || "")
  );

  const groupedData = [
    { title: "📄 PDF Files", data: pdfFiles },
    { title: "🖼️ Image Files", data: imageFiles },
    { title: "🎥 Video Files", data: videoFiles },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-xl rounded-2xl p-6">
  

    <div className="bg-white shadow-md rounded-xl p-4 mt-6 overflow-x-auto border border-blue-100">
      <h2 className="text-lg font-semibold text-blue-700 mb-3">
        List of Uploaded Files
      </h2>

      <table className="min-w-full border border-gray-300 rounded-lg text-sm">
        <thead className="bg-blue-100 text-gray-700">
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">File Name</th>
            <th className="p-2 border">Insert Date</th>
            <th className="p-2 border">Document Type</th>
            <th className="p-2 border">View File</th>
            <th className="p-2 border">Datetime</th>
          </tr>
        </thead>

        <tbody>
          {groupedData.map(
            (group) =>
              group.data.length > 0 && (
                <React.Fragment key={group.title}>
               
                  <tr className="bg-blue-50">
                    <td
                      colSpan={6}
                      className="text-left font-semibold text-blue-800 p-2"
                    >
                      {group.title}
                    </td>
                  </tr>

                 
                  {group.data.map((item, index) => (
                    <tr
                      key={item.id}
                      className="border-t text-center hover:bg-gray-50"
                    >
                      <td className="p-2 border">{index + 1}</td>
                      <td className="p-2 border">
                        {item.file_name || "N/A"} ({item.file_type || "N/A"})
                      </td>
                      <td className="p-2 border">{item.insert_date || "N/A"}</td>
                      <td className="p-2 border">{item.document_type || "N/A"}</td>
                      <td className="p-2 border">
                        <button
                          onClick={() => handlePreview(item)}
                          className="bg-blue-400 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                        >
                          View
                        </button>
                      </td>
                      <td className="p-2 border">
                        {item.dt
                          ? new Date(item.dt).toLocaleString()
                          : "N/A"}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              )
          )}
        </tbody>
      </table>
    </div>

      {/* ===== Preview Modal ===== */ }
  {
    previewUrl && previewType && (
      <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4">
        {previewType === "pdf" && (
          <iframe
            src={`${previewUrl}#toolbar=0`}
            className="w-full max-w-4xl h-[90vh] bg-white rounded-xl shadow-2xl"
          />
        )}
        {previewType === "video" && (
          <video
            src={previewUrl}
            controls
            autoPlay
            className="w-full max-w-4xl h-[90vh] rounded-xl shadow-2xl"
          />
        )}
        {previewType === "image" && (
          <img
            src={previewUrl}
            alt="Preview"
            className="max-h-[90vh] rounded-xl shadow-2xl object-contain"
          />
        )}
        <button
          onClick={() => {
            setPreviewUrl("");
            setPreviewType(null);
          }}
          className="absolute top-5 right-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          ✕ Close
        </button>
      </div>
    )
  }
    </div>
  );
}