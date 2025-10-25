"use client";
import React from "react";
import { Drug, PreOpsData } from "../type";

interface ProfileData {
  pre_ops_data?: PreOpsData[] | null;
}

interface Props {
  profile: ProfileData;
}

const joinOrNA = (arr?: string[] | null) =>
  Array.isArray(arr) && arr.length ? arr.join(", ") : "N/A";

export default function MedicalComponent({ profile }: Props) {
  const preOps = profile?.pre_ops_data;

  if (!preOps || preOps.length === 0) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl shadow-xl border border-blue-200/50 backdrop-blur-md  text-center text-gray-500 italic">
        No medical information available.
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl shadow-2xl border border-blue-200/50 backdrop-blur-lg space-y-6 overflow-x-auto">
      <div className="bg-white/90 rounded-2xl shadow-sm overflow-x-auto">
        <table className="min-w-full text-[16px] border-separate border-spacing-y-0.5">
          <thead>
            <tr className="bg-gradient-to-r from-blue-100 to-blue-200/70 text-blue-800 font-semibold">
              <th className="w-15 text-center">Rec.ID</th>
              <th className="p-1 text-center">Co-morbidities</th>
              <th className="p-1 text-center">Diagnosis</th>
              <th className="p-1 text-center">Surgical History</th>
              <th className="p-1 text-center w-64">Remarks</th>
              <th className="text-center rounded-r-lg">Drug History</th>
            </tr>
          </thead>
          <tbody>
            {preOps.map((rec) => {           
              const drugs =
                rec.drug_history
                  ?.map((drugStr) => {
                    try {
                      return JSON.parse(drugStr) as Drug;
                    } catch {
                      return null;
                    }
                  })
                  .filter(Boolean) ?? [];

              return (
                <tr key={rec.id} className="bg-blue-50 hover:bg-blue-100 transition">
                  <td className="p-1 text-center font-semibold text-blue-800">{rec.id}</td>
                  <td className="p-1">{joinOrNA(rec.co_morbidities_id)}</td>
                  <td className="p-1">{joinOrNA(rec.diagnosis_id)}</td> 
                  <td className="p-1">{rec.surgical_history ?? "N/A"}</td>
<td className=" p-3 w-64">
  {joinOrNA(Array.isArray(rec.remarks) ? rec.remarks : rec.remarks ? [rec.remarks] : [])}
</td>    <td className="">
                {drugs.length > 0 ? (
                      <table className="min-w-full text-[14px] border border-gray-200 rounded-lg">
                        <thead>
                          <tr className="bg-green-100 text-green-800 font-semibold">
                            <th className="p-1 text-left">Drug Name</th>
                            <th className="p-1 text-left">Dose</th>
                            <th className="p-1 text-left">Frequency</th>
                          </tr>
                        </thead>
                        <tbody>
                          {drugs.map((drug, index) => (
                            <tr
                              key={index}
                              className="border-t hover:bg-green-50 transition"
                            >
                              <td className="p-1">{drug?.drug_name}</td>
                              <td className="p-1">{drug?.dose}</td>
                              <td className="p-1">{drug?.frequency}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <span className="text-gray-500 italic">No drugs</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}