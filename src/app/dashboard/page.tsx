"use client";

import { useState, useEffect } from "react";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { DashboardContent } from "@/components/dashboard-content";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const [userRole, setUserRole] = useState<"participant" | "organizer" | "recruiter" | "sponsor">("participant");
  const [userName, setUserName] = useState("John Doe");
  const [userAvatar, setUserAvatar] = useState<string | undefined>(undefined);

  // In a real app, this would come from authentication context or API
  useEffect(() => {
    // Simulate getting user data from URL params or auth context
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get('role') as "participant" | "organizer" | "recruiter" | "sponsor";
    if (role && ["participant", "organizer", "recruiter", "sponsor"].includes(role)) {
      setUserRole(role);
    }
  }, []);

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
        <DashboardContent userRole={userRole}>
          {/* Dashboard content will be rendered here */}
        </DashboardContent>
      </div>
    </div>
  );
}
