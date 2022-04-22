import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const AdminSidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Flight',
  //   path: '/reports',
  //   icon: <IoIcons.IoIosRepeat />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Passenger Details',
    path: '/passengerdetails',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Flights',
    path: '/flight/allFlight',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Add Flight',
  //   path: '/addflight',
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Bookings',
    path: '/viewbookings',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Airports',
    path: '/viewairports',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Add Airport',
  //   path: '/addairport',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'View Flight Schedule',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Add Flight Schedule',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Passenger Details',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // }
];
