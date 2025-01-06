// src/components/presence/PresenceIndicator.jsx
import React from 'react';
import { Clock } from 'lucide-react';

export const PresenceIndicator = ({ status, lastSeen, showText = false }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'away':
        return 'bg-yellow-500';
      case 'busy':
        return 'bg-red-500';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusText = () => {
    if (status === 'offline' && lastSeen) {
      const lastSeenDate = new Date(lastSeen);
      const now = new Date();
      const diffMinutes = Math.floor((now - lastSeenDate) / 1000 / 60);
      
      if (diffMinutes < 60) {
        return `Last seen ${diffMinutes} minutes ago`;
      } else if (diffMinutes < 1440) {
        const hours = Math.floor(diffMinutes / 60);
        return `Last seen ${hours} hours ago`;
      } else {
        return `Last seen ${lastSeenDate.toLocaleDateString()}`;
      }
    }
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="flex items-center">
      <div className={`h-2.5 w-2.5 rounded-full ${getStatusColor()}`} />
      {showText && (
        <div className="ml-2 flex items-center text-sm text-gray-500">
          {status === 'offline' && <Clock className="h-4 w-4 mr-1" />}
          <span>{getStatusText()}</span>
        </div>
      )}
    </div>
  );
};
