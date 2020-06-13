import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm.js";

test("renders contact form without crashing", () => {
  render(<ContactForm />);
});

test("contains First Name Label", () => {
  const { getByTestId } = render(<ContactForm />);
  const linkLabel = getByTestId(/first name/i);
  expect(linkLabel).toBeInTheDocument();
});

it('renders " last name" text', () => {
  // trying query by text
  const { queryByText } = render(<ContactForm />);
  const hasLastName = queryByText(/last name/i);
  expect(hasLastName).toBeInTheDocument();
});

it('renders " message" text', () => {
  const { getByText } = render(<ContactForm />);
  const displayMessage = getByText(/message/i);
  expect(displayMessage).toBeInTheDocument();
});
test("renders if checkbox works", () => {
  const { getByText } = render(<ContactForm />);
  const checkWorks = getByText(/checkbox practice/i);
  expect(checkWorks).toBeInTheDocument();
});
