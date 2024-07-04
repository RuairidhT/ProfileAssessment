import { describe, it, expect } from 'vitest';
import axios from 'axios';
import axiosMock from 'axios-mock-adapter';
import { Params } from 'react-router-dom';
import { User } from '../types';
import { getUser } from './users';

const mock = new axiosMock(axios);

describe('getUser', () => {
  it('should return user data when userId matches', async () => {
    const userId = '1';
    const mockUser: User = {
      id: 1,
      name: 'John Doe',
      socialMediaHandle: '@johndoe',
      profileImgSrc: 'http://website.com/profile.jpg',
      bio: 'Lorem ipsum dolor sit amet.',
      location: 'Somewhere',
      website: 'http://website.com',
    };
    mock.onGet(`http://localhost:3000/user/${userId}`).reply(200, mockUser);

    const params: Params<string> = { userId };
    const user = await getUser(params);

    expect(user).toEqual(mockUser);
  });

  it('should return null when userId does not match', async () => {
    const userId = '2';
    const mockUser: User = {
      id: 1,
      name: 'John Doe',
      socialMediaHandle: '@johndoe',
      profileImgSrc: 'http://website.com/profile.jpg',
      bio: 'Lorem ipsum dolor sit amet.',
      location: 'Somewhere',
      website: 'http://website.com',
    };
    mock.onGet(`http://localhost:3000/user/${userId}`).reply(200, mockUser);

    const params: Params<string> = { userId };
    const user = await getUser(params);

    expect(user).toBeNull();
  });

  it('should throw an error when the request fails', async () => {
    const userId = '1';
    mock.onGet(`http://localhost:3000/user/${userId}`).reply(500);

    const params: Params<string> = { userId };

    await expect(getUser(params)).rejects.toThrow(
      'Request failed with status code 500'
    );
  });
});
