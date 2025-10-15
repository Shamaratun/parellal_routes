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
    <div className="space-y-6 p-4">
     
        <h3 className="text-lg font-semibold mb-3">Medical Information</h3>

        {!preOps || !Array.isArray(preOps) || preOps.length === 0 ? (
          <p className="text-sm text-gray-500">No medical records.</p>
        ) : (
          preOps.map((rec, idx) => (
            <div key={rec.id ?? idx} className="mb-4 border rounded p-3 bg-gray-50">
              

              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-t">
                    <td className="p-2 font-medium w-48">Co-morbidities</td>
                    <td className="p-2">{joinOrNA(rec.co_morbidities_id)}</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-2 font-medium">Diagnosis (IDs)</td>
                    <td className="p-2">{joinOrNA(rec.diagnosis_id)}</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-2 font-medium">Drug History</td>
                    <td className="p-2">{joinOrNA(rec.drug_history)}</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-2 font-medium">Surgical History</td>
                    <td className="p-2">{rec.surgical_history ?? "N/A"}</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-2 font-medium">Remarks</td>
                    <td className="p-2">{rec.remarks ?? "N/A"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))
        )}
    </div>
  );
}
