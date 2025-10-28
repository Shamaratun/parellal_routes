"use client";

import { useEffect, useState, useTransition } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  AdmissionData,
  SurgicalRecord,
  Patient,
  PostOpsData,
  ReleaseData,
  PreOpsData,
} from "./type";
import { getProfileAction } from "../../../lib/actions/profileAction";
import PatientDetails from "./patientBasicCard";
import RecentVisitComponent from "./component/recentVisitComponent";
import PatientFilesList from "./component/uploadedList/patientFileList";
import PatientTabs from "./component/reusableTabs/patientTab";
import AdmissionRelease from "./component/admissionRelease";
import MedicalHistoryTab from "./component/reusableTabs/medicalHistoryTab";


interface GetPatientInfoWithIdProps {
  patient_id: number;
  admission_id: number;
}

export default function GetPatientInfoWithId({
  patient_id,
  admission_id,
}: GetPatientInfoWithIdProps) {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [admissions, setAdmissions] = useState<AdmissionData[]>([]);
  const [releaseData, setReleaseData] = useState<ReleaseData[]>([]);
  const [postOpsData, setPostOpsData] = useState<PostOpsData[]>([]);
  const [surgicalData, setSurgicalData] = useState<SurgicalRecord[]>([]);
  const [preOpsData, setPreOpsData] = useState<PreOpsData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getProfileAction(patient_id, admission_id);
        if (!res?.data) throw new Error("No data received from server");

        const data = res.data;
        setSelectedPatient(data.patient_basic ?? null);
        if (data.admission_data) setAdmissions([data.admission_data]);
        if (data.release_data) {
          setReleaseData(
            Array.isArray(data.release_data)
              ? data.release_data
              : [data.release_data]
          );
        }
        setSurgicalData(data.surgical_data ?? data.surgical_data ?? []);
        setPostOpsData(data.post_ops_data ?? data.post_surgical_data ?? []);
        setPreOpsData(data.pre_ops_data ?? data.investigation_data ?? []);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to load patient profile");
        }
      }
    });
  }, [patient_id, admission_id]);

  if (isPending)
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium animate-pulse">
            Loading patient profile...
          </p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 via-white to-pink-100">
        <p className="text-center text-red-600 text-lg font-semibold bg-white/70 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg">
          {error}
        </p>
      </div>
    );

  if (!selectedPatient)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200">
        <p className="text-gray-600 text-lg font-medium">No patient found.</p>
      </div>
    );

  const latestAdmission = admissions[0];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
 
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(147,197,253,0.4),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(191,219,254,0.4),transparent_50%)]"
        style={{ animation: "slow-pulse 8s ease-in-out infinite" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
       
        <div className="relative p-3 rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
          <div
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(147,197,253,0.4),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(191,219,254,0.4),transparent_50%)]"
            style={{ animation: "slow-pulse 8s ease-in-out infinite" }}
          ></div>
          <PatientDetails
            patient={selectedPatient}
            admissionData={latestAdmission}
          />
        </div>
        <AdmissionRelease admissionData={latestAdmission} releaseData={releaseData} />
        <div className="relative p-1 rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
          <Tabs defaultValue="medical-history">
            <PatientTabs />
            <MedicalHistoryTab
              pre_ops_data={preOpsData}
              surgical_data={surgicalData}
            />
            <TabsContent value="recent-visits">
              <Card className="relative mt-4 shadow-md border-none bg-white/80 backdrop-blur overflow-hidden">
                <CardContent>
                  <RecentVisitComponent />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notes">
              <Card className="relative mt-4 shadow-md border-none bg-white/80 backdrop-blur overflow-hidden">
                <CardContent>
                  <p className="text-gray-700 text-base">
                    Doctor or nurse notes will be shown here.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl  border border-blue-200/50 backdrop-blur-lg p-6 space-y-6 overflow-x-auto">
                    <PatientFilesList postOps={postOpsData} />
        </div>
      </div>
    </div>
  );
}
