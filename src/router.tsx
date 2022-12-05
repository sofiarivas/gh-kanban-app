import BoardPage from './pages/BoardPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
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