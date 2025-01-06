// src/pages/Dashboard.jsx
import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { Stack } from '@/components/layout/Stack';
import { Section } from '@/components/layout/Section';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Book, Trophy, Bell, MessageCircle, ChevronRight, Calendar, CheckCircle } from 'lucide-react';
import { LiveChat } from '@/components/chat/LiveChat';

// Change the export to be a default export
export default function Dashboard() {
  // Sample data
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

  return (
    <MainLayout>
      <Container>
        <Stack spacing={6}>
          {/* Welcome Section */}
          <Section
            title="Welcome Back!"
            description="Track your Bible reading progress and connect with the community."
          />

          {/* Stats Overview */}
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

          {/* Announcements Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2 text-indigo-500" />
                Announcements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Stack spacing={4}>
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="border-b pb-4 last:border-b-0">
                    <h3 className="font-medium text-gray-900">{announcement.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{announcement.content}</p>
                    <p className="mt-1 text-xs text-gray-400">{announcement.date}</p>
                  </div>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>

      {/* Live Chat */}
      <LiveChat />
    </MainLayout>
  );
}

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