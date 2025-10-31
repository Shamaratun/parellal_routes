// "use client";

// import React, { useState } from "react";
// import { fetchFile, FileResponse } from "./api";

// interface PreviewProps {
//   fileid: string;
// }

// export default function Preview({ fileid }: PreviewProps) {
//   const [previewSrc, setPreviewSrc] = useState<string | null>(null);
//   const [previewType, setPreviewType] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handlePreview = async () => {
//     setLoading(true);
//     try {
//       const file: FileResponse = await fetchFile(fileid);

//       const byteCharacters = atob(file.base64);
//       const byteNumbers = new Array(byteCharacters.length);
//       for (let i = 0; i < byteCharacters.length; i++) {
//         byteNumbers[i] = byteCharacters.charCodeAt(i);
//       }
//       const byteArray = new Uint8Array(byteNumbers);
//       const blob = new Blob([byteArray], { type: file.mimeType });
//       const blobUrl = URL.createObjectURL(blob);

//       setPreviewSrc(blobUrl);
//       setPreviewType(file.mimeType);
//     } catch (err) {
//       console.error("Preview failed:", err);
//       alert("Failed to preview file. Check console.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const closeModal = () => {
//     setPreviewSrc(null);
//     setPreviewType(null);
//   };

//   return (
//     <div>
//       <button
//         onClick={handlePreview}
//         className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//       >
//         Preview File
//       </button>

//       {/* Modal */}
//       {previewSrc && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white rounded-lg p-4 max-w-3xl w-full relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 text-gray-700 hover:text-black"
//             >
//               X
//             </button>

//             {previewType?.startsWith("image/") && (
//               <img src={previewSrc} alt="preview" className="max-h-[80vh] mx-auto" />
//             )}

//             {previewType?.startsWith("video/") && (
//               <video
//                 src={previewSrc}
//                 controls
//                 autoPlay
//                 className="max-h-[80vh] mx-auto"
//               />
//             )}

//             {previewType === "application/pdf" && (
//               <iframe
//                 src={previewSrc}
//                 className="w-full h-[80vh]"
//                 title="PDF Preview"
//               ></iframe>
//             )}
//           </div>
//         </div>
//       )}

//       {loading && <p className="mt-2 text-gray-500">Loading preview...</p>}
//     </div>
//   );
// }
// "use client";

// import React, { useState, useEffect } from "react";
// import { fetchFile, FileResponse } from "./api";
// import { PostOpsData } from "../../type";
// import Image from "next/image";

// interface Props {
//   postOpsData: PostOpsData[];
// }

// export default function FileList({ postOpsData }: Props) {
//   const [records, setRecords] = useState<PostOpsData[]>([]);
//   const [loading, setLoading] = useState(false);

//   const [previewSrc, setPreviewSrc] = useState<string | null>(null);
//   const [previewType, setPreviewType] = useState<string>("");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     setRecords(postOpsData || []);
//   }, [postOpsData]);

// const handlePreview = async (file: PostOpsData) => {
//   // Use drive_file_id if available, otherwise fileid
//   if (!file.drive_file_id && !file.fileid) {
//     alert("File ID is missing!");
//     return;
//   }

//   setLoading(true);

//   try {
//     const fetchedFile: FileResponse = await fetchFile(file.drive_file_id || file.fileid);

//     // convert base64 to blob
//     const byteCharacters = atob(fetchedFile.base64);
//     const byteNumbers = new Array(byteCharacters.length);
//     for (let i = 0; i < byteCharacters.length; i++) {
//       byteNumbers[i] = byteCharacters.charCodeAt(i);
//     }
//     const byteArray = new Uint8Array(byteNumbers);
//     const blob = new Blob([byteArray], { type: fetchedFile.mimeType });
//     const blobUrl = URL.createObjectURL(blob);

//     setPreviewSrc(blobUrl);
//     setPreviewType(fetchedFile.mimeType);
//     setIsModalOpen(true);
//   } catch (err) {
//     console.error("Preview failed:", err);
//     alert("Failed to preview file. Check console.");
//   } finally {
//     setLoading(false);
//   }
// };
//   const closeModal = () => {
//     if (previewSrc) URL.revokeObjectURL(previewSrc);
//     setPreviewSrc(null);
//     setPreviewType("");
//     setIsModalOpen(false);
//   };

//   if (!records || records.length === 0) return <p>No files available.</p>;

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">List of Files</h2>

//       <table className="min-w-full border rounded-lg text-sm">
//         <thead className="bg-blue-100 text-gray-700">
//           <tr>
//             <th className="p-2 border">File ID</th>
//             <th className="p-2 border">File Name</th>
//             <th className="p-2 border">Document Type</th>
//             <th className="p-2 border">Preview</th>
//           </tr>
//         </thead>
//         <tbody>
//           {records.map((file) => (
//             <tr key={file.fileid || file.id}>
//               <td className="p-2 border">{file.drive_file_id || file.fileid}</td>
//               <td className="p-2 border">{file.name || file.file_name}</td>
//               <td className="p-2 border">{file.document_type || "N/A"}</td>
//               <td className="p-2 border">
//                 <button
//                   onClick={() => handlePreview(file)}
//                   className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 >
//                   Preview
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {loading && <p className="mt-2 text-gray-500">Loading preview...</p>}

//       {/* Modal */}
//       {isModalOpen && previewSrc && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white rounded-lg p-4 max-w-3xl w-full relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 text-gray-700 hover:text-black"
//             >
//               X
//             </button>

//             {previewType.startsWith("image/") && (
//               <Image
//                 src={previewSrc}
//                 alt="Preview"
//                 className="max-h-[80vh] mx-auto"
//               />
//             )}

//             {previewType.startsWith("video/") && (
//               <video
//                 src={previewSrc}
//                 controls
//                 autoPlay
//                 className="max-h-[80vh] mx-auto"
//               />
//             )}

//             {previewType === "application/pdf" && (
//               <iframe
//                 src={previewSrc}
//                 className="w-full h-[80vh]"
//                 title="PDF Preview"
//               ></iframe>
//             )}

//             {!previewType.startsWith("image/") &&
//               !previewType.startsWith("video/") &&
//               previewType !== "application/pdf" && (
//                 <p className="text-center text-red-600">Unsupported file type</p>
//               )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import { fetchFile, FileResponse } from "./api";
import { PostOpsData } from "../../type";

interface Props {
  postOpsData: PostOpsData[];
}

export default function FileList({ postOpsData }: Props) {
  const [records, setRecords] = useState<PostOpsData[]>([]);
  const [loading, setLoading] = useState(false);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [previewType, setPreviewType] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setRecords(postOpsData || []);
  }, [postOpsData]);

  // ✅ PREVIEW HANDLER
  const handlePreview = async (fileid: string | undefined) => {
    if (!fileid) {
      alert("No file ID found!");
      return;
    }

    setLoading(true);
    try {
      const file: FileResponse = await fetchFile(fileid);

      // Convert Base64 → Blob → URL
      const byteCharacters = atob(file.base64);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: file.mimeType });
      const blobUrl = URL.createObjectURL(blob);

      setPreviewSrc(blobUrl);
      setPreviewType(file.mimeType);
      setIsModalOpen(true);
    } catch (err) {
      console.error("Preview failed:", err);
      alert("Failed to preview file. Check console or file access permissions.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ CLOSE MODAL
  const closeModal = () => {
    if (previewSrc) URL.revokeObjectURL(previewSrc);
    setPreviewSrc(null);
    setPreviewType("");
    setIsModalOpen(false);
  };

  if (!records || records.length === 0)
    return <p className="text-gray-600">No files available.</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">List of Files</h2>

      <table className="min-w-full border border-gray-300 rounded-lg text-sm">
        <thead className="bg-blue-100 text-gray-700">
          <tr>
            <th className="p-2 border">File ID</th>
            <th className="p-2 border">File Name</th>
            <th className="p-2 border">Document Type</th>
            <th className="p-2 border text-center">Preview</th>
          </tr>
        </thead>
        <tbody>
          {records.map((file) => {
            const key = file.fileid || file.drive_file_id || file.id;
            const fileid = file.drive_file_id || file.fileid;

            return (
              <tr key={key}>
                <td className="p-2 border">{fileid}</td>
                <td className="p-2 border">{file.name || file.file_name}</td>
                <td className="p-2 border">{file.document_type || "N/A"}</td>
                <td className="p-2 border text-center">
                  <button
                    onClick={() => handlePreview(fileid)}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Preview
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {loading && (
        <p className="mt-2 text-gray-500 animate-pulse">Loading preview...</p>
      )}

      {/* ✅ MODAL */}
      {isModalOpen && previewSrc && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-4 max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 hover:text-black"
            >
              ✕
            </button>

            {/* IMAGE */}
            {previewType.startsWith("image/") && (
              <img
                src={previewSrc}
                alt="Preview"
                className="max-h-[80vh] mx-auto"
              />
            )}

            {/* VIDEO */}
            {previewType.startsWith("video/") && (
              <video
                src={previewSrc}
                controls
                autoPlay
                className="max-h-[80vh] mx-auto"
              />
            )}

            {/* PDF */}
            {previewType === "application/pdf" && (
              <iframe
                src={previewSrc}
                className="w-full h-[80vh]"
                title="PDF Preview"
              ></iframe>
            )}

            {/* UNSUPPORTED */}
            {!previewType.startsWith("image/") &&
              !previewType.startsWith("video/") &&
              previewType !== "application/pdf" && (
                <p className="text-center text-red-600">
                  Unsupported file type
                </p>
              )}
          </div>
        </div>
      )}
    </div>
  );
}