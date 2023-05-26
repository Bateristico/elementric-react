import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import ValidationForm from '../components/ValidationForm';

import logoDarkMode from '../assets/elementric-logo-white.png';

const Login = () => {
  const [step, setStep] = useState(1); // two step login
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validationCode, setValidationCode] = useState('');

  const handleSubmitPhone = (e) => {
    e.preventDefault();
    // call API to send a validation code to the entered phone number
    setStep(2);
  };

  const handleSubmitValidationCode = (e) => {
    e.preventDefault();
    // Here you can call API to verify the validation code
    console.log('Phone number: ', `${countryCode}${phoneNumber}`);
    console.log('Validation code: ', validationCode);
  };

  return (
    <div>
      {step === 1 ? (
        <LoginForm
          setStep={setStep}
          setCountryCode={setCountryCode}
          setPhoneNumber={setPhoneNumber}
          logo={logoDarkMode}
        />
      ) : (
        <ValidationForm
          setValidationCode={setValidationCode}
          logo={logoDarkMode}
        />
      )}
    </div>
  );
};

export default Login;
