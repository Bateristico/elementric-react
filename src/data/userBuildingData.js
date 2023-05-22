import { FiBarChart } from 'react-icons/fi';
import { MdOutlineSupervisorAccount, MdOutlineApartment } from 'react-icons/md';
import { HiOutlineDeviceMobile } from 'react-icons/hi';
import { AiOutlineBell } from 'react-icons/ai';

export const buildingData = [
  {
    icon: <MdOutlineApartment />,
    amount: '15',
    percentage: '-4%',
    title: 'Aparments',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '26',
    percentage: '+23%',
    title: 'Users',
    iconColor: 'rgb(27, 28, 28)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineDeviceMobile />,
    amount: '44',
    percentage: '+38%',
    title: 'Devices',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '39,354',
    percentage: '2',
    title: 'Connectivity Issues',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
  {
    icon: <AiOutlineBell />,
    amount: '3',
    percentage: '-12%',
    title: 'Events',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(227, 237, 252)',
    pcColor: 'red-600',
  },
];
