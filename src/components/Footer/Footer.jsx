import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="call">
          <div className="left">
            <Link to="tel:1588-6450" className="link">
              <div className="number">
                <img src="./img/headphone.png" alt="" />
                <h3>1588-6450</h3>
              </div>
            </Link>
            <div className="time">
              <p>월-금, 일요일 : 06:00 - 24:00</p>
              <p>토요일 : 06:00 - 21:00</p>
            </div>
          </div>
          <div className="right">
            <div className="number">
              <img src="./img/document.png" alt="" />
              <h3>1대1 상담</h3>
            </div>
            <div className="time">
              <p>월-금 : 09:00 - 18:00</p>
              <p>토,일 및 법정공휴일 휴무</p>
            </div>
          </div>
        </div>

        <div className="buttons">
          <Link
            to="https://m.dhlottery.co.kr/user.do?method=loginm"
            className="link">
            <button className="login">로그인</button>
          </Link>

          <Link
            to="https://m.dhlottery.co.kr/counsel.do?method=callCenter"
            className="link">
            <button className="center">고객센터</button>
          </Link>
        </div>

        <div className="etc">
          <Link
            to="https://m.dhlottery.co.kr/clause.do?method=footerPrivate"
            className="link">
            <span>개인정보처리방침</span>
          </Link>
          <span> | </span>
          <Link
            to="https://m.dhlottery.co.kr/clause.do?method=mobileUseClause"
            className="link">
            <span>이용약관</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
