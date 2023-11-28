import { CurrencyExchangeRate } from "../../types";

export default function ChartItem({
  currency,
}: {
  currency: CurrencyExchangeRate;
}) {
  const { ccy, base_ccy, buy, sale } = currency;

  return (
    <tr>
      <td>{`${ccy}/${base_ccy}`}</td>
      <td>{buy}</td>
      <td>{sale}</td>
    </tr>
  );
}
