import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ContactPage from '../Components/ContactPage'; // Adjust the path as necessary

// Helper component to wrap ContactPage with BrowserRouter
const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>);

describe('ContactPage', () => {
  test('renders navigation bar with correct links', () => {
    renderWithRouter(<ContactPage />);

    // Check if navigation buttons are present
    expect(screen.getByRole('button-home')).toBeInTheDocument();
    expect(screen.getByRole('button-watches')).toBeInTheDocument();
    expect(screen.getByRole('button-about')).toBeInTheDocument();
    expect(screen.getByRole('button-contact')).toBeInTheDocument();
  });

  test('navigates to the correct pages on button clicks', () => {
    renderWithRouter(<ContactPage />);

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

  test('renders Contact section with correct content', () => {
    renderWithRouter(<ContactPage />);

    // Check if Contact section content is present
    expect(screen.getByRole('contact-heading')).toBeInTheDocument();
    expect(screen.getByRole('contact-description')).toBeInTheDocument();
  });

  test('renders Contact Form section with correct content', () => {
    renderWithRouter(<ContactPage />);

    // Check if Contact Form section content is present
    expect(screen.getByRole('form-heading')).toBeInTheDocument();
    expect(screen.getByRole('input-name')).toBeInTheDocument();
    expect(screen.getByRole('input-email')).toBeInTheDocument();
    expect(screen.getByRole('textarea-message')).toBeInTheDocument();
    expect(screen.getByRole('submit-button')).toBeInTheDocument();
  });

  test('renders footer with correct content', () => {
    renderWithRouter(<ContactPage />);

    // Check if footer content is present
    expect(screen.getByRole('footer-text')).toBeInTheDocument();
  });
});
