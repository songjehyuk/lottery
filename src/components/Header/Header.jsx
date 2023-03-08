import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="container">
        <Link to="/navbar" className="link">
          <img className="menu" src="../img/hamburger.png" alt="" />
        </Link>

        <Link to="/" className="link">
          <img className="logo" src="../img/logo.png" alt="" />
        </Link>
        <Link
          to="https://m.dhlottery.co.kr/user.do?method=loginm"
          className="link">
          <img className="user" src="../img/user.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
