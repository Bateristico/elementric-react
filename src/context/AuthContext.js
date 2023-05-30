import { createContext, useEffect, useReducer } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  // user settings
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  // useEffect(() => {}, []);
  console.log('AuthContext state:', state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
