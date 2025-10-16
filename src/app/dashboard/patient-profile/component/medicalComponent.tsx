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

const joinOrNA = (arr?: string[] | null) =>
  Array.isArray(arr) && arr.length ? arr.join(", ") : "N/A";

export default function MedicalComponent({ profile }: Props) {
  const preOps = profile?.pre_ops_data;

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4 overflow-x-auto">
      <h2 className="font-semibold text-green-600 mb-4 text-lg">
        Medical Information
      </h2>

      {!preOps || preOps.length === 0 ? (
        <p className="text-gray-500 mt-2">No medical information available.</p>
      ) : (
        preOps.map((rec, idx) => (
          <div
            key={rec.id ?? idx}
            className="mb-6 border border-gray-200 rounded-lg overflow-hidden"
          >
            <table className="min-w-full">
              <tbody>
                <tr className="bg-green-50">
                  <th className="w-1/3 text-left p-3 font-medium border-b">
                    Co-morbidities
                  </th>
                  <td className="p-3 border-b">
                    {joinOrNA(rec.co_morbidities_id)}
                  </td>
                </tr>
                <tr>
                  <th className="text-left p-3 font-medium border-b bg-gray-50">
                    Diagnosis (IDs)
                  </th>
                  <td className="p-3 border-b">{joinOrNA(rec.diagnosis_id)}</td>
                </tr>
                <tr>
                  <th className="text-left p-3 font-medium border-b">
                    Drug History
                  </th>
                  <td className="p-3 border-b">{joinOrNA(rec.drug_history)}</td>
                </tr>
                <tr>
                  <th className="text-left p-3 font-medium border-b bg-gray-50">
                    Surgical History
                  </th>
                  <td className="p-3 border-b">
                    {rec.surgical_history ?? "N/A"}
                  </td>
                </tr>
                <tr>
                  <th className="text-left p-3 font-medium border-b">
                    Remarks
                  </th>
                  <td className="p-3 border-b">{rec.remarks ?? "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
}
