import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './Navbar.css';
import logo from '../assets/m2.png';

const Navbar = () => {
  const [currentDate, setCurrentDate] = useState(moment().format('LL'));
  const [currentTime, setCurrentTime] = useState(moment().format('LTS'));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment().format('LTS'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="navbar-title">Employees Activity Dashboard</span>
      </div>
      <div className="navbar-right">
        <div className="date">{currentDate}</div>
        <div className="time">{currentTime}</div>
      </div>
    </nav>
  );
};

export default Navbar;
