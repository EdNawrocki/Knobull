import { render, screen, fireEvent } from '@testing-library/react';
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

test('renders learn react link', () => {
  renderWithRouter(<App />);

  const learnReactLink = screen.getByText(/learn react/i);
  expect(learnReactLink).toBeInTheDocument();
});

test('renders navbar', () => {
  renderWithRouter(<App />);

  const navbar = screen.getByRole('navigation');
  expect(navbar).toBeInTheDocument();
});

test('renders Student News heading', () => {
  renderWithRouter(<App />);

  const studentNewsHeading = screen.getByText('Student News');
  expect(studentNewsHeading).toBeInTheDocument();
});

test('renders The Latest heading', () => {
  renderWithRouter(<App />);

  const theLatestHeading = screen.getByText('The Latest');
  expect(theLatestHeading).toBeInTheDocument();
});

test('navigates to About Us page when "About Us" link is clicked', () => {
  renderWithRouter(<App />);

  const aboutUsLink = screen.getByText('About Us');
  fireEvent.click(aboutUsLink);
  expect(window.location.pathname).toBe('/About');
});

test('navigates to LinkedIn page when "LinkedIn" link is clicked', () => {
  renderWithRouter(<App />);

  const linkedInLink = screen.getByText('LinkedIn');
  const linkedInHref = linkedInLink.getAttribute('href');
  fireEvent.click(linkedInLink);
  expect(linkedInHref).toBe('https://www.linkedin.com/company/knobull-inc/');
});
