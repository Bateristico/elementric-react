import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import VerificationForm from '../components/VerificationForm';
import { useLogin } from '../hooks/useLogin';

import logoDarkMode from '../assets/elementric-logo-white.png';

const Login = () => {
  const [step, setStep] = useState(1); // two step login
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const { signIn, isPending, error, getVerificationCode } = useLogin(); // isPending for spinner and error on validation

  const handleSubmitPhone = (e) => {
    e.preventDefault();
    // call API to send a verification code to the entered phone number
    getVerificationCode(countryCode, phoneNumber);
    setStep(2);
  };

  const handleSubmitVerificationCode = (e) => {
    e.preventDefault();
    // call API to verify the verification code
    console.log('Phone number: ', `${countryCode}${phoneNumber}`);
    console.log('Verification code: ', verificationCode);
    signIn(countryCode, phoneNumber, verificationCode);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="mb-40">
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
    </div>
  );
};

export default Login;
