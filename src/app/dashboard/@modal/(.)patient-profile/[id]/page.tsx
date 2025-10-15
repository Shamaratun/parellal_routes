// "use client";

// import React, { Suspense, use } from "react";
// import ModalPortal from "@/components/utility-components/portal-modal";

// import { useRouter } from "next/navigation";
// import GetPatientInfoWithId from "@/app/dashboard/patient-profile/getPatientInfoWithId";

// function LoadingFallback() {
//   return (
//     <div className="flex items-center justify-center p-10">
//       <div className="text-muted-foreground animate-pulse text-sm">
//         Loading patient details...
//       </div>
//     </div>
//   );
// }

// export default function PatientProfileModal({
//   params,
// }: {
//   params: Promise<{ id: number,admission_id?: number }>;
// }) {
//   const { id,admission_id } = use(params); // ✅ unwrap the promise safely
//   const router = useRouter();
//   const handleClose = () => router.back();

//   return (
//     <ModalPortal title="Patient Profile" isOpen={true} onClose={handleClose}>
//       <Suspense fallback={<LoadingFallback />}>
//       {id && <GetPatientInfoWithId patient_id={id} admission_id={admission_id} />}
//       </Suspense>
//     </ModalPortal>
//   );
// }
// "use client";

// import React, { Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import ModalPortal from "@/components/utility-components/portal-modal";
// import GetPatientInfoWithId from "@/app/dashboard/patient-profile/getPatientInfoWithId";

// function LoadingFallback() {
//   return (
//     <div className="flex items-center justify-center p-10">
//       <div className="text-muted-foreground animate-pulse text-sm">
//         Loading patient details...
//       </div>
//     </div>
//   );
// }

// export default function PatientProfileModal({
//   params,
// }: {
//   params: { id: string }; 
// }) {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const patient_id = Number(params.id);
//   const admission_id = searchParams.get("admission_id")
//     ? Number(searchParams.get("admission_id"))
//     : undefined;

//   const handleClose = () => router.back();

//   return (
//     <ModalPortal title="Patient Profile" isOpen={true} onClose={handleClose}>
//       <Suspense fallback={<LoadingFallback />}>
//         {patient_id && (
//           <GetPatientInfoWithId
//             patient_id={patient_id}
//             admission_id={admission_id}
//           />
//         )}
//       </Suspense>
//     </ModalPortal>
//   );
// }
