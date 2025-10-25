"use client";

import React from "react";
import { SurgicalData } from "../type";

interface ProfileData {
  surgical_data?: SurgicalData[] | null;
}

interface Props {
  profile: ProfileData;
}

const fmtDate = (iso?: string) =>
  iso ? new Date(iso).toLocaleDateString() : "";

export default function SurgicalComponent({ profile }: Props) {
  const surgicals = profile?.surgical_data ?? [];

  if (surgicals.length === 0) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-blue-100/60 rounded-3xl shadow-lg border border-blue-200/50 p-10 text-center text-gray-500 italic">
        No surgical information available.
      </div>
    );
  }

  const headers = [
    "Operation Name",
    "Date",
    "Procedure",
    "Challenges",
    "Complications",
    "Anesthesia",
    "Recovery",
    "Notes",
    "Remarks",
  ];

  return (
    <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-50 via-white to-blue-100/70 rounded-3xl shadow-2xl border border-blue-100/60 backdrop-blur-lg overflow-x-auto">
      <table className="min-w-full text-sm md:text-base border-separate border-spacing-y-2">
        <thead className="hidden sm:table-header-group bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900 font-light">
          <tr>
            {headers.map((head) => (
              <th key={head} className="px-4 py-3 text-left">
                {head}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {surgicals.map((rec, idx) => {
            const values = [
              rec.operation_name,
              fmtDate(rec.operation_date),
              rec.procedure_notes,
              rec.challenges_during_surgery,
              rec.complications,
              rec.nature_of_anesthesia,
              rec.post_operative_recovery,
              rec.post_operative_recovery_notes,
              rec.remarks,
            ];

            // Check if all fields are empty or undefined
            const hasData = values.some((val) => val && val.trim() !== "");

            if (!hasData) {
              return (
                <tr
                  key={rec.id ?? idx}
                  className="bg-white/80 sm:bg-white text-center hover:bg-blue-50 transition-all duration-200 shadow-sm rounded-xl"
                >
                  <td
                    colSpan={headers.length}
                    className="px-4 py-3 text-gray-500 italic"
                  >
                    No data found
                  </td>
                </tr>
              );
            }

            return (
              <tr
                key={rec.id ?? idx}
                className="bg-white/80 sm:bg-white text-center hover:bg-blue-50 transition-all duration-200 shadow-sm rounded-xl"
              >
                {values.map((value, i) => (
                  <td
                    key={i}
                    className="block sm:table-cell px-4 py-3 text-gray-700 sm:align-top"
                  >
                    <div className="sm:hidden font-thin text-blue-800 mb-1">
                      {headers[i]}
                    </div>
                    {value}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
