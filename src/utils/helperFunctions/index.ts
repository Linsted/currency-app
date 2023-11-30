import { COUNTER_LOCAL_STORAGE_KEY } from "../constants";

type CheckIsDataValid = {
  initialNumber: string;
  newNumber: string;
};

const resetLocalStore = () => {
  localStorage.removeItem(COUNTER_LOCAL_STORAGE_KEY);
};

export const checkError = (counter: number): boolean => {
  if (counter === 5) {
    resetLocalStore();
    return true;
  }

  return false;
};

export const checkIsDataValid = ({
  initialNumber,
  newNumber,
}: CheckIsDataValid): boolean => {
  const numericalNewNumber = Number(newNumber);

  const diffPercentage =
    Math.abs(
      (Number(newNumber) - Number(initialNumber)) / Number(initialNumber)
    ) * 100;

  if (diffPercentage > 10 || Number.isNaN(numericalNewNumber)) {
    return false;
  }

  return true;
};
