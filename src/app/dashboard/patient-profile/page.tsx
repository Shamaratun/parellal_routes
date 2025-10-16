import { Suspense } from "react";
import GetPatientInfoWithId from "./getPatientInfoWithId";
const patient_id =123;
const admission_id =86;

export default function PatientProfilePage() {
  return (
    <div>
      {/* <Suspense fallback={<p>Loading patient info...</p>}>
        <GetPatientInfoWithId patient_id={patient_id} admission_id={admission_id}  />
      </Suspense> */}
      <Suspense fallback={<p>Loading patient info...</p>}>
        <GetPatientInfoWithId patient_id={patient_id} admission_id={admission_id} />
      </Suspense>

    </div>

  );
}   