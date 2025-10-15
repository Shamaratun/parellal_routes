"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter(); 

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🏠 Dashboard Page</h1>
      <p>This is your dashboard page.</p>

      <button
        onClick={() => router.push("/dashboard/patientProfilePage")}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Open Modal
      </button>

    </div>
  );
}
