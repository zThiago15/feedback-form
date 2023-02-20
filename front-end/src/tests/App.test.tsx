import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../pages/Contact";

describe("Contact component", () => {
  it('should render the form fields and button', () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText('Your name*');
    const emailInput = screen.getByPlaceholderText('Your e-mail*');
    const messageTextarea = screen.getByPlaceholderText('Your message*');
    const submitButton = screen.getByText('Send message');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageTextarea).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  // screen.debug();
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
