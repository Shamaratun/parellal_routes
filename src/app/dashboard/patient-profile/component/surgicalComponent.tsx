// "use client";

// import React from "react";
// import { SurgicalData } from "../type";


// interface ProfileData {
//   surgical_data?: SurgicalData[] | null;
// }

// interface Props {
//   profile: ProfileData;
// }

// const fmtDate = (iso?: string) =>
//   iso ? new Date(iso).toLocaleDateString() : "N/A";

// export default function SurgicalComponent({ profile }: Props) {
//   const surgicals = profile?.surgical_data ?? [];

//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-blue-100/60 rounded-3xl shadow-2xl border border-blue-200/50 backdrop-blur-lg overflow-hidden">
//       <div className="overflow-x-auto p-6 sm:p-8">
//         <h2 className="text-[clamp(1.4rem,1vw+1rem,2rem)] font-bold text-blue-800 mb-6 flex items-center gap-2">
//           🩺 <span>Surgical / Post-Operative Information</span>
//         </h2>

//         <table className="min-w-full border-separate border-spacing-y-2 text-justify table-auto">
//           <thead>
//             <tr className="text-blue-700 text-[18px] font-semibold">
//               {[
//                 "Operation Name",
//                 "Operation Date",
//                 "Procedure Notes",
//                 "Challenges During Surgery",
//                 "Complications",
//                 "Nature of Anesthesia",
//                 "Post-Operative Recovery",
//                 "Recovery Notes",
//                 "Remarks",
//               ].map((head) => (
//                 <th
//                   key={head}
//                   className="px-4 py-3 text-left bg-gradient-to-r from-blue-100 to-blue-200/70 rounded-lg shadow-sm"
//                 >
//                   {head}
//                 </th>
//               ))}
//             </tr>
//           </thead>

//           <tbody>
//             {surgicals.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan={9}
//                   className="text-center py-8 text-gray-500 italic bg-white rounded-xl"
//                 >
//                   No surgical information available.
//                 </td>
//               </tr>
//             ) : (
//               surgicals.map((rec, idx) => (
//                 <tr
//                   key={rec.id ?? idx}
//                   className="group text-[17px] bg-white transition-all duration-300 rounded-xl hover:shadow-lg hover:scale-[1.01] hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100/80"
//                 >
//                   <td className="px-4 py-3 font-semibold text-gray-800">
//                     {rec.operation_name ?? "N/A"}
//                   </td>
//                   <td className="px-4 py-3">{fmtDate(rec.operation_date)}</td>
//                   <td className="px-4 py-3">{rec.procedure_notes ?? "N/A"}</td>
//                   <td className="px-4 py-3">
//                     {rec.challenges_during_surgery ?? "N/A"}
//                   </td>
//                   <td className="px-4 py-3">{rec.complications ?? "N/A"}</td>
//                   <td className="px-4 py-3">
//                     {rec.nature_of_anesthesia ?? "N/A"}
//                   </td>
//                   <td className="px-4 py-3">
//                     {rec.post_operative_recovery ?? "N/A"}
//                   </td>
//                   <td className="px-4 py-3">
//                     {rec.post_operative_recovery_notes ?? "N/A"}
//                   </td>
//                   <td className="px-4 py-3">{rec.remarks ?? "N/A"}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
"use client";

import React from "react";
import { SurgicalData } from "../type";

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

  if (surgicals.length === 0) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-blue-100/60 rounded-3xl shadow-lg border border-blue-200/50 p-10 text-center text-gray-500 italic">
        No surgical information available.
      </div>
    );
  }

  const headers = [
    "Operation Name",
    "Date",
    "Procedure",
    "Challenges",
    "Complications",
    "Anesthesia",
    "Recovery",
    "Notes",
    "Remarks",
  ];

  return (
    <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-50 via-white to-blue-100/70 rounded-3xl shadow-2xl border border-blue-100/60 backdrop-blur-lg overflow-x-auto">
      <table className="min-w-full text-sm md:text-base border-separate border-spacing-y-2">
        <thead className="hidden sm:table-header-group bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900 font-light">
          <tr>
            {headers.map((head) => (
              <th key={head} className="px-4 py-3 text-left">
                {head}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {surgicals.map((rec, idx) => (
            <tr
              key={rec.id ?? idx}
              className="bg-white/80 sm:bg-white text-center hover:bg-blue-50 transition-all duration-200 shadow-sm rounded-xl"
            >
              {headers.map((head, i) => {
                const value =
                  [
                    rec.operation_name,
                    fmtDate(rec.operation_date),
                    rec.procedure_notes,
                    rec.challenges_during_surgery,
                    rec.complications,
                    rec.nature_of_anesthesia,
                    rec.post_operative_recovery,
                    rec.post_operative_recovery_notes,
                    rec.remarks,
                  ][i] ?? "N/A";

                return (
                  <td
                    key={i}
                    className="block sm:table-cell px-4 py-3 text-gray-700 sm:align-top"
                  >
                    <div className="sm:hidden font-thin text-blue-800 mb-1">
                      {head}
                    </div>
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
