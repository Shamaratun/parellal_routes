import type { ReactNode } from "react";

import "../globals.css";
;

interface DashboardLayoutProps {
  children: ReactNode;
  modal?: ReactNode;
}

export default function DashboardLayout({
  children, modal,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      <div className="flex-1 grid grid-cols-[1fr_280px_320px] gap-6 p-6">
        <main className="bg-white rounded-lg shadow p-6">
          {children}
          {modal}
        </main>
      </div>
    </div>
  );
}


