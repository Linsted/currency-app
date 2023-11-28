import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { CounterStore } from "../../types";
import { COUNTER_LOCAL_STORAGE_KEY } from "../../utils/constants";

export const useCounterStore = create<CounterStore>()(
  persist(
    (set) => ({
      counter: Number(localStorage.getItem(COUNTER_LOCAL_STORAGE_KEY)) || 0,

      increaseCounter: () => {
        set((state) => ({ ...state, counter: state.counter + 1 }));
      },

      resetCounter: () => {
        set((state) => ({ ...state, counter: 0 }));
      },
    }),
    {
      name: COUNTER_LOCAL_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
    }
  )
);
