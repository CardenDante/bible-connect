// src/services/websocket.js
import { io } from 'socket.io-client';

class WebSocketService {
  constructor() {
    this.socket = null;
    this.listeners = new Map();
  }

  connect(token) {
    this.socket = io('your-backend-url', {
      auth: {
        token
      }
    });

    // Handle connection events
    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    // Handle errors
    this.socket.on('error', (error) => {
      console.error('WebSocket error:', error);
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  // Chat methods
  sendMessage(message) {
    if (this.socket) {
      this.socket.emit('chat:message', message);
    }
  }

  onChatMessage(callback) {
    if (this.socket) {
      this.socket.on('chat:message', callback);
      this.listeners.set('chat:message', callback);
    }
  }

  // Leaderboard methods
  subscribeToLeaderboard(callback) {
    if (this.socket) {
      this.socket.on('leaderboard:update', callback);
      this.listeners.set('leaderboard:update', callback);
    }
  }

  // Reading progress methods
  updateReadingProgress(progress) {
    if (this.socket) {
      this.socket.emit('reading:progress', progress);
    }
  }

  onReadingProgressUpdate(callback) {
    if (this.socket) {
      this.socket.on('reading:progress:update', callback);
      this.listeners.set('reading:progress:update', callback);
    }
  }

  // Cleanup method
  removeAllListeners() {
    if (this.socket) {
      this.listeners.forEach((callback, event) => {
        this.socket.off(event, callback);
      });
      this.listeners.clear();
    }
  }
}

export const websocketService = new WebSocketService();