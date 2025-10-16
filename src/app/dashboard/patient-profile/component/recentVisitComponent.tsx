"use client";

import { useEffect, useState } from "react";


import { Visit } from "../type";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";



const RecentVisitDummy = [
  {
    id: 1,
    date: "2025-10-08",
    time: "10:30 AM",
    department: "Cardiology",
    doctor: "Dr. A. Rahman",
    reason: "Chest pain checkup",
    status: "Completed",
  },
  {
    id: 2,
    date: "2025-10-06",
    time: "2:15 PM",
    department: "Neurology",
    doctor: "Dr. M. Ahsan",
    reason: "Migraine follow-up",
    status: "Pending",
  },
  {
    id: 3,
    date: "2025-10-04",
    time: "11:00 AM",
    department: "Orthopedics",
    doctor: "Dr. K. Hossain",
    reason: "Knee joint pain",
    status: "Cancelled",
  },
  {
    id: 4,
    date: "2025-10-01",
    time: "9:45 AM",
    department: "Dermatology",
    doctor: "Dr. S. Chowdhury",
    reason: "Skin allergy",
    status: "Completed",
  },
  {
    id: 5,
    date: "2025-09-29",
    time: "4:30 PM",
    department: "ENT",
    doctor: "Dr. L. Ahmed",
    reason: "Ear infection",
    status: "Completed",
  },
];
export default function RecentVisitComponent() {
  const [visits, setVisits] = useState<Visit[]>(RecentVisitDummy);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVisits() {
      try {
        const res = await fetch("/api/recent-visits");
        const data = await res.json();
        setVisits(data);
      } catch (error) {
        console.error("Error fetching visits:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVisits();
  }, []);

  return (
    <Card className="rounded-2xl shadow-sm border border-gray-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-800">
          <i className="fa-regular fa-calendar text-blue-600"></i>
          Recent Visits
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="p-4 text-gray-500">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b text-left text-gray-600">
                  <th className="py-3 px-4">Date & Time</th>
                  <th className="py-3 px-4">Department</th>
                  <th className="py-3 px-4">Doctor</th>
                  <th className="py-3 px-4">Reason for Visit</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {visits.map((visit) => (
                  <tr
                    key={visit.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4">
                      <div>{visit.date}</div>
                      <div className="text-sm text-gray-400">{visit.time}</div>
                    </td>
                    <td className="py-3 px-4">{visit.department}</td>
                    <td className="py-3 px-4">{visit.doctor}</td>
                    <td className="py-3 px-4">{visit.reason}</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                        {visit.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}