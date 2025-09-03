"use client";

import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { DashboardContent } from "@/components/dashboard-content";
import { cn } from "@/lib/utils";

export default function QuizzesPage() {
  const userRole = "participant";
  const userName = "John Doe";
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
        <DashboardContent userRole={userRole}>
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl border border-neutral-200 dark:border-neutral-600">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Quizzes
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Interactive quizzes and assessments will be implemented here.
            </p>
          </div>
        </DashboardContent>
      </div>
    </div>
  );
}
