import {create} from 'zustand';

const useBookStore = create(() => ({
    amount: 50
}));

export { useBookStore };
