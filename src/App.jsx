// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/shared/ProtectedRoute';
import { ThemeProvider } from './contexts/ThemeContext';
import { Toaster } from './components/ui/toaster';

// Public Pages
import Landing from '/src/pages/landing.jsx';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Unauthorized from './pages/Unauthorized';

// Protected Pages
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Community from './pages/Community';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import AdminUsers from './pages/admin/Users';
import AdminAnnouncements from './pages/admin/Announcements';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/reading-plans"
            element={
              <ProtectedRoute>
                <ReadingPlans />
              </ProtectedRoute>
            }
          /> */}
          <Route
            path="/community"
            element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute roles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute roles={['admin']}>
                <AdminUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/announcements"
            element={
              <ProtectedRoute roles={['admin']}>
                <AdminAnnouncements />
              </ProtectedRoute>
            }
          />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Toast Notifications */}
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;