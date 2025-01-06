// src/services/presenceService.js
import { websocketService } from './websocket';

class PresenceService {
  constructor() {
    this.listeners = new Map();
    this.activeUsers = new Map();
  }

  initialize() {
    websocketService.socket?.on('presence:update', (users) => {
      this.updateActiveUsers(users);
    });

    websocketService.socket?.on('user:status_change', ({ userId, status, lastSeen }) => {
      this.updateUserStatus(userId, status, lastSeen);
    });
  }

  updateActiveUsers(users) {
    users.forEach(user => {
      this.activeUsers.set(user.id, {
        status: user.status,
        lastSeen: user.lastSeen
      });
    });
    this.notifyListeners();
  }

  updateUserStatus(userId, status, lastSeen) {
    this.activeUsers.set(userId, { status, lastSeen });
    this.notifyListeners();
  }

  setUserStatus(status) {
    websocketService.socket?.emit('presence:status', { status });
  }

  subscribeToPresence(callback) {
    const id = Date.now().toString();
    this.listeners.set(id, callback);
    return () => this.listeners.delete(id);
  }

  notifyListeners() {
    this.listeners.forEach(callback => {
      callback(Array.from(this.activeUsers.entries()));
    });
  }

  cleanup() {
    this.listeners.clear();
    this.activeUsers.clear();
  }
}

export const presenceService = new PresenceService();