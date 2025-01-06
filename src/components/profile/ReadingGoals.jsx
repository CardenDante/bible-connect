// src/components/profile/ReadingGoals.jsx
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Grid } from '@/components/layout/Grid';
import { Target, BookOpen, Clock, Calendar } from 'lucide-react';
import { Alert } from '@/components/ui/alert';

export const ReadingGoals = () => {
  const [goals, setGoals] = useState({
    dailyChapters: 3,
    weeklyBooks: 1,
    monthlyBooks: 4,
    preferredTime: 'morning',
    readingDuration: 30
  });

  const [progress, setProgress] = useState({
    dailyProgress: 2,
    weeklyProgress: 0,
    monthlyProgress: 2,
    streak: 7
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSaveGoals = () => {
    // Here you would typically save to your backend
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Target className="h-5 w-5 text-indigo-500 mr-2" />
              <h3 className="text-lg font-medium">Reading Goals</h3>
            </div>
            <Button
              variant="secondary"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Cancel' : 'Edit Goals'}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Grid cols={2} gap={4}>
            <div>
              <Input
                label="Daily Chapters Goal"
                type="number"
                value={goals.dailyChapters}
                onChange={(e) => setGoals({ ...goals, dailyChapters: parseInt(e.target.value) })}
                disabled={!isEditing}
                min={1}
              />
              <div className="mt-2 text-sm text-gray-500">
                Progress: {progress.dailyProgress}/{goals.dailyChapters} chapters today
              </div>
            </div>

            <div>
              <Input
                label="Reading Duration (minutes)"
                type="number"
                value={goals.readingDuration}
                onChange={(e) => setGoals({ ...goals, readingDuration: parseInt(e.target.value) })}
                disabled={!isEditing}
                min={5}
                step={5}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Reading Time
              </label>
              <select
                value={goals.preferredTime}
                onChange={(e) => setGoals({ ...goals, preferredTime: e.target.value })}
                disabled={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="morning">Morning (5 AM - 11 AM)</option>
                <option value="afternoon">Afternoon (11 AM - 5 PM)</option>
                <option value="evening">Evening (5 PM - 9 PM)</option>
                <option value="night">Night (9 PM - 5 AM)</option>
              </select>
            </div>

            <div>
              <Input
                label="Monthly Books Goal"
                type="number"
                value={goals.monthlyBooks}
                onChange={(e) => setGoals({ ...goals, monthlyBooks: parseInt(e.target.value) })}
                disabled={!isEditing}
                min={1}
              />
              <div className="mt-2 text-sm text-gray-500">
                Progress: {progress.monthlyProgress}/{goals.monthlyBooks} books this month
              </div>
            </div>
          </Grid>

          {isEditing && (
            <div className="mt-4 flex justify-end">
              <Button variant="primary" onClick={handleSaveGoals}>
                Save Goals
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center">
            <BookOpen className="h-5 w-5 text-indigo-500 mr-2" />
            <h3 className="text-lg font-medium">Current Progress</h3>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ProgressStat
              icon={<Clock className="h-5 w-5 text-blue-500" />}
              label="Reading Streak"
              value={`${progress.streak} days`}
            />
            <ProgressStat
              icon={<BookOpen className="h-5 w-5 text-green-500" />}
              label="Today's Chapters"
              value={`${progress.dailyProgress}/${goals.dailyChapters}`}
            />
            <ProgressStat
              icon={<Calendar className="h-5 w-5 text-purple-500" />}
              label="Monthly Books"
              value={`${progress.monthlyProgress}/${goals.monthlyBooks}`}
            />
            <ProgressStat
              icon={<Clock className="h-5 w-5 text-yellow-500" />}
              label="Avg. Duration"
              value={`${goals.readingDuration} min`}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ProgressStat = ({ icon, label, value }) => (
  <div className="p-4 bg-gray-50 rounded-lg">
    <div className="flex items-center space-x-2 mb-2">
      {icon}
      <span className="text-sm font-medium text-gray-600">{label}</span>
    </div>
    <div className="text-2xl font-bold text-gray-900">{value}</div>
  </div>
);