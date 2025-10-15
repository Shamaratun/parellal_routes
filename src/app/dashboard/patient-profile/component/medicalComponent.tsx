
"use client";

import React from "react";

type PreOp = {
  id: number;
  patient_id?: number;
  admission_id?: number;
  co_morbidities_id?: string[];
  diagnosis_id?: string[];
  drug_history?: string[];
  dt?: string;
  insert_date?: string;
  surgical_history?: string;
  remarks?: string | null;
  [key: string]: any;
};

interface ProfileData {
  pre_ops_data?: PreOp[] | null;
}

interface Props {
  profile: ProfileData;
}

const fmtDateTime = (iso?: string) =>
  iso ? new Date(iso).toLocaleString() : "N/A";

const fmtDate = (iso?: string) =>
  iso ? new Date(iso).toLocaleDateString() : "N/A";

const joinOrNA = (arr?: string[] | null) =>
  Array.isArray(arr) && arr.length ? arr.join(", ") : "N/A";

export default function MedicalComponent({ profile }: Props) {
  const preOps = profile?.pre_ops_data;

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4 overflow-x-auto">
      <h2 className="font-semibold text-green-600 mb-4 text-lg">Medical Information</h2>

      {!preOps || preOps.length === 0 ? (
        <p className="text-gray-500 mt-2">No medical information available.</p>
      ) : (
        <table className="min-w-full border border-gray-200">
          <thead className="bg-green-100">
            <tr>
              <th className="text-left p-2 border-b">Co-morbidities</th>
              <th className="text-left p-2 border-b">Diagnosis (IDs)</th>
              <th className="text-left p-2 border-b">Drug History</th>
              <th className="text-left p-2 border-b">Surgical History</th>
              <th className="text-left p-2 border-b">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {preOps.map((rec, idx) => (
              <tr key={rec.id ?? idx} className="hover:bg-gray-50">
                <td className="p-2 border-b">{joinOrNA(rec.co_morbidities_id)}</td>
                <td className="p-2 border-b">{joinOrNA(rec.diagnosis_id)}</td>
                <td className="p-2 border-b">{joinOrNA(rec.drug_history)}</td>
                <td className="p-2 border-b">{rec.surgical_history ?? "N/A"}</td>
                <td className="p-2 border-b">{rec.remarks ?? "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
