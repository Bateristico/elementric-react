import React from 'react';

const VerificationForm = ({
  setVerificationCode,
  logo,
  handleSubmitVerificationCode,
}) => {
  return (
    <div className="mt-24">
      <div className="flex flex-col justify-center ">
        <form
          className="max-w-[400px] w-full mx-auto p-8 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-lg"
          onSubmit={handleSubmitVerificationCode}
        >
          <div className="flex justify-center mb-2">
            <img
              src={logo}
              alt="elementric_logo"
              style={{ width: '200px', height: 'auto' }}
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2 mt-10">
            <label>Enter SMS Code</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              onChange={(e) => setVerificationCode(e.target.value)}
            />
          </div>
          <div className="flex justify-end text-gray-400 py-2">
            <a className="underline decoration-solid " href="/">
              Resend SMS
            </a>
          </div>
          <button
            className="w-full my-5 py-2 bg-amber-500 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/10 text-white font-semibold rounded-lg"
            onClick={() => {}}
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerificationForm;
