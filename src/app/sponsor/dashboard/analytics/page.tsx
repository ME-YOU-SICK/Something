"use client";

import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { GlowingCard } from "@/components/ui/glowing-card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye,
  DollarSign,
  Target,
  Award,
  Calendar,
  Download,
  Filter
} from "lucide-react";

export default function AnalyticsPage() {
  const userRole = "sponsor";
  const userName = "Michael Rodriguez";
  const userAvatar = undefined;

  const metrics = [
    {
      title: "Total Impressions",
      value: "125,000",
      change: "+12%",
      trend: "up",
      icon: <Eye className="h-4 w-4" />
    },
    {
      title: "Click-through Rate",
      value: "3.2%",
      change: "+0.5%",
      trend: "up",
      icon: <Target className="h-4 w-4" />
    },
    {
      title: "Engagement Rate",
      value: "8.7%",
      change: "+2.1%",
      trend: "up",
      icon: <Users className="h-4 w-4" />
    },
    {
      title: "ROI",
      value: "340%",
      change: "+45%",
      trend: "up",
      icon: <DollarSign className="h-4 w-4" />
    }
  ];

  const events = [
    {
      id: 1,
      name: "AI Innovation Hackathon 2024",
      date: "March 15-17, 2024",
      impressions: 45000,
      clicks: 1200,
      engagement: 8.2,
      cost: 5000,
      roi: 280
    },
    {
      id: 2,
      name: "Web3 Development Challenge",
      date: "March 22-24, 2024",
      impressions: 38000,
      clicks: 950,
      engagement: 7.8,
      cost: 3000,
      roi: 320
    },
    {
      id: 3,
      name: "Mobile App Sprint",
      date: "March 29-31, 2024",
      impressions: 42000,
      clicks: 1100,
      engagement: 9.1,
      cost: 4000,
      roi: 360
    }
  ];

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
        
        {/* Main Content */}
        <div className="flex flex-1">
          <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-6 flex-1 w-full h-full overflow-y-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-between items-center"
            >
              <div>
                <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                  Analytics
                </h1>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Track your sponsorship performance and ROI
                </p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                  <Filter className="h-4 w-4" />
                  Filter
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Download className="h-4 w-4" />
                  Export Data
                </button>
              </div>
            </motion.div>

            {/* Metrics Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {metrics.map((metric, index) => (
                <div key={index} className="">
                  <GlowingCard
                    icon={metric.icon}
                    title={metric.title}
                    description={metric.value}
                    className="h-full"
                  >
                    <div className="mt-4 flex items-center gap-2 text-sm">
                      <TrendingUp className={`h-4 w-4 ${
                        metric.trend === 'up' ? 'text-blue-600 dark:text-blue-400' : 'text-blue-600 dark:text-blue-400'
                      }`} />
                      <span className={`${
                        metric.trend === 'up' ? 'text-blue-600 dark:text-blue-400' : 'text-blue-600 dark:text-blue-400'
                      }`}>
                        {metric.change}
                      </span>
                    </div>
                  </GlowingCard>
                </div>
              ))}
            </motion.div>

            {/* Events Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                Event Performance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <div key={event.id} className="">
                    <GlowingCard
                      icon={<Calendar className="h-4 w-4" />}
                      title={event.name}
                      description={event.date}
                      className="h-full"
                    >
                      <div className="mt-4 space-y-3">
                        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                          <Eye className="h-4 w-4" />
                          {event.impressions.toLocaleString()} impressions
                        </div>
                        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                          <Target className="h-4 w-4" />
                          {event.clicks.toLocaleString()} clicks
                        </div>
                        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                          <Users className="h-4 w-4" />
                          {event.engagement}% engagement
                        </div>
                        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                          <DollarSign className="h-4 w-4" />
                          ${event.cost.toLocaleString()} cost
                        </div>
                        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                          <Award className="h-4 w-4" />
                          {event.roi}% ROI
                        </div>
                        <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2 mt-4">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${Math.min(event.roi / 4, 100)}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-xs text-neutral-600 dark:text-neutral-400">
                            Performance Score
                          </span>
                          <span className="text-sm font-medium text-neutral-900 dark:text-white">
                            {Math.round(event.roi / 4)}/100
                          </span>
                        </div>
                      </div>
                    </GlowingCard>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
