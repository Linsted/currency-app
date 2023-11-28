import axios from "axios";

import { URL } from "../constants";
import { checkError } from "../helperFunctions";

import { CurrencyExchangeRate } from "../../types";

type Metadata = {
  createdAt: string;
  id: string;
  private: boolean;
};

type CurrenciesRate = {
  record: CurrencyExchangeRate[];
  metadata?: Metadata;
};

type FetchCurrenciesProps = {
  counter: number;
  setCounter?: (value: number) => void;
};

export async function fetchCurrencies({ counter }: FetchCurrenciesProps) {
  const { data } = await axios<CurrenciesRate>({
    method: "get",
    url: URL,
    headers: {
      "X-MASTER-KEY":
        "$2a$10$uWRKO7mGQfOkTcozK8Xs9eq4m/09MjI9/QsZqI39nrZboHzk4CHOG",
    },
  });

  if (checkError(counter)) {
    throw new Error();
  }

  return data.record;
}
