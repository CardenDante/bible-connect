// src/pages/admin/Announcements.jsx
import React, { useState } from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { 
  PlusCircle, 
  Search, 
  Filter, 
  MoreVertical, 
  Calendar, 
  Clock, 
  AlertCircle, 
  Bell,
  Users,
  Tag,
  ChevronDown
} from 'lucide-react';

function Announcements() {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "New Reading Plan Available",
      content: "Join our 30-day journey through Psalms starting next week!",
      status: "published",
      author: "Sarah Johnson",
      publishDate: "2024-01-15",
      category: "Reading Plans",
      priority: "high",
      views: 245,
      engagement: "85%"
    },
    {
      id: 2,
      title: "System Maintenance Notice",
      content: "Scheduled maintenance on January 20th from 2-4 AM EST",
      status: "scheduled",
      author: "Michael Chen",
      publishDate: "2024-01-20",
      category: "System Updates",
      priority: "medium",
      views: 156,
      engagement: "92%"
    }
  ]);

  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    category: 'all'
  });

  const categories = [
    'Reading Plans',
    'System Updates',
    'Community',
    'Events',
    'Features'
  ];

  const [showFilters, setShowFilters] = useState(false);

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Announcements</h1>
            <p className="mt-2 text-sm text-gray-700">
              Create and manage announcements for your community
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-3">
            <button className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <Clock className="h-5 w-5 mr-2" />
              Schedule
            </button>
            <button className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
              <PlusCircle className="h-5 w-5 mr-2" />
              New Announcement
            </button>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mt-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search announcements..."
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <Filter className="h-5 w-5 mr-2 text-gray-400" />
              Filters
              <ChevronDown className={`ml-2 h-5 w-5 transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <Card className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={filters.status}
                    onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                  >
                    <option value="all">All Status</option>
                    <option value="published">Published</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Priority</label>
                  <select
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={filters.priority}
                    onChange={(e) => setFilters({ ...filters, priority: e.target.value })}
                  >
                    <option value="all">All Priorities</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <select
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  >
                    <option value="all">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Announcements Grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row justify-between items-start space-y-0 pb-2">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-900">{announcement.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      announcement.status === 'published' ? 'bg-green-100 text-green-800' :
                      announcement.status === 'scheduled' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {announcement.status}
                    </span>
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      announcement.priority === 'high' ? 'bg-red-100 text-red-800' :
                      announcement.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {announcement.priority}
                    </span>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                      {announcement.category}
                    </span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-500">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                  {announcement.content}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {announcement.publishDate}
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {announcement.views} views
                    </span>
                    <span className="flex items-center">
                      <Bell className="h-4 w-4 mr-1" />
                      {announcement.engagement}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {announcements.length === 0 && (
          <Card className="mt-6">
            <CardContent className="py-12">
              <div className="text-center">
                <AlertCircle className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No announcements</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Get started by creating a new announcement.
                </p>
                <div className="mt-6">
                  <button className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                    <PlusCircle className="h-5 w-5 mr-2" />
                    New Announcement
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Pagination */}
        {announcements.length > 0 && (
          <div className="mt-6 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
              <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Previous
              </button>
              <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                  <span className="font-medium">20</span> results
                </p>
              </div>
              <div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                  <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    Previous
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    1
                  </button>
                  <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default Announcements;