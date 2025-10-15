
"use client";

import React from "react";

type Investigations = Record<string, string | number | null>;

interface PreOp {  
  id?: number | string;
  investigations?: Investigations;
  [key: string]: any;
} 

interface ProfileData {
  pre_ops_data?: PreOp[] | null;
}

interface Props {
  profile: ProfileData;
}

export default function InvestigationComponent({ profile }: Props) {
  const preOps = profile?.pre_ops_data;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg overflow-x-auto">
  <h2 className="font-bold text-yellow-600 text-2xl mb-6"
>🔬 Investigations</h2>

      {!preOps || !Array.isArray(preOps) || preOps.length === 0 ? (
        <p className="text-sm text-gray-500">No investigation records.</p>
      ) : (
        preOps.flatMap((rec) =>
          rec.investigations && Object.keys(rec.investigations).length > 0 ? (
            <div key={rec.id} className="min-w-full table-auto border-collapse">
              <table className="w-full text-sm">
                <tbody>               
                  <tr className="border-t align-top">
                    <td className="p-2 font-medium">Investigations</td>
                    <td className="p-2">
                      {rec.investigations && Object.keys(rec.investigations).length ? (
                        <ul className="list-disc ml-5">
                          {Object.entries(rec.investigations).map(([k, v]) => (
                            <li key={k} className="text-sm">
                              {k}: {String(v)}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        "N/A"
                      )}
                    </td>
                  </tr>

                
                </tbody>
              </table>
            </div>
          ) : (
            <div
              key={rec.id ?? Math.random()}
              className="text-center text-gray-500 p-4 bg-yellow-50 rounded-lg"
            >
              No investigations found for this record.
            </div>
          )
        )
      )}
    </div>
  );
}
