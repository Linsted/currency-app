import { TABLE_HEADERS } from "./constants";

export default function ChartHead() {
  return (
    <thead>
      <tr>
        {TABLE_HEADERS.map((header) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
  );
}
