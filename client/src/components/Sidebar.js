import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { baseURL } from '../constants';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const NAMESPACE = '/dashboard';

const Sidebar = () => {
  const menu = [
    {
      text: 'Home',
      icon: '</>',
      link: `${NAMESPACE}/`,
    },
    {
      text: 'Portfolio',
      icon: '</>',
      link: `${NAMESPACE}/portfolio`,
    },
    {
      text: 'Loan',
      icon: '</>',
      link: `${NAMESPACE}/loan`,
    },
    {
      text: 'Settings',
      icon: '</>',
      link: '#',
    },
    {
      text: 'Logout',
      icon: '<()>',
      link: '#',
    },
  ];
  const [name, setName] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${baseURL}/user/profile`, {
        headers: {
          'x-access-token': localStorage.getItem('token'),
        },
      });
      setName(res.data.data.firstname);
    };
    fetchData();
  });
  return (
    <div className="h-screen bg-blue-700">
      <p className="text-white text-center">Hi {name}</p>

      <ul className="w-3/5 p-4 rounded-sm h-full">
        {menu.map((item, i) => {
          return (
            <li
              key={i}
              className="p-2 m-3 border-white border-2 text-white font-lg cursor-pointer text-center"
            >
              <Link to={item.link} className="text-white no-underline">
                <span className="mx-2">{item.icon}</span>
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
