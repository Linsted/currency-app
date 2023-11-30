import Form from "react-bootstrap/Form";

import { CurrencyExchangeRate } from "../../types";

type CurrencySelectProps = {
  currencies: CurrencyExchangeRate[];
  name: string;
};

export default function CurrencySelect({
  currencies,
  name,
}: CurrencySelectProps) {
  return (
    <Form.Select name={name}>
      {currencies.map((currency) => (
        <option key={currency.ccy} value={currency.sale}>
          {currency.ccy}
        </option>
      ))}
    </Form.Select>
  );
}
