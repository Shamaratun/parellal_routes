// "use client";

// import React from "react";
// import { PreOpsData } from "../type";

// interface ProfileData {
//   pre_ops_data?: PreOpsData[] | null;
// }

// interface Props {
//   profile: ProfileData;
// }

// export default function InvestigationComponent({ profile }: Props) {
//   const preOps = profile?.pre_ops_data;

//   return (
//     <div className="bg-gradient-to-br rounded-2xl from-blue-50 via-white to-blue-100/60 overflow-x-auto">
//       {!preOps || preOps.length === 0 ? (
//         <p className="text-gray-500 italic text-center">
//           No investigation records available.
//         </p>
//       ) : (
//         preOps.map((rec, idx) =>
//           rec.investigations && rec.investigations.length > 0 ? (
//             <div
//               key={rec.id ?? idx}
//               className=" bg-white bg-gradient-to-r hover:from-blue-50 hover:to-blue-100/80 transition-all duration-300 rounded-xl shadow-sm"
//             >
//               <table className="min-w-full text-[16px]">
//                 <thead>
//                   <tr className="bg-gradient-to-r from-blue-100 to-blue-200/70 text-blue-900">
//                     <th className="text-left p-4 font-semibold w-1/3 rounded-l-lg">
//                       Investigation Name
//                     </th>
//                     <th className="text-left p-4 font-semibold w-1/3">
//                       Report Result
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {rec.investigations.map((inv) => (
//                     <tr
//                       key={inv.investigation_id}
//                       className="border-t hover:bg-blue-50 transition"
//                     >
//                       <td className="p-4 font-medium text-blue-800">
//                         {inv.investigation_name}
//                       </td>
//                       <td className="p-4 text-gray-700">
//                         {inv.investigation_report_result || "N/A"}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <div
//               key={rec.id ?? idx}
//               className="text-center text-gray-500 p-4 bg-white rounded-xl border border-blue-100 shadow-sm italic"
//             >
//               No investigations found for this record.
//             </div>
//           )
//         )
//       )}
//     </div>
//   );
// }
"use client";

import React from "react";
import { PreOpsData } from "../type";

interface ProfileData {
  pre_ops_data?: PreOpsData[] | null;
}

interface Props {
  profile: ProfileData;
}

export default function InvestigationComponent({ profile }: Props) {
  const preOps = profile?.pre_ops_data || [];

  // Flatten all investigations into a single array
  const allInvestigations = preOps.flatMap((rec) =>
    rec.investigations && rec.investigations.length > 0
      ? rec.investigations.map((inv) => ({
          investigation_name: inv.investigation_name,
          investigation_report_result: inv.investigation_report_result || "N/A",
        }))
      : []
  );

  return (
    <div className="bg-gradient-to-br rounded-2xl from-blue-50 via-white to-blue-100/60 overflow-x-auto p-4">
      {allInvestigations.length === 0 ? (
        <p className="text-gray-500 italic text-center">
          No investigation records available.
        </p>
      ) : (
        <table className="min-w-full text-[16px] bg-white rounded-xl shadow-sm overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-blue-100 to-blue-200/70 text-blue-900">
              <th className="text-left p-4 font-semibold w-1/3">Investigation Name</th>
              <th className="text-left p-4 font-semibold w-2/3">Report Result</th>
            </tr>
          </thead>
          <tbody>
            {allInvestigations.map((inv, idx) => (
              <tr key={idx} className="border-t hover:bg-blue-50 transition">
                <td className="p-4 font-medium text-blue-800">{inv.investigation_name}</td>
                <td className="p-4 text-gray-700">{inv.investigation_report_result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
