// &&&&& simple one tables (responsive)&&&&&&&&&&&&&&&
// "use client";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { SurgicalRecord } from "../type";

// interface Props {
//   surgical_data: SurgicalRecord[];
// }

// export default function SurgicalComponent({ surgical_data }: Props) {
//   if (!surgical_data || surgical_data.length === 0) {
//     return (
//       <div className="bg-gradient-to-br from-blue-50 to-green-50 p-3 rounded-3xl shadow-xl border border-blue-200/50 backdrop-blur-md text-center text-gray-500 italic">
//         No surgical records available.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100/60 rounded-2xl p-4 shadow-md overflow-x-auto">
//       <Table className="min-w-[900px] md:min-w-[1000px] lg:min-w-[1200px] text-sm">
//         <TableHeader>
//           <TableRow className="bg-gradient-to-r from-blue-100 to-blue-200/70 text-gray-800 text-center">
//             <TableHead>Surgery Name</TableHead>
//             <TableHead>Operation Date</TableHead>
//             <TableHead>Procedure Notes</TableHead>
//             <TableHead>Complications</TableHead>
//             <TableHead>Challenges</TableHead>
//             <TableHead>Anesthesia</TableHead>
//             <TableHead>Post-Op Recovery</TableHead>
//             <TableHead>Recovery Notes</TableHead>
//           </TableRow>
//         </TableHeader>

//         <TableBody>
//           {surgical_data.map((record) => (
//             <TableRow key={record.surgical.id} className="bg-blue-50 hover:bg-blue-100 text-center transition-all">
//               <TableCell>{record.surgery_name}</TableCell>
//               <TableCell>{record.surgical.operation_date}</TableCell>
//               <TableCell>{record.surgical.procedure_notes}</TableCell>
//               <TableCell>{record.surgical.challenges_during_surgery}</TableCell>
//               <TableCell>{record.surgical.nature_of_anesthesia}</TableCell>
//               <TableCell>{record.surgical.complications}</TableCell>
//               <TableCell>{record.surgical.post_operative_recovery}</TableCell>
//               <TableCell>{record.surgical.post_operative_recovery_notes}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }
// &&&&& two tables side by side (responsive)&&&&&&&&&&&&&&&
// "use client";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { SurgicalRecord } from "../type";

// interface Props {
//   surgical_data: SurgicalRecord[];
// }

// export default function SurgicalComponent({ surgical_data }: Props) {
//   if (!surgical_data || surgical_data.length === 0) {
//     return (
//       <div className="bg-gradient-to-br from-blue-50 to-green-50 p-3 rounded-3xl shadow-xl border border-blue-200/50 backdrop-blur-md text-center text-gray-500 italic">
//         No surgical records available.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100/60 rounded-2xl p-4 shadow-md">
//       {/* ✅ Two tables side by side (responsive) */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* ===== Left Table ===== */}
//         <div className="flex-1 bg-white rounded-2xl shadow border border-blue-100 overflow-hidden">
//           <Table className="w-full text-sm">
//             <TableHeader>
//               <TableRow className="bg-gradient-to-r from-blue-100 to-blue-200/70 text-gray-800 text-center">
//                 <TableHead>Surgery Name</TableHead>
//                 <TableHead>Operation Date</TableHead>
//                 <TableHead>Procedure Notes</TableHead>
//                 <TableHead>Anesthesia</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {surgical_data.map((record) => (
//                 <TableRow
//                   key={record.surgical.id}
//                   className="bg-blue-50 hover:bg-blue-100 text-center transition-all"
//                 >
//                   <TableCell>{record.surgery_name}</TableCell>
//                   <TableCell>{record.surgical.operation_date}</TableCell>
//                   <TableCell>{record.surgical.procedure_notes}</TableCell>
//                   <TableCell>{record.surgical.nature_of_anesthesia}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>

//         {/* ===== Right Table ===== */}
//         <div className="flex-1 bg-white rounded-2xl shadow border border-blue-100 overflow-hidden">
//           <Table className="w-full text-sm">
//             <TableHeader>
//               <TableRow className="bg-gradient-to-r from-blue-100 to-blue-200/70 text-gray-800 text-center">
//                 <TableHead>Complications</TableHead>
//                 <TableHead>Challenges</TableHead>
//                 <TableHead>Post-Op Recovery</TableHead>
//                 <TableHead>Recovery Notes</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {surgical_data.map((record) => (
//                 <TableRow
//                   key={record.surgical.id}
//                   className="bg-blue-50 hover:bg-blue-100 text-center transition-all"
//                 >
//                   <TableCell>{record.surgical.complications}</TableCell>
//                   <TableCell>{record.surgical.challenges_during_surgery}</TableCell>
//                   <TableCell>{record.surgical.post_operative_recovery}</TableCell>
//                   <TableCell>{record.surgical.post_operative_recovery_notes}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { SurgicalRecord } from "../type";

// interface Props {
//   surgical_data: SurgicalRecord[];
// }
// function getFieldValue(record: SurgicalRecord, field: { key: string; nested?: string }) {
//   if (field.nested && (record as any)[field.nested]) {
//     return (record as any)[field.nested][field.key] || "N/A";
//   }
//   return (record as any)[field.key] || "N/A";
// }
// export default function SurgicalComponent({ surgical_data }: Props) {
//   if (!surgical_data || surgical_data.length === 0) {
//     return (
//       <div className="bg-gradient-to-br from-blue-50 to-green-50 p-3 rounded-3xl shadow-xl border border-blue-200/50 backdrop-blur-md text-center text-gray-500 italic">
//         No surgical records available.
//       </div>
//     );
//   }

//   return (
    //     <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100/60 rounded-2xl p-4 shadow-md">
    //       <div className="flex-1 bg-white rounded-2xl shadow border border-blue-100 overflow-hidden">
    //         <Table className="w-full text-sm">
    //           <TableHeader>
    //             <TableRow className="bg-gradient-to-r from-blue-100 to-blue-200/70 text-gray-800 text-center">
    //               <TableHead className="w-1/4 text-left pl-4">Details</TableHead>
    //               {surgical_data.map((record) => (
    //                 <TableHead key={record.surgical.id} className="text-center">
    //                   {record.surgery_name || "Unnamed Surgery"}
    //                 </TableHead>
    //               ))}
    //             </TableRow>
    //           </TableHeader>

    //           <TableBody>
    //             {/* Operation Date Row */}
    //             <TableRow>
    //               <TableCell className="font-semibold bg-blue-100 text-gray-800 text-left pl-4">
    //                 Operation Date
    //               </TableCell>
    //               {surgical_data.map((record) => (
    //                 <TableCell
    //                   key={record.surgical.id}
    //                   className="text-center text-gray-700"
    //                 >
    //                   {record.surgical.operation_date || "N/A"}
    //                 </TableCell>
    //               ))}
    //             </TableRow>

    //             {/* Procedure Notes Row */}
    //             <TableRow>
    //               <TableCell className="font-semibold bg-blue-100 text-gray-800 text-left pl-4">
    //                 Procedure Notes
    //               </TableCell>
    //               {surgical_data.map((record) => (
    //                 <TableCell
    //                   key={record.surgical.id}
    //                   className="text-center text-gray-700"
    //                 >
    //                   {record.surgical.procedure_notes || "N/A"}
    //                 </TableCell>
    //               ))}
    //             </TableRow>

    //             {/* Anesthesia Row */}
    //             <TableRow>
    //               <TableCell className="font-semibold bg-blue-100 text-gray-800 text-left pl-4">
    //                 Anesthesia
    //               </TableCell>
    //               {surgical_data.map((record) => (
    //                 <TableCell
    //                   key={record.surgical.id}
    //                   className="text-center text-gray-700"
    //                 >
    //                   {record.surgical.nature_of_anesthesia || "N/A"}
    //                 </TableCell>
    //               ))}
    //             </TableRow>

    //             {/* Surgery Name Row */}
    //             <TableRow>
    //               <TableCell className="font-semibold bg-blue-100 text-gray-800 text-left pl-4">
    //                 Surgery Name
    //               </TableCell>
    //               {surgical_data.map((record) => (
    //                 <TableCell
    //                   key={record.surgical.id}
    //                   className="text-center text-gray-700"
    //                 >
    //                   {record.surgery_name || "N/A"}
    //                 </TableCell>
    //               ))}
    //             </TableRow>
    //           </TableBody>
    //         </Table>
    //       </div>
    //       <div className="flex-1 bg-white rounded-2xl shadow border border-blue-100 overflow-hidden">
    //         <Table className="w-full text-md border-amber-100 border-separate">
    //           <TableHeader>
    //             <TableRow className="bg-gradient-to-r from-blue-100 to-blue-200/70 text-gray-800 text-center">
    //               <TableHead className="w-1/4 text-left pl-4">Details</TableHead>
    //               {surgical_data.map((record) => (
    //                 <TableHead key={record.surgical.id} className="text-center">
    //                   {record.surgery_name || "Unnamed Surgery"}
    //                 </TableHead>
    //               ))}
    //             </TableRow>
    //           </TableHeader>

    //           <TableBody>
    //             {/* Complications Row */}
    //             <TableRow>
    //               <TableCell className="font-semibold bg-blue-100 text-gray-800 text-left pl-4">
    //                 Complications
    //               </TableCell>
    //               {surgical_data.map((record) => (
    //                 <TableCell
    //                   key={record.surgical.id}
    //                   className="text-center text-gray-700"
    //                 >
    //                   {record.surgical.complications || "N/A"}
    //                 </TableCell>
    //               ))}
    //             </TableRow>

    //             {/* Challenges Row */}
    //             <TableRow>
    //               <TableCell className="font-semibold bg-blue-100 text-gray-800 text-left pl-4">
    //                 Challenges
    //               </TableCell>
    //               {surgical_data.map((record) => (
    //                 <TableCell
    //                   key={record.surgical.id}
    //                   className="text-center text-gray-700"
    //                 >
    //                   {record.surgical.challenges_during_surgery || "N/A"}
    //                 </TableCell>
    //               ))}
    //             </TableRow>

    //             {/* Post-Op Recovery Row */}
    //             <TableRow>
    //               <TableCell className="font-semibold bg-blue-100 text-gray-800 text-left pl-4">
    //                 Post-Op Recovery
    //               </TableCell>
    //               {surgical_data.map((record) => (
    //                 <TableCell
    //                   key={record.surgical.id}
    //                   className="text-center text-gray-700"
    //                 >
    //                   {record.surgical.post_operative_recovery || "N/A"}
    //                 </TableCell>
    //               ))}
    //             </TableRow>

    //             {/* Recovery Notes Row */}
    //             <TableRow>
    //               <TableCell className="font-semibold bg-blue-100 text-gray-800 text-left pl-4">
    //                 Recovery Notes
    //               </TableCell>
    //               {surgical_data.map((record) => (
    //                 <TableCell
    //                   key={record.surgical.id}
    //                   className="text-center text-gray-700"
    //                 >
    //                   {record.surgical.post_operative_recovery_notes || "N/A"}
    //                 </TableCell>
    //               ))}
    //             </TableRow>
    //           </TableBody>
    //         </Table>
    //       </div>
    //     </div>
    //    );
    // }
   "use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SurgicalRecord } from "../type";

interface Props {
  surgical_data: SurgicalRecord[];
}

const getFieldValue = (record: SurgicalRecord, field: { key: string; nested?: string }) => {
  if (field.nested) return (record as any)[field.nested]?.[field.key] || "---";
  return (record as any)[field.key] || "---";
};

export default function SurgicalComponent({ surgical_data }: Props) {
  if (!surgical_data || surgical_data.length === 0) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-green-50 p-3 rounded-3xl shadow-xl border border-blue-200/50 backdrop-blur-md text-center text-gray-500 italic">
        No surgical records available.
      </div>
    );
  }

  const tables = [
    {
      title: "Surgery Details",
      fields: [
   
        { label: "Operation Date", key: "operation_date", nested: "surgical" },
        { label: "Procedure Notes", key: "procedure_notes", nested: "surgical" },
        { label: "Anesthesia", key: "nature_of_anesthesia", nested: "surgical" },
        { label: "Remarks", key: "remarks", nested: "surgical" },
      ],
    },
    {
      title: "Post-Op Summary",
      fields: [
        { label: "Complications", key: "complications", nested: "surgical" },
        { label: "Challenges", key: "challenges_during_surgery", nested: "surgical" },
        { label: "Post-Op Recovery", key: "post_operative_recovery", nested: "surgical" },
        { label: "Recovery Notes", key: "post_operative_recovery_notes", nested: "surgical" },
      ],
    },
  ];

  return (
     <div className="overflow-x-auto">
    <div className="flex flex-col lg:flex-row gap-4 ">
      {tables.map((table, idx) => (
        <div
          key={idx}
          className="flex-1 bg-white rounded-2xl shadow border border-blue-100 overflow-x-auto"
        >
          <Table className="w-full min-w-[320px]  table-auto ">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-blue-100 to-blue-200/70 text-gray-800 text-center">
                <TableHead className="w-32 text-left pl-3 break-words">Surgery Name</TableHead>
                {surgical_data.map((record) => (
                  <TableHead
                    key={record.surgical.id}
                    className="w-48 text-center px-2 break-words whitespace-normal"
                  >
                    {record.surgery_name || "---"}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {table.fields.map((field) => (
                <TableRow key={field.label} className="align-top hover:bg-blue-100 transition">
                  <TableCell className="font-semibold bg-blue-100 text-gray-800 text-left pl-3 w-32 break-words">
                    {field.label}
                  </TableCell>
                  {surgical_data.map((record) => (
                    <TableCell
                      key={record.surgical.id + field.key}
                      className="text-center text-gray-700 px-2 break-words whitespace-normal w-48 align-top"
                    >
                      {getFieldValue(record, field)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
    </div>
  );
}