

export  default function RevinueMetrics() {
      const reports = [
    { id: 1, title: "Depression Assessment", progress: "85%" },
    { id: 2, title: "Anxiety Report", progress: "70%" },
    { id: 3, title: "Sleep Quality", progress: "90%" },
  ];
  return (
    <div>
     RevinueMetrics
     <div>
      <h1 className="text-2xl font-bold mb-4">📑 Mental Health Reports</h1>
      <div className="space-y-4">
        {reports.map((r) => (
          <div
            key={r.id}
            className="bg-gray-50 p-4 rounded shadow-sm flex justify-between"
          >
            <span>{r.title}</span>
            <span className="font-semibold">{r.progress}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}