"use client";

import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { GlowingCard } from "@/components/ui/glowing-card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  MessageCircle, 
  Search, 
  Plus,
  Send,
  Paperclip,
  Smile,
  MoreVertical,
  Online,
  Clock,
  Check,
  CheckCheck,
  User,
  Users,
  Building,
  Award
} from "lucide-react";

export default function ParticipantMessagesPage() {
  const userRole = "participant";
  const userName = "John Doe";
  const userAvatar = undefined;
  
  const [selectedConversationId, setSelectedConversationId] = useState(1);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState(chatMessages);

  const conversations = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "participant",
      lastMessage: "Hey! Are you still interested in joining our team for the AI hackathon?",
      timestamp: "2 min ago",
      unread: 2,
      online: true,
      avatar: "SC"
    },
    {
      id: 2,
      name: "TechCorp Recruiter",
      role: "recruiter",
      lastMessage: "We'd love to schedule an interview with you. Are you available this week?",
      timestamp: "1 hour ago",
      unread: 0,
      online: false,
      avatar: "TC"
    },
    {
      id: 3,
      name: "AI Innovation Team",
      role: "team",
      lastMessage: "Great progress on the prototype! Let's meet tomorrow to discuss the presentation.",
      timestamp: "3 hours ago",
      unread: 1,
      online: true,
      avatar: "AI"
    },
    {
      id: 4,
      name: "Hackathon Organizer",
      role: "organizer",
      lastMessage: "Reminder: The final submission deadline is tomorrow at 6 PM.",
      timestamp: "1 day ago",
      unread: 0,
      online: false,
      avatar: "HO"
    }
  ];

  const chatMessages = {
    1: [
      {
        id: 1,
        sender: "Sarah Chen",
        content: "Hey John! I saw your profile and I'm really impressed with your React skills.",
        timestamp: "10:30 AM",
        isOwn: false
      },
      {
        id: 2,
        sender: "You",
        content: "Thanks Sarah! I checked out your projects too - that ML model you built is amazing!",
        timestamp: "10:32 AM",
        isOwn: true
      },
      {
        id: 3,
        sender: "Sarah Chen",
        content: "Are you still interested in joining our team for the AI hackathon? We need a frontend developer.",
        timestamp: "10:35 AM",
        isOwn: false
      },
      {
        id: 4,
        sender: "You",
        content: "Absolutely! I'd love to be part of the team. When does it start?",
        timestamp: "10:37 AM",
        isOwn: true
      },
      {
        id: 5,
        sender: "Sarah Chen",
        content: "Hey! Are you still interested in joining our team for the AI hackathon?",
        timestamp: "2 min ago",
        isOwn: false
      }
    ],
    2: [
      {
        id: 1,
        sender: "TechCorp Recruiter",
        content: "Hi John! We'd love to schedule an interview with you. Are you available this week?",
        timestamp: "1 hour ago",
        isOwn: false
      },
      {
        id: 2,
        sender: "You",
        content: "Yes, I'm available! What time works best for you?",
        timestamp: "1 hour ago",
        isOwn: true
      }
    ],
    3: [
      {
        id: 1,
        sender: "AI Innovation Team",
        content: "Great progress on the prototype! Let's meet tomorrow to discuss the presentation.",
        timestamp: "3 hours ago",
        isOwn: false
      },
      {
        id: 2,
        sender: "You",
        content: "Sounds good! I'll prepare the demo slides.",
        timestamp: "3 hours ago",
        isOwn: true
      }
    ],
    4: [
      {
        id: 1,
        sender: "Hackathon Organizer",
        content: "Reminder: The final submission deadline is tomorrow at 6 PM.",
        timestamp: "1 day ago",
        isOwn: false
      }
    ]
  };

  const currentChat = conversations.find(conv => conv.id === selectedConversationId) || conversations[0];
  const currentMessages = messages[selectedConversationId as keyof typeof messages] || messages[1];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: Date.now(),
        sender: "You",
        content: newMessage.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: true
      };

      setMessages(prev => ({
        ...prev,
        [selectedConversationId]: [...(prev[selectedConversationId as keyof typeof prev] || []), newMsg]
      }));

      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

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
          <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-6 flex-1 w-full h-full overflow-hidden">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-between items-center"
            >
              <div>
                <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                  Messages
                </h1>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Connect with participants, organizers, recruiters, and sponsors
                </p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Search className="h-4 w-4" />
                  Search
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Plus className="h-4 w-4" />
                  New Chat
                </button>
              </div>
            </motion.div>

            {/* Messages Layout */}
            <div className="flex flex-1 gap-6 overflow-hidden">
              {/* Conversations List */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-80 flex-shrink-0 flex flex-col"
              >
                <div className="flex-1 overflow-y-auto scrollbar-hide space-y-3 pr-2">
                  {conversations.map((conversation) => (
                    <div key={conversation.id} className="">
                      <GlowingCard
                        icon={<MessageCircle className="h-4 w-4" />}
                        title={conversation.name}
                        description={conversation.lastMessage}
                        className={`cursor-pointer transition-all duration-200 hover:scale-[1.02] ${
                          conversation.id === selectedConversationId ? 'ring-2 ring-blue-500' : ''
                        }`}
                        onClick={() => setSelectedConversationId(conversation.id)}
                      >
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-xs">
                                {conversation.avatar}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              {conversation.online && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              )}
                              <span className="text-xs text-neutral-600 dark:text-neutral-400">
                                {conversation.role}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-neutral-500 dark:text-neutral-400">
                              {conversation.timestamp}
                            </span>
                            {conversation.unread > 0 && (
                              <div className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">
                                {conversation.unread}
                              </div>
                            )}
                          </div>
                        </div>
                      </GlowingCard>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Chat Area */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 flex flex-col min-h-0"
              >
                <div className="flex-1 flex flex-col bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
                  {/* Chat Header */}
                  <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">SC</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 dark:text-white">
                          {currentChat.name}
                        </h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          {currentChat.role} • {currentChat.online ? 'Online' : 'Offline'}
                        </p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 p-4 space-y-4 overflow-y-auto scrollbar-hide">
                    {currentMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.isOwn
                              ? 'bg-blue-600 text-white'
                              : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <span className={`text-xs ${
                              message.isOwn ? 'text-blue-100' : 'text-neutral-500 dark:text-neutral-400'
                            }`}>
                              {message.timestamp}
                            </span>
                            {message.isOwn && (
                              <CheckCheck className="h-3 w-3 text-blue-100" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors">
                        <Paperclip className="h-4 w-4" />
                      </button>
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="Type a message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={handleKeyPress}
                          className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400"
                        />
                      </div>
                      <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors">
                        <Smile className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={handleSendMessage}
                        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
