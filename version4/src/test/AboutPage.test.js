import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AboutPage from '../Components/AboutPage'; // Adjust the path as necessary

// Helper component to wrap AboutPage with BrowserRouter
const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>);

describe('AboutPage', () => {
  test('renders navigation bar with correct links', () => {
    renderWithRouter(<AboutPage />);

    // Check if navigation links are present
    expect(screen.getByRole('link-home')).toBeInTheDocument();
    expect(screen.getByRole('button-home')).toBeInTheDocument();
    expect(screen.getByRole('button-watches')).toBeInTheDocument();
    expect(screen.getByRole('button-about')).toBeInTheDocument();
    expect(screen.getByRole('button-contact')).toBeInTheDocument();
  });

  test('navigates to the correct pages on button clicks', () => {
    renderWithRouter(<AboutPage />);

    // Mock window location to simulate navigation
    delete window.location;
    window.location = { pathname: '' };

    fireEvent.click(screen.getByRole('button-home'));
    expect(window.location.pathname).toBe('/home');

    fireEvent.click(screen.getByRole('button-watches'));
    expect(window.location.pathname).toBe('/watch-category');

    fireEvent.click(screen.getByRole('button-about'));
    expect(window.location.pathname).toBe('/about-page');

    fireEvent.click(screen.getByRole('button-contact'));
    expect(window.location.pathname).toBe('/contact-page');
  });

  test('renders About section with correct content', () => {
    renderWithRouter(<AboutPage />);

    // Check if About section content is present
    expect(screen.getByRole('about-heading')).toBeInTheDocument();
    expect(screen.getByRole('about-description')).toBeInTheDocument();
  });

  test('renders Our Story section with correct content', () => {
    renderWithRouter(<AboutPage />);

    // Check if Our Story section content is present
    expect(screen.getByRole('story-heading')).toBeInTheDocument();
    expect(screen.getByRole('story-description')).toBeInTheDocument();
  });

  test('renders Our Values section with correct content', () => {
    renderWithRouter(<AboutPage />);

    // Check if Our Values section content is present
    expect(screen.getByRole('quality-value')).toBeInTheDocument();
    expect(screen.getByRole('customer-satisfaction-value')).toBeInTheDocument();
    expect(screen.getByRole('innovation-value')).toBeInTheDocument();
  });

  test('renders Contact section with correct content', () => {
    renderWithRouter(<AboutPage />);

    // Check if Contact section content is present
    expect(screen.getByRole('contact-heading')).toBeInTheDocument();
    expect(screen.getByRole('contact-description')).toBeInTheDocument();
  });

  test('renders footer with correct content', () => {
    renderWithRouter(<AboutPage />);

    // Check if footer content is present
    expect(screen.getByText(/&copy; 2024 WatchMania. All rights reserved./)).toBeInTheDocument();
  });
});
