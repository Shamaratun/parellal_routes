"use client";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Sidebar</h2>
      <ul className="space-y-4">
        <li>
          <Link href="/" className="block py-2 px-4 hover:bg-gray-700 rounded">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/home" className="block py-2 px-4 hover:bg-gray-700 rounded">
            Home
          </Link>
        </li>
        {/* <li>
          <Link href="/sessionList" className="block py-2 px-4 hover:bg-gray-700 rounded">
            Session List
          </Link>
        </li>
        <li>
          <Link href="/reports" className="block py-2 px-4 hover:bg-gray-700 rounded">
            Reports
          </Link>
        </li> */}
         <li>
          <Link href="/complex_dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded">
            Complex Dashboard
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
