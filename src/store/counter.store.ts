import { createStore } from "zustand/vanilla";

export interface ICounter {
  count: number;
  inc: (by: number) => void;
}
const counterStore = createStore<ICounter>((set, get) => ({
  count: 0,
  inc: (by) => set((state) => ({ ...state, count: get().count + by })),
}));

export const { getState, setState, subscribe } = counterStore;

export default counterStore;
