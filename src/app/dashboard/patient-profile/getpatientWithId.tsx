// "use client";

// import { useEffect, useState, useTransition } from "react";
// import { getProfileAction } from "./profileAction";
// import { AdmissionItem, Patient } from "./type";
// import PatientDetails from "./patientBasicCard";
// import PatientTabs from "./component/patientTab";
// import RecentVisitComponent from "./component/recentVisitComponent";
// import MedicalHistoryTab from "./component/medicalHistoryTabs";
// import { Tabs, TabsContent } from "@/components/ui/tabs";
// import { Card, CardContent } from "@/components/ui/card";

// interface PatientProfileProps {
//   patient_id: number;
// }

// export default function GetPatientWithId({ patient_id }: PatientProfileProps) {
//   const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
//   const [admissions, setAdmissions] = useState<AdmissionItem[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [isPending, startTransition] = useTransition();
//   const [patientId, setPatientId] = useState(patient_id);

//   useEffect(() => {
//     startTransition(async () => {
//       try {
//         if (!patient_id) {
//           throw new Error("Patient ID is required");
//         }

//         const res = await getProfileAction(patient_id);

//         if (!res.data) {
//           throw new Error("No data received from server");
//         }

//         setSelectedPatient(res.data.patient_basic ?? null);
//         setAdmissions(res.data.admissions ?? []);
//       } catch (err: any) {
//         console.error("Error fetching patient profile:", err);
//         setError(err.message || "Failed to load patient profile");
//       }
//     });
//   }, [patientId]);

//   if (isPending)
//     return (
//       <div className="flex justify-center items-center h-64">
//         <p className="text-gray-500 animate-pulse">
//           Loading patient profile...
//         </p>
//       </div>
//     );

//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   if (!selectedPatient)
//     return <p className="text-center text-gray-500">No patient found</p>;

//   const latestAdmission = admissions[0]?.admission_data;

//   return (
//     <div className="p-4 sm:p-6 mx-auto space-y-4 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
//       <PatientDetails
//         patient={selectedPatient}
//         admissionData={latestAdmission}
//       />

//       <div className="w-full p-4 sm:p-6">
//         <Tabs defaultValue="medical-history" className="w-full">
//           <PatientTabs />
//           <MedicalHistoryTab />

//           <TabsContent value="recent-visits">
//             <Card className="mt-4">
//               <CardContent>
//                 <RecentVisitComponent />
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value="notes">
//             <Card className="mt-4">
//               <CardContent>
//                 <p className="text-sm sm:text-base">
//                   Doctor or nurse notes will be shown here.
//                 </p>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>

//         {/* File Upload */}
//         <div className="mt-6 mb-4">
//           <label className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto cursor-pointer hover:bg-blue-600 transition block text-center sm:inline-block">
//             <input
//               type="file"
//               className="hidden"
//               onChange={(e) => console.log(e.target.files)}
//             />
//             Upload File
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// }
