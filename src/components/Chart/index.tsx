import Table from "react-bootstrap/Table";

import ChartItem from "../ChartItem";
import ChartHead from "../ChartHead";
import { useCurrenciesStore } from "../../store/currencies/useCurrenciesStore";
import { getCurrenciesSelector } from "../../store/currencies/selectors";

export default function Chart() {
  const currencies = useCurrenciesStore(getCurrenciesSelector);

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
