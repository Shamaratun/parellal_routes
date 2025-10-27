// // // "use client";
// // // import { useState, useEffect } from "react";
// // // import { AdmissionData, ReleaseData } from "../type";

// // // interface Props {
// // //   admissionData: AdmissionData | null;
// // //   releaseData?: ReleaseData[] | null;
// // // }

// // // export default function AdmissionRelease({ admissionData, releaseData }: Props) {
// // //   const [admissions, setAdmissions] = useState<AdmissionData[]>([]);
// // //   const [releases, setReleases] = useState<ReleaseData[]>([]);

// // //   useEffect(() => {
// // //     if (admissionData) setAdmissions([admissionData]);
// // //     if (releaseData && releaseData.length > 0) setReleases(releaseData);
// // //   }, [admissionData, releaseData]);

// // //   const fmtDate = (iso?: string) =>
// // //     iso ? new Date(iso).toLocaleDateString() : "N/A";
// // //   const fmtDateTime = (iso?: string) =>
// // //     iso ? new Date(iso).toLocaleString() : "N/A";

// // //   return (
// // //     <div className="space-y-12">
// // //       {/* ====== Admission Table ====== */}
// // //       <div className="bg-gradient-to-br from-blue-50 to-blue-100/60 rounded-3xl shadow-2xl border border-blue-200/50 backdrop-blur-lg overflow-hidden">
// // //         <div className="overflow-x-auto p-6 sm:p-8">
// // //           <h2 className="text-[clamp(1.4rem,1vw+1rem,2rem)] font-bold text-blue-800 mb-6 flex items-center gap-2">
// // //             🏥 <span>Admission Details</span>
// // //           </h2>

// // //           <table className="min-w-full border-separate border-spacing-y-2 text-justify table-auto">
// // //             <thead>
// // //               <tr className="text-blue-700 text-[18px] font-semibold">
// // //                 {[
// // //                   "Admission ID",
// // //                   "Hospital",
// // //                   "Admission Date",
// // //                   "Status",
// // //                   "Remarks",
// // //                   "Referral Source",
// // //                   "Inserted By",
// // //                   "Insert Date",
// // //                   "Updated By",
// // //                   "Update Date",
// // //                   "Is Active",
// // //                 ].map((head) => (
// // //                   <th
// // //                     key={head}
// // //                     className="px-4 py-3 text-left bg-gradient-to-r text-[18px] from-blue-100 to-blue-200/70 rounded-lg shadow-sm"
// // //                   >
// // //                     {head}
// // //                   </th>
// // //                 ))}
// // //               </tr>
// // //             </thead>

// // //             <tbody>
// // //               {admissions.length === 0 ? (
// // //                 <tr>
// // //                   <td
// // //                     colSpan={11}
// // //                     className="text-center py-8 text-gray-500 italic  bg-white rounded-xl"
// // //                   >
// // //                     No admission records found.
// // //                   </td>
// // //                 </tr>
// // //               ) : (
// // //                 admissions.map((adm) => (
// // //                   <tr
// // //                     key={adm.id}
// // //                     className="group text-[18px] bg-white hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md rounded-xl"
// // //                   >
// // //                     <td className="px-4 py-3 font-semibold text-gray-800">
// // //                       {adm.id}
// // //                     </td>
// // //                     <td className="px-4 py-3">{adm.hospital_name}</td>
// // //                     <td className="px-4 py-3">{fmtDate(adm.date_of_adm)}</td>
// // //                     <td className="px-4 py-3">
// // //                       <span
// // //                         className={`px-3 py-1 rounded-full text-xs font-bold ${
// // //                           adm.adm_status === "Active"
// // //                             ? "bg-green-100 text-green-700"
// // //                             : "bg-gray-100 text-gray-500"
// // //                         }`}
// // //                       >
// // //                         {adm.adm_status || "N/A"}
// // //                       </span>
// // //                     </td>
// // //                     <td className="px-4 py-3">{adm.remarks || "N/A"}</td>
// // //                     <td className="px-4 py-3">
// // //                       {adm.referral_source_name || "N/A"}
// // //                     </td>
// // //                     <td className="px-4 py-3">{adm.insert_by || "N/A"}</td>
// // //                     <td className="px-4 py-3">{fmtDate(adm.insert_date)}</td>
// // //                     <td className="px-4 py-3">{adm.update_by || "N/A"}</td>
// // //                     <td className="px-4 py-3">{fmtDate(adm.insert_date)}</td>
// // //                     <td className="px-4 py-3 font-semibold">
// // //                       <span
// // //                         className={`${
// // //                           adm.is_active ? "text-green-600" : "text-red-500"
// // //                         }`}
// // //                       >
// // //                         {adm.is_active ? "Yes" : "No"}
// // //                       </span>
// // //                     </td>
// // //                   </tr>
// // //                 ))
// // //               )}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       </div>

// // //       {/* ====== Release Table ====== */}
// // //       <div className="bg-gradient-to-br from-green-50 to-green-100/70 rounded-3xl shadow-2xl border border-green-200/50 backdrop-blur-lg overflow-hidden">
// // //         <div className="overflow-x-auto p-6 sm:p-8">
// // //           <h2 className="text-[clamp(1.4rem,1vw+1rem,2rem)] font-bold text-green-800 mb-6 flex items-center gap-2">
// // //             📤 <span>Release Details</span>
// // //           </h2>

// // //           <table className="min-w-full border-separate border-spacing-y-2 text-justify table-auto">
// // //             <thead>
// // //               <tr className="text-green-900 text-[18px] font-semibold">
// // //                 {[
// // //                   "Release ID",
// // //                   "Admission ID",
// // //                   "Discharge Date",
// // //                   "Outcome",
// // //                   "Advice on Discharge",
// // //                   "Created At",
// // //                   "Hospital ID",
// // //                 ].map((head) => (
// // //                   <th
// // //                     key={head}
// // //                     className="px-4 py-3 text-left bg-gradient-to-r from-green-100 to-green-200/70 rounded-lg shadow-sm"
// // //                   >
// // //                     {head}
// // //                   </th>
// // //                 ))}
// // //               </tr>
// // //             </thead>

// // //             <tbody>
// // //               {releases.length === 0 ? (
// // //                 <tr>
// // //                   <td
// // //                     colSpan={7}
// // //                     className="text-center py-8 text-gray-500 italic bg-white rounded-xl"
// // //                   >
// // //                     No release records found.
// // //                   </td>
// // //                 </tr>
// // //               ) : (
// // //                 releases.map((rel) => (
// // //                   <tr
// // //                     key={rel.id}
// // //                     className="group text-[18px] bg-white hover:bg-green-50 transition-all duration-300 shadow-sm hover:shadow-md rounded-xl"
// // //                   >
// // //                     <td className="px-4 py-3 font-semibold text-gray-800">
// // //                       {rel.id}
// // //                     </td>
// // //                     <td className="px-4 py-3">{rel.admission_id}</td>
// // //                     <td className="px-4 py-3">
// // //                       {fmtDateTime(rel.discharge_date_time)}
// // //                     </td>
// // //                     <td className="px-4 py-3">{rel.outcome}</td>
// // //                     <td className="px-4 py-3">{rel.advice_on_discharge}</td>
// // //                     <td className="px-4 py-3">{fmtDateTime(rel.created_at)}</td>
// // //                     <td className="px-4 py-3">{rel.hospital_id}</td>
// // //                   </tr>
// // //                 ))
// // //               )}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // "use client";
// // import { useState, useEffect } from "react";
// // import { AdmissionData, ReleaseData } from "../type";

// // interface Props {
// //   admissionData: AdmissionData | null;
// //   releaseData?: ReleaseData[] | null;
// // }

// // export default function AdmissionRelease({ admissionData, releaseData }: Props) {
// //   const [admissions, setAdmissions] = useState<AdmissionData[]>([]);
// //   const [releases, setReleases] = useState<ReleaseData[]>([]);

// //   useEffect(() => {
// //     if (admissionData) setAdmissions([admissionData]);
// //     if (releaseData && releaseData.length > 0) setReleases(releaseData);
// //   }, [admissionData, releaseData]);

// //   const fmtDate = (iso?: string) =>
// //     iso ? new Date(iso).toLocaleDateString() : "N/A";
// //   const fmtDateTime = (iso?: string) =>
// //     iso ? new Date(iso).toLocaleString() : "N/A";

// //   return (
// //     <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
// //       {/* ====== Admission Details ====== */}
// //       <div className="bg-gradient-to-br from-blue-50 to-blue-100/60 rounded-3xl shadow-xl border border-blue-200/50 p-6 sm:p-8 backdrop-blur-md">
// //         <h2 className="text-[clamp(1.4rem,1vw+1rem,2rem)] font-bold text-blue-800 mb-6 flex items-center gap-2">
// //           🏥 <span>Admission Details</span>
// //         </h2>

// //         {admissions.length === 0 ? (
// //           <p className="text-gray-500 italic text-center bg-white p-4 rounded-xl shadow-inner">
// //             No admission records found.
// //           </p>
// //         ) : (
// //           admissions.map((adm) => (
// //             <div
// //               key={adm.id}
// //               className="space-y-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 sm:p-6"
// //             >
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
// //                 <Info label="Admission ID" value={adm.id} />
// //                 <Info label="Hospital" value={adm.hospital_name} />
// //                 <Info label="Admission Date" value={fmtDate(adm.date_of_adm)} />
// //                 <Info
// //                   label="Status"
// //                   value={
// //                     <span
// //                       className={`px-3 py-1 rounded-full text-xs font-bold ${
// //                         adm.adm_status === "Active"
// //                           ? "bg-green-100 text-green-700"
// //                           : "bg-gray-100 text-gray-500"
// //                       }`}
// //                     >
// //                       {adm.adm_status || "N/A"}
// //                     </span>
// //                   }
// //                 />
// //                 <Info label="Remarks" value={adm.remarks || "N/A"} />
// //                 <Info
// //                   label="Referral Source"
// //                   value={adm.referral_source_name || "N/A"}
// //                 />
// //                 <Info label="Inserted By" value={adm.insert_by || "N/A"} />
// //                 <Info label="Insert Date" value={fmtDate(adm.insert_date)} />
// //                 <Info label="Updated By" value={adm.update_by || "N/A"} />
// //                 <Info label="Update Date" value={fmtDate(adm.insert_date)} />
// //                 <Info
// //                   label="Is Active"
// //                   value={
// //                     <span
// //                       className={`font-semibold ${
// //                         adm.is_active ? "text-green-600" : "text-red-500"
// //                       }`}
// //                     >
// //                       {adm.is_active ? "Yes" : "No"}
// //                     </span>
// //                   }
// //                 />
// //               </div>
// //             </div>
// //           ))
// //         )}
// //       </div>

// //       {/* ====== Release Details ====== */}
// //       <div className="bg-gradient-to-br from-green-50 to-green-100/60 rounded-3xl shadow-xl border border-green-200/50 p-6 sm:p-8 backdrop-blur-md">
// //         <h2 className="text-[clamp(1.4rem,1vw+1rem,2rem)] font-bold text-green-800 mb-6 flex items-center gap-2">
// //           📤 <span>Release Details</span>
// //         </h2>

// //         {releases.length === 0 ? (
// //           <p className="text-gray-500 italic text-center bg-white p-4 rounded-xl shadow-inner">
// //             No release records found.
// //           </p>
// //         ) : (
// //           releases.map((rel) => (
// //             <div
// //               key={rel.id}
// //               className="space-y-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 sm:p-6"
// //             >
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
// //                 <Info label="Release ID" value={rel.id} />
// //                 <Info label="Admission ID" value={rel.admission_id} />
// //                 <Info
// //                   label="Discharge Date"
// //                   value={fmtDateTime(rel.discharge_date_time)}
// //                 />
// //                 <Info label="Outcome" value={rel.outcome} />
// //                 <Info label="Advice on Discharge" value={rel.advice_on_discharge} />
// //                 <Info label="Created At" value={fmtDateTime(rel.created_at)} />
// //                 <Info label="Hospital ID" value={rel.hospital_id} />
// //               </div>
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // // Reusable Info Display Component
// // function Info({
// //   label,
// //   value,
// // }: {
// //   label: string;
// //   value: React.ReactNode;
// // }) {
// //   return (
// //     <div className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100/70 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all duration-200">
// //       <span className="text-sm font-semibold text-gray-500">{label}</span>
// //       <span className="text-[16px] font-medium text-gray-800">{value}</span>
// //     </div>
// //   );
// // }
// // "use client";
// // import { useState, useEffect } from "react";
// // import { AdmissionData, ReleaseData } from "../type";

// // interface Props {
// //   admissionData: AdmissionData | null;
// //   releaseData?: ReleaseData[] | null;
// // }

// // export default function AdmissionRelease({ admissionData, releaseData }: Props) {
// //   const [admissions, setAdmissions] = useState<AdmissionData[]>([]);
// //   const [releases, setReleases] = useState<ReleaseData[]>([]);

// //   useEffect(() => {
// //     if (admissionData) setAdmissions([admissionData]);
// //     if (releaseData && releaseData.length > 0) setReleases(releaseData);
// //   }, [admissionData, releaseData]);

// //   const fmtDate = (iso?: string) =>
// //     iso ? new Date(iso).toLocaleDateString() : "N/A";
// //   const fmtDateTime = (iso?: string) =>
// //     iso ? new Date(iso).toLocaleString() : "N/A";

// //   return (
// //     <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
// //       {/* ====== Admission Details ====== */}
// //       <div className="bg-gradient-to-br from-blue-50 to-blue-100/60 rounded-3xl shadow-xl border border-blue-200/50 p-6 sm:p-8 backdrop-blur-md">
// //         <h2 className="text-[clamp(1.4rem,1vw+1rem,2rem)] font-bold text-blue-800 mb-6 flex items-center gap-2">
// //           🏥 <span>Admission Details</span>
// //         </h2>

// //         <div className="max-h-[450px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-transparent">
// //           {admissions.length === 0 ? (
// //             <p className="text-gray-500 italic text-center bg-white p-4 rounded-xl shadow-inner">
// //               No admission records found.
// //             </p>
// //           ) : (
// //             admissions.map((adm) => (
// //               <div
// //                 key={adm.id}
// //                 className="space-y-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 sm:p-6 mb-4"
// //               >
// //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
// //                   <Info label="Admission ID" value={adm.id} />
// //                   <Info label="Hospital" value={adm.hospital_name} />
// //                   <Info label="Admission Date" value={fmtDate(adm.date_of_adm)} />
// //                   <Info
// //                     label="Status"
// //                     value={
// //                       <span
// //                         className={`px-3 py-1 rounded-full text-xs font-bold ${
// //                           adm.adm_status === "Active"
// //                             ? "bg-green-100 text-green-700"
// //                             : "bg-gray-100 text-gray-500"
// //                         }`}
// //                       >
// //                         {adm.adm_status || "N/A"}
// //                       </span>
// //                     }
// //                   />
// //                   <Info label="Remarks" value={adm.remarks || "N/A"} />
// //                   <Info
// //                     label="Referral Source"
// //                     value={adm.referral_source_name || "N/A"}
// //                   />
// //                   {/* <Info label="Inserted By" value={adm.insert_by || "N/A"} />
// //                   <Info label="Insert Date" value={fmtDate(adm.insert_date)} />
// //                   <Info label="Updated By" value={adm.update_by || "N/A"} />
// //                   <Info label="Update Date" value={fmtDate(adm.insert_date)} /> */}
// //                   <Info
// //                     label="Is Active"
// //                     value={
// //                       <span
// //                         className={`font-semibold ${
// //                           adm.is_active ? "text-green-600" : "text-red-500"
// //                         }`}
// //                       >
// //                         {adm.is_active ? "Yes" : "No"}
// //                       </span>
// //                     }
// //                   />
// //                 </div>
// //               </div>
// //             ))
// //           )}
// //         </div>
// //       </div>

// //       {/* ====== Release Details ====== */}
// //       <div className="bg-gradient-to-br from-green-50 to-green-100/60 rounded-3xl shadow-xl border border-green-200/50 p-6 sm:p-8 backdrop-blur-md">
// //         <h2 className="text-[clamp(1.4rem,1vw+1rem,2rem)] font-bold text-green-800 mb-6 flex items-center gap-2">
// //           📤 <span>Release Details</span>
// //         </h2>

// //         <div className="max-h-[450px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-transparent">
// //           {releases.length === 0 ? (
// //             <p className="text-gray-500 italic text-center bg-white p-4 rounded-xl shadow-inner">
// //               No release records found.
// //             </p>
// //           ) : (
// //             releases.map((rel) => (
// //               <div
// //                 key={rel.id}
// //                 className="space-y-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 sm:p-6 mb-4"
// //               >
// //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
// //                   <Info label="Release ID" value={rel.id} />
// //                   <Info label="Admission ID" value={rel.admission_id} />
// //                   <Info
// //                     label="Discharge Date"
// //                     value={fmtDateTime(rel.discharge_date_time)}
// //                   />
// //                   <Info label="Outcome" value={rel.outcome} />
// //                   <Info
// //                     label="Advice on Discharge"
// //                     value={rel.advice_on_discharge}
// //                   />
// //                   <Info label="Created At" value={fmtDateTime(rel.created_at)} />
// //                   {/* <Info label="Hospital ID" value={rel.hospital_id} /> */}
// //                 </div>
// //               </div>
// //             ))
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // Reusable Info Display Component
// // function Info({ label, value }: { label: string; value: React.ReactNode }) {
// //   return (
// //     <div className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100/70 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all duration-200">
// //       <span className="text-sm font-semibold text-gray-500">{label}</span>
// //       <span className="text-[16px] font-medium text-gray-800">{value}</span>
// //     </div>
// //   );
// // }
// "use client";
// import { useState, useEffect } from "react";
// import { AdmissionData, ReleaseData } from "../type";

// interface Props {
//   admissionData: AdmissionData | null;
//   releaseData?: ReleaseData[] | null;
// }

// export default function AdmissionRelease({ admissionData, releaseData }: Props) {
//   const [admissions, setAdmissions] = useState<AdmissionData[]>([]);
//   const [releases, setReleases] = useState<ReleaseData[]>([]);

//   useEffect(() => {
//     if (admissionData) setAdmissions([admissionData]);
//     if (releaseData && releaseData.length > 0) setReleases(releaseData);
//   }, [admissionData, releaseData]);

//   const fmtDate = (iso?: string) =>
//     iso ? new Date(iso).toLocaleDateString() : "N/A";

//   return (
//     <div className="w-full space-y-6 bg-gradient-to-br from-blue-50 to-blue-100/70 rounded-3xl shadow-2xl border border-blue-200/50 backdrop-blur-md p-6 sm:p-8 overflow-x-auto">
//       <h2 className="text-xl hover:text-blue-700 transition-colors duration-200 font-bold text-blue-800 flex items-center gap-2">
//         🩺 Admission & Release Summary
//       </h2>

//       {admissions.length === 0 ? (
//         <p className="text-gray-500 italic text-center bg-white p-4 rounded-xl shadow-inner">
//           No admission records found.
//         </p>
//       ) : (
//         admissions.map((adm) => {
//           const rel = releases.find((r) => r.admission_id === adm.id);
//           return (
//             <div
//               key={adm.id}
//               className=" bg-gradient-to-br from-blue-50 to-blue-100/70 grid grid-cols-3 gap-5 bg-white border rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-4 flex flex-wrap items-center justify-between text-sm text-gray-700"
//             >
//               <Field label="Admission Date" value={fmtDate(adm.date_of_adm)} />
              
//               <Field label="Referral" value={adm.referral_source_name} />
//               <Field
//                 label="Release Date"
//                 value={rel ? fmtDate(rel.discharge_date_time) : "N/A"}
//               />
              
//               <Field label="Outcome" value={rel?.outcome || "N/A"} />
//               <Field label="Hospital" value={adm.hospital_name} />
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// }

// // Compact inline field display
// function Field({ label, value }: { label: string; value?: string }) {
//   return (
//     <div className="flex items-center gap-1 whitespace-nowrap mr-4">
//       <span className="font-semibold text-gray-600">{label}:</span>
//       <span className="text-gray-800">{value || "N/A"}</span>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { AdmissionData, ReleaseData } from "../type";

interface Props {
  admissionData: AdmissionData | null;
  releaseData?: ReleaseData[] | null;
}

export default function AdmissionRelease({ admissionData, releaseData }: Props) {
  const [admissions, setAdmissions] = useState<AdmissionData[]>([]);
  const [releases, setReleases] = useState<ReleaseData[]>([]);

  useEffect(() => {
    if (admissionData) setAdmissions([admissionData]);
    if (releaseData && releaseData.length > 0) setReleases(releaseData);
  }, [admissionData, releaseData]);

  const fmtDate = (iso?: string) =>
    iso ? new Date(iso).toLocaleDateString() : "N/A";

  return (
     <div >
      <h2 className="text-xl pl-7 font-normal text-blue-800 flex items-center gap-2 mb-1">
        🩺 Admission & Release Summary
      </h2>

      {admissions.length === 0 ? (
        <p className="text-gray-500 italic text-center bg-white p-4 rounded-xl shadow-inner">
          No admission records found.
        </p>
      ) : (
        admissions.map((adm) => {
          const rel = releases.find((r) => r.admission_id === adm.id);

          return (
            <div
              key={adm.id}
              className="
                relative 
                bg-white 
                border border-blue-100 
                rounded-2xl 
                shadow-sm 
                hover:shadow-2xl 
                hover:border-blue-300 
                transition-all 
                duration-300
                pl-8 pr-8
                py-5 
                group
                overflow-hidden
              "
            >
              {/* Subtle gradient highlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 text-md text-gray-700">
                <Field label="Admission Date" value={fmtDate(adm.date_of_adm)} />
               
                <Field label="Referral" value={adm.referral_source_name} />
                <Field
                  label="Release Date"
                  value={rel ? fmtDate(rel.discharge_date_time) : "N/A"}
                />
                <Field label="Outcome" value={rel?.outcome || "N/A"} />
                <Field label="Adv.On.Discharge" value={rel?.advice_on_discharge || "N/A"} />
                {/* <Field label="Blood Group" value={rel?.blood_group || "N/A"} /> */}
               
                 {/* <Field label="Hospital" value={adm.hospital_name} /> */}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

// ✅ Reusable compact field with subtle hover text animation
function Field({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 whitespace-nowrap">
      <span className="font-semibold text-blue-700 group-hover:text-blue-900 transition-colors duration-200">
        {label}:
      </span>
      <span className="text-gray-800 group-hover:text-gray-900 transition-colors duration-200">
        {value || "N/A"}
      </span>
    </div>
  );
}