import {create} from 'zustand';
import {createData, fetchData} from "../api/Services/Auth";

interface Store {
    data: any[];
    loading: boolean;
    error: string | null;
    fetchData: () => void;
    createData: (data: any) => void;
}

const useAuthStore = create<Store>((set) => ({
    data: [],
    loading: false,
    error: null,
    fetchData: async () => {
        set({ loading: true });
        try {
            const response = await fetchData(); // API call function
            set({ data: response, loading: false });
        } catch (error : any) {
            set({ error: error.message, loading: false });
        }
    },
    createData: async (data) => {
        set({ loading: true });
        try {
            const response = await createData(data);
            set({ data: response, loading: false });
        } catch (error : any) {
            set({ error: error.message, loading: false });
        }
    },
}));

export default useAuthStore;
