import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutPage from './AboutPage';

// Wrap the component in Router for navigation testing
const renderWithRouter = (ui) => {
  return render(<Router>{ui}</Router>);
};

describe('AboutPage Component', () => {
  beforeEach(() => {
    renderWithRouter(<AboutPage />);
  });

//   test('renders AboutPage with essential elements', () => {
//     // Check if main elements are present
//     expect(screen.getByText('About WatchMania')).toBeInTheDocument();
//     expect(screen.getByText('Our Story')).toBeInTheDocument();
//     expect(screen.getByText('Our Values')).toBeInTheDocument();
//     expect(screen.getByText('Get in Touch')).toBeInTheDocument();
//   });

//   test('renders and interacts with navigation buttons', () => {
//     // Check navigation buttons
//     const homeButton = screen.getByText('Home');
//     const watchesButton = screen.getByText('Watches');
//     const aboutButton = screen.getByText('About');
//     const contactButton = screen.getByText('Contact');

//     expect(homeButton).toBeInTheDocument();
//     expect(watchesButton).toBeInTheDocument();
//     expect(aboutButton).toBeInTheDocument();
//     expect(contactButton).toBeInTheDocument();

//     // Simulate button clicks and check if navigation occurs
//     fireEvent.click(homeButton);
//     fireEvent.click(watchesButton);
//     fireEvent.click(contactButton);
//     // Verify that navigation is happening based on routes (requires router mock or actual navigation testing)
//   });

//   test('renders "About WatchMania" section correctly', () => {
//     // Check content in the "About WatchMania" section
//     expect(screen.getByText('About WatchMania')).toBeInTheDocument();
//     expect(screen.getByText('Our mission is to provide a seamless experience for watch enthusiasts to manage and explore their favorite timepieces.')).toBeInTheDocument();
//   });

//   test('renders "Our Story" section correctly', () => {
//     // Check content in "Our Story" section
//     expect(screen.getByText('Our Story')).toBeInTheDocument();
//     expect(screen.getByText('Founded in 2024, WatchMania was created with a passion for horology')).toBeInTheDocument();
//     expect(screen.getByText('At WatchMania, we believe that every watch tells a story')).toBeInTheDocument();
//   });

//   test('renders "Our Values" section correctly', () => {
//     // Check content in "Our Values" section
//     expect(screen.getByText('Our Values')).toBeInTheDocument();
//     expect(screen.getByText('Quality')).toBeInTheDocument();
//     expect(screen.getByText('Customer Satisfaction')).toBeInTheDocument();
//     expect(screen.getByText('Innovation')).toBeInTheDocument();
//   });

//   test('renders contact information and link', () => {
//     // Check contact information and link
//     expect(screen.getByText('Have questions or feedback?')).toBeInTheDocument();
//     expect(screen.getByText('support@watchmania.com')).toBeInTheDocument();
//     expect(screen.getByText('support@watchmania.com')).toHaveAttribute('href', 'mailto:support@watchmania.com');
//     expect(screen.getByText('Contact Us')).toBeInTheDocument();
//   });

  test('renders footer correctly', () => {
    // Check footer content
    expect(screen.getByText('© 2024 WatchMania. All rights reserved.')).toBeInTheDocument();
  });
});
