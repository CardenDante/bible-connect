// src/pages/Dashboard.jsx
import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { Stack } from '@/components/layout/Stack';
import { Section } from '@/components/layout/Section';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Book, Trophy, Bell, MessageCircle, ChevronRight, Calendar, CheckCircle } from 'lucide-react';
import { LiveChat } from '@/components/chat/LiveChat';
import { LiveLeaderboard } from '@/components/leaderboard/LiveLeaderboard';

export const Dashboard = () => {
  // Sample data (same as before)
  const announcements = [
    {
      id: 1,
      title: 'New Reading Plan Available',
      content: 'Join our 30-day journey through Psalms starting next week!',
      date: '2024-01-05'
    },
    {
      id: 2,
      title: 'Community Meeting',
      content: 'Join us for our weekly discussion this Sunday.',
      date: '2024-01-04'
    }
  ];

  const readingProgress = {
    chaptersRead: 156,
    currentStreak: 7,
    totalReadingTime: '32 hours',
    completedBooks: 3
  };

  const recentActivity = [
    {
      id: 1,
      type: 'reading',
      content: 'Completed reading Psalms 23',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      type: 'achievement',
      content: 'Earned "7-day streak" badge',
      timestamp: '1 day ago'
    }
  ];

  return (
    <MainLayout>
      <Container>
        <Stack spacing={6}>
          <Section
            title="Welcome Back!"
            description="Track your Bible reading progress and connect with the community."
          />
          <LiveChat />
        
          {/* Progress Stats */}

          <LiveLeaderboard />
          <Grid cols={4} gap={4}>
            <StatCard
              icon={<Book className="h-6 w-6 text-blue-600" />}
              label="Chapters Read"
              value={readingProgress.chaptersRead}
              bgColor="bg-blue-50"
            />
            <StatCard
              icon={<CheckCircle className="h-6 w-6 text-green-600" />}
              label="Current Streak"
              value={`${readingProgress.currentStreak} days`}
              bgColor="bg-green-50"
            />
            <StatCard
              icon={<Calendar className="h-6 w-6 text-purple-600" />}
              label="Reading Time"
              value={readingProgress.totalReadingTime}
              bgColor="bg-purple-50"
            />
            <StatCard
              icon={<Book className="h-6 w-6 text-yellow-600" />}
              label="Books Completed"
              value={readingProgress.completedBooks}
              bgColor="bg-yellow-50"
            />
          </Grid>

          {/* Main Content */}
          <Grid cols={3} gap={6}>
            {/* Announcements */}
            <Card className="col-span-2">
              <CardHeader>
                <div className="flex items-center">
                  <Bell className="h-5 w-5 text-indigo-500 mr-2" />
                  <h3 className="text-lg font-medium">Recent Announcements</h3>
                </div>
              </CardHeader>
              <CardContent>
                <Stack spacing={4}>
                  {announcements.map((announcement) => (
                    <div key={announcement.id} className="border-b pb-4 last:border-b-0">
                      <h4 className="font-medium text-gray-900">{announcement.title}</h4>
                      <p className="mt-1 text-sm text-gray-500">{announcement.content}</p>
                      <p className="mt-1 text-xs text-gray-400">{announcement.date}</p>
                    </div>
                  ))}
                </Stack>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 text-indigo-500 mr-2" />
                  <h3 className="text-lg font-medium">Recent Activity</h3>
                </div>
              </CardHeader>
              <CardContent>
                <Stack spacing={4}>
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        {activity.type === 'reading' ? (
                          <Book className="h-5 w-5 text-blue-500 mr-2" />
                        ) : (
                          <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                        )}
                        <div>
                          <p className="text-sm text-gray-900">{activity.content}</p>
                          <p className="text-xs text-gray-400">{activity.timestamp}</p>
                        </div>
                      </div>
                      <Badge variant={activity.type === 'reading' ? 'info' : 'success'}>
                        {activity.type}
                      </Badge>
                    </div>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Stack>
      </Container>
    </MainLayout>
  );
};

// Helper component for stats
const StatCard = ({ icon, label, value, bgColor }) => (
  <Card>
    <CardContent className="pt-4">
      <div className="flex items-center">
        <div className={`p-2 rounded-lg ${bgColor}`}>
          {icon}
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-600">{label}</p>
          <p className="text-lg font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);