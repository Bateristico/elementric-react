import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthContext } from './useAuthContext';

const { REACT_APP_API_JWT: accessToken, REACT_APP_BASE_URL: BASE_URL } =
  process.env;

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);
    // sign the user out
    try {
      const response = await axios.post(`${BASE_URL}/auth/logout/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response.data);
      // dispatch logout action
      dispatch({ type: 'LOGOUT' });

      // clean up function
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (error) {
      // clean up function
      if (!isCancelled) {
        console.log(error.message);
        setError(error.message);
        setIsPending(false);
      }
    }
  };

  // prevent errors on unmounted components who already sent an async request
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return {
    logout,
    error,
    isPending,
    isCancelled,
  };
};
