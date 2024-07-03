import axios from 'axios';
import { Params } from 'react-router-dom';
import { User } from '../types';

export async function getUser(params: Params<string>): Promise<User> {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${params.userId}`
    );
    if (+params.userId! !== +response.data.id) {
      return null;
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}
