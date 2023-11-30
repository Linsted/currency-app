import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import ConverterForm from "..";

const mockCurrencies = [
  { ccy: "USD", sale: 1.2 },
  { ccy: "EUR", sale: 0.8 },
];

describe("ConverterForm component", () => {
  test("renders ConverterForm correctly", () => {
    render(<ConverterForm currencies={mockCurrencies} />);
    const inputElement = screen.getByPlaceholderText("Enter digit");
    const submitButtonElement = screen.getByText("⇆");
    const resultElement = screen.getByPlaceholderText("...");

    expect(inputElement).toBeInTheDocument();
    expect(submitButtonElement).toBeInTheDocument();
    expect(resultElement).toBeInTheDocument();
  });
});
