import React from 'react';
import {
  AiOutlineHome,
  AiOutlineNotification,
  AiOutlineLogin,
  AiOutlineBgColors,
} from 'react-icons/ai';
import { FiUsers, FiSettings } from 'react-icons/fi';
import { BsBuildings } from 'react-icons/bs';
import { SlOrganization, SlMap } from 'react-icons/sl';
import { MdWebhook, MdPayment } from 'react-icons/md';

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Home',
        icon: <AiOutlineHome />,
      },
      {
        name: 'Organization',
        icon: <SlOrganization />,
      },
      {
        name: 'Maps',
        icon: <SlMap />,
      },
      {
        name: 'Buildings',
        icon: <BsBuildings />,
      },
      {
        name: 'Users',
        icon: <FiUsers />,
      },
    ],
  },

  {
    title: 'App',
    links: [
      {
        name: 'Events',
        icon: <AiOutlineNotification />,
      },
      {
        name: 'Webhooks',
        icon: <MdWebhook />,
      },
    ],
  },
  {
    title: 'Settings',
    links: [
      {
        name: 'Settings',
        icon: <FiSettings />,
      },
      {
        name: 'Color-picker',
        icon: <AiOutlineBgColors />,
      },
      {
        name: 'Billing',
        icon: <MdPayment />,
      },
      {
        name: 'Login',
        icon: <AiOutlineLogin />,
      },
    ],
  },
];
