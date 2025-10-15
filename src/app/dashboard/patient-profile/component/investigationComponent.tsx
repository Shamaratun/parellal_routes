// // import { investigationsDummy } from "./dummyData/investigationDummy";





// // export default function InvestigationComponent() {
// //   return (
// //     <div className="space-y-6">

// //   {/* Investigations Table */}
// //   <div className="bg-white p-6 rounded-2xl shadow-lg overflow-x-auto">
// //   <h2 className="font-bold text-yellow-600 text-2xl mb-6">Investigations</h2>

// //   <table className="min-w-full table-auto border-collapse">
// //     <thead className="bg-yellow-200">
// //       <tr>
// //         <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">Test</th>
// //         <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">Date</th>
// //         <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">Result</th>
// //         <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">Doctor</th>
// //         <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">Notes</th>
// //       </tr>
// //     </thead>
// //     <tbody>
// //       {investigationsDummy.investigations.map((i, index) => (
// //         <tr
// //           key={i.investigationId}
// //           className={`${
// //             index % 2 === 0 ? "bg-yellow-50" : "bg-yellow-100"
// //           } hover:bg-yellow-200 transition-colors duration-300`}
// //         >
// //           <td className="p-3 text-gray-800 whitespace-nowrap">{i.testName}</td>
// //           <td className="p-3 text-gray-800 whitespace-nowrap">{i.date}</td>
// //           <td className="p-3 text-gray-800 font-medium whitespace-nowrap">{i.result}</td>
// //           <td className="p-3 text-gray-800 whitespace-nowrap">{i.doctor}</td>
// //           <td className="p-3 text-gray-800">{i.notes}</td>
// //         </tr>
// //       ))}
// //     </tbody>
// //   </table>
// //     {investigationsDummy.investigations.length === 0 && (
// //       <p className="text-gray-500 mt-2">No investigations available.</p>
// //     )}
// //   </div>

// // </div>
// //     );  }

// "use client";
// import React, { useState, useEffect } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { PreSurgicalData, InvestigationItem } from "../type";

// export default function PreSurgicalInvestigations() {
//   const [preOps, setPreOps] = useState<PreSurgicalData[]>([]);

//  useEffect(() => {
   
//   }, []);

//   return (
//     <Card className="mt-4">
//       <CardContent>
//         <div className="mt-4">
//           <h3 className="text-lg font-semibold mb-4 text-yellow-700">
//             Investigations
//           </h3>

//           <div className="overflow-x-auto">
//             <table className="min-w-full table-auto border-collapse">
//               <thead className="bg-yellow-200">
//                 <tr>
//                   <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">
//                     Test
//                   </th>
//                   <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">
//                     Date
//                   </th>
//                   <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">
//                     Result
//                   </th>
//                   <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">
//                     Doctor
//                   </th>
//                   <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">
//                     Notes
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {preOps.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={5}
//                       className="text-center p-4 text-gray-500 italic bg-yellow-50"
//                     >
//                       No pre-surgical data available.
//                     </td>
//                   </tr>
//                 ) : (
//                   preOps.flatMap((preOp) =>
//                     preOp.investigations && preOp.investigations.length > 0 ? (
//                       preOp.investigations.map(
//                         (inv: InvestigationItem, index: number) => (
//                           <tr
//                             key={`${preOp.id}-${inv.investigationId}`}
//                             className={`${
//                               index % 2 === 0
//                                 ? "bg-yellow-50"
//                                 : "bg-yellow-100"
//                             } hover:bg-yellow-200 transition-colors duration-300`}
//                           >
//                             <td className="p-3 text-gray-800 whitespace-nowrap">
//                               {inv.testName || "—"}
//                             </td>
//                             <td className="p-3 text-gray-800 whitespace-nowrap">
//                               {inv.date || "—"}
//                             </td>
//                             <td className="p-3 text-gray-800 font-medium whitespace-nowrap">
//                               {inv.result || "—"}
//                             </td>
//                             <td className="p-3 text-gray-800 whitespace-nowrap">
//                               {inv.doctor || "—"}
//                             </td>
//                             <td className="p-3 text-gray-800">
//                               {inv.notes || "—"}
//                             </td>
//                           </tr>
//                         )
//                       )
//                     ) : (
//                       <tr key={`empty-${preOp.id}`}>
//                         <td
//                           colSpan={5}
//                           className="text-center text-gray-500 p-4 bg-yellow-50"
//                         >
//                           No investigations found for this patient.
//                         </td>
//                       </tr>
//                     )
//                   )
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
// "use client";

// import React from "react";
// import { PreSurgicalData, InvestigationItem } from "../type";

// interface Props {
//   preOps: PreSurgicalData[];
// }

// export default function InvestigationComponent({ preOps }: Props) {
//   return (
//     <div className="bg-white p-6 rounded-2xl shadow-lg overflow-x-auto mt-4">
//       <h2 className="font-bold text-yellow-600 text-2xl mb-6">🔬 Investigations</h2>

//       <table className="min-w-full table-auto border-collapse">
//         <thead className="bg-yellow-200">
//           <tr>
//             <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">Test</th>
//             <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">Date</th>
//             <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">Result</th>
//             <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">Doctor</th>
//             <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">Notes</th>
//           </tr>
//         </thead>

//         <tbody>
//           {preOps.length === 0 ? (
//             <tr>
//               <td colSpan={5} className="text-center p-4 text-gray-500 italic bg-yellow-50">
//                 No pre-surgical data available.
//               </td>
//             </tr>
//           ) : (
//             preOps.flatMap((preOp) =>
//               preOp.investigations && preOp.investigations.length > 0 ? (
//                 preOp.investigations.map((inv: InvestigationItem, index: number) => (
//                   <tr
//                     key={`${preOp.id}-${inv.investigationId}`}
//                     className={`${index % 2 === 0 ? "bg-yellow-50" : "bg-yellow-100"} hover:bg-yellow-200 transition-colors duration-300`}
//                   >
//                     <td className="p-3 text-gray-800 whitespace-nowrap">{inv.testName || "—"}</td>
//                     <td className="p-3 text-gray-800 whitespace-nowrap">{inv.date || "—"}</td>
//                     <td className="p-3 text-gray-800 font-medium whitespace-nowrap">{inv.result || "—"}</td>
//                     <td className="p-3 text-gray-800 whitespace-nowrap">{inv.doctor || "—"}</td>
//                     <td className="p-3 text-gray-800">{inv.notes || "—"}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr key={`empty-${preOp.id}`}>
//                   <td colSpan={5} className="text-center text-gray-500 p-4 bg-yellow-50">
//                     No investigations found for this patient.
//                   </td>
//                 </tr>
//               )
//             )
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// "use client";

// import React, { useState } from "react";
// import { PreOpsData } from "../type";

// type Investigations = Record<string, string | number | null>;

// interface PreOpsProps {
//   preOps?: PreOpsData | null;
// }

// export default function InvestigationsTable({ preOps }: PreOpsProps) {
//      const [preops, setPreops] = useState<PreOpsData[]>(preOps || []);
//   if (!preops || Object.keys(preops).length === 0) {
//     return <p className="text-sm text-gray-500">No investigations available.</p>;
//   }

//   return (
//     <table className="w-full text-sm border rounded-lg">
//       <tbody>
//         <tr className="border-t align-top">
//           <td className="p-2 font-medium w-48">Investigations</td>
//           <td className="p-2">
//             <ul className="list-disc ml-5">
//               {Object.entries(preops).map(([key, value]) => (
//                 <li key={key} className="text-sm">
//                   {key}: {value ?? "N/A"}
//                 </li>
//               ))}
//             </ul>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   );
// }
"use client";

import React from "react";

type Investigations = Record<string, string | number | null>;

interface PreOp {  
  investigations?: Investigations;
  [key: string]: any;
} 

interface ProfileData {
  pre_ops_data?: PreOp[] | null;
}

interface Props {
  profile: ProfileData;
}

/** small helpers */
const fmtDateTime = (iso?: string) =>
  iso ? new Date(iso).toLocaleString() : "N/A";

const fmtDate = (iso?: string) =>
  iso ? new Date(iso).toLocaleDateString() : "N/A";

const joinOrNA = (arr?: string[] | null) =>
  Array.isArray(arr) && arr.length ? arr.join(", ") : "N/A";

export default function InvestigationComponent({ profile }: Props) {
  const preOps = profile?.pre_ops_data;

  return (
    <div className="space-y-6 p-4">
      
        <h3 className="text-lg font-semibold mb-3">Investigation Data</h3>

        {!preOps || !Array.isArray(preOps) || preOps.length === 0 ? (
          <p className="text-sm text-gray-500">No investigation records.</p>
        ) : (
          preOps.map((rec, idx) => (
            <div key={rec.id ?? idx} className="mb-4 border rounded p-3 bg-gray-50">
                            <table className="w-full text-sm">
                <tbody>               
                  <tr className="border-t align-top">
                    <td className="p-2 font-medium">Investigations</td>
                    <td className="p-2">
                      {rec.investigations && Object.keys(rec.investigations).length ? (
                        <ul className="list-disc ml-5">
                          {Object.entries(rec.investigations).map(([k, v]) => (
                            <li key={k} className="text-sm">
                              {k}: {String(v)}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        "N/A"
                      )}
                    </td>
                  </tr>

                
                </tbody>
              </table>
            </div>
          ))
        )}     
    </div>
  );
}

