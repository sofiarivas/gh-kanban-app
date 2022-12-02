import App from './App';
import RepositoryBoard from './RepositoryBoard';
import {
    createBrowserRouter,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'board',
    element: <RepositoryBoard />
  }
]);

export default router;