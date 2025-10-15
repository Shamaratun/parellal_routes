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
"use client";

import React from "react";
import { PreSurgicalData, InvestigationItem } from "../type";

interface Props {
  preOps: PreSurgicalData[];
}

export default function InvestigationComponent({ preOps }: Props) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg overflow-x-auto mt-4">
      <h2 className="font-bold text-yellow-600 text-2xl mb-6">🔬 Investigations</h2>

      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-yellow-200">
          <tr>
            <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">Test</th>
            <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">Date</th>
            <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">Result</th>
            <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">Doctor</th>
            <th className="text-left p-3 border-b-2 border-yellow-300 text-sm font-semibold text-gray-700 uppercase tracking-wide">Notes</th>
          </tr>
        </thead>

        <tbody>
          {preOps.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center p-4 text-gray-500 italic bg-yellow-50">
                No pre-surgical data available.
              </td>
            </tr>
          ) : (
            preOps.flatMap((preOp) =>
              preOp.investigations && preOp.investigations.length > 0 ? (
                preOp.investigations.map((inv: InvestigationItem, index: number) => (
                  <tr
                    key={`${preOp.id}-${inv.investigationId}`}
                    className={`${index % 2 === 0 ? "bg-yellow-50" : "bg-yellow-100"} hover:bg-yellow-200 transition-colors duration-300`}
                  >
                    <td className="p-3 text-gray-800 whitespace-nowrap">{inv.testName || "—"}</td>
                    <td className="p-3 text-gray-800 whitespace-nowrap">{inv.date || "—"}</td>
                    <td className="p-3 text-gray-800 font-medium whitespace-nowrap">{inv.result || "—"}</td>
                    <td className="p-3 text-gray-800 whitespace-nowrap">{inv.doctor || "—"}</td>
                    <td className="p-3 text-gray-800">{inv.notes || "—"}</td>
                  </tr>
                ))
              ) : (
                <tr key={`empty-${preOp.id}`}>
                  <td colSpan={5} className="text-center text-gray-500 p-4 bg-yellow-50">
                    No investigations found for this patient.
                  </td>
                </tr>
              )
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
