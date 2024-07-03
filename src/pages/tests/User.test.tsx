import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Users } from '../User';
import { User } from '../../types';
import * as ReactRouterDom from 'react-router-dom';

// Mock the useLoaderData hook from react-router-dom
vi.mock('react-router-dom', () => ({
  useLoaderData: vi.fn(),
}));

const mockedUseLoaderData = ReactRouterDom.useLoaderData as jest.Mock;

describe('Users', () => {
  it('renders the "user not found" message when no user is provided', () => {
    mockedUseLoaderData.mockReturnValue(null);

    const { getByText } = render(<Users />);
    const messageElement = getByText(
      /Looks like the user id doesn't exist, try another :\)/i
    );

    expect(messageElement).toBeInTheDocument();
  });

  it('renders the UserCard component when a user is provided', () => {
    const mockUser: User = {
      id: 1,
      name: 'John Doe',
      profileImgSrc: 'https://example.com/johndoe.jpg',
      socialMediaHandle: '@johndoe',
      bio: 'Lorem ipsum dolor sit amet.',
      location: 'New York, USA',
      website: 'https://johndoe.com',
    };

    mockedUseLoaderData.mockReturnValue(mockUser);

    const { getByText } = render(<Users />);

    const nameElement = getByText(mockUser.name);
    const bioElement = getByText(mockUser.bio);

    expect(nameElement).toBeInTheDocument();
    expect(bioElement).toBeInTheDocument();
  });
});
