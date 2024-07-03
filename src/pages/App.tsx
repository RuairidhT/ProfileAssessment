import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="container mx-auto my-4">
      <p className="p-2">Select a user to view their details:</p>

      <div className="inline-flex p-2">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
          <Link to="/1">User 1</Link>
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          <Link to="/2">User 2</Link>
        </button>
      </div>
    </div>
  );
}
