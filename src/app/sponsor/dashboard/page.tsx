"use client";

import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { DashboardContent } from "@/components/dashboard-content";
import { cn } from "@/lib/utils";

export default function SponsorDashboard() {
  const userRole = "sponsor";
  const userName = "Michael Rodriguez";
  const userAvatar = undefined;

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div
        className={cn(
          "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full h-screen border border-neutral-200 dark:border-neutral-700 overflow-hidden"
        )}
      >
        <DashboardSidebar 
          userRole={userRole} 
          userName={userName}
          userAvatar={userAvatar}
        />
        <DashboardContent userRole={userRole} />
      </div>
    </div>
  );
}
