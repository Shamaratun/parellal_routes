
// "use client";

// import React from "react";
// import { Drug, PreOpsData } from "../type";



// interface ProfileData {
//   pre_ops_data?: PreOpsData[] | null;
// }

// interface Props {
//   profile: ProfileData;
// }

// const joinOrNA = (arr?: string[] | null) =>
//   Array.isArray(arr) && arr.length ? arr.join(", ") : "N/A";

// export default function MedicalComponent({ profile }: Props) {
//   const preOps = profile?.pre_ops_data;

//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl shadow-2xl border border-blue-200/50 backdrop-blur-lg overflow-hidden">
//       <div className="overflow-x-auto p-6 sm:p-8">
//         {!preOps || preOps.length === 0 ? (
//           <p className="text-gray-500 mt-2 italic rounded-xl text-center">
//             No medical information available.
//           </p>
//         ) : (
//           preOps.map((rec, idx) => (
//             <div
//               key={rec.id ?? idx}
//               className="mb-10 rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100/80 transition-all duration-300"
//             >
//               {/* ✅ General Medical Information Table */}
//               <table className="min-w-full border-separate border-spacing-y-1 text-[17px]">
//                 <tbody>
//                   <tr>
//                     <th className="text-left p-3 bg-gradient-to-r from-blue-100 to-blue-200/70 rounded-l-lg w-1/3">
//                       Co-morbidities
//                     </th>
//                     <td className="p-3">{joinOrNA(rec.co_morbidities_id)}</td>
//                   </tr>

//                   <tr>
//                     <th className="text-left p-3 bg-gradient-to-r from-blue-50 to-blue-100/60">
//                       Diagnosis
//                     </th>
//                     <td className="p-3">{joinOrNA(rec.diagnosis_id)}</td>
//                   </tr>

//                   <tr>
//                     <th className="text-left p-3 bg-gradient-to-r from-blue-100 to-blue-200/70">
//                       Surgical History
//                     </th>
//                     <td className="p-3">{rec.surgical_history ?? "N/A"}</td>
//                   </tr>

//                   <tr>
//                     <th className="text-left p-3 bg-gradient-to-r from-blue-50 to-blue-100/60 rounded-bl-lg">
//                       Remarks
//                     </th>
//                     <td className="p-3">{rec.remarks ?? "N/A"}</td>
//                   </tr>
//                 </tbody>
//               </table>

//               {/* ✅ Drug History Section */}
//               {rec.drug_history && rec.drug_history.length > 0 ? (
//                 <div className="mt-4">
//                   <h3 className="text-green-800 font-bold text-lg p-3">
//                     💊 Drug History
//                   </h3>
//                   <table className="min-w-full text-[16px] mb-4">
//                     <thead>
//                       <tr className="bg-gradient-to-r from-green-100 to-green-200/70 text-green-900">
//                         <th className="text-left p-4 font-semibold w-1/3 rounded-l-lg">
//                           Drug Name
//                         </th>
//                         <th className="text-left p-4 font-semibold w-1/3">
//                           Dose
//                         </th>
//                         <th className="text-left p-4 font-semibold w-1/3 rounded-r-lg">
//                           Frequency
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {rec.drug_history.map((drugStr, index) => {
//                         try {
//                           const drug: Drug = JSON.parse(drugStr);
//                           return (
//                             <tr
//                               key={index}
//                               className="border-t hover:bg-green-50 transition"
//                             >
//                               <td className="p-4 font-medium text-green-800">
//                                 {drug.drug_name}
//                               </td>
//                               <td className="p-4 text-gray-700">
//                                 {drug.dose}
//                               </td>
//                               <td className="p-4 text-gray-700">
//                                 {drug.frequency}
//                               </td>
//                             </tr>
//                           );
//                         } catch {
//                           return (
//                             <tr
//                               key={index}
//                               className="border-t text-red-600 italic"
//                             >
//                               <td colSpan={3} className="p-4">
//                                 Invalid drug data format
//                               </td>
//                             </tr>
//                           );
//                         }
//                       })}
//                     </tbody>
//                   </table>
//                 </div>
//               ) : (
//                 <div className="text-gray-500 italic text-sm p-3 text-center">
//                   No drug history found for this record.
//                 </div>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }
// "use client";

// import React from "react";
// import { Drug, PreOpsData } from "../type";

// interface ProfileData {
//   pre_ops_data?: PreOpsData[] | null;
// }

// interface Props {
//   profile: ProfileData;
// }

// const joinOrNA = (arr?: string[] | null) =>
//   Array.isArray(arr) && arr.length ? arr.join(", ") : "N/A";

// export default function MedicalComponent({ profile }: Props) {
//   const preOps = profile?.pre_ops_data;

//   if (!preOps || preOps.length === 0) {
//     return (
//       <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl shadow-xl border border-blue-200/50 backdrop-blur-md p-8 text-center text-gray-500 italic">
//         No medical information available.
//       </div>
//     );
//   }

//   // ✅ Combine all data together
//   const allCoMorbidities = preOps.flatMap((r) => r.co_morbidities_id ?? []);
//   const allDiagnosis = preOps.flatMap((r) => r.diagnosis_id ?? []);
//   const allSurgicalHistory = preOps
//     .map((r) => r.surgical_history)
//     .filter(Boolean)
//     .join(", ");
//   const allRemarks = preOps.map((r) => r.remarks).filter(Boolean).join(", ");

//   // ✅ Flatten drug data
// const allDrugs =
//   preOps.flatMap((r) =>
//     r.drug_history
//       ? r.drug_history
//           .map((drugStr) => {
//             try {
//               return JSON.parse(drugStr) as Drug;
//             } catch {
//               return null;
//             }
//           })
//           .filter(Boolean)
//       : []
//   ) ?? [];

//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl shadow-2xl border border-blue-200/50 backdrop-blur-lg p-8 space-y-6">
//       <div className="bg-white/90 rounded-2xl p-6 shadow-sm">
//         <table className="min-w-full border-separate border-spacing-y-1 text-[16px]">
//           <tbody>
//             <tr>
//               <th className="text-left p-3 bg-gradient-to-r from-blue-100 to-blue-200/70 rounded-l-lg w-1/3">
//                 Co-morbidities
//               </th>
//               <td className="p-3">{joinOrNA(allCoMorbidities)}</td>
//             </tr>
//             <tr>
//               <th className="text-left p-3 bg-gradient-to-r from-blue-50 to-blue-100/60">
//                 Diagnosis
//               </th>
//               <td className="p-3">{joinOrNA(allDiagnosis)}</td>
//             </tr>
//             <tr>
//               <th className="text-left p-3 bg-gradient-to-r from-blue-100 to-blue-200/70">
//                 Surgical History
//               </th>
//               <td className="p-3">{allSurgicalHistory || "N/A"}</td>
//             </tr>
//             <tr>
//               <th className="text-left p-3 bg-gradient-to-r from-blue-50 to-blue-100/60 rounded-bl-lg">
//                 Remarks
//               </th>
//               <td className="p-3">{allRemarks || "N/A"}</td>
//             </tr>
//           </tbody>
//         </table>

//         {/* ✅ Drug History */}
//         {allDrugs.length > 0 ? (
//           <div className="mt-6">
//             <h3 className="text-green-800 font-bold text-lg p-3">
//               💊 Drug History
//             </h3>
//             <table className="min-w-full text-[16px] mb-4">
//               <thead>
//                 <tr className="bg-gradient-to-r from-green-100 to-green-200/70 text-green-900">
//                   <th className="text-left p-4 font-semibold w-1/3 rounded-l-lg">
//                     Drug Name
//                   </th>
//                   <th className="text-left p-4 font-semibold w-1/3">
//                     Dose
//                   </th>
//                   <th className="text-left p-4 font-semibold w-1/3 rounded-r-lg">
//                     Frequency
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {allDrugs.map((drug, index) => (
//                   <tr key={index} className="border-t hover:bg-green-50 transition">
//                     <td className="p-4 font-medium text-green-800">{drug?.drug_name}</td>
//                     <td className="p-4 text-gray-700">{drug?.dose}</td>
//                     <td className="p-4 text-gray-700">{drug?.frequency}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <div className="text-gray-500 italic text-sm p-3 text-center">
//             No drug history found.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";

import React from "react";
import { Drug, PreOpsData } from "../type";

interface ProfileData {
  pre_ops_data?: PreOpsData[] | null;
}

interface Props {
  profile: ProfileData;
}

const joinOrNA = (arr?: string[] | null) =>
  Array.isArray(arr) && arr.length ? arr.join(", ") : "N/A";

export default function MedicalComponent({ profile }: Props) {
  const preOps = profile?.pre_ops_data;

  if (!preOps || preOps.length === 0) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl shadow-xl border border-blue-200/50 backdrop-blur-md p-8 text-center text-gray-500 italic">
        No medical information available.
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl shadow-2xl border border-blue-200/50 backdrop-blur-lg p-6 space-y-6 overflow-x-auto">
      <div className="bg-white/90 rounded-2xl p-4 shadow-sm overflow-x-auto">
        <table className="min-w-full text-[16px] border-separate border-spacing-y-2">
          <thead>
            <tr className="bg-gradient-to-r from-blue-100 to-blue-200/70 text-blue-800 font-semibold">
              <th className="p-3 text-left">Record ID</th>
              <th className="p-3 text-left">Co-morbidities</th>
              <th className="p-3 text-left">Diagnosis</th>
              <th className="p-3 text-left">Surgical History</th>
              <th className="p-3 text-left w-64">Remarks</th>
              <th className="p-3 text-left rounded-r-lg">Drug History</th>
            </tr>
          </thead>
          <tbody>
            {preOps.map((rec) => {
              // Only parse drugs of the current record
              const drugs =
                rec.drug_history
                  ?.map((drugStr) => {
                    try {
                      return JSON.parse(drugStr) as Drug;
                    } catch {
                      return null;
                    }
                  })
                  .filter(Boolean) ?? [];

              return (
                <tr key={rec.id} className="bg-blue-50 hover:bg-blue-100 transition">
                  <td className="p-1 font-semibold text-blue-800">{rec.id}</td>
                  <td className="p-1">{joinOrNA(rec.co_morbidities_id)}</td>
                  <td className="p-1">{joinOrNA(rec.diagnosis_id)}</td> 
                  <td className="p-1">{rec.surgical_history ?? "N/A"}</td>
<td className="p-3 w-64">
  {joinOrNA(Array.isArray(rec.remarks) ? rec.remarks : rec.remarks ? [rec.remarks] : [])}
</td>    <td className="p-3">
                {drugs.length > 0 ? (
                      <table className="min-w-full text-[14px] border border-gray-200 rounded-lg">
                        <thead>
                          <tr className="bg-green-100 text-green-800 font-semibold">
                            <th className="p-1 text-left">Drug Name</th>
                            <th className="p-1 text-left">Dose</th>
                            <th className="p-1 text-left">Frequency</th>
                          </tr>
                        </thead>
                        <tbody>
                          {drugs.map((drug, index) => (
                            <tr
                              key={index}
                              className="border-t hover:bg-green-50 transition"
                            >
                              <td className="p-2">{drug?.drug_name}</td>
                              <td className="p-2">{drug?.dose}</td>
                              <td className="p-2">{drug?.frequency}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <span className="text-gray-500 italic">No drugs</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}