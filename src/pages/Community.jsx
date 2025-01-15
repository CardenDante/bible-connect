// src/pages/Community.jsx
import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Users, MessageCircle, Book, Star, Search, Filter } from 'lucide-react';

function Community() {
  const groups = [
    {
      id: 1,
      name: "Morning Prayer Warriors",
      members: 156,
      description: "Daily morning Bible reading and prayer group",
      currentPlan: "Psalms of Peace",
      isJoined: true,
      activity: "Active"
    },
    {
      id: 2,
      name: "Bible Study Group",
      members: 89,
      description: "In-depth Bible study and discussion",
      currentPlan: "Gospel of John",
      isJoined: false,
      activity: "Very Active"
    },
    // Add more groups as needed
  ];

  const discussions = [
    {
      id: 1,
      title: "Understanding Psalms 23",
      author: "Sarah Johnson",
      replies: 24,
      lastActivity: "2 hours ago",
      tags: ["Psalms", "Discussion"]
    },
    {
      id: 2,
      title: "Prayer Request: Family",
      author: "Michael Chen",
      replies: 15,
      lastActivity: "5 hours ago",
      tags: ["Prayer", "Support"]
    },
    // Add more discussions as needed
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Community</h1>
          <p className="mt-2 text-sm text-gray-500">
            Connect with fellow believers and grow together in faith
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search groups or discussions..."
              className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Filter className="h-5 w-5 mr-2 text-gray-400" />
            Filters
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Groups Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium">Reading Groups</h2>
                  <button className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                    Create Group
                  </button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {groups.map((group) => (
                    <div key={group.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-900">{group.name}</h3>
                          <p className="mt-1 text-sm text-gray-500">{group.description}</p>
                          <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {group.members} members
                            </span>
                            <span className="flex items-center">
                              <Book className="h-4 w-4 mr-1" />
                              {group.currentPlan}
                            </span>
                          </div>
                        </div>
                        <button
                          className={`px-4 py-2 rounded-md text-sm font-medium ${
                            group.isJoined
                              ? 'bg-gray-100 text-gray-700'
                              : 'bg-indigo-600 text-white hover:bg-indigo-700'
                          }`}
                        >
                          {group.isJoined ? 'Joined' : 'Join Group'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Discussions */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium">Recent Discussions</h2>
                  <button className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                    New Discussion
                  </button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {discussions.map((discussion) => (
                    <div key={discussion.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">{discussion.title}</h3>
                          <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                            <span>Posted by {discussion.author}</span>
                            <span className="flex items-center">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              {discussion.replies} replies
                            </span>
                            <span>{discussion.lastActivity}</span>
                          </div>
                          <div className="mt-2 flex gap-2">
                            {discussion.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activity Feed */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h2 className="text-lg font-medium">Recent Activity</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Add activity items here */}
                  <p className="text-sm text-gray-500">Recent community activity will appear here.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Community;