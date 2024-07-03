import { useLoaderData } from 'react-router-dom';
import { User } from '../types';

export const Users = () => {
  const user = useLoaderData() as User;

  return <div>User: {JSON.stringify(user)}</div>;
};
