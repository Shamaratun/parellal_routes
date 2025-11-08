// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { PostOpsData } from "../../type";
// import { fetchFile, FileResponse } from "@/lib/actions/listOfDocsAction";
// import PortalModal from "@/components/utility-components/portal-modal";


// interface Props {
//   postOpsData: PostOpsData[];
// }

// export default function ListOfDocs({ postOpsData }: Props) {
//   const [records, setRecords] = useState<PostOpsData[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [previewSrc, setPreviewSrc] = useState<string | null>(null);
//   const [previewType, setPreviewType] = useState<string>("");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     setRecords(postOpsData || []);
//   }, [postOpsData]);

//   // ✅ PREVIEW HANDLER
//   const handlePreview = async (fileid: string | undefined) => {
//     if (!fileid) {
//       alert("No file ID found!");
//       return;
//     }

//     setLoading(true);
//     try {
//       const file: FileResponse = await fetchFile(fileid);

//       // Convert Base64 → Blob → URL
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
//       setIsModalOpen(true);
//     } catch (err) {
//       console.error("Preview failed:", err);
//       alert("Failed to preview file. Check console or file access permissions.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ CLOSE MODAL
//   const closeModal = () => {
//     if (previewSrc) URL.revokeObjectURL(previewSrc);
//     setPreviewSrc(null);
//     setPreviewType("");
//     setIsModalOpen(false);
//   };

//   if (!records || records.length === 0)
//     return <p className="text-gray-600">No files available.</p>;

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">List of Files</h2>

//       <table className="min-w-full border border-gray-300 rounded-lg text-sm">
//         <thead className="bg-blue-100 text-gray-700">
//           <tr>
//             <th className="p-2 border">File ID</th>
//             <th className="p-2 border">File Name</th>
//             <th className="p-2 border">Document Type</th>
//             <th className="p-2 border text-center">Preview</th>
//           </tr>
//         </thead>
//         <tbody>
//           {records.map((file) => {
//             const key = file.fileid || file.drive_file_id || file.id;
//             const fileid = file.drive_file_id || file.fileid;

//             return (
//               <tr key={key}>
//                 <td className="p-2 border">{fileid}</td>
//                 <td className="p-2 border">{file.name || file.file_name}</td>
//                 <td className="p-2 border">{file.document_type || "N/A"}</td>
//                 <td className="p-2 border text-center">
//                   <button
//                     onClick={() => handlePreview(fileid)}
//                     className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
//                   >
//                     Preview
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>

//       {loading && (
//         <p className="mt-2 text-gray-500 animate-pulse">Loading preview...</p>
//       )}

//       <PortalModal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         maxWidth={
//           previewType === "application/pdf"
//             ? "1200px"
//             : previewType.startsWith("video/")
//             ? "900px"
//             : "700px"
//         }
//       >
        
//         {previewType.startsWith("image/") && previewSrc && (
//           <div className="flex justify-center">
//             <Image
//               src={previewSrc}
//               alt="Preview"
//               width={800}
//               height={600}
//               className="object-contain max-h-[80vh] rounded-lg select-none"
//     draggable={true}
//             />
//           </div>
//         )}

//         {previewType.startsWith("video/") && previewSrc && (
//           <div className="flex justify-center">
//             <video
//               src={previewSrc}
//               controls
//               autoPlay
//               className="max-h-[80vh] rounded-lg select-none"
//     draggable={true}
//             />
//           </div>
//         )}

//         {previewType === "application/pdf" && previewSrc && (
//           <iframe
//             src={previewSrc}
//             className="w-full h-[85vh] rounded-lg"
//             title="PDF Preview"
//           ></iframe>
//         )}

//         {/* UNSUPPORTED */}
//         {!previewType.startsWith("image/") &&
//           !previewType.startsWith("video/") &&
//           previewType !== "application/pdf" &&
//           previewType && (
//             <p className="text-center text-red-600 p-4">
//               Unsupported file type
//             </p>
//           )}
//       </PortalModal>
//     </div>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PostOpsData } from "../../type";
import { fetchFile, FileResponse } from "@/lib/actions/listOfDocsAction";
import PortalModal from "@/components/utility-components/portal-modal";

interface Props {
  postOpsData: PostOpsData[];
}

export default function ListOfDocs({ postOpsData }: Props) {
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
      setPreviewType(file.mimeType.toLowerCase());
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

  // ✅ CLEANUP on component unmount
  useEffect(() => {
    return () => {
      if (previewSrc) URL.revokeObjectURL(previewSrc);
    };
  }, [previewSrc]);

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

      <PortalModal
        isOpen={isModalOpen}
        onClose={closeModal}
        maxWidth={
          previewType === "application/pdf"
            ? "1200px"
            : previewType.startsWith("video/")
            ? "900px"
            : "700px"
        }
      >
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className="animate-pulse text-gray-500">Loading...</p>
          </div>
        ) : (
          <>
            {previewType.startsWith("image/") && previewSrc && (
              <div className="flex justify-center">
                <Image
                  src={previewSrc}
                  alt="Preview"
                  width={800}
                  height={600}
                  className="object-contain max-h-[80vh] rounded-lg select-none"
                  draggable={true}
                />
              </div>
            )}

            {previewType.startsWith("video/") && previewSrc && (
              <div className="flex justify-center">
                <video
                  src={previewSrc}
                  controls
                  autoPlay
                  className="max-h-[80vh] rounded-lg select-none"
                  draggable={true}
                />
              </div>
            )}

            {previewType === "application/pdf" && previewSrc && (
              <iframe
                src={previewSrc}
                className="w-full h-[85vh] rounded-lg"
                title="PDF Preview"
              ></iframe>
            )}

            {/* UNSUPPORTED FILE TYPE */}
            {!previewType.startsWith("image/") &&
              !previewType.startsWith("video/") &&
              previewType !== "application/pdf" &&
              previewType && (
                <p className="text-center text-red-600 p-4">
                  Unsupported file type
                </p>
              )}
          </>
        )}
      </PortalModal>
    </div>
  );
}
