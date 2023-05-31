import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';
import apartment from '../assets/apartments 2.jpg';
import house from '../assets/houses.jpg';

const { REACT_APP_BASE_URL: BASE_URL } = process.env;
const authToken = sessionStorage.getItem('authToken');

const OrganizationSelector = () => {
  const { currentColor, setOrganization } = useStateContext();
  // API related code (MUST BE CHANGED TO CONTEXT)
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/organisations`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        // set icon based on the type
        const updatedData = response.data.map((item) => ({
          ...item,
          icon: item.type === 'Company' ? apartment : house,
        }));
        setData(updatedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // add spinner or skeleton component
  if (isLoading) {
    return <p>Loading data...</p>;
  }

  // add error snackbar
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mt-24">
      <div className="text-center py-10 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg">
        <h1 className="text-4xl w-69 mx-auto leading-normal font-bold mb-12">
          Select your organization
        </h1>
        <div className="flex justify-center gap-10 group">
          {data.map((item) => (
            <div
              key={item.name}
              className="bg-white/10 duration-200 group-hover:blur-sm hover:!blur-none cursor-pointer group-hover:scale-[0.85] hover:!scale-100 p-8 rounded-xl"
            >
              <img
                src={item.icon}
                alt="avatar"
                className="h-20 mx-auto rounded-2xl"
              />
              <h4 className="uppercase text-xl font-bold">{item.name}</h4>
              <p className="text-sm leading-7 my-3 font-light opacity-50">
                {item.type}
              </p>
              <button
                type="button"
                className="py-2.5 px-8 rounded-full"
                style={{ backgroundColor: currentColor }}
                onClick={() => setOrganization(item.id)}
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

export default OrganizationSelector;
