"use client";

import { useEffect, useState, useTransition } from "react";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { AdmissionItem, Patient, SurgicalData } from "./type";
import { getProfileAction } from "./profileAction";
import PatientDetails from "./patientBasicCard";
import MedicalHistoryTab from "./component/reusableTabs/medicalHistoryTabs";
import RecentVisitComponent from "./component/recentVisitComponent";
import PatientTabs from "./component/patientTab";

interface PatientProfileProps {
    patient_id: number;
}

export default function GetPatientInfoWithId({ patient_id }: PatientProfileProps) {
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
    const [admissions, setAdmissions] = useState<AdmissionItem[]>([]);
    const [postOps, setPostOps] = useState<SurgicalData[]>([]); // <-- new state
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();
    const [patientId, setPatientId] = useState(patient_id);

    useEffect(() => {
        startTransition(async () => {
            try {
                if (!patient_id) throw new Error("Patient ID is required");

                const res = await getProfileAction(patient_id);

                if (!res.data) throw new Error("No data received from server");

                setSelectedPatient(res.data.patient_basic ?? null);
                setAdmissions(res.data.admissions ?? []);
                setPostOps(res.data.post_ops_data ?? []);

            } catch (err: any) {
                console.error("Error fetching patient profile:", err);
                setError(err.message || "Failed to load patient profile");
            }
        });
    }, [patientId]);

    if (isPending)
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-gray-500 animate-pulse">
                    Loading patient profile...
                </p>
            </div>
        );

    if (error) return <p className="text-center text-red-500">{error}</p>;

    if (!selectedPatient)
        return <p className="text-center text-gray-500">No patient found</p>;

    const latestAdmission = admissions[0]?.admission_data;

    return (
        <div className="p-4 sm:p-6 mx-auto space-y-4 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
            <PatientDetails
                patient={selectedPatient}
                admissionData={latestAdmission}
            />

           <div className="w-full p-4 sm:p-6">
                <Tabs defaultValue="medical-history" className="w-full">
                   <PatientTabs />
                      <MedicalHistoryTab />

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

                   
                    {/* <TabsContent value="surgical-data">
                        <Card className="mt-4">
                            <CardContent>
                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold mb-2">Surgical / Post-Op Data</h3>

                                    {postOps.length === 0 ? (
                                        <p className="text-gray-500 text-sm">N/A</p>
                                    ) : (
                                        <div className="space-y-3">
                                            {postOps.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="p-3 border rounded-lg bg-white shadow-sm"
                                                >
                                                    <p>
                                                        <span className="font-medium">File:</span>{" "}
                                                        {item.file_name || "N/A"} ({item.file_type || "N/A"})
                                                    </p>
                                                    <p>
                                                        <span className="font-medium">Remarks:</span> {item.remarks || "N/A"}
                                                    </p>
                                                    <p>
                                                        <span className="font-medium">Date:</span>{" "}
                                                        {item.dt ? new Date(item.dt).toLocaleString() : "N/A"}
                                                    </p>
                                                    <p>
                                                        <span className="font-medium">View:</span>{" "}
                                                        {item.drive_file_id ? (
                                                            <a
                                                                href={`https://drive.google.com/file/d/${item.drive_file_id}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-blue-500 underline"
                                                            >
                                                                Open File
                                                            </a>
                                                        ) : (
                                                            "N/A"
                                                        )}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>*/}
                </Tabs> 

                {/* File Upload */}
                <div className="mt-6 mb-4">
                    <label className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto cursor-pointer hover:bg-blue-600 transition block text-center sm:inline-block">
                        <input
                            type="file"
                            className="hidden"
                            onChange={(e) => console.log(e.target.files)}
                        />
                        List of Uploaded File
                    </label>
                </div>
            </div>
        </div>
    );
}
