import { useState } from 'react';
import { generateToken } from '../API/services/user'; // Updated import to match structure
import { Token } from '../API/types/userTypes'; // Assuming the token response type is defined

export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const handleLogin = async (credential :Token) => {
        setLoading(true);
        setError(null);

        try {
            // Assuming generateToken returns a response with { token: string }
            const response: any = await generateToken(credential);

            // Store token in localStorage
            localStorage.setItem('token', response.token);
            setToken(response.token); // Update token in state
            window.location.href = '/'; // Redirect to profile page after login
        } catch (err: any) {
            // Error handling - check if the error has a message
            setError(err.response?.data?.detail || 'Invalid credentials');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null); // Reset the token state
        window.location.href = '/login';
    };

    // Utility to check if the user is authenticated
    const isAuthenticated = () => !!token;

    return { handleLogin, handleLogout, loading, error, isAuthenticated, token };
};
