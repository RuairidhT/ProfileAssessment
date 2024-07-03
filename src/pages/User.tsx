import { useLoaderData } from 'react-router-dom';
import { User } from '../types';
import { UserCard } from '../components/UserCard';

export const Users = () => {
  const user = useLoaderData() as User;

  if (!user) {
    return (
      <h1 className="text-center font-bold text-2xl p-6">
        Looks like the user id doesn't exist, try another :)
      </h1>
    );
  }

  return <UserCard user={user} />;
};
