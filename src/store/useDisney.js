import create from "zustand";
import axios from 'axios'
import {getCharacters, getCharacter, getCurrentPageCharacters} from "../services/characters";

const useDisneyStore = create((set, get) => ({
    data: [],
    singleData: [],
    loading: false,
    hasErrors: false,
    fetch: async (value, choise) => {
        set(() => ({ loading: true }));
        const response = await getCharacters(value, choise)
        set((state) => ({ data: (state.data = response.data), loading: false }));
    },
    getSingleCharacter: async (id) => {
        set(() => ({ loading: true }));
        const response = await getCharacter(id)
        set((state) => ({ singleData: (state.singleData = response.data), loading: false }));
    },
    getNextPage: async () => {
        set(() => ({ loading: true }));
        const response = await axios.get(get().data.info.nextPage);
        set((state) => ({ data: (state.data = response.data), loading: false }));
    },
    getPreviousPage: async () => {
        set(() => ({ loading: true }));
        const response = await axios.get(get().data.info.previousPage);
        set((state) => ({ data: (state.data = response.data), loading: false }));
    },
    getCurrentPage: async (number) => {
        set(() => ({ loading: true }));
        const response = await getCurrentPageCharacters(number)
        set((state) => ({ data: (state.data = response.data), loading: false }));
    }
}));

export default useDisneyStore;

