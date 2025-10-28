// // "use client";

// // import React from "react";
// // import { SurgicalData } from "../type";

// // interface ProfileData {
// //   surgical_data?: SurgicalData[] | null;
// // }

// // interface Props {
// //   profile: ProfileData;
// // }

// // const fmtDate = (iso?: string) =>
// //   iso ? new Date(iso).toLocaleDateString() : "";

// // export default function SurgicalComponent({ profile }: Props) {
// //   const surgicals = profile?.surgical_data ?? [];

// //   if (surgicals.length === 0) {
// //     return (
// //       <div className="bg-gradient-to-br from-blue-50 to-blue-100/60 rounded-3xl shadow-lg border border-blue-200/50 p-10 text-center text-gray-500 italic">
// //         No surgical information available.
// //       </div>
// //     );
// //   }

// //   const headers = [
// //     "Operation Name",
// //     "Date",
// //     "Procedure",
// //     "Challenges",
// //     "Complications",
// //     "Anesthesia",
// //     "Recovery",
// //     "Notes",
// //     // "Remarks",
// //   ];

// //   return (
// //     <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-50 via-white to-blue-100/70 rounded-3xl shadow-2xl border border-blue-100/60  overflow-x-auto">
// //       <table className="w-full text-sm md:text-base border-separate border-spacing-y-2">
// //         <thead className="sm:table-header-group bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900 ">
// //           <tr>
// //             {headers.map((head) => (
// //               <th key={head} className=" px-4  text-left">
// //                 {head}
// //               </th>
// //             ))}
// //           </tr>
// //         </thead>

// //         <tbody>
// //           {surgicals.map((rec, idx) => {
// //             const values = [
// //               rec.operation_name,
// //               fmtDate(rec.operation_date),
// //               rec.procedure_notes,
// //               rec.challenges_during_surgery,
// //               rec.complications,
// //               rec.nature_of_anesthesia,
// //               rec.post_operative_recovery,
// //               rec.post_operative_recovery_notes,
// //               // rec.remarks,
// //             ];

// //             // Check if all fields are empty or undefined
// //             const hasData = values.some((val) => val && val.trim() !== "");

// //             if (!hasData) {
// //               return (
// //                 <tr
// //                   key={rec.id ?? idx}
// //                   className="bg-white/80 sm:bg-white text-center hover:bg-blue-50 transition-all duration-200 shadow-sm rounded-xl"
// //                 >                  
// //                 </tr>
// //               );
// //             }

// //             return (
// //               <tr
// //                 key={rec.id ?? idx}
// //                 className="bg-white/80 sm:bg-white text-center hover:bg-blue-50 transition-all duration-200 shadow-sm rounded-xl"
// //               >
// //                 {values.map((value, i) => (
// //                   <td
// //                     key={i}
// //                     className="block sm:table-cell px-4 py-3 text-gray-700 sm:align-top"
// //                   >
// //                     <div className="sm:hidden font-thin text-blue-800 mb-1">
// //                       {headers[i]}
// //                     </div>
// //                     {value}
// //                   </td>
// //                 ))}
// //               </tr>
// //             );
// //           })}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }
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
//   iso ? new Date(iso).toLocaleDateString() : "--";

// export default function SurgicalComponent({ profile }: Props) {
//   const surgicals = profile?.surgical_data ?? [];
//   if (surgicals.length === 0) {
//     return (
//       <div className="bg-gradient-to-br from-blue-50 to-blue-100/60 rounded-3xl shadow-lg border border-blue-200/50 p-10 text-center text-gray-500 italic">
//         No surgical information available.
//       </div>
//     );
//   }
//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl shadow-2xl border border-blue-200/50 backdrop-blur-lg space-y-6 overflow-x-auto">
//       <div className="bg-white/90 rounded-2xl shadow-sm overflow-x-auto">
//         <table className="min-w-full text-[16px] border-separate border-spacing-y-0.5">
//           <thead>
//             <tr className="p-1 text-center bg-gradient-to-r from-blue-100 to-blue-200/70 text-blue-800 font-semibold">
//               <th >Operation Name</th>
//               <th >Date</th>
//               <th >Procedure</th>
//               <th >Challenges</th>
//               <th >Complications</th>
//               <th >Anesthesia</th>
//               <th >Recovery</th>
//               <th >Notes</th>
//             </tr>
//           </thead>
//           <tbody>
//             {surgicals.map((rec, idx) => (
//               <tr
//                 key={rec.id ?? idx}
//                 className="bg-blue-50 hover:bg-blue-100 transition text-center">

//                 <td className="p-1">{rec.operation_name ?? "--"}</td>
//                 <td className="p-1">{fmtDate(rec.operation_date)}</td>
//                 <td className="p-1">{rec.procedure_notes ?? "--"}</td>
//                 <td className="p-1">{rec.challenges_during_surgery ?? "--"}</td>
//                 <td className="p-1">{rec.complications ?? "--"}</td>
//                 <td className="p-1">{rec.nature_of_anesthesia ?? "--"}</td>
//                 <td className="p-1">{rec.post_operative_recovery ?? "--"}</td>
//                 <td className="p-1">{rec.post_operative_recovery_notes ?? "--"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
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
//   iso ? new Date(iso).toLocaleDateString() : "--";

// export default function SurgicalComponent({ profile }: Props) {
//   const surgicals = profile?.surgical_data ?? [];

//   if (surgicals.length === 0) {
//     return (
//       <div className="bg-gradient-to-br from-blue-50 to-blue-100/60 rounded-3xl shadow-lg border border-blue-200/50 p-10 text-center text-gray-500 italic">
//         No surgical information available.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl shadow-2xl border border-blue-200/50 backdrop-blur-lg space-y-6 overflow-x-auto">
//       <div className="bg-white/90 rounded-2xl shadow-sm overflow-x-auto">
//         <table className="min-w-full text-[16px] border-separate border-spacing-y-0.5">
//           <thead>
//             <tr className="p-1 text-center bg-gradient-to-r from-blue-100 to-blue-200/70 text-blue-800 font-semibold">
//               <th>Operation Name</th>
//               <th>Date</th>
//               <th>Procedure</th>
//               <th>Challenges</th>
//               <th>Complications</th>
//               <th>Anesthesia</th>
//               <th>Recovery</th>
//               <th>Notes</th>
//             </tr>
//           </thead>
//           <tbody>
//             {surgicals.map((rec, idx) => (
//               <tr
//                 key={rec.id ?? idx}
//                 className="bg-blue-50 hover:bg-blue-100 transition text-center"
//               >
//                 <td className="p-1">
//                   {rec.operation_id?.length
//                     ? `Operation #${rec.operation_id.join(", ")}`
//                     : "Unknown Operation"}
//                 </td>
//                 <td className="p-1">{fmtDate(rec.operation_date)}</td>
//                 <td className="p-1">{rec.procedure_notes ?? "--"}</td>
//                 <td className="p-1">{rec.challenges_during_surgery ?? "--"}</td>
//                 <td className="p-1">{rec.complications ?? "--"}</td>
//                 <td className="p-1">{rec.nature_of_anesthesia ?? "--"}</td>
//                 <td className="p-1">{rec.post_operative_recovery ?? "--"}</td>
//                 <td className="p-1">
//                   {rec.post_operative_recovery_notes ?? rec.remarks ?? "--"}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
// "use client";

// import React from "react";
// import { SurgicalData } from "../type";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// interface ProfileData {
//   surgical_data?: SurgicalData[] | null;
// }

// interface Props {
//   profile: ProfileData;
// }

// const fmtDate = (iso?: string) =>
//   iso ? new Date(iso).toLocaleDateString() : "--";

// export default function SurgicalComponent({ profile }: Props) {
//   const surgicals = profile?.surgical_data ?? [];

//   if (surgicals.length === 0) {
//     return (
//       <div className="p-6 text-center text-gray-500 italic">
//         No surgical information available.
//       </div>
//     );
//   }

//   return (
//     <div className="overflow-x-auto">
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Operation Name</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead>Procedure</TableHead>
//             <TableHead>Challenges</TableHead>
//             <TableHead>Complications</TableHead>
//             <TableHead>Anesthesia</TableHead>
//             <TableHead>Recovery</TableHead>
//             <TableHead>Notes</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {surgicals.map((rec, idx) => (
//             <TableRow key={rec.id ?? idx}>
//               <TableCell>
//                 {rec.operation_id?.length
//                   ? `Operation #${rec.operation_id.join(", ")}`
//                   : "Unknown Operation"}
//               </TableCell>
//               <TableCell>{fmtDate(rec.operation_date)}</TableCell>
//               <TableCell>{rec.procedure_notes ?? "--"}</TableCell>
//               <TableCell>{rec.challenges_during_surgery ?? "--"}</TableCell>
//               <TableCell>{rec.complications ?? "--"}</TableCell>
//               <TableCell>{rec.nature_of_anesthesia ?? "--"}</TableCell>
//               <TableCell>{rec.post_operative_recovery ?? "--"}</TableCell>
//               <TableCell>
//                 {rec.post_operative_recovery_notes ?? rec.remarks ?? "--"}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SurgicalRecord } from "../type";

interface Props {
  surgical_data: SurgicalRecord[];
}

export default function SurgicalComponent({ surgical_data }: Props) {
  if (!surgical_data || surgical_data.length === 0) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-green-50 p-3 rounded-3xl shadow-xl border border-blue-200/50 backdrop-blur-md text-center text-gray-500 italic">
        No surgical records available.
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100/60 rounded-2xl p-4 shadow-md overflow-x-auto">
      <Table className="min-w-[900px] md:min-w-[1000px] lg:min-w-[1200px] text-sm">
        <TableHeader>
          <TableRow className="bg-gradient-to-r from-blue-100 to-blue-200/70 text-gray-800 text-center">
            <TableHead>ID</TableHead>
            <TableHead>Surgery Name</TableHead>
            <TableHead>Operation Date</TableHead>
            <TableHead>Anesthesia</TableHead>
            <TableHead>Complications</TableHead>
            <TableHead>Procedure Notes</TableHead>
            <TableHead>Post-Op Recovery</TableHead>
            <TableHead>Recovery Notes</TableHead>
            <TableHead>Challenges</TableHead>
            <TableHead>Remarks</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {surgical_data.map((record) => (
            <TableRow key={record.surgical.id} className="bg-blue-50 hover:bg-blue-100 text-center transition-all">
              <TableCell>{record.surgical.id}</TableCell>
              <TableCell>{record.surgery_name}</TableCell>
              <TableCell>{record.surgical.operation_date}</TableCell>
              <TableCell>{record.surgical.nature_of_anesthesia}</TableCell>
              <TableCell>{record.surgical.complications}</TableCell>
              <TableCell>{record.surgical.procedure_notes}</TableCell>
              <TableCell>{record.surgical.post_operative_recovery}</TableCell>
              <TableCell>{record.surgical.post_operative_recovery_notes}</TableCell>
              <TableCell>{record.surgical.challenges_during_surgery}</TableCell>
              <TableCell>{record.surgical.remarks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
