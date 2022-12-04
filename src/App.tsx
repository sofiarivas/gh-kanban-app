import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import AppContext, { defaultContext } from './context';

function App() {
  const [branches, setBranches] = React.useState(defaultContext.branches);
  const [repository, setRepository] = React.useState(defaultContext.repository);
  const contextValue = { branches, setBranches, repository, setRepository };

  return (
    <AppContext.Provider value={contextValue}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
