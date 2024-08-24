import React from 'react';
import { render, screen } from '@testing-library/react';
import ThankYouPage from '../Components/ThankyouPage'; // Adjust the path as necessary

describe('ThankYouPage', () => {
  test('renders thank you page with correct content', () => {
    render(<ThankYouPage />);

    // Check for hero image
    expect(screen.getByRole('hero-image')).toBeInTheDocument();

    // Check for main heading
    expect(screen.getByRole('main-heading')).toHaveTextContent('Thanks for Shopping with Us!');

    // Check for personalized message
    expect(screen.getByRole('personalized-message')).toHaveTextContent('We truly appreciate your business and hope you enjoyed your shopping experience with us.');

    // Check for order summary
    expect(screen.getByRole('order-summary')).toBeInTheDocument();
    expect(screen.getByRole('order-summary-heading')).toHaveTextContent('Order Summary');
    expect(screen.getByRole('order-details')).toBeInTheDocument();

    // Check for additional content
    expect(screen.getByRole('additional-content')).toHaveTextContent('You will receive an email confirmation with tracking details soon.');

    // Check for social media links
    expect(screen.getByRole('facebook-link')).toBeInTheDocument();
    expect(screen.getByRole('twitter-link')).toBeInTheDocument();
    expect(screen.getByRole('instagram-link')).toBeInTheDocument();

    // Check for special offer
    expect(screen.getByRole('special-offer')).toHaveTextContent('Special Offer: Use code THANKYOU10 for 10% off your next purchase!');

    // Check for return to home button
    expect(screen.getByRole('return-home-button')).toBeInTheDocument();
  });
});
