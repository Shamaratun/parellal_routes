"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SurgicalData } from "../type";
import { useEffect, useState } from "react";
import { getProfileAction } from "../profileAction";




export default function SurgicalComponent() {
  const [postOps, setPostOps] = useState<SurgicalData[]>([]);

  // useEffect(() => {
  //   async function fetchPostOps() {
  //     try {
  //       const res = await getProfileAction();
  //       setPostOps(res.data?.post_ops_data ?? []);
  //     } catch (err) {
  //       console.error("Failed to fetch surgical data:", err);
  //       setPostOps([]);
  //     }
  //   }

  //   fetchPostOps();
  // }, [patient_id]);

  return (
    <Card className="mt-4">
      <CardContent>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-4">Surgical / Post-Op Data</h3>

          {postOps.length === 0 ? (
            <p className="text-gray-500 text-sm">N/A</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="text-left p-2 border-b">ID</th>
                    <th className="text-left p-2 border-b">File</th>
                    <th className="text-left p-2 border-b">Remarks</th>
                    <th className="text-left p-2 border-b">Doctor ID</th>
                    <th className="text-left p-2 border-b">Inserted By</th>
                    <th className="text-left p-2 border-b">Active</th>
                    <th className="text-left p-2 border-b">Updated By</th>
                    <th className="text-left p-2 border-b">Patient ID</th>
                    <th className="text-left p-2 border-b">Hospital ID</th>
                    <th className="text-left p-2 border-b">Insert Date</th>
                    <th className="text-left p-2 border-b">Update Date</th>
                    <th className="text-left p-2 border-b">Admission ID</th>
                    <th className="text-left p-2 border-b">Document Type</th>
                    <th className="text-left p-2 border-b">View File</th>
                    <th className="text-left p-2 border-b">Datetime</th>
                  </tr>
                </thead>
                <tbody>
                  {postOps.map((item: SurgicalData) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="p-2 border-b">{item.id || "N/A"}</td>
                      <td className="p-2 border-b">
                        {item.file_name || "N/A"} ({item.file_type || "N/A"})
                      </td>
                      <td className="p-2 border-b">{item.remarks || "N/A"}</td>
                      <td className="p-2 border-b">{item.doctor_id || "N/A"}</td>
                      <td className="p-2 border-b">{item.insert_by || "N/A"}</td>
                      <td className="p-2 border-b">{item.is_active}</td>
                      <td className="p-2 border-b">{item.update_by || "N/A"}</td>
                      <td className="p-2 border-b">{item.patient_id || "N/A"}</td>
                      <td className="p-2 border-b">{item.hospital_id || "N/A"}</td>
                      <td className="p-2 border-b">{item.insert_date || "N/A"}</td>
                      <td className="p-2 border-b">{item.update_date || "N/A"}</td>
                      <td className="p-2 border-b">{item.admission_id || "N/A"}</td>
                      <td className="p-2 border-b">{item.document_type || "N/A"}</td>
                      <td className="p-2 border-b">
                        {item.drive_file_id ? (
                          <a
                            href={`https://drive.google.com/file/d/${item.drive_file_id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                          >
                            Open File
                          </a>
                        ) : (
                          "N/A"
                        )}
                      </td>
                      <td className="p-2 border-b">
                        {item.dt ? new Date(item.dt).toLocaleString() : "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}