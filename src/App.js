import React from 'react';
import { Dashboard, Login } from './pages';
import './App.css';
const authToken = sessionStorage.getItem('authToken');

const App = () => {
  return <div>{!authToken ? <Login /> : <Dashboard />}</div>;
};

export default App;
