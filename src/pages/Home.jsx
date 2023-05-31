import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsFillBuildingFill, BsHouseHeart } from 'react-icons/bs';
import { Button } from '../components';
import { MapWidget } from '../components';
import { useStateContext } from '../context/ContextProvider';
import { FiBarChart } from 'react-icons/fi';
import {
  MdOutlineSupervisorAccount,
  MdOutlineApartment,
  MdOutlineWaterDrop,
} from 'react-icons/md';
import { HiOutlineDeviceMobile } from 'react-icons/hi';

const { REACT_APP_BASE_URL: BASE_URL } = process.env;
const authToken = sessionStorage.getItem('authToken');

const Home = () => {
  const { currentColor, currentOrganization } = useStateContext();
  // API related code (MUST BE CHANGED TO CONTEXT)
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/organisations/${currentOrganization}/status`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        const dataItems = [
          {
            icon: <MdOutlineApartment />,
            title: 'Buildings',
            amount: response.data.numberOfBuildings,
            iconColor: '#FFFFFF',
            iconBg: '#61ebf5',
            pcColor: 'red-600',
          },
          {
            icon: <BsHouseHeart />,
            title: 'Apartments',
            amount: response.data.numberOfApartments,
            iconColor: '#FFFFFF',
            iconBg: '#f59134',
            pcColor: 'green-600',
          },
          {
            icon: <MdOutlineSupervisorAccount />,
            title: 'Users',
            amount: response.data.numberOfUsers,
            iconColor: '#FFFFFF',
            iconBg: '#f08cca',
            pcColor: 'green-600',
          },
          {
            icon: <HiOutlineDeviceMobile />,
            title: 'Devices',
            amount: response.data.numberOfDevices,
            iconColor: '#FFFFFF',
            iconBg: '#69a8ec',
            pcColor: 'red-600',
          },
          {
            icon: <FiBarChart />,
            title: 'Connectivity Issues',
            amount: response.data.numberOfOngoingConnectivityIssues,
            iconColor: '#FFFFFF',
            iconBg: '#f58392',
            pcColor: 'red-600',
          },
          {
            icon: <MdOutlineWaterDrop />,
            title: 'Water Leaks (Past 7 days)',
            amount: response.data.numberOfWaterLeaksInPast7Days,
            iconColor: '#FFFFFF',
            iconBg: '#5ebe9a',
            pcColor: 'red-600',
          },
        ];

        setData(dataItems);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [currentOrganization]);

  return (
    <>
      {!isPending ? (
        <div className="mt-24">
          {/* Total bulding section  */}
          <div className="flex flex-wrap lg:flex-nowrap justify-center ">
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-white">Total Buildings</p>
                  <p className="text-2xl">10</p>
                </div>
                <button
                  type="button"
                  style={{ backgroundColor: currentColor }}
                  className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
                >
                  <BsFillBuildingFill />
                </button>
              </div>
              <div className="mt-6">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Details"
                  borderRadius="10px"
                  size="md"
                />
              </div>
            </div>
            {/* Items section  */}
            <div className="flex m-3 flex-wrap justify-center gap-2 items-center">
              {data.map((item) => (
                <div
                  key={item.title}
                  className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2x1 flex flex-col items-center"
                >
                  <div className="flex items-center justify-center">
                    <button
                      type="button"
                      style={{
                        color: item.iconColor,
                        backgroundColor: item.iconBg,
                      }}
                      className="text-4xl opacity-0.9 rounded-full p-4 hover:drop-shadow-x1"
                    >
                      {item.icon}
                    </button>
                    <p className="text-lg font-semibold ml-2">{item.amount}</p>
                  </div>
                  <p className="text-sm text-gray-400 mt-3 text-center">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* New Section */}
          <div className="">
            <div className="flex justify-center">
              <MapWidget />
            </div>
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default Home;
