// src/pages/Profile.jsx
import React, { useState } from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { Container } from '@/components/layout/Container';
import { Stack } from '@/components/layout/Stack';
import { Section } from '@/components/layout/Section';
import { ReadingGoals } from '@/components/profile/ReadingGoals';
import { SocialConnections } from '@/components/profile/SocialConnections';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert } from '@/components/ui/alert';
import { User, Book, Users, Settings, AlertCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export const Profile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: user?.bio || '',
    preferredBibleVersion: 'NIV',
    notifications: true,
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      // Here you would make an API call to update the profile
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccessMessage('Profile updated successfully!');
      setIsEditing(false);
    } catch (err) {
      setError('Failed to update profile. Please try again.');
    }
  };

  const navItems = [
    { id: 'profile', label: 'Profile', icon: <User className="h-5 w-5" /> },
    { id: 'goals', label: 'Reading Goals', icon: <Book className="h-5 w-5" /> },
    { id: 'social', label: 'Social', icon: <Users className="h-5 w-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <MainLayout>
      <Container>
        <Stack spacing={6}>
          <Section
            title="Profile"
            description="Manage your account settings and view your progress"
          />

          {/* Navigation Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === item.id
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Status Messages */}
          {error && (
            <Alert variant="error">
              <AlertCircle className="h-5 w-5 mr-2" />
              {error}
            </Alert>
          )}

          {successMessage && (
            <Alert variant="success">
              <AlertCircle className="h-5 w-5 mr-2" />
              {successMessage}
            </Alert>
          )}

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === 'profile' && (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Personal Information</h3>
                    <Button
                      variant="secondary"
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      {isEditing ? 'Cancel' : 'Edit Profile'}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUpdateProfile} className="space-y-4">
                    <Input
                      label="Full Name"
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      disabled={!isEditing}
                    />

                    <Input
                      label="Email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      disabled={!isEditing}
                    />

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bio
                      </label>
                      <textarea
                        value={profileData.bio}
                        onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                        disabled={!isEditing}
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm disabled:bg-gray-50"
                        placeholder="Tell us about yourself..."
                      />
                    </div>

                    {isEditing && (
                      <div className="flex justify-end">
                        <Button type="submit" variant="primary">
                          Save Changes
                        </Button>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            )}

            {activeTab === 'goals' && <ReadingGoals />}
            
            {activeTab === 'social' && <SocialConnections />}

            {activeTab === 'settings' && (
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-medium">Account Settings</h3>
                </CardHeader>
                <CardContent>
                  <Stack spacing={4}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Bible Version
                      </label>
                      <select
                        value={profileData.preferredBibleVersion}
                        onChange={(e) => setProfileData({ ...profileData, preferredBibleVersion: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="NIV">NIV</option>
                        <option value="ESV">ESV</option>
                        <option value="KJV">KJV</option>
                        <option value="NKJV">NKJV</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Email Notifications</span>
                      <input
                        type="checkbox"
                        checked={profileData.notifications}
                        onChange={(e) => setProfileData({ ...profileData, notifications: e.target.checked })}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                    </div>
                  </Stack>
                </CardContent>
              </Card>
            )}
          </div>
        </Stack>
      </Container>
    </MainLayout>
  );
};

export default Profile;