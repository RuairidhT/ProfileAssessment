import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './pages/App';
import { Users } from './pages/User';
import { getUser } from './api/users';
import { Wrapper } from './components/Wrapper';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Wrapper />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/:userId',
        element: <Users />,
        loader: async ({ params }) => {
          return await getUser(params);
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
