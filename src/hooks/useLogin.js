import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthContext } from './useAuthContext';

const { REACT_APP_BASE_URL: BASE_URL } = process.env;

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  // send SMS API call
  const getVerificationCode = async (countryCode, phoneNumber) => {
    setError(null);
    setIsPending(true);

    try {
      const body = {
        countryCode,
        phoneNumber: phoneNumber.toString(),
      };
      const response = await axios.post(
        `${BASE_URL}/auth/password-less/start`,
        body
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };

  // verification SMS API call
  const signIn = async (countryCode, phoneNumber, verificationCode) => {
    setError(null);
    setIsPending(true);
    try {
      const body = {
        countryCode,
        phoneNumber: phoneNumber.toString(),
        verificationCode: verificationCode.toString(),
      };
      console.log(countryCode, phoneNumber, verificationCode);
      const response = await axios.post(
        `${BASE_URL}/auth/password-less/token`,
        body
      );
      console.log(response.data);
      const { token, refreshToken } = response.data;

      // dispatch verification action (logged in)
      dispatch({
        type: 'LOGIN',
        payload: {
          token,
          refreshToken,
        },
      });
      sessionStorage.setItem('authToken', token);

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

  return { error, isPending, signIn, getVerificationCode };
};
