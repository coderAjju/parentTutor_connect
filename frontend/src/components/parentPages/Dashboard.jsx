import React from "react";
import { Inbox, Calendar, User, Menu } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const ParentDashboard = () => {
  return (
    <div className="flex min-h-screen mt-24">
      {/* Sidebar */}
      <aside className="w-64  shadow-md p-4">
        <h2 className="text-xl font-bold mb-6">Parent Dashboard</h2>
        <ul>
          <Link to={"/parent/dashboard/profile"}>
            <li className="p-2 hover:bg-gray-600 rounded">Profile</li>
          </Link>
          <Link to={"/parent/dashboard/appointments"}>
            <li className="p-2 hover:bg-gray-600 rounded">Appointments</li>
          </Link>
          <Link to={"/parent/dashboard/messages"}>
            <li className="p-2 hover:bg-gray-600 rounded">Messages</li>
          </Link>
          <li className="p-2 hover:bg-gray-600 rounded">Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default ParentDashboard;
