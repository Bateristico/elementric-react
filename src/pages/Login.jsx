import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import VerificationForm from '../components/VerificationForm';
import { useSignup } from '../hooks/useSignup';

import logoDarkMode from '../assets/elementric-logo-white.png';

const Login = () => {
  const [step, setStep] = useState(1); // two step login
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { signup, isPending, error, getVerificationCode } = useSignup();

  const handleSubmitPhone = (e) => {
    e.preventDefault();
    // call API to send a verification code to the entered phone number
    getVerificationCode(countryCode, phoneNumber);
    setStep(2);
  };

  const handleSubmitVerificationCode = (e) => {
    e.preventDefault();
    // Here you can call API to verify the verification code
    console.log('Phone number: ', `${countryCode}${phoneNumber}`);
    console.log('Verification code: ', verificationCode);
    signup(countryCode, phoneNumber, verificationCode);
    setIsLoggedIn(true);
  };

  return (
    <div>
      {step === 1 ? (
        <LoginForm
          setCountryCode={setCountryCode}
          setPhoneNumber={setPhoneNumber}
          handleSubmitPhone={handleSubmitPhone}
          logo={logoDarkMode}
        />
      ) : (
        <VerificationForm
          setVerificationCode={setVerificationCode}
          handleSubmitVerificationCode={handleSubmitVerificationCode}
          logo={logoDarkMode}
        />
      )}
    </div>
  );
};

export default Login;
