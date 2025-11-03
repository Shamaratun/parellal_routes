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
//   Array.isArray(arr) && arr.length ? arr.join(", ") : "--";

// export default function MedicalComponent({ profile }: Props) {
//   const preOps = profile?.pre_ops_data;

//   if (!preOps || preOps.length === 0) {
//     return (
//       <div className="bg-gradient-to-br from-blue-50 to-green-50 p-3 rounded-3xl shadow-xl border border-blue-200/50 backdrop-blur-md  text-center text-gray-500 italic">
//         No medical information available.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl  border border-blue-200/50 backdrop-blur-lg p-6 space-y-6 overflow-x-auto">
//         <table className="rounded-l min-w-[900px] md:min-w-[1000px] lg:min-w-[1200px]">
//           <thead>
//             <tr className="p-1 text-center bg-gradient-to-r text-xl from-blue-100 to-blue-200/70 text-gray-800 ">
//               <th className="w-15">Rec.ID</th>
//               <th >Co-morbidities</th>
//               <th >Diagnosis</th>
//               <th >Surgical History</th>
//               <th className="w-64">Remarks</th>
//               <th className="rounded-r-lg">Drug History</th>
//             </tr>
//           </thead>
//           <tbody>
//             {preOps.map((rec) => {
//               const drugs =
//                 rec.drug_history
//                   ?.map((drugStr) => {
//                     try {
//                       return JSON.parse(drugStr) as Drug;
//                     } catch {
//                       return null;
//                     }
//                   })
//                   .filter(Boolean) ?? [];

//               return (
//                 <tr key={rec.id} className="bg-blue-50 hover:bg-blue-100 transition text-center">
//                   <td >{rec.id}</td>
//                   <td className="p-1">{joinOrNA(rec.co_morbidities_id)}</td>
//                   <td className="p-1">{joinOrNA(rec.diagnosis_id)}</td>
//                   <td className="p-1">{rec.surgical_history ?? "--"}</td>
//                   <td className=" p-3 w-64">
//                     {joinOrNA(Array.isArray(rec.remarks) ? rec.remarks : rec.remarks ? [rec.remarks] : [])}
//                   </td>
//                   <td>
//                     {drugs.length > 0 ? (
//                       <table className="min-w-full text-[14px] border border-gray-200 rounded-lg">
//                         <thead>
//                           <tr className="bg-blue-200 text-black-800 font-semibold">
//                             <th className="p-1 text-left">Drug Name</th>
//                             <th className="p-1 text-left">Dose</th>
//                             <th className="p-1 text-left">Frequency</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {drugs.map((drug, index) => (
//                             <tr
//                               key={index}
//                               className="border-t hover:bg-green-50 transition">
//                               <td className="p-1">{drug?.drug_name}</td>
//                               <td className="p-1">{drug?.dose}</td>
//                               <td className="p-1">{drug?.frequency}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     ) : (
//                       <span className="text-gray-500 italic">No drugs</span>
//                     )}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     // </div>
//   );
// }
//&&&&&&&& different information different row $&&&&&
// "use client";

// import {
//   Table,
//   TableBody, 
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { PreOpsData } from "../type";

// interface Drug {
//   drug_name: string;
//   dose: string;
//   frequency: string;
// }



// interface Props {
//   pre_ops_data: PreOpsData[];
// }

// const joinOrNA = (arr?: string[]) =>
//   arr && arr.length > 0 ? arr.join(", ") : "--";

// export default function MedicalComponent({ pre_ops_data }: Props) {
//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl  border border-blue-200/50 backdrop-blur-lg p-6 space-y-6 overflow-x-auto">
//       <Table className="rounded-lg min-w-[900px] md:min-w-[1000px] lg:min-w-[1200px] ">
//         <TableHeader>
//           <TableRow className="bg-gradient-to-r from-blue-100 to-blue-200/70 text-gray-800">
//             <TableHead >Rec.ID</TableHead>
//             <TableHead >Co-morbidities</TableHead>
//             <TableHead >Diagnosis</TableHead>
//             <TableHead>Surgical History</TableHead>
//             <TableHead className="text-center w-64">Remarks</TableHead>
//             <TableHead className="font-semibold text-center rounded-r-lg">
//               Drug History
//             </TableHead>
//           </TableRow>
//         </TableHeader>

//         <TableBody>
//           {pre_ops_data.map((rec) => {
//             const drugs =
//               rec.drug_history
//                 ?.map((drugStr) => {
//                   try {
//                     return JSON.parse(drugStr) as Drug;
//                   } catch {
//                     return null;
//                   }
//                 })
//                 .filter(Boolean) ?? [];

//             return (
//               <TableRow
//                 key={rec.id}
//                 className="bg-blue-50 hover:bg-blue-100 text-center transition-all duration-200"
//               >
//                 <TableCell>{rec.id}</TableCell>
//                 <TableCell>{joinOrNA(rec.co_morbidities_id)}</TableCell>
//                 <TableCell>{joinOrNA(rec.diagnosis_id)}</TableCell>
//                 <TableCell>{rec.surgical_history ?? "--"}</TableCell>
//                 <TableCell>
//                   {joinOrNA(
//                     Array.isArray(rec.remarks)
//                       ? rec.remarks
//                       : rec.remarks
//                       ? [rec.remarks]
//                       : []
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   {drugs.length > 0 ? (
//                     <Table className="min-w-full text-[14px] border border-gray-200 rounded-lg">
//                       <TableHeader>
//                         <TableRow className="bg-blue-200 text-gray-800 font-semibold">
//                           <TableHead className="p-1 text-left">Drug Name</TableHead>
//                           <TableHead className="p-1 text-left">Dose</TableHead>
//                           <TableHead className="p-1 text-left">Frequency</TableHead>
//                         </TableRow>
//                       </TableHeader>
//                       <TableBody>
//                         {drugs.map((drug, index) => (
//                           <TableRow
//                             key={index}
//                             className="border-t hover:bg-green-50 transition"
//                           >
//                             <TableCell className="p-1">{drug?.drug_name}</TableCell>
//                             <TableCell className="p-1">{drug?.dose}</TableCell>
//                             <TableCell className="p-1">{drug?.frequency}</TableCell>
//                           </TableRow>
//                         ))}
//                       </TableBody>
//                     </Table>
//                   ) : (
//                     <span className="text-gray-500 italic">No drugs</span>
//                   )}
//                 </TableCell>
//               </TableRow>
//             );
//           })}
//         </TableBody>
//       </Table>
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
// import { Drug, PreOpsData } from "../type";

// interface Props {
//   pre_ops_data: PreOpsData[];
// }

// const joinOrNA = (arr?: string[]) => (arr && arr.length > 0 ? arr.join(", ") : "--");

// const getFieldValue = <K extends keyof PreOpsData>(rec: PreOpsData, key: K): string => {
//   if (key === "remarks") {
//     return Array.isArray(rec.remarks)
//       ? rec.remarks.join(", ")
//       : rec.remarks ?? "--";
//   }

//   if (key === "co_morbidities_id" || key === "diagnosis_id") {
//     const arr = rec[key];
//     return Array.isArray(arr) ? joinOrNA(arr as string[]) : "--";
//   }

//   if (key === "surgical_history") return rec.surgical_history ?? "--";

//   const value = rec[key];
//   return (typeof value === "string" || typeof value === "number") ? String(value) : "--";
// };

// export default function MedicalComponent({ pre_ops_data }: Props) {
//   if (!pre_ops_data || pre_ops_data.length === 0) {
//     return (
//       <div className="bg-gradient-to-br from-blue-50 to-green-50 p-3 rounded-3xl shadow-xl border border-blue-200/50 text-gray-500 italic text-center">
//         No medical records available.
//       </div>
//     );
//   }

//   const fields: { label: string; key: keyof PreOpsData }[] = [
//   { label: "Co-morbidities", key: "co_morbidities_id" },
//   { label: "Diagnosis", key: "diagnosis_id" },
//   { label: "Surgical History", key: "surgical_history" },
//   { label: "Remarks", key: "remarks" },
//   { label: "Drug History", key: "drug_history" },
// ];

//   return (
//     <div className="overflow-x-auto">
//       <div className="flex flex-col lg:flex-row gap-4 min-w-[320px]">
//         <div className="flex-1 bg-white rounded-2xl shadow border border-blue-100 overflow-x-auto">
//           <Table className="w-full min-w-[320px] table-auto">
//             <TableHeader>
//               <TableRow className="bg-gradient-to-r from-blue-100 to-blue-200/50 text-gray-800 text-center">
//                 <TableHead className="w-32 text-left pl-3 break-words">Rec Id</TableHead>
//                 {pre_ops_data.map((rec) => (
//                   <TableHead
//                     key={rec.id}
//                     className="w-48 text-center px-2 break-words whitespace-normal">
//                     {rec.id}
//                   </TableHead>
//                 ))}
//               </TableRow>
//             </TableHeader>

//             <TableBody>
//               {fields.map((field) => (
//                 <TableRow key={field.key} className="align-top hover:bg-blue-100 transition">
//                   <TableCell className="font-semibold bg-blue-100 text-gray-800 text-left pl-3 w-32 break-words">
//                     {field.label}
//                   </TableCell>
//                   {pre_ops_data.map((rec) => {
//                     if (field.key === "drug_history") {
//                       // Parse drug_history safely
//                       const drugs: Drug[] =
//                         rec.drug_history
//                           ?.map((d) => {
//                             try {
//                               return JSON.parse(d) as Drug;
//                             } catch {
//                               return undefined;
//                             }
//                           })
//                           .filter((d): d is Drug => !!d) ?? [];

//                       return (
//                         <TableCell
//                           key={rec.id + field.key}
//                           className="text-center text-gray-700 px-2 break-words whitespace-normal w-48 align-top"
//                         >
//                           {drugs.length > 0 ? (
//                             <Table className="min-w-full text-[14px] border border-gray-200 rounded-lg">
//                               <TableHeader>
//                                 <TableRow className="bg-blue-200 text-gray-800 font-semibold">
//                                   <TableHead className="p-1 text-left">Drug Name</TableHead>
//                                   <TableHead className="p-1 text-left">Dose</TableHead>
//                                   <TableHead className="p-1 text-left">Frequency</TableHead>
//                                 </TableRow>
//                               </TableHeader>
//                               <TableBody>
//                                 {drugs.map((drug, idx) => (
//                                   <TableRow
//                                     key={idx}
//                                     className="border-t hover:bg-blue-100 transition"
//                                   >
//                                     <TableCell className="p-1">{drug.drug_name}</TableCell>
//                                     <TableCell className="p-1">{drug.dose}</TableCell>
//                                     <TableCell className="p-1">{drug.frequency}</TableCell>
//                                   </TableRow>
//                                 ))}
//                               </TableBody>
//                             </Table>
//                           ) : (
//                             <span className="text-gray-500 italic">No drugs</span>
//                           )}
//                         </TableCell>
//                       );
//                     }

//                     return (
//                       <TableCell
//                         key={rec.id + field.key}
//                         className="text-center text-gray-700 px-2 break-words whitespace-normal w-48 align-top"
//                       >
//                         {getFieldValue(rec, field.key)}
//                       </TableCell>
//                     );
//                   })}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { SmartTable } from "@/components/reusable-ui-components/smart-table";

interface Drug {
  drug_name: string;
  dose: string;
  frequency: string;
}

interface PreOpsData {
  id: string;
  co_morbidities_id?: string[];
  diagnosis_id?: string[];
  surgical_history?: string;
  remarks?: string | string[];
  drug_history?: string[]; // JSON strings representing Drug[]
}

interface Props {
  pre_ops_data: PreOpsData[];
}

const joinOrNA = (arr?: string[]) => (arr && arr.length > 0 ? arr.join(", ") : "--");

const parseDrugs = (list?: string[]): Drug[] =>
  list
    ?.map((d) => {
      try {
        return JSON.parse(d) as Drug;
      } catch {
        return undefined;
      }
    })
    .filter((d): d is Drug => !!d) ?? [];

export default function MedicalComponent({ pre_ops_data }: Props) {
  const columnHelper = createColumnHelper<PreOpsData>();

  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        header: "Record ID",
        cell: (info) => info.getValue() ?? "--",
      }),
      columnHelper.accessor("co_morbidities_id", {
        header: "Co-morbidities",
        cell: (info) => joinOrNA(info.getValue()),
      }),
      columnHelper.accessor("diagnosis_id", {
        header: "Diagnosis",
        cell: (info) => joinOrNA(info.getValue()),
      }),
      columnHelper.accessor("surgical_history", {
        header: "Surgical History",
        cell: (info) => info.getValue() ?? "--",
      }),
      columnHelper.accessor("remarks", {
        header: "Remarks",
        cell: (info) => {
          const val = info.getValue();
          return Array.isArray(val) ? joinOrNA(val) : val ?? "--";
        },
      }),
      columnHelper.accessor("drug_history", {
        header: "Drug History",
        cell: ({ getValue }) => {
          const drugs = parseDrugs(getValue());
          if (drugs.length === 0)
            return <span className="text-gray-500 italic">No drugs</span>;

          return (
            <div className="border border-gray-200 rounded-lg p-2 bg-gray-50">
              <table className="min-w-full text-sm text-left">
                <thead className="border-b text-gray-700 font-semibold">
                  <tr>
                    <th className="pr-3">Drug Name</th>
                    <th className="pr-3">Dose</th>
                    <th>Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {drugs.map((drug, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="pr-3">{drug.drug_name || "---"}</td>
                      <td className="pr-3">{drug.dose || "---"}</td>
                      <td>{drug.frequency || "---"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        },
      }),
    ],
    [columnHelper]
  );

  return (   
      <SmartTable data={pre_ops_data} columns={columns}  />    
  );
}

