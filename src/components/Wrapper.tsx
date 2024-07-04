import { Link, Outlet } from 'react-router-dom';

export const Wrapper = () => {
  return (
    <div className="container mx-auto my-4">
      <div className="inline-flex p-2">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
          <Link to="/1">User 1</Link>
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          <Link to="/2">User 2</Link>
        </button>
      </div>
      <Outlet />
    </div>
  );
};
