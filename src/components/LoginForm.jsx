import React, { useState } from 'react';

const LoginForm = ({ setStep, setCountryCode, setPhoneNumber, logo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can call API to send a validation code to the entered phone number
    setStep(2);
  };

  return (
    <div className="mt-24">
      <div className="flex flex-col justify-center ">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto p-8 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-lg"
        >
          <div className="flex justify-center mb-2">
            <img
              src={logo}
              alt="elementric_logo"
              style={{ width: '200px', height: 'auto' }}
            />
          </div>
          <h2 className="text-4x1 dark:text-white font-bold text-center">
            LOG IN
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Country Code</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              onChange={(e) => setCountryCode(e.target.value)}
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Phone Number</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" />
              Remember Me
            </p>
          </div>
          <button
            className="w-full my-5 py-2 bg-amber-500 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/10 text-white font-semibold rounded-lg"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
