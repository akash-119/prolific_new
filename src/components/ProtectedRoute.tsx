// src/components/ProtectedRoute.tsx
import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, isAdmin, loading } = useAuth();
  const location = useLocation();

  useEffect(() => {
    console.log('ProtectedRoute check:', { user: !!user, isAdmin, loading, path: location.pathname });
  }, [user, isAdmin, loading, location.pathname]);

  // Show loading spinner while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // If not logged in, redirect to login
  if (!user) {
    console.log('No user, redirecting to login');
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  // If logged in but not admin, show unauthorized
  if (!isAdmin) {
    console.log('User is not admin');
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Unauthorized</h1>
          <p className="mt-2 text-gray-600">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  // User is authenticated and is admin
  console.log('User authorized, rendering protected content');
  return <>{children}</>;
};
export default ProtectedRoute;