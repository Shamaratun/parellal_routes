"use client";

import { useState } from "react";
export  default function UserAnalytics() {
     const [sessions] = useState([
        { id: 1, title: "Mindfulness Session", date: "2025-10-13", status: "Completed" },
        { id: 2, title: "Cognitive Therapy", date: "2025-10-10", status: "Upcoming" },
        { id: 3, title: "Stress Management", date: "2025-10-05", status: "Completed" },
      ]);
  return (
    <div>
     UserAnalytics
     <div>
      <h1 className="text-2xl font-bold mb-4">🧠 Session List</h1>
      <table className="w-full border-collapse border border-gray-300 rounded">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border border-gray-300 p-2">Session</th>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((s) => (
            <tr key={s.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2">{s.title}</td>
              <td className="border border-gray-300 p-2">{s.date}</td>
              <td className="border border-gray-300 p-2">{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}