import BoardPage from './BoardPage';
import ErrorPage from './ErrorPage';
import HomePage from './HomePage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'board',
    element: <BoardPage />
  },
]);

export default router;