// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Book, AlertCircle } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Stack } from '@/components/layout/Stack';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Alert } from '@/components/ui/alert';
import { Footer } from '@/components/layout/Footer';

export const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      navigate('/');
    } catch (err) {
      setError('Failed to create an account.');
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
                Create your account
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
                    label="Full Name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />

                  <Input
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />

                  <Input
                    label="Password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />

                  <Input
                    label="Confirm Password"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    isLoading={loading}
                  >
                    Create account
                  </Button>

                  <div className="flex items-center justify-between mt-4">
                    <Link 
                      to="/login" 
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Already have an account? Sign in
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