import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const UserSidebarData = [
  {
    title: 'Welcome',
    path: '/welcome',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Book Flight',
    path: '/searchFlight',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
];
