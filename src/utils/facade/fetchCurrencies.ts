import axios from "axios";

import { CurrencyExchangeRate } from "../../types";
import { URL } from "../constants";

type Metadata = {
  createdAt: string;
  id: string;
  private: boolean;
};

type CurrenciesRate = {
  record: CurrencyExchangeRate[];
  metadata?: Metadata;
};

export async function fetchCurrencies() {
  const { data } = await axios<CurrenciesRate>({
    method: "get",
    url: URL,
    headers: {
      "X-MASTER-KEY":
        "$2a$10$uWRKO7mGQfOkTcozK8Xs9eq4m/09MjI9/QsZqI39nrZboHzk4CHOG",
    },
  });

  return data.record;
}
