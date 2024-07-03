type Props = {
  title: string;
};

export const Button = ({ title }: Props) => {
  return (
    <button className="bg-indigo-600 dark:bg-slate-800 hover:dark:bg-slate-500 hover:bg-indigo-800 text-white py-2 px-4 rounded-full w-full">
      {title}
    </button>
  );
};
