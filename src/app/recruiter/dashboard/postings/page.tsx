"use client";

import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { GlowingCard } from "@/components/ui/glowing-card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users,
  Plus,
  Filter,
  Search,
  Edit,
  Eye,
  DollarSign,
  Building
} from "lucide-react";

export default function PostingsPage() {
  const userRole = "recruiter";
  const userName = "Alex Chen";
  const userAvatar = undefined;

  const jobPostings = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      applicants: 45,
      status: "active",
      postedAt: "2 days ago",
      skills: ["React", "TypeScript", "Node.js"]
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "Remote",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      applicants: 32,
      status: "active",
      postedAt: "1 week ago",
      skills: ["React", "Python", "PostgreSQL"]
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "InnovateLab",
      location: "New York, NY",
      type: "Contract",
      salary: "$80 - $100/hour",
      applicants: 28,
      status: "paused",
      postedAt: "2 weeks ago",
      skills: ["Vue.js", "CSS", "JavaScript"]
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
                  Job Postings
                </h1>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Manage your job postings and track applications
                </p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                  <Filter className="h-4 w-4" />
                  Filter
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Plus className="h-4 w-4" />
                  Create Posting
                </button>
              </div>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search job postings..."
                className="w-full pl-10 pr-4 py-3 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>

            {/* Job Postings Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {jobPostings.map((job) => (
                <div key={job.id} className="">
                  <GlowingCard
                    icon={<Briefcase className="h-4 w-4" />}
                    title={job.title}
                    description={job.company}
                    className="h-full"
                  >
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <DollarSign className="h-4 w-4" />
                        {job.salary}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <Users className="h-4 w-4" />
                        {job.applicants} applicants
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <Clock className="h-4 w-4" />
                        Posted {job.postedAt}
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          Required Skills:
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {job.skills.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          job.status === 'active' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                          'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                        }`}>
                          {job.status}
                        </span>
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          View Applicants
                        </button>
                        <button className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </GlowingCard>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
