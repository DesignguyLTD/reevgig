import { create } from 'zustand';
import { createData, fetchData, userLogin } from '../api/Services/Auth';


interface Store {
    data: any[]; // Replace `any` with a specific type if possible
    loading: boolean;
    error: string | null;
    fetchData: () => Promise<void>;
    createData:(data: any) => Promise<boolean>;
    userLogin: (data: { email: string; password: string }) => Promise<void>;
}

interface AuthResponse {
    token: string;
}

const useAuthStore = create<Store>((set) => ({
    data: [],
    loading: false,
    error: null,

    fetchData: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetchData(); // API call
            set({ data: response, loading: false });
        } catch (error: any) {
            set({ error: error.message, loading: false });
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
            set({ data: [response], loading: false });
        } catch (error: any) {
            set({ error: error.message, loading: false });
        }
    },
}));

export default useAuthStore;