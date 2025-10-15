"use client";

import { useEffect, useState, useTransition } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
    AdmissionData,
    Patient,
    SurgicalData,
    ReleaseData,
    PreOpsData,
} from "./type";
import { getProfileAction } from "./profileAction";
import PatientDetails from "./patientBasicCard";
import MedicalHistoryTab from "./component/reusableTabs/medicalHistoryTabs";
import RecentVisitComponent from "./component/recentVisitComponent";
import PatientFilesList from "./component/uploadedList/patientFileList";
import PatientTabs from "./component/reusableTabs/patientTab";
import AdmissionRelease from "./component/admissionRelease";

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
    const [postOpsData, setPostOpsData] = useState<SurgicalData[]>([]);
    const [preOpsData, setPreOpsData] = useState<PreOpsData[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(async () => {
            try {
                console.log("📡 Fetching profile for:", { patient_id, admission_id });
                const res = await getProfileAction(patient_id, admission_id);

                if (!res?.data) throw new Error("No data received from server");

                const data = res.data;
                console.log("✅ Profile Data:", data);

                setSelectedPatient(data.patient_basic ?? null);

                if (data.admission_data) setAdmissions([data.admission_data]);

                if (data.release_data) {
                    setReleaseData(
                        Array.isArray(data.release_data)
                            ? data.release_data
                            : [data.release_data]
                    );
                }

                setPostOpsData(data.post_ops_data ?? data.post_surgical_data ?? []);
                setPreOpsData(data.pre_ops_data ?? data.investigation_data ?? []);
            } catch (err: any) {
                console.error("❌ Error fetching profile:", err);
                setError(err.message || "Failed to load patient profile");
            }
        });
    }, [patient_id, admission_id]);

    if (isPending)
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-gray-500 animate-pulse">Loading patient profile...</p>
            </div>
        );

    if (error)
        return <p className="text-center text-red-500 font-medium">{error}</p>;

    if (!selectedPatient)
        return <p className="text-center text-gray-500">No patient found</p>;

    const latestAdmission = admissions[0];

    return (
        <div className="p-4 sm:p-6 md:mx-20 lg:mx-52 space-y-4 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
            <PatientDetails patient={selectedPatient} admissionData={latestAdmission} />

            <div className="w-full p-4 sm:p-6">
                <AdmissionRelease
                    admissionData={latestAdmission}
                    releaseData={releaseData}
                />

                <Tabs defaultValue="medical-history" className="w-full">
                    <PatientTabs />

                    <MedicalHistoryTab
                        pre_ops_data={preOpsData}
                        post_ops_data={postOpsData}
                    />

                    <TabsContent value="recent-visits">
                        <Card className="mt-4">
                            <CardContent>
                                <RecentVisitComponent />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="notes">
                        <Card className="mt-4">
                            <CardContent>
                                <p className="text-sm sm:text-base">
                                    Doctor or nurse notes will be shown here.
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                <div className="mt-6 mb-4">
                    <label className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto cursor-pointer hover:bg-blue-600 transition block text-center sm:inline-block">
                        List of Uploaded Files
                    </label>

                    <div className="mt-4">
                        <PatientFilesList postOps={postOpsData} />
                    </div>
                </div>
            </div>
        </div>
    );
}
