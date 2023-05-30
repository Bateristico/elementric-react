import React from 'react';
import { BsFillBuildingFill } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Button } from '../components';
import { MapWidget } from '../components';
import { dashboardData } from '../data/userDashboardData';
import { useStateContext } from '../context/ContextProvider';

const Home = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-24">
      {/* Total bulding section  */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Total Buildings</p>
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
          {dashboardData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2x1"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2x1 opacity-0.9 rounded-full p-4 hover:drop-shadow-x1"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
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
  );
};

export default Home;
// flex justify-items-center justify-center
// bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2x1 md:w-780
/*
<div className="flex justify-between">
<p className="font-semibold text-xl">Localization</p>
<div className="flex items-center gap-4">
  <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
    <span>
      <GoPrimitiveDot />
    </span>
  </p>
</div>
</div>
*/
