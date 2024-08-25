import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import UserProfilePage from '../Components/UserProfilePage'; // Adjust the path as necessary
import '@testing-library/jest-dom/extend-expect';

// Mock axios
jest.mock('axios');

describe('UserProfilePage', () => {
  beforeEach(() => {
    // Reset any mocked data before each test
    axios.get.mockReset();
    axios.put.mockReset();
  });

  test('renders user profile page and handles edit', async () => {
    // Mock the user data
    const userData = { username: 'JohnDoe', email: 'john.doe@example.com' };
    axios.get.mockResolvedValueOnce({ data: userData });
    axios.put.mockResolvedValueOnce({});

    render(<UserProfilePage />);

    // Check loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for user data to load
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());

    // Check for user profile information
    expect(screen.getByLabelText('Username')).toHaveValue('JohnDoe');
    expect(screen.getByLabelText('Email')).toHaveValue('john.doe@example.com');

    // Enter editing mode
    fireEvent.click(screen.getByLabelText('Edit Profile'));

    // Update user data
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'JaneDoe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'jane.doe@example.com' } });

    // Save changes
    fireEvent.click(screen.getByLabelText('Save Changes'));

    // Check if PUT request was called with updated data
    await waitFor(() => {
      expect(axios.put).toHaveBeenCalledWith('http://localhost:8089/customers/null', { username: 'JaneDoe', email: 'jane.doe@example.com' });
    });
    
    // Check if GET request was called to fetch updated user data
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith('http://localhost:8089/customers/null');
    });

    // Check if user data is updated in the form
    expect(screen.getByLabelText('Username')).toHaveValue('JaneDoe');
    expect(screen.getByLabelText('Email')).toHaveValue('jane.doe@example.com');
  });

  test('handles user not found', async () => {
    // Mock the user data as null or empty
    axios.get.mockResolvedValueOnce({ data: null });

    render(<UserProfilePage />);

    // Check loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for user data to load
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());

    // Check if user not found message is displayed
    expect(screen.getByText('User not found')).toBeInTheDocument();
  });

  test('handles errors during fetch', async () => {
    // Mock an error during fetch
    axios.get.mockRejectedValueOnce(new Error('Network Error'));

    render(<UserProfilePage />);

    // Check loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for user data to load
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());

    // Check if an error handling message or behavior is displayed
    expect(screen.queryByText('User not found')).not.toBeInTheDocument();
    // Optionally check for any other error handling mechanism
  });
});
