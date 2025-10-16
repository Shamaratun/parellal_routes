// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { SurgicalData } from "../type";
// import { useEffect, useState } from "react";
// import { getProfileAction } from "../profileAction";




// export default function SurgicalComponent() {
//   const [postOps, setPostOps] = useState<SurgicalData[]>([]);



//   return (
//     <Card className="mt-4">
//       <CardContent>
//         <div className="mt-4">
//           <h3 className="text-lg font-semibold mb-4">Surgical / Post-Op Data</h3>

//           {postOps.length === 0 ? (
//             <p className="text-gray-500 text-sm">N/A</p>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="min-w-full border border-gray-200">
//                 <thead className="bg-blue-100">
//                   <tr>
//                     <th className="text-left p-2 border-b">ID</th>
//                     <th className="text-left p-2 border-b">File</th>
//                     <th className="text-left p-2 border-b">Remarks</th>
//                     <th className="text-left p-2 border-b">Doctor ID</th>
//                     <th className="text-left p-2 border-b">Inserted By</th>
//                     <th className="text-left p-2 border-b">Active</th>
//                     <th className="text-left p-2 border-b">Updated By</th>
//                     <th className="text-left p-2 border-b">Patient ID</th>
//                     <th className="text-left p-2 border-b">Hospital ID</th>
//                     <th className="text-left p-2 border-b">Insert Date</th>
//                     <th className="text-left p-2 border-b">Update Date</th>
//                     <th className="text-left p-2 border-b">Admission ID</th>
//                     <th className="text-left p-2 border-b">Document Type</th>
//                     <th className="text-left p-2 border-b">View File</th>
//                     <th className="text-left p-2 border-b">Datetime</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {postOps.map((item: SurgicalData) => (
//                     <tr key={item.id} className="hover:bg-gray-50">
//                       <td className="p-2 border-b">{item.id || "N/A"}</td>
//                       <td className="p-2 border-b">
//                         {item.file_name || "N/A"} ({item.file_type || "N/A"})
//                       </td>
//                       <td className="p-2 border-b">{item.remarks || "N/A"}</td>
//                       <td className="p-2 border-b">{item.doctor_id || "N/A"}</td>
//                       <td className="p-2 border-b">{item.insert_by || "N/A"}</td>
//                       <td className="p-2 border-b">{item.is_active}</td>
//                       <td className="p-2 border-b">{item.update_by || "N/A"}</td>
//                       <td className="p-2 border-b">{item.patient_id || "N/A"}</td>
//                       <td className="p-2 border-b">{item.hospital_id || "N/A"}</td>
//                       <td className="p-2 border-b">{item.insert_date || "N/A"}</td>
//                       <td className="p-2 border-b">{item.update_date || "N/A"}</td>
//                       <td className="p-2 border-b">{item.admission_id || "N/A"}</td>
//                       <td className="p-2 border-b">{item.document_type || "N/A"}</td>
//                       <td className="p-2 border-b">
//                         {item.drive_file_id ? (
//                           <a
//                             href={`https://drive.google.com/file/d/${item.drive_file_id}`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-blue-500 underline"
//                           >
//                             Open File
//                           </a>
//                         ) : (
//                           "N/A"
//                         )}
//                       </td>
//                       <td className="p-2 border-b">
//                         {item.dt ? new Date(item.dt).toLocaleString() : "N/A"}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }




// interface Props {
//   patient?: Patient;
//   postOps: SurgicalData[];
// }

// export default function SurgicalComponent({patient, postOps }: Props) {
//   if (!postOps || postOps.length === 0)
//     return <p className="text-gray-500 text-sm">No surgical/post-op data</p>;




//   return (
//     <Card className="mt-4">
//       <CardContent>
//         <div className="mt-4">
//           <h3 className="text-lg font-semibold mb-4">Surgical / Post-Op Data</h3>

          
//             {/* <div className="overflow-x-auto">
//               <table className="min-w-full border border-gray-200">
//                 <thead className="bg-blue-100">
//                   <tr>
//                     <th className="text-left p-2 border-b">ID</th>
//                     <th className="text-left p-2 border-b">File</th>
//                     <th className="text-left p-2 border-b">Remarks</th>
//                     <th className="text-left p-2 border-b">Doctor ID</th>
//                     <th className="text-left p-2 border-b">Inserted By</th>
//                     <th className="text-left p-2 border-b">Active</th>
//                     <th className="text-left p-2 border-b">Patient ID</th>
//                     <th className="text-left p-2 border-b">Admission ID</th>
//                     <th className="text-left p-2 border-b">Document Type</th>
//                     <th className="text-left p-2 border-b">View File</th>
//                     <th className="text-left p-2 border-b">Datetime</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {postOps.map((postOps: SurgicalData) => (
//                     <tr key={postOps.id} className="hover:bg-gray-50">
//                       <td className="p-2 border-b">{postOps.id || "N/A"}</td>
//                       <td className="p-2 border-b">{postOps.file_name || "N/A"} ({postOps.file_type || "N/A"})</td>
//                       <td className="p-2 border-b">{postOps.remarks || "N/A"}</td>
//                       <td className="p-2 border-b">{postOps.doctor_id || "N/A"}</td>
//                       <td className="p-2 border-b">{postOps.insert_by || "N/A"}</td>
//                       <td className="p-2 border-b">{postOps.is_active}</td>
//                       <td className="p-2 border-b">{postOps.patient_id || "N/A"}</td>
//                       <td className="p-2 border-b">{postOps.admission_id || "N/A"}</td>
//                       <td className="p-2 border-b">{postOps.document_type || "N/A"}</td>
//                       <td className="p-2 border-b">
//                         {postOps.drive_file_id ? (
//                           <a
//                             href={`https://drive.google.com/file/d/${postOps.drive_file_id}`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-blue-500 underline"
//                           >
//                             Open File
//                           </a>
//                         ) : "N/A"}
//                       </td>
//                       <td className="p-2 border-b">{postOps.dt ? new Date(postOps.dt).toLocaleString() : "N/A"}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div> */}
         
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
// "use client";
"use client";

import React from "react";

type SurgicalData = {
  id: number;
  patient_id?: number;
  admission_id?: number;
  operation_name?: string;
  operation_date?: string;
  procedure_notes?: string;
  challenges_during_surgery?: string;
  complications?: string;
  post_operative_recovery?: string;
  nature_of_anesthesia?: string;
  post_operative_recovery_notes?: string;
  remarks?: string;
  [key: string]: any;
};

interface ProfileData {
  surgical_data?: SurgicalData[] | null;
}

interface Props {
  profile: ProfileData;
}

const fmtDate = (iso?: string) =>
  iso ? new Date(iso).toLocaleDateString() : "N/A";

export default function SurgicalComponent({ profile }: Props) {
  const surgicals = profile?.surgical_data ?? [];

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4 overflow-x-auto">
      <h2 className="font-semibold text-green-600 mb-4 text-lg">
        Surgical / Post-Operative Information
      </h2>

      <table className="min-w-full border border-gray-200">
        <thead className="bg-green-100">
          <tr>
            <th className="text-left p-2 border-b">Operation Name</th>
            <th className="text-left p-2 border-b">Operation Date</th>
            <th className="text-left p-2 border-b">Procedure Notes</th>
            <th className="text-left p-2 border-b">Challenges During Surgery</th>
            <th className="text-left p-2 border-b">Complications</th>
            <th className="text-left p-2 border-b">Nature of Anesthesia</th>
            <th className="text-left p-2 border-b">Post-Operative Recovery</th>
            <th className="text-left p-2 border-b">Recovery Notes</th>
            <th className="text-left p-2 border-b">Remarks</th>
          </tr>
        </thead>

        <tbody>
          {surgicals.length === 0 ? (
            <tr>
              <td
                colSpan={9}
                className="text-center text-gray-500 p-3 italic border-b"
              >
                No surgical information available.
              </td>
            </tr>
          ) : (
            surgicals.map((rec, idx) => (
              <tr key={rec.id ?? idx} className="hover:bg-gray-50">
                <td className="p-2 border-b">{rec.operation_name ?? "N/A"}</td>
                <td className="p-2 border-b">{fmtDate(rec.operation_date)}</td>
                <td className="p-2 border-b">{rec.procedure_notes ?? "N/A"}</td>
                <td className="p-2 border-b">
                  {rec.challenges_during_surgery ?? "N/A"}
                </td>
                <td className="p-2 border-b">{rec.complications ?? "N/A"}</td>
                <td className="p-2 border-b">{rec.nature_of_anesthesia ?? "N/A"}</td>
                <td className="p-2 border-b">{rec.post_operative_recovery ?? "N/A"}</td>
                <td className="p-2 border-b">
                  {rec.post_operative_recovery_notes ?? "N/A"}
                </td>
                <td className="p-2 border-b">{rec.remarks ?? "N/A"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
