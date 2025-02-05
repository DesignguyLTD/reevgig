// components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from './store/AuthStore';

const ProtectedRoute: React.FC = () => {
    const { isAuthenticated } = useAuthStore();

    // Redirect to login if not authenticated
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Render the requested component if authenticated
    return <Outlet />;
};

export default ProtectedRoute;