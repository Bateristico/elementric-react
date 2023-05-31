import React from 'react';
import { useLogout } from '../hooks/useLogout';
import { motion } from 'framer-motion';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';
import avatar from '../assets/avatar_unknown.jpg';

const UserProfile = () => {
  const { currentColor } = useStateContext();
  const { logout } = useLogout();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96"
    >
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">Camilo Saa</p>
          <p className="text-gray-500 text-sm dark:text-gray-400">Owner</p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            camilo.saa@gmail.com
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-center">
        <button
          className={`p-3  w-60  hover:drop-shadow-xl hover:bg-light-gray`}
          style={{
            backgroundColor: currentColor,
            color: 'white',
            borderRadius: '10px',
          }}
          onClick={logout}
        >
          Log out
        </button>
      </div>
    </motion.div>
  );
};

export default UserProfile;
