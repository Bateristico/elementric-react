import { useState } from 'react';
import axios from 'axios';

const { REACT_APP_API_JWT: accessToken, REACT_APP_BASE_URL: BASE_URL } =
  process.env;

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

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
        body,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };

  // validate SMS API call
  const signup = async (countryCode, phoneNumber, verificationCode) => {
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
        body,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log('verification response', response);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup, getVerificationCode };
};
