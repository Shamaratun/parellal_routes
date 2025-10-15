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
    <div >
      <div >
        <main >
          {children}
          {modal}
        </main>
      </div>
    </div>
  );
}


