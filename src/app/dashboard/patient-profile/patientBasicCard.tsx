// import { AdmissionData, Patient } from "./type";

// interface PatientDetailsProps {
//   patient?: Patient;
//   admissionData?: AdmissionData | null;
// }
// export default function PatientDetails({ patient, admissionData }: PatientDetailsProps) {
//   if (!patient) return <p>Loading patient data...</p>;
//   return (
//     <div className="w-full bg-blue-500 text-white p-6 rounded-lg shadow-lg flex flex-col sm:flex-row sm:space-x-6 items-center sm:items-start">
//       <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-blue-500 text-5xl font-bold mb-4 sm:mb-0">
//         {patient.name.charAt(0)}
//       </div>
//       {/* Patient Info */}
//       <div >
//         <div className=" text-2xl font-normal">
//           <PatientInfo label="Patient Name" value={patient.name} />
//         </div>
//         {/* Patient Basic Info */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
//           <PatientInfo label="Patient ID" value={patient.id} />
//           <PatientInfo label="Admission ID" value={patient.admission_id} />
//           <PatientInfo label="Age" value={patient.age} />
//           <PatientInfo label="Gender" value={patient.gender} />
//           <PatientInfo label="Mobile" value={patient.mobile_number} />
//           <PatientInfo label="Address" value={patient.address_line_one} />
//           <PatientInfo label="Hospital Name" value={admissionData?.hospital_name} />
//         </div>
//       </div>
//     </div>
//   );
// }
// function PatientInfo({
//   label,
//   value,
// }: {
//   label: string;
//   value?: string | number;
//   className?: string;
// }) {
//   if (value === undefined || value === null) return null;
//   return (
//     <div>
//       <div>
//         <span >{label}:</span>
//         <span className="font-semibold">{value}</span>
//       </div>
//     </div>
//   );
// }
import { AdmissionData, Patient } from "./type";

interface PatientDetailsProps {
  patient?: Patient;
  admissionData?: AdmissionData | null;
}

export default function PatientDetails({ patient, admissionData }: PatientDetailsProps) {
  if (!patient) return <p>Loading patient data...</p>;

  return (
    <div className="w-full bg-blue-500 text-white p-6 rounded-lg shadow-lg flex flex-col sm:flex-row sm:space-x-6 items-center sm:items-start">

      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-blue-500 text-5xl font-bold mb-4 sm:mb-0">
        {patient.name.charAt(0)}
      </div>

      {/* Patient Info */}
      <div >
        <div className=" text-2xl font-normal">
          <PatientInfo label="Patient Name" value={patient.name} />
        </div>
        <div className="justify-center pt-2  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full">
          <PatientInfo label="Patient ID" value={patient.id} />
          <PatientInfo label="Admission ID" value={patient.admission_id} />
          <PatientInfo label="Age" value={patient.age} />
          <PatientInfo label="Gender" value={patient.gender} />
          <PatientInfo label="Mobile" value={patient.mobile_number} />

          <PatientInfo label="Address" value={patient.address_line_one} className="md:col-span-2" />
          <PatientInfo label="Hospital Name" value={admissionData?.hospital_name} className="md:col-span-2" />
        </div>
      </div>
    </div>
  );
}
function PatientInfo({
  label,
  value,
  className,
}: {
  label: string;
  value?: string | number;
  className?: string;
}) {
  if (value === undefined || value === null) return null;
  return (
    <div className={className}>
      <span className="font-normal">{label}:</span>{" "}
      <span
        className="font-semibold inline-block max-w-[180px] sm:max-w-[220px] md:max-w-[260px] truncate align-bottom"
        title={String(value)}
      >
        {value}
      </span>
    </div>
  );
}