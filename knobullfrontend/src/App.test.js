import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';

// BrowserRouter is used to provide routing functionality in the test environment
function renderWithRouter(component) {
  render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

// Test case: Verifies that the "Learn React" link is rendered
test('renders learn react link', () => {
  renderWithRouter(<App />);

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Test case: Verifies that the navbar is rendered
test('renders navbar', () => {
  renderWithRouter(<App />);

  const navbarElement = screen.getByRole('navigation');
  expect(navbarElement).toBeInTheDocument();
});

// Test case: Verifies that the Student News heading is rendered
test('renders Student News heading', () => {
  renderWithRouter(<App />);

  const studentNewsElement = screen.getByText('Student News');
  expect(studentNewsElement).toBeInTheDocument();
});

// Test case: Verifies that the The Latest heading is rendered
test('renders The Latest heading', () => {
  renderWithRouter(<App />);

  const theLatestElement = screen.getByText('The Latest');
  expect(theLatestElement).toBeInTheDocument();
});
