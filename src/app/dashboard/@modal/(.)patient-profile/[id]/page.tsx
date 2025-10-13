"use client";

import React, { Suspense, use } from "react";
import ModalPortal from "@/components/utility-components/portal-modal";

import { useRouter } from "next/navigation";
import GetPatientInfoWithId from "@/app/dashboard/patient-profile/getPatientInfoWithId";

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center p-10">
      <div className="text-muted-foreground animate-pulse text-sm">
        Loading patient details...
      </div>
    </div>
  );
}

export default function PatientProfileModal({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = use(params); // ✅ unwrap the promise safely
  const router = useRouter();
  const handleClose = () => router.back();

  return (
    <ModalPortal title="Patient Profile" isOpen={true} onClose={handleClose}>
      <Suspense fallback={<LoadingFallback />}>
      {id && <GetPatientInfoWithId patient_id={id} />}
      </Suspense>
    </ModalPortal>
  );
}



