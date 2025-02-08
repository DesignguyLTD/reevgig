import { create } from 'zustand';
import {fetchProjectData, postProjectData} from "../api/Services/project";


interface Store {
    data: any[];
    loading: boolean;
    error: string | null;
    fetchProjectData: () => Promise<void>;
    postProjectData: (data: any) => Promise<boolean>;
}

const useAuthStore = create<Store>((set) => ({
    data: [],
    loading: false,
    error: null,


    fetchProjectData: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetchProjectData(); // API call
            set({ data: response, loading: false });
        } catch (error: any) {
            set({ error: error.message, loading: false });
        }
    },

    postProjectData: async (data) => {
        set({ loading: true, error: null });
        try {
            const response = await postProjectData(data); // Call the API
            set((state) => ({ data: [...state.data, response], loading: false }));
            return true; // Indicate success
        } catch (error: any) {
            set({ error: error.message, loading: false });
            return false; // Indicate failure
        }
    },
}));

export default useAuthStore;