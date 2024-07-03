type Props = {
  name: string | undefined;
  socialMediaHandle: string | undefined;
  bio: string | undefined;
  location: string | undefined;
  website: string | undefined;
};

export const UserDetails = ({
  name,
  socialMediaHandle,
  bio,
  location,
  website,
}: Props) => {
  return (
    <div className="px-8">
      <div className="text-3xl p-2 font-black">{name}</div>
      <div className="tracking-wide text-m font-light">
        <p className="text-xs font-thin">{socialMediaHandle}</p>
        <p className="pt-6 pb-2 h-32">{bio}</p>
        <p className="py-2 text-s">{location}</p>
        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
        >
          {website}
        </a>
      </div>
    </div>
  );
};
