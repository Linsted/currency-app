import styles from "./ChartItemCell.module.css";

import CellForm from "../CellForm";
import { DataToEdit } from "../../types";

type ChartItemCellProps = {
  content: string;
  dataToEdit: DataToEdit;
};

export default function ChartItemCell({
  content,
  dataToEdit,
}: ChartItemCellProps) {
  return (
    <td className={styles.tableCell}>
      <CellForm content={content} dataToEdit={dataToEdit} />
    </td>
  );
}
