import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { UserDetails } from '../UserDetails';

describe('UserDetails', () => {
  const mockProps = {
    name: 'John Doe',
    socialMediaHandle: '@johndoe',
    bio: 'Lorem ipsum dolor sit amet.',
    location: 'New York, USA',
    website: 'https://johndoe.com',
  };

  it('renders the user name correctly', () => {
    const { getByText } = render(<UserDetails {...mockProps} />);
    expect(getByText(mockProps.name)).toBeInTheDocument();
  });

  it('renders the social media handle correctly', () => {
    const { getByText } = render(<UserDetails {...mockProps} />);
    expect(getByText(mockProps.socialMediaHandle)).toBeInTheDocument();
  });

  it('renders the bio correctly', () => {
    const { getByText } = render(<UserDetails {...mockProps} />);
    expect(getByText(mockProps.bio)).toBeInTheDocument();
  });

  it('renders the location correctly', () => {
    const { getByText } = render(<UserDetails {...mockProps} />);
    expect(getByText(mockProps.location)).toBeInTheDocument();
  });

  it('renders the website link correctly', () => {
    const { getByText } = render(<UserDetails {...mockProps} />);
    expect(getByText(mockProps.website)).toHaveAttribute('href', '#');
  });

  it('does not render if any prop is undefined', () => {
    const { queryByText } = render(
      <UserDetails
        name={undefined}
        socialMediaHandle={undefined}
        bio={undefined}
        location={undefined}
        website={undefined}
      />
    );

    expect(queryByText('John Doe')).not.toBeInTheDocument();
    expect(queryByText('@johndoe')).not.toBeInTheDocument();
    expect(queryByText('Lorem ipsum dolor sit amet.')).not.toBeInTheDocument();
    expect(queryByText('New York, USA')).not.toBeInTheDocument();
    expect(queryByText('https://johndoe.com')).not.toBeInTheDocument();
  });
});
