import React from 'react'
import {
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa'

export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
    icons: <FaHome />,
  },
  {
    id: 2,
    url: '/',
    text: 'User',
    icons: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/',
    text: 'Projects',
    icons: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/',
    text: 'Calender',
    icons: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '/',
    text: 'Documents',
    icons: <FaWpforms />,
  },
]
