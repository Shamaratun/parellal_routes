"use client";
import { useState, useEffect } from "react";
import { AdmissionData, ReleaseData } from "../type";

interface Props {
  admissionData: AdmissionData | null;
  releaseData?: ReleaseData[] | null;
}

export default function AdmissionRelease({ admissionData, releaseData }: Props) {
  const [admissions, setAdmissions] = useState<AdmissionData[]>([]);
  const [releases, setReleases] = useState<ReleaseData[]>([]);

  useEffect(() => {
    if (admissionData) setAdmissions([admissionData]);
    if (releaseData && releaseData.length > 0) setReleases(releaseData);
  }, [admissionData, releaseData]);

  const fmtDate = (iso?: string) =>
    iso ? new Date(iso).toLocaleDateString() : "N/A";

  return (
    <div >
      <h2 className="text-xl pl-7 font-normal text-blue-800 flex items-center gap-2 mb-1">
        🩺 Admission & Release Summary
      </h2>

      {admissions.length === 0 ? (
        <p className="text-gray-500 italic text-center bg-white p-4 rounded-xl ">
          No admission records found.
        </p>
      ) : (
        admissions.map((adm) => {
          const rel = releases.find((r) => r.admission_id === adm.id);

          return (
            <div
              key={adm.id}
              className="relative bg-white  border border-blue-100 rounded-2xl shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-300  pl-8 pr-8 py-5 group overflow-hidden"
            >
              {/* Subtle gradient highlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 text-md text-gray-700">
                <Field label="Admission Date" value={fmtDate(adm.date_of_adm)} />
                <Field label="Referral" value={adm.referral_source_name} />
                <Field
                  label="Release Date"
                  value={rel ? fmtDate(rel.discharge_date_time) : "N/A"}
                />
                <Field label="Outcome" value={rel?.outcome || "N/A"} />
                <Field label="Adv.On.Discharge" value={rel?.advice_on_discharge || "N/A"} />
                {/* <Field label="Blood Group" value={rel?.blood_group || "N/A"} /> */}
                <Field label="Hospital" value={adm.hospital_name} />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

// ✅ Reusable compact field with subtle hover text animation
export function Field({ label, value }: { label: string; value?: string  | number }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 whitespace-nowrap">
      <span className="font-semibold text-blue-700 group-hover:text-blue-900 transition-colors duration-200">
        {label}:
      </span>
      <span className="text-gray-800 group-hover:text-gray-900 transition-colors duration-200">
        {value || "N/A"}
      </span>
    </div>
  );
}
