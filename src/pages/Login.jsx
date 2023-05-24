import React from 'react';
import logoDarkMode from '../img/elementric-logo-white.png';

const Login = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-col justify-center ">
        <form className="max-w-[400px] w-full mx-auto p-8 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-lg">
          <div className="flex justify-center mb-2">
            <img
              src={logoDarkMode}
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
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Phone Number</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="number"
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" />
              Remember Me
            </p>
            <a className="underline decoration-solid " href="/">
              Resend SMS
            </a>
          </div>
          <button className="w-full my-5 py-2 bg-amber-500 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/10 text-white font-semibold rounded-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
