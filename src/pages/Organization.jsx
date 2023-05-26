import React from 'react';

import { organizationData } from '../data/organizationData.';
import { useStateContext } from '../contexts/ContextProvider';

const Organization = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-24">
      <div className="text-center py-10 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg">
        <h1 className="text-4xl w-69 mx-auto leading-normal font-bold mb-12">
          Select your organization
        </h1>
        <div className="flex max-w-5xl mx-auto gap-8 group">
          {organizationData.map((item) => (
            <div className="bg-white/10 duration-200 group-hover:blur-sm hover:!blur-none cursor-pointer group-hover:scale-[0.85] hover:!scale-100 p-8 rounded-xl">
              <img
                src={item.icon}
                alt="avatar"
                className="h-20 mx-auto rounded-2xl"
              />
              <h4 className="uppercase text-xl font-bold">{item.title}</h4>
              <p className="text-sm leading-7 my-3 font-light opacity-50">
                {item.type}
              </p>
              <button
                type="button"
                className="py-2.5 px-8 rounded-full"
                style={{ backgroundColor: currentColor }}
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Organization;
