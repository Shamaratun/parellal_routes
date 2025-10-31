// "use client";

// import React, { useEffect, useState } from "react";
// import { PostOpsData } from "../../type";
// import { downloadFileById } from "@/lib/actions/fileApi"; // your new fetch-based file API
// import Image from "next/image";

// interface Props {
//   postOps: PostOpsData[];
// }

// export default function PatientFilesList({ postOps }: Props) {
//   const [records, setRecords] = useState<PostOpsData[]>([]);
//   const [loading, setLoading] = useState(true);

//   // modal state
//   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
//   const [previewType, setPreviewType] = useState<string>("");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     setRecords(postOps || []);
//     setLoading(false);
//   }, [postOps]);

//   const handlePreview = async (file: PostOpsData) => {
//     if (!file.id || !file.patient_id || !file.admission_id) {
//       alert("Missing required file info!");
//       return;
//     }

//     try {
//       const blob = await downloadFileById(
//         String(file.id),
//         String(file.patient_id),
//         String(file.admission_id)
//       );

//       const blobUrl = URL.createObjectURL(blob);
//       const fileType = blob.type;

//       setPreviewUrl(blobUrl);
//       setPreviewType(fileType);
//       setIsModalOpen(true);
//     } catch (err) {
//       console.error("Preview failed:", err);
//       alert("Failed to preview file");
//     }
//   };

//   const closeModal = () => {
//     if (previewUrl) URL.revokeObjectURL(previewUrl);
//     setIsModalOpen(false);
//     setPreviewUrl(null);
//     setPreviewType("");
//   };

//   if (loading) return <p>Loading files...</p>;
//   if (!records || records.length === 0) return <p>No files available.</p>;

//   return (
//     <div>
//       <h2 className="text-lg font-semibold text-blue-700 mb-2">List of Docs</h2>

//       <table className="min-w-full rounded-lg text-sm border">
//         <thead className="bg-blue-100 text-gray-700">
//           <tr>
//             <th className="p-2 border">#</th>
//             <th className="p-2 border">File Name</th>
//             <th className="p-2 border">Document Type</th>
//             <th className="p-2 border">View File</th>
//           </tr>
//         </thead>
//         <tbody>
//           {records.map((item, index) => (
//             <tr key={item.id} className="border-t text-center hover:bg-blue-50">
//               <td className="p-2 border">{index + 1}</td>
//               <td className="p-2 border text-blue-800 font-medium">
//                 {item.file_name || "N/A"} ({item.file_type || "N/A"})
//               </td>
//               <td className="p-2 border">{item.document_type || "N/A"}</td>
//               <td className="p-2 border">
//                 <button
//                   onClick={() => handlePreview(item)}
//                   className="bg-blue-400 text-white px-3 py-1 rounded hover:bg-green-600 transition"
//                 >
//                   View
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center">
//           <button
//             onClick={closeModal}
//             className="absolute top-5 right-5 text-white text-3xl font-bold hover:scale-110 transition"
//           >
//             ✕
//           </button>

//           {!previewUrl ? (
//             <p className="text-white">Loading preview...</p>
//           ) : previewType.startsWith("image/") ? (
//             <Image
//               src={previewUrl}
//               alt="Preview"
//               className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-xl"
//             />
//           ) : previewType === "application/pdf" ? (
//             <iframe
//               src={previewUrl}
//               className="w-[90vw] h-[90vh] rounded-xl shadow-xl bg-white"
//               title="PDF Preview"
//             ></iframe>
//           ) : previewType.startsWith("video/") ? (
//             <video
//               src={previewUrl}
//               controls
//               autoPlay
//               className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-xl"
//             />
//           ) : (
//             <p className="text-white">Unsupported file type</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
/////////////////////////////////////////////
// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { downloadFileById } from "@/lib/actions/fileApi";
// import { PostOpsData } from "../../type";

// interface Props {
//   postOps: PostOpsData[];
// }

// export default function PatientFilesList({ postOps }: Props) {
//   const [records, setRecords] = useState<PostOpsData[]>([]);
//   const [loading, setLoading] = useState(true);

//   // modal state
//   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
//   const [previewType, setPreviewType] = useState<string>("");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     setRecords(postOps || []);
//     setLoading(false);
//   }, [postOps]);

//   const handlePreview = async (file: PostOpsData) => {
//     const fileId = file.drive_file_id || file.fileid;
//     if (!fileId) {
//       console.error("Missing valid file ID:", file);
//       alert("This file has no valid ID to download!");
//       return;
//     }

//     try {
//       const blob = await downloadFileById(String(fileId));
//       const url = URL.createObjectURL(blob);
//       const fileType = blob.type;
//       setPreviewUrl(url);
//       setPreviewType(fileType);
//       setIsModalOpen(true);
//     } catch (err) {
//       console.error("Preview failed:", err);
//       alert("Failed to preview file. Check console for details.");
//     }
//   };  omar Vai's working code

//   const closeModal = () => {
//     if (previewUrl) URL.revokeObjectURL(previewUrl);
//     setIsModalOpen(false);
//     setPreviewUrl(null);
//     setPreviewType("");
//   };

//   if (loading) return <p>Loading files...</p>;
//   if (!records || records.length === 0) return <p>No files available.</p>;

//   return (
//     <div>
//       <h2 className="text-lg font-semibold text-blue-700 mb-2">List of Docs</h2>

//       <table className="min-w-full rounded-lg text-sm border">
//         <thead className="bg-blue-100 text-gray-700">
//           <tr>
//             <th className="p-2 border">#</th>
//             <th className="p-2 border">File Name</th>
//             <th className="p-2 border">Document Type</th>
//             <th className="p-2 border">View File</th>
//           </tr>
//         </thead>
//         <tbody>
//           {records.map((item, index) => (
//             <tr key={item.id || index} className="border-t text-center hover:bg-blue-50">
//               <td className="p-2 border">{index + 1}</td>
//               <td className="p-2 border text-blue-800 font-medium">
//                 {item.file_name || "N/A"}
//               </td>
//               <td className="p-2 border">{item.document_type || "N/A"}</td>
//               <td className="p-2 border">
//                 <button
//                   onClick={() => handlePreview(item)}
//                   className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
//                 >
//                   View
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* ======= File Preview Modal ======= */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center">
//           <button
//             onClick={closeModal}
//             className="absolute top-5 right-5 text-white text-3xl font-bold hover:scale-110 transition"
//           >
//             ✕
//           </button>

//           {!previewUrl ? (
//             <p className="text-white">Loading preview...</p>
//           ) : previewType.startsWith("image/") ? (
//             <Image
//               src={previewUrl}
//               alt="Preview"
//               className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-xl"
//               width={800}
//               height={600}
//             />
//           ) : previewType === "application/pdf" ? (
//             <iframe
//               src={previewUrl}
//               className="w-[90vw] h-[90vh] rounded-xl shadow-xl bg-white"
//               title="PDF Preview"
//             ></iframe>
//           ) : previewType.startsWith("video/") ? (
//             <video
//               src={previewUrl}
//               controls
//               autoPlay
//               className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-xl"
//             />
//           ) : (
//             <p className="text-white">Unsupported file type</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// ----- Define your PostOpsData type -----
interface PostOpsData {
  id?: string;
  file_id?: string;
  fileid?: string;
  file_name?: string;
  document_type?: string;
}

// ----- Props -----
interface Props {
  postOps: PostOpsData[];
}

// ----- API function -----
const API_URL = "https://sdms-api.onrender.com/api/v1/drive/downloadfile";

const downloadFileById = async (fileid: string): Promise<Blob> => {
  try {
    const formData = new FormData();
    formData.append("fileid", fileid);

    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Download failed: ${response.status} - ${errorText}`);
    }

    const blob = await response.blob();

    if (blob.type.startsWith("application/json")) {
      const text = await blob.text();
      console.error("Server message:", text);
      throw new Error("File not found or invalid file type.");
    }

    return blob;
  } catch (error) {
    console.error("Download Error:", error);
    throw error;
  }
};

// ----- Component -----
export default function PatientFilesList({ postOps }: Props) {
  const [records, setRecords] = useState<PostOpsData[]>([]);
  const [loading, setLoading] = useState(true);

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewType, setPreviewType] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    setRecords(postOps || []);
    setLoading(false);
  }, [postOps]);

  // ----- Preview / Download Handler -----
  const handlePreview = async (file: PostOpsData) => {
    try {
      // ✅ Hardcoded working file ID for testing
      const fileid = file?.fileid || file?.file_id || file?.id ||
       "1PkOAfjWeMLyQEX9ldP41AXbgQWQ1Ye39";

      const blob = await downloadFileById(fileid);
      const blobUrl = URL.createObjectURL(blob);
      const fileType = blob.type;

      // Images, PDFs, videos → preview modal
      if (
        fileType.startsWith("image/") ||
        fileType === "application/pdf" ||
        fileType.startsWith("video/")
      ) {
        setPreviewUrl(blobUrl);
        setPreviewType(fileType);
        setIsModalOpen(true);
      } else {
        // Other types → download automatically
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = file.file_name || "downloaded_file";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
      }
    } catch (err: unknown) {
      console.error("Preview failed:", err);
      alert(err instanceof Error ? err.message : "Preview failed");
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
            <tr
              key={item.id || index}
              className="border-t text-center hover:bg-blue-50"
            >
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border text-blue-800 font-medium">
                {item.file_name || "N/A"}
              </td>
              <td className="p-2 border">{item.document_type || "N/A"}</td>
              <td className="p-2 border">
                <button
                  onClick={() => handlePreview(item)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ----- Modal Preview ----- */}
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
            <Image
              src={previewUrl}
              alt="Preview"
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-xl"
              width={800}
              height={600}
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
