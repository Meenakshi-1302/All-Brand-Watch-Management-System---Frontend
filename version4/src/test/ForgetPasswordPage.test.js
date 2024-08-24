import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ForgotPasswordPage from '../Components/ForgotPasswordPage'; // Adjust the path as necessary
import axios from 'axios';

// Mock axios
jest.mock('axios');

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>);

describe('ForgotPasswordPage', () => {
  test('renders form elements and handles submit', async () => {
    axios.post.mockResolvedValueOnce({ data: { exists: true } }); // Mock successful email check
    axios.post.mockResolvedValueOnce({}); // Mock successful password reset

    renderWithRouter(<ForgotPasswordPage />);

    // Check if form elements are rendered
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('input-email')).toBeInTheDocument();
    expect(screen.getByRole('input-new-password')).toBeInTheDocument();
    expect(screen.getByRole('input-confirm-password')).toBeInTheDocument();
    expect(screen.getByRole('submit-button')).toBeInTheDocument();

    // Simulate user input and form submission
    fireEvent.change(screen.getByRole('input-email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByRole('input-new-password'), { target: { value: 'newpassword' } });
    fireEvent.change(screen.getByRole('input-confirm-password'), { target: { value: 'newpassword' } });
    fireEvent.click(screen.getByRole('submit-button'));

    // Verify that axios was called with correct arguments
    await waitFor(() => expect(axios.post).toHaveBeenCalledWith('http://localhost:8089/check-email', { email: 'test@example.com' }));
    await waitFor(() => expect(axios.post).toHaveBeenCalledWith('http://localhost:8089/customer', { email: 'test@example.com', newPassword: 'newpassword' }));

    // Verify that navigation or alerts occur (mock alert and navigation if necessary)
  });

  test('displays error when passwords do not match', () => {
    renderWithRouter(<ForgotPasswordPage />);

    fireEvent.change(screen.getByRole('input-new-password'), { target: { value: 'newpassword' } });
    fireEvent.change(screen.getByRole('input-confirm-password'), { target: { value: 'differentpassword' } });
    fireEvent.click(screen.getByRole('submit-button'));

    expect(screen.getByRole('error-message')).toHaveTextContent('Passwords do not match');
  });

  test('displays error message on API failure', async () => {
    axios.post.mockRejectedValueOnce(new Error('Failed to fetch')); // Mock API failure

    renderWithRouter(<ForgotPasswordPage />);

    fireEvent.change(screen.getByRole('input-email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByRole('input-new-password'), { target: { value: 'newpassword' } });
    fireEvent.change(screen.getByRole('input-confirm-password'), { target: { value: 'newpassword' } });
    fireEvent.click(screen.getByRole('submit-button'));

    await waitFor(() => expect(screen.getByRole('error-message')).toHaveTextContent('An error occurred. Please try again.'));
  });
});
