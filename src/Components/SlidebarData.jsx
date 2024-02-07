import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { MdOutlineSell } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";

export const SidebarData = [
  {
    title: 'HOME',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'BUY',
    path: '/reports',
    icon: <BsBuildings />,
    cName: 'nav-text'
  },
  {
    title: 'SELL',
    path: '/products',
    icon: <MdOutlineSell />,
    cName: 'nav-text'
  },
  {
    title: 'TEAM',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'CONTACT',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
]
export const SidebarDataBottom = [
  // Adding social media links
  {
    path: 'https://facebook.com',
    icon: <FaIcons.FaFacebook />,
    cName: 'nav-text',
    external: true // Indicates this is an external link
  },
  {
    path: 'https://instagram.com',
    icon: <FaIcons.FaInstagram />,
    cName: 'nav-text',
    external: true
  },
  {
    path: 'mailto:youremail@example.com',
    icon: <FaIcons.FaEnvelope />,
    cName: 'nav-text',
    external: true
  },
  {
    path: 'tel:+1234567890',
    icon: <FaIcons.FaPhone />,
    cName: 'nav-text',
    external: true
  },
];
