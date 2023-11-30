import ChartItemCellEditable from "../ChartItemCell";
import { CurrencyExchangeRate } from "../../types";

export default function ChartItem({
  currency,
}: {
  currency: CurrencyExchangeRate;
}) {
  const { ccy, base_ccy, buy, sale } = currency;

  const dataToEditBuy = { ccy, valueToEdit: "buy" };
  const dataToEditSale = { ccy, valueToEdit: "sale" };

  return (
    <tr>
      <td>{`${ccy}/${base_ccy}`}</td>
      <ChartItemCellEditable content={buy} dataToEdit={dataToEditBuy} />
      <ChartItemCellEditable content={sale} dataToEdit={dataToEditSale} />
    </tr>
  );
}
