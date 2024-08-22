import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import LandingPage from './LandingPage';

// Create a new instance of the mock adapter
const mock = new MockAdapter(axios);

// Clean up after each test
afterEach(() => {
  mock.reset();
});

test('renders LandingPage correctly', () => {
  render(<LandingPage />);

  expect(screen.getByText('WatchMania')).toBeInTheDocument();
  expect(screen.getByText('Discover Your Perfect Watch')).toBeInTheDocument();
  expect(screen.getByText('Featured Watches')).toBeInTheDocument();
  expect(screen.getByText('About Us')).toBeInTheDocument();
  expect(screen.getByText('Get in Touch')).toBeInTheDocument();
});

test('fetches and displays watches', async () => {
  // Mock the API response
  mock.onGet('http://localhost:8089/watch/all').reply(200, [
    {
      id: 1,
      name: 'Timex Casual-Wear Watch',
      description: 'Perfect for everyday wear.',
      price: 99.99,
      imageUrl: 'casual_watch.webp'
    }
  ]);

  render(<LandingPage />);

  // Wait for the watches to be displayed
  await waitFor(() => {
    expect(screen.getByText('Timex Casual-Wear Watch')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });
});

test('displays error message when fetching watches fails', async () => {
  // Mock the API response to fail
  mock.onGet('http://localhost:8089/watch/all').reply(500);

  render(<LandingPage />);

  // Wait for the error message to be displayed
  await waitFor(() => {
    expect(screen.getByText('Failed to load watches.')).toBeInTheDocument();
  });
});
