import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../lib/AuthContext';
import toast from 'react-hot-toast';

// Flower decoration for the login form
const FlowerDecoration = ({ className }) => (
  <div className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      fill="currentColor"
      className="opacity-20"
    >
      <path d="M50,20 C55,30 65,30 70,20 C75,10 85,10 90,20 C95,30 85,40 75,40 C65,40 55,30 50,40 C45,30 35,40 25,40 C15,40 5,30 10,20 C15,10 25,10 30,20 C35,30 45,30 50,20 Z" />
    </svg>
  </div>
);

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const { login, logout } = useAuth();
  const navigate = useNavigate();

  // On mount, clear any previous session so that login is always required.
  // Using an empty dependency array ensures this runs only once.
  useEffect(() => {
    logout();
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoading(true);

    if (!email || !password) {
      setLoginError('Please enter both email and password');
      toast.error('Please enter both email and password');
      setLoading(false);
      return;
    }

    try {
      // Validate credentials using the auth context login function
      const { success, error } = await login(email, password);

      if (success) {
        toast.success('Login successful');
        navigate('/admin/dashboard');
      } else {
        setLoginError('Invalid credentials');
        toast.error('Invalid credentials');
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginError('Something went wrong. Please try again.');
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-funeral-darkest py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 relative">
        <FlowerDecoration className="absolute -top-16 -left-16 w-32 h-32 text-funeral-accent transform rotate-45" />
        <FlowerDecoration className="absolute -bottom-16 -right-16 w-32 h-32 text-funeral-accent transform -rotate-45" />
        
        <div className="bg-funeral-dark border border-funeral-medium rounded-lg shadow-xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Admin Login</h2>
            <p className="text-gray-300 mb-6">Sign in to access the admin dashboard</p>
          </div>
          
          {loginError && (
            <div className="mb-4 p-3 bg-red-900/50 border border-red-800 rounded-md text-white text-sm">
              {loginError}
            </div>
          )}
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-100 border border-funeral-dark text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-funeral-accent"
                  placeholder="admin@example.com"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-100 border border-funeral-dark text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-funeral-accent"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-funeral-accent hover:bg-funeral-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-funeral-accent transition-colors"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </button>
            </div>
            
            <div className="text-center mt-4">
              <a href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                Return to Memorial Site
              </a>
            </div>
          </form>
          
          <div className="mt-6 text-xs text-gray-400">
            <p>Please use your valid credentials to sign in.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
