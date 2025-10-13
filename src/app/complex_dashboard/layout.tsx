import type { ReactNode } from "react";
import Sidebar from "@/app/sidebar";
import "../globals.css";

interface ComplexDashboardLayoutProps {
  children: ReactNode;
  notifications?: ReactNode;
  revinueMetrics?: ReactNode;
  userAnalytics?: ReactNode;
}

export default function ComplexDashboardLayout({
  children,
  notifications,
  revinueMetrics,
  userAnalytics,
}: ComplexDashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
   

   
      <div className="flex-1 grid grid-cols-[1fr_280px_320px] gap-6 p-6">
   
        <main className="bg-white rounded-lg shadow p-6">{children}</main>

      
        <aside className="bg-white rounded-lg shadow p-4">
          {revinueMetrics ?? <div className="text-gray-400">No revenue data</div>}
        </aside>

     
        <aside className="flex flex-col gap-6">
          <div className="bg-white rounded-lg shadow p-4 flex-1">
            {userAnalytics ?? <div className="text-gray-400">No analytics</div>}
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex-1">
            {notifications ?? <div className="text-gray-400">No notifications</div>}
          </div>
        </aside>
      </div>
    </div>
  );
}
