// import necessary react testing library helpers here
// import the Counter component here

import { render, screen } from "@testing-library/react";
import Counter from '../components/Counter';
import React from 'react';
import userEvent from '@testing-library/user-event';

let counterComponent;

beforeEach(() => {
   counterComponent = render(<Counter />);
})
test('renders counter message', () => {
  render(<Counter />);
  const messageForCounter = screen.getAllByText('Counter');
  expect(messageForCounter[0]).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
   render(<Counter />);
   const initial_value = screen.getAllByTestId('count');
   expect(initial_value[0].textContent).toBe('0');
});

test('clicking + increments the count', () => {
  render(<Counter />);
  const add = screen.getAllByText('+');
  const value = screen.getAllByTestId('count');
  userEvent.click(add[0]);
  expect(value[0].textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  const sub = screen.getAllByText('-');
  const value = screen.getAllByTestId('count');
  userEvent.click(sub[0]);
  expect(value[0].textContent).toBe('-1');
});
