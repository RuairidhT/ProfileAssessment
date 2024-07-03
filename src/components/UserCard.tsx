import { User } from '../types';
import { Image } from './Image';
import { UserActions } from './UserActions';
import { UserDetails } from './UserDetails';

type Props = {
  user: User;
};

export const UserCard = ({ user }: Props) => {
  return (
    <div className="mt-10 max-w-sm mx-auto bg-white dark:bg-slate-700 dark:text-slate-100 rounded-xl overflow-hidden md:max-w-3xl">
      <div className="md:flex">
        <Image profileImgSrc={user?.profileImgSrc} />
        <div className="py-2 text-center">
          <UserDetails
            name={user?.name}
            socialMediaHandle={user?.socialMediaHandle}
            bio={user?.bio}
            location={user?.location}
            website={user?.website}
          />
          <UserActions />
        </div>
      </div>
    </div>
  );
};
