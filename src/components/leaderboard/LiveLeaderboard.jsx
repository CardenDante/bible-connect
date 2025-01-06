// src/components/leaderboard/LiveLeaderboard.jsx
import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Trophy, Star, TrendingUp, Award } from 'lucide-react';
import { useSocket } from '@/contexts/SocketContext';
import { Badge } from '@/components/ui/badge';

export const LiveLeaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [timeFrame, setTimeFrame] = useState('weekly'); // weekly, monthly, allTime
  const { socket } = useSocket();

  useEffect(() => {
    if (socket) {
      // Initial leaderboard data
      socket.emit('getLeaderboard', timeFrame, (data) => {
        setLeaderboardData(data);
      });

      // Listen for leaderboard updates
      socket.on('leaderboardUpdate', (data) => {
        setLeaderboardData(data);
      });

      return () => {
        socket.off('leaderboardUpdate');
      };
    }
  }, [socket, timeFrame]);

  const getRankBadge = (rank) => {
    switch (rank) {
      case 0:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 1:
        return <Trophy className="h-5 w-5 text-gray-400" />;
      case 2:
        return <Trophy className="h-5 w-5 text-amber-600" />;
      default:
        return <span className="text-gray-500 font-medium">{rank + 1}</span>;
    }
  };

  const getProgressTrend = (trend) => {
    if (trend > 0) {
      return <TrendingUp className="h-4 w-4 text-green-500" />;
    }
    return null;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-indigo-500" />
            <h3 className="text-lg font-medium">Leaderboard</h3>
          </div>
          <div className="flex space-x-2">
            <Badge
              variant={timeFrame === 'weekly' ? 'primary' : 'secondary'}
              className="cursor-pointer"
              onClick={() => setTimeFrame('weekly')}
            >
              Weekly
            </Badge>
            <Badge
              variant={timeFrame === 'monthly' ? 'primary' : 'secondary'}
              className="cursor-pointer"
              onClick={() => setTimeFrame('monthly')}
            >
              Monthly
            </Badge>
            <Badge
              variant={timeFrame === 'allTime' ? 'primary' : 'secondary'}
              className="cursor-pointer"
              onClick={() => setTimeFrame('allTime')}
            >
              All Time
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leaderboardData.map((user, index) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-3 bg-white rounded-lg border transition-shadow hover:shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-8 text-center">
                  {getRankBadge(index)}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-gray-900">{user.name}</h4>
                    {user.achievements > 0 && (
                      <div className="flex items-center text-yellow-500">
                        <Star className="h-4 w-4" />
                        <span className="text-xs ml-1">{user.achievements}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>{user.chaptersRead} chapters</span>
                    <span>•</span>
                    <span>{user.streak} day streak</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {getProgressTrend(user.trend)}
                {user.streak >= 7 && (
                  <Award className="h-5 w-5 text-indigo-500" title="7+ Day Streak" />
                )}
                <div className="text-right">
                  <div className="text-lg font-semibold text-indigo-600">
                    {user.score}
                  </div>
                  <div className="text-xs text-gray-500">points</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};