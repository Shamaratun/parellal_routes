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
"use client";

import {
  Table,
  TableBody, 
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PreOpsData } from "../type";

interface Drug {
  drug_name: string;
  dose: string;
  frequency: string;
}



interface Props {
  pre_ops_data: PreOpsData[];
}

const joinOrNA = (arr?: string[]) =>
  arr && arr.length > 0 ? arr.join(", ") : "--";

export default function MedicalComponent({ pre_ops_data }: Props) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl  border border-blue-200/50 backdrop-blur-lg p-6 space-y-6 overflow-x-auto">
      <Table className="rounded-lg min-w-[900px] md:min-w-[1000px] lg:min-w-[1200px] ">
        <TableHeader>
          <TableRow className="bg-gradient-to-r from-blue-100 to-blue-200/70 text-gray-800">
            <TableHead >Rec.ID</TableHead>
            <TableHead >Co-morbidities</TableHead>
            <TableHead >Diagnosis</TableHead>
            <TableHead>Surgical History</TableHead>
            <TableHead className="text-center w-64">Remarks</TableHead>
            <TableHead className="font-semibold text-center rounded-r-lg">
              Drug History
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {pre_ops_data.map((rec) => {
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
              <TableRow
                key={rec.id}
                className="bg-blue-50 hover:bg-blue-100 text-center transition-all duration-200"
              >
                <TableCell>{rec.id}</TableCell>
                <TableCell>{joinOrNA(rec.co_morbidities_id)}</TableCell>
                <TableCell>{joinOrNA(rec.diagnosis_id)}</TableCell>
                <TableCell>{rec.surgical_history ?? "--"}</TableCell>
                <TableCell>
                  {joinOrNA(
                    Array.isArray(rec.remarks)
                      ? rec.remarks
                      : rec.remarks
                      ? [rec.remarks]
                      : []
                  )}
                </TableCell>
                <TableCell>
                  {drugs.length > 0 ? (
                    <Table className="min-w-full text-[14px] border border-gray-200 rounded-lg">
                      <TableHeader>
                        <TableRow className="bg-blue-200 text-gray-800 font-semibold">
                          <TableHead className="p-1 text-left">Drug Name</TableHead>
                          <TableHead className="p-1 text-left">Dose</TableHead>
                          <TableHead className="p-1 text-left">Frequency</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {drugs.map((drug, index) => (
                          <TableRow
                            key={index}
                            className="border-t hover:bg-green-50 transition"
                          >
                            <TableCell className="p-1">{drug?.drug_name}</TableCell>
                            <TableCell className="p-1">{drug?.dose}</TableCell>
                            <TableCell className="p-1">{drug?.frequency}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <span className="text-gray-500 italic">No drugs</span>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
