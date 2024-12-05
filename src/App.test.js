import { render, screen } from "@testing-library/react";
import { StrictMode } from "react";
import App from "./App";

test("renders learn react link", () => {
  render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
