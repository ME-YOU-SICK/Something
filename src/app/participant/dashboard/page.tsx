"use client";

import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { GlowingCard } from "@/components/ui/glowing-card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useGitHub } from "@/hooks/use-github";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Trophy, 
  Star,
  Code,
  Target,
  BookOpen,
  MessageCircle,
  TrendingUp,
  Award,
  Activity,
  Zap,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  ArrowRight,
  Github,
  Brain,
  Shield,
  Smartphone,
  Cloud,
  Gamepad2,
  Palette,
  Database
} from "lucide-react";

export default function ParticipantDashboard() {
  const userRole = "participant";
  const userName = "John Doe";
  const userAvatar = undefined;

  const [githubUsername, setGithubUsername] = useState("");
  const { repos, loading: githubLoading } = useGitHub();

  // Load saved GitHub username
  useEffect(() => {
    const savedUsername = localStorage.getItem('githubUsername');
    if (savedUsername) {
      setGithubUsername(savedUsername);
    }
  }, []);

  // Mock data for dashboard stats
  const dashboardStats = {
    hackathonsParticipated: 8,
    hackathonsWon: 3,
    totalProjects: 12,
    teamCollaborations: 25,
    skillsLearned: 15,
    githubRepos: repos.length,
    currentStreak: 7,
    totalPoints: 2450
  };

  const recentActivity = [
    {
      id: 1,
      type: "hackathon",
      title: "AI Innovation Hackathon 2024",
      description: "Won 1st place with your team",
      date: "2 days ago",
      icon: <Trophy className="h-4 w-4" />,
      color: "text-blue-600"
    },
    {
      id: 2,
      type: "project",
      title: "Updated React Portfolio",
      description: "Added new projects to your GitHub",
      date: "3 days ago",
      icon: <Code className="h-4 w-4" />,
      color: "text-blue-600"
    },
    {
      id: 3,
      type: "skill",
      title: "Completed TypeScript Course",
      description: "Advanced TypeScript patterns",
      date: "5 days ago",
      icon: <Target className="h-4 w-4" />,
      color: "text-blue-600"
    },
    {
      id: 4,
      type: "team",
      title: "Joined Mobile App Team",
      description: "Working on React Native project",
      date: "1 week ago",
      icon: <Users className="h-4 w-4" />,
      color: "text-blue-600"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Web3 Development Challenge",
      date: "March 22-24, 2024",
      location: "Virtual",
      participants: 200,
      prize: "$15,000",
      category: "Blockchain"
    },
    {
      id: 2,
      title: "Mobile App Sprint",
      date: "March 29-31, 2024",
      location: "New York, NY",
      participants: 100,
      prize: "$8,000",
      category: "Mobile"
    },
    {
      id: 3,
      title: "Cloud Infrastructure Hackathon",
      date: "April 5-7, 2024",
      location: "Seattle, WA",
      participants: 120,
      prize: "$12,000",
      category: "Cloud Computing"
    }
  ];

  const topSkills = [
    { name: "React", level: 85, category: "Frontend" },
    { name: "TypeScript", level: 78, category: "Frontend" },
    { name: "Node.js", level: 72, category: "Backend" },
    { name: "Python", level: 68, category: "Backend" },
    { name: "Docker", level: 65, category: "DevOps" }
  ];

  const quickActions = [
    {
      title: "Join Event",
      description: "Find and join hackathons",
      icon: <Calendar className="h-6 w-6" />,
      href: "/participant/dashboard/events",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "Create Team",
      description: "Build your dream team",
      icon: <Users className="h-6 w-6" />,
      href: "/participant/dashboard/teamify",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "Track Skills",
      description: "Monitor your progress",
      icon: <Target className="h-6 w-6" />,
      href: "/participant/dashboard/skills",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "Practice Coding",
      description: "Improve your skills",
      icon: <Code className="h-6 w-6" />,
      href: "/participant/dashboard/quizzes",
      color: "bg-blue-600 hover:bg-blue-700"
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
            {/* Welcome Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-between items-center"
            >
              <div>
                <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                  Welcome back, {userName}! 👋
                </h1>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Ready to build something amazing today?
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <Activity className="h-4 w-4" />
                <span>7 day streak</span>
              </div>
            </motion.div>

            {/* Stats Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <GlowingCard className="h-full">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                    <Trophy className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                      {dashboardStats.hackathonsWon}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Hackathons Won
                    </p>
                  </div>
                </div>
              </GlowingCard>

              <GlowingCard className="h-full">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                    <Code className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                      {dashboardStats.totalProjects}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Projects Built
                    </p>
                  </div>
                </div>
              </GlowingCard>

              <GlowingCard className="h-full">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                      {dashboardStats.teamCollaborations}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Team Collaborations
                    </p>
                  </div>
                </div>
              </GlowingCard>

              <GlowingCard className="h-full">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                      {dashboardStats.totalPoints}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Total Points
                    </p>
                  </div>
                </div>
              </GlowingCard>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <Link key={index} href={action.href}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <GlowingCard className="h-full">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 ${action.color} rounded-lg text-white transition-colors`}>
                            {action.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {action.title}
                            </h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                              {action.description}
                            </p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                        </div>
                      </GlowingCard>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    Recent Activity
                  </h2>
                  <Link href="/participant/dashboard/profile" className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    View all
                  </Link>
                </div>
                <GlowingCard className="h-full">
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                      >
                        <div className={`p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg ${activity.color}`}>
                          {activity.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-neutral-900 dark:text-white">
                            {activity.title}
                          </h4>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {activity.description}
                          </p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                            {activity.date}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Upcoming Events */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    Upcoming Events
                  </h2>
                  <Link href="/participant/dashboard/events" className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    View all
                  </Link>
                </div>
                <GlowingCard className="h-full">
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-neutral-900 dark:text-white">
                            {event.title}
                          </h4>
                          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                            {event.category}
                          </span>
                        </div>
                        <div className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            {event.participants} participants
                          </div>
                          <div className="flex items-center gap-2">
                            <Trophy className="h-4 w-4" />
                            {event.prize} prize pool
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </GlowingCard>
              </motion.div>
            </div>

            {/* Top Skills & GitHub Projects */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    Top Skills
                  </h2>
                  <Link href="/participant/dashboard/skills" className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    View all
                  </Link>
                </div>
                <GlowingCard className="h-full">
                  <div className="space-y-4">
                    {topSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 + index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-neutral-900 dark:text-white">
                              {skill.name}
                            </span>
                            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs rounded-full">
                              {skill.category}
                            </span>
                          </div>
                          <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-600 to-blue-800 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </GlowingCard>
              </motion.div>

              {/* GitHub Projects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    GitHub Projects
                  </h2>
                  <Link href="/participant/dashboard/profile" className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    View all
                  </Link>
                </div>
                <GlowingCard className="h-full">
                  {githubUsername ? (
                    <div className="space-y-4">
                      {githubLoading ? (
                        Array.from({ length: 3 }).map((_, index) => (
                          <div key={index} className="animate-pulse">
                            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded mb-2"></div>
                            <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded mb-2"></div>
                            <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
                          </div>
                        ))
                      ) : repos.length > 0 ? (
                        repos.slice(0, 3).map((repo, index) => (
                          <motion.div
                            key={repo.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                            className="p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-neutral-900 dark:text-white">
                                {repo.name}
                              </h4>
                              <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                              {repo.description || "No description available"}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
                              <div className="flex items-center gap-1">
                                <Star className="h-3 w-3" />
                                {repo.stargazers_count}
                              </div>
                              <div className="flex items-center gap-1">
                                <Github className="h-3 w-3" />
                                {repo.forks_count}
                              </div>
                              {repo.language && (
                                <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full">
                                  {repo.language}
                                </span>
                              )}
                            </div>
                          </motion.div>
                        ))
                      ) : (
                        <div className="text-center py-8">
                          <Github className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                          <p className="text-neutral-600 dark:text-neutral-400">
                            No public repositories found
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Github className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                      <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                        Connect GitHub
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                        Add your GitHub username to showcase your projects
                      </p>
                      <Link
                        href="/participant/dashboard/profile"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        <Github className="h-4 w-4" />
                        Connect GitHub
                      </Link>
                    </div>
                  )}
                </GlowingCard>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
