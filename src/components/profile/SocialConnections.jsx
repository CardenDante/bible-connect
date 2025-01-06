// src/components/profile/SocialConnections.jsx
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Stack } from '@/components/layout/Stack';
import { Users, Search, UserPlus, MessageCircle, BookOpen } from 'lucide-react';

export const SocialConnections = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample data - In production, this would come from your backend
  const [friends] = useState([
    { 
      id: 1, 
      name: 'Sarah Johnson', 
      status: 'online',
      currentBook: 'Psalms',
      readingStreak: 15,
      lastActive: 'Just now'
    },
    { 
      id: 2, 
      name: 'Michael Chen', 
      status: 'reading',
      currentBook: 'Proverbs',
      readingStreak: 7,
      lastActive: '5m ago'
    },
    { 
      id: 3, 
      name: 'Emma Davis', 
      status: 'offline',
      currentBook: 'Genesis',
      readingStreak: 21,
      lastActive: '2h ago'
    }
  ]);

  // Sample reading group data
  const [readingGroups] = useState([
    {
      id: 1,
      name: 'Morning Prayer Warriors',
      members: 12,
      currentPlan: 'Psalms of Peace',
      active: true
    },
    {
      id: 2,
      name: 'Bible Study Group',
      members: 8,
      currentPlan: 'Gospel of John',
      active: true
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'online':
        return 'success';
      case 'reading':
        return 'info';
      default:
        return 'default';
    }
  };

  return (
    <div className="space-y-6">
      {/* Reading Partners */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-indigo-500 mr-2" />
              <h3 className="text-lg font-medium">Reading Partners</h3>
            </div>
            <Button variant="secondary" size="sm">
              <UserPlus className="h-4 w-4 mr-2" />
              Add Friend
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search reading partners..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Friends List */}
            <div className="divide-y">
              {friends.map(friend => (
                <div key={friend.id} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-600">
                            {friend.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white ${
                          friend.status === 'online' ? 'bg-green-400' :
                          friend.status === 'reading' ? 'bg-blue-400' : 'bg-gray-400'
                        }`} />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{friend.name}</h4>
                        <p className="text-xs text-gray-500">
                          Reading: {friend.currentBook} • {friend.readingStreak} day streak
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={getStatusColor(friend.status)}>
                        {friend.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reading Groups */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BookOpen className="h-5 w-5 text-indigo-500 mr-2" />
              <h3 className="text-lg font-medium">Reading Groups</h3>
            </div>
            <Button variant="secondary" size="sm">
              Create Group
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Stack spacing={4}>
            {readingGroups.map(group => (
              <div key={group.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{group.name}</h4>
                  <Badge variant={group.active ? 'success' : 'default'}>
                    {group.active ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500 mb-3">
                  Current Plan: {group.currentPlan}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {group.members} members
                  </span>
                  <Button variant="outline" size="sm">
                    View Group
                  </Button>
                </div>
              </div>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};