import React from 'react';
import Table from '../Table/Table';
import './Main.scss';
import { Link } from 'react-router-dom';

const Main = () => {
  // 당첨번호
  const answer = [6, 10, 18, 29, 37, 44];

  // 보너스번호
  const bonusNumber = 11;

  // 첫 로또일
  const firstLotteryDate = '2002.12.07';

  // 첫 로또일 기준으로 현재 몇회차인지 계산
  let episode = Math.ceil(
    (new Date() - new Date(firstLotteryDate)) / (1000 * 60 * 60 * 24 * 7)
  );

  // 추첨일
  let lotteryDate;

  // 추첨일 계산 함수
  const getLotteryDate = () => {
    const date = new Date();
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    let today = week[date.getDay()];

    // 최근 토요일이 3일 전이었다면 count는 3이 된다.
    let count = 0;
    // 하루를 ms로 계산한 값, day에 count를 곱하면 3일 전, 3일 후와 같은 날짜를 얻을 수 있음
    const day = 86400000;
    // 최근 토요일이 몇일 전인지 count에 입력
    switch (today) {
      case '일':
        count = 1;
        break;
      case '월':
        count = 2;
        break;
      case '화':
        count = 3;
        break;
      case '수':
        count = 4;
        break;
      case '목':
        count = 5;
        break;
      case '금':
        count = 6;
        break;
      default:
        count = 0;
        break;
    }

    // 오늘이 토요일이지만 아직 추첨시간인 오후 8시 35분이 안됐다면
    // 저번주 토요일 추첨결과를 보여주기 위해 count에 7을 더함
    if (today === '토' && date.getHours() < 20 && date.getMinutes() < 35) {
      count = count + 7;
    }

    // 가장 최근 추첨일을 계산해줌
    lotteryDate =
      new Date(Date.now() - count * day).getFullYear() +
      '-' +
      (new Date(Date.now() - count * day).getMonth() + 1) +
      '-' +
      new Date(Date.now() - count * day).getDate();

    return lotteryDate;
  };

  getLotteryDate();

  return (
    <div className="main">
      <div className="container">
        <div className="popup-container">
          <div>구매복권 당첨결과</div>
          <div>
            <Link
              to="https://m.dhlottery.co.kr/images/mobile/event/qr_m_banner_03.jpg"
              className="link">
              복권당첨금 과세 기준변경안내
            </Link>
          </div>
        </div>
        <div className="result">
          <h1 className="title">
            <span>로또 6/45</span>
            <span>1057회</span>
          </h1>
          <span className="date">{lotteryDate}</span>
          <span className="date">추첨</span>
          <h3 className="number">
            <div className="number-title">당첨번호</div>
            <div className="number-list">
              <div>{answer[0]}</div>
              <div>{answer[1]}</div>
              <div>{answer[2]}</div>
              <div>{answer[3]}</div>
              <div>{answer[4]}</div>
              <div>{answer[5]}</div>
              <div>+</div>
              <div>{bonusNumber}</div>
            </div>
          </h3>
          <Table answer={answer} bonusNumber={bonusNumber} />
          <Link
            to="https://apps.apple.com/kr/app/%EB%8F%99%ED%96%89%EB%B3%B5%EA%B6%8C/id1444390490"
            className="link">
            <div className="application">
              <img
                src="https://play-lh.googleusercontent.com/_Kb4Gr4ZSxlq-k6xdR5to4ZBDycF57FPzmIAimwce0SRvsVg9FO5CV7tq-5OtN4zYhm2=w480-h960-rw"
                alt=""
              />
              <p>
                동행복권 앱 다운받고
                <br />
                복권정보와 다양한 알림서비스를 받아보세요.
              </p>
            </div>
          </Link>
          <div className="empty"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
