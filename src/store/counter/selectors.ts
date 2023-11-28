import { CounterStore } from "../../types";

export const getCounterSelector = (store: CounterStore) => store.counter;

export const increaseCounterSelector = (store: CounterStore) =>
  store.increaseCounter;

export const resetCounterSelector = (store: CounterStore) => store.resetCounter;
