import Table from "react-bootstrap/Table";

import { CurrencyExchangeRate } from "../../types";
import ChartItem from "../ChartItem";
import ChartHead from "../ChartHead";

type ChartProps = {
  currencies: CurrencyExchangeRate[];
};

export default function Chart({ currencies }: ChartProps) {
  return (
    <Table bordered size="sm">
      <ChartHead />
      <tbody>
        {currencies.map((currency) => (
          <ChartItem key={currency.ccy} currency={currency} />
        ))}
      </tbody>
    </Table>
  );
}
