
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import PortalModal from "@/components/utility-components/portal-modal";
import GetPatientInfoWithId from "./dashboard/patient-profile/getPatientInfoWithId";
import MultiStepForm from "./dashboard/uploadTesting/page";


export default function DashboardPage() {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [patientId, setPatientId] = useState<number | null>(null);
  const [admissionId, setAdmissionId] = useState<number | null>(null);
  const [inputPatientId, setInputPatientId] = useState<string>("");
  const [inputAdmissionId, setInputAdmissionId] = useState<string>("");

  const handleOpenModal = () => {
    const patient_id = Number(inputPatientId);
    const admission_id = Number(inputAdmissionId);

    if (!patient_id || !admission_id) {
      alert("Please enter valid Patient ID and Admission ID");
      return;
    }

    setPatientId(patient_id);
    setAdmissionId(admission_id);
    setOpenModal(true);

   
    router.push(`/dashboard/patient-profile/${patient_id}/${admission_id}`);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  
    router.back();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🏠 Dashboard</h1>

      <div className="mb-4">
        <input
          type="number"
          placeholder="Patient ID"
          value={inputPatientId}
          onChange={(e) => setInputPatientId(e.target.value)}
          className="border px-2 py-1 mr-2 rounded"
        />
        <input
          type="number"
          placeholder="Admission ID"
          value={inputAdmissionId}
          onChange={(e) => setInputAdmissionId(e.target.value)}
          className="border px-2 py-1 mr-2 rounded"
        />
        <button
          onClick={handleOpenModal}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open Patient Profile
        </button>
      </div>

      {openModal && patientId && admissionId && (
        <PortalModal
          title="Patient Profile"
          isOpen={openModal}
          onClose={handleCloseModal}
          maxWidth="900px"
        >
          <GetPatientInfoWithId patient_id={patientId} admission_id={admissionId} />
        </PortalModal>
      )}
      <MultiStepForm/>
    </div>
  );
}


