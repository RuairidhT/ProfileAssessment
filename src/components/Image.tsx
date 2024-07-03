type Props = {
  profileImgSrc: string | undefined;
};

export const Image = ({ profileImgSrc }: Props) => {
  return (
    <div className="md:shrink-0">
      <div className="h-32 w-full object-cover md:h-full md:w-64 bg-slate-800" />
      <div className="mx-auto w-32 h-32 md:h-48 md:w-48 relative md:-mt-72 md:ml-40 -mt-16 border-2 border-white dark:border-slate-700 rounded-full overflow-hidden">
        <img
          className="object-cover object-center h-32 md:h-48"
          src={profileImgSrc}
          alt="profile Image"
        />
      </div>
    </div>
  );
};
