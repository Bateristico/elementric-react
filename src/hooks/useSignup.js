import { useState } from 'react';
import axios from 'axios';

const { REACT_APP_API_JWT: accessToken, REACT_APP_BASE_URL: BASE_URL } =
  process.env;

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (countryCode, phoneNumber, verificationCode) => {
    setError(null);
    setIsPending(true);

    try {
      // validate user
      const verificationBody = {
        countryCode,
        phoneNumber,
        verificationCode,
      };
      const response = await axios.post(
        `${BASE_URL}/password-less/token`,
        verificationBody,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log('validation response', response);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};
