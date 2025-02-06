import { create } from 'zustand';
import {
    createData,
    fetchData,
    fetchProfileData,
    PatchData, patchProfileData,
    postProfileData,
    userLogin,
    userReset
} from '../api/Services/Auth';


interface Store {
    isAuthenticated: boolean;
    isAuthChecked: boolean;
    data: any[];
    loading: boolean;
    token: string | null;
    error: string | null;
    fetchData: () => Promise<void>;
    createData: (data: any) => Promise<boolean>;
    PatchData: (data: any) => Promise<boolean>;
    userLogin: (data: { email: string; password: string }) => Promise<void>;
    userReset: (data: { email: string }) => Promise<void>;
    checkAuth: () => void;
    logout: () => void;
    postProfileData: (data: any) => Promise<boolean>;
    patchProfileData: (data: any) => Promise<boolean>;
}

interface AuthResponse {
    token: string;
}

const useAuthStore = create<Store>((set) => ({
    data: [],
    loading: false,
    error: null,
    isAuthenticated: false,
    isAuthChecked: false,
    token: null,

    // Check authentication status on page load
    checkAuth: () => {
        const token = localStorage.getItem('REEVTK');
        set((state) => {
            if (state.token === token && state.isAuthChecked) {
                // No need to update if the token and auth check status are already correct
                return state;
            }
            return {
                isAuthenticated: !!token,
                token,
                isAuthChecked: true,
            };
        });
    },

    fetchData: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetchData(); // API call
            set({ data: response, loading: false });
        } catch (error: any) {
            set({ error: error.message, loading: false });
        }
    },

    fetchProfileData: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetchData(); // API call
            set({ data: response, loading: false });
        } catch (error: any) {
            set({ error: error.message, loading: false });
        }
    },

    PatchData: async (data) => {
        set({ loading: true, error: null });
        try {
            const response = await PatchData(data); // Call the API
            set((state) => ({ data: [...state.data, response], loading: false }));
            return true; // Indicate success
        } catch (error: any) {
            set({ error: error.message, loading: false });
            return false; // Indicate failure
        }
    },

    postProfileData: async (data) => {
        set({ loading: true, error: null });
        try {
            const response = await postProfileData(data); // Call the API
            set((state) => ({ data: [...state.data, response], loading: false }));
            return true; // Indicate success
        } catch (error: any) {
            set({ error: error.message, loading: false });
            return false; // Indicate failure
        }
    },

    patchProfileData: async (data) => {
        set({ loading: true, error: null });
        try {
            const response = await patchProfileData(data); // Call the API
            set((state) => ({ data: [...state.data, response], loading: false }));
            return true; // Indicate success
        } catch (error: any) {
            set({ error: error.message, loading: false });
            return false; // Indicate failure
        }
    },


    createData: async (data) => {
        set({ loading: true, error: null });
        try {
            const response = await createData(data); // Call the API
            set((state) => ({ data: [...state.data, response], loading: false }));
            return true; // Indicate success
        } catch (error: any) {
            set({ error: error.message, loading: false });
            return false; // Indicate failure
        }
    },

    userLogin: async (data) => {
        set({ loading: true, error: null });
        try {
            const response: AuthResponse = await userLogin(data); // API call
            // Save token to localStorage
            localStorage.setItem('REEVTK', response.token);

            // Update store state
            set({ data: [response], isAuthenticated: true, token: response.token, loading: false });
        } catch (error: any) {
            set({ error: error.message, loading: false });
        }
    },

    userReset: async (data) => {
        set({ loading: true, error: null });
        try {
            const response: AuthResponse = await userReset(data); // API call
             // Update store state
            set({ data: [response], isAuthenticated: true, token: response.token, loading: false });
        } catch (error: any) {
            set({ error: error.message, loading: false });
        }
    },

    logout: () => {
        localStorage.removeItem('REEVTK');
        set({ isAuthenticated: false, token: null });
    },
}));

export default useAuthStore;