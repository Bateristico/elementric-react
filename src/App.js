import React from 'react';
import { Dashboard, Login } from './pages';
import './App.css';
import { useAuthContext } from './hooks/useAuthContext';

const App = () => {
  const { user } = useAuthContext();
  const authToken = sessionStorage.getItem('authToken');
  console.log('auth token in app', authToken);
  return <div>{!user ? <Login /> : <Dashboard />}</div>;
};

export default App;
