// src/contexts/SocketContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useAuth } from './AuthContext';

const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      // Initialize socket connection
      const newSocket = io('http://localhost:3001', {
        auth: {
          token: user.token // You'll need to pass your auth token here
        }
      });

      // Socket event listeners
      newSocket.on('connect', () => {
        console.log('Connected to WebSocket');
      });

      newSocket.on('disconnect', () => {
        console.log('Disconnected from WebSocket');
      });

      setSocket(newSocket);

      // Cleanup on unmount
      return () => {
        newSocket.close();
      };
    }
  }, [user]);

  const value = {
    socket,
    isConnected: socket?.connected || false
  };

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (context === null) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};