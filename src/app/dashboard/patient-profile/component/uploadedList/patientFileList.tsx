// "use client";

// import React, { useEffect, useState } from "react";
// import { PostOpsData } from "../../type";
// import { downloadFileById } from "@/lib/actions/fileApi";

// interface Props {
//   postOps: PostOpsData[];
// }

// export default function PatientFilesList({ postOps }: Props) {
//   const [records, setRecords] = useState<PostOpsData[]>([]);
//   const [loading, setLoading] = useState(true);

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

//       const url = window.URL.createObjectURL(blob);
//       window.open(url, "_blank");

//       // Optional: revoke the URL after 10 seconds
//       setTimeout(() => window.URL.revokeObjectURL(url), 10000);
//     } catch (err) {
//       console.error("Preview failed:", err);
//       alert("Failed to preview file");
//     }
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
//             <tr key={item.id} className="border-t text-center hover:bg-gray-50">
//               <td className="p-2 border">{index + 1}</td>
//               <td className="p-2 border">
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
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { PostOpsData } from "../../type";
import { downloadFileById } from "@/lib/actions/fileApi";

interface Props {
  postOps: PostOpsData[];
}

export default function PatientFilesList({ postOps }: Props) {
  const [records, setRecords] = useState<PostOpsData[]>([]);
  const [loading, setLoading] = useState(true);

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
      const { blob, filename } = await downloadFileById(
        String(file.id),
        String(file.patient_id),
        String(file.admission_id)
      );

      const url = window.URL.createObjectURL(blob);

      // Open PDF/images in a new tab, download others
      if (file.file_type?.includes("pdf") || file.file_type?.includes("image")) {
        window.open(url, "_blank");
      } else {
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
      }

      setTimeout(() => window.URL.revokeObjectURL(url), 10000);
    } catch (err) {
      console.error("Preview failed:", err);
      alert("Failed to preview file");
    }
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
    </div>
  );
}
