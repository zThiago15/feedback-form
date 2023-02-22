import React from "react";
import { fireEvent, getByAltText, render, screen } from "@testing-library/react";
import Contact from "../pages/Contact";
import { createContact } from '../services/contact';

describe("Contact component", () => {
  it.only('should render the form and images', () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText('Your name*');
    const emailInput = screen.getByPlaceholderText('Your e-mail*');
    const messageTextarea = screen.getByPlaceholderText('Your message*');
    const submitButton = screen.getByText('Send message');
    const greenCartoon = screen.getByAltText('green cartoon');
    const pinkCartoon = screen.getByAltText('pink cartoon');
    const yellowCartoon = screen.getByAltText('yellow cartoon');
    const map = screen.getByAltText('map');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageTextarea).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(greenCartoon).toBeInTheDocument();
    expect(pinkCartoon).toBeInTheDocument();
    expect(yellowCartoon).toBeInTheDocument();
    expect(map).toBeInTheDocument();
  });

});
