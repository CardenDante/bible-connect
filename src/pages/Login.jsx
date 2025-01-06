// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Book, AlertCircle } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Stack } from '@/components/layout/Stack';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Alert } from '@/components/ui/alert';
import { Footer } from '@/components/layout/Footer';

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(formData.email, formData.password);
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (err) {
      setError('Failed to log in. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Container className="max-w-md w-full">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center">
                <Book className="h-12 w-12 text-indigo-600" />
              </div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Sign in to BibleConnect
              </h2>
            </CardHeader>

            <CardContent>
              <Stack spacing={4}>
                {error && (
                  <Alert variant="error">
                    <div className="flex items-center">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      {error}
                    </div>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label="Email address"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="Enter your email"
                  />

                  <Input
                    label="Password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    placeholder="Enter your password"
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    isLoading={loading}
                  >
                    Sign in
                  </Button>

                  <div className="flex items-center justify-between mt-4">
                    <Link 
                      to="/register" 
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Don't have an account? Register
                    </Link>
                  </div>
                </form>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
