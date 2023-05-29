import React from 'react';
import { Dashboard, Login } from './pages';

import { useStateContext } from './context/ContextProvider';
import './App.css';
import { useAuthContext } from './hooks/useAuthContext';

const App = () => {
  const { currentMode } = useStateContext();

  const { user } = useAuthContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      {!user ? (
        <>
          <div>
            <Login />
          </div>
        </>
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default App;
