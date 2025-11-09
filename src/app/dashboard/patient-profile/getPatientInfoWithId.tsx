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
import PatientTabs from "./component/reusableTabs/patientTab";
import AdmissionRelease from "./component/admissionRelease";
import MedicalHistoryTab from "./component/reusableTabs/medicalHistoryTab";
import ListOfDocs from "./component/uploadedList/listOfDocs";

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
      <div className="flex flex-col items-center justify-center h-[70vh] bg-white">
        <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-600 text-sm font-medium mt-2">
          Loading patient profile...
        </p>
      </div>
    );

  // --- ERROR ---
  if (error)
    return (
      <div className="flex items-center justify-center h-[70vh] bg-red-50">
        <p className="text-red-600 font-medium bg-white px-3 py-2 rounded-md shadow-sm">
          {error}
        </p>
      </div>
    );

  // --- EMPTY ---
  if (!selectedPatient)
    return (
      <div className="flex items-center justify-center h-[70vh] bg-gray-50">
        <p className="text-gray-600 text-base">No patient found.</p>
      </div>
    );

  const latestAdmission = admissions[0];

  return (
    <div className="relative min-h-screen overflow-hidden  text-gray-800">    

     <div className="p-2">
        {/* Patient Basic Info */}
        <PatientDetails
          patient={selectedPatient}         
        />
     </div>
     <div className="p-2">
        {/* Admission & Release */}
        <AdmissionRelease
          admissionData={latestAdmission}
          releaseData={releaseData}
        />
      </div>
        <div className="relative rounded-2xl bg-white/70 backdrop-blur-md bordershadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
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
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl  border border-blue-200/50 backdrop-blur-lg pt-6 space-y-6 overflow-x-auto">
         <ListOfDocs postOpsData={postOpsData}/>
        </div>
      </div>
    
  );
}