import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Table.scss';

const Table = ({ answer, bonusNumber }) => {
  const noWinningTotal = useRef();
  const noWinningMessage = useRef();
  const WinningPrice = useRef();
  const [message, setMessage] = useState('축하합니다!');
  let winningSum = 0;

  useEffect(() => {
    if (winningSum === 0) {
      setMessage('아쉽게도,');
      noWinningTotal.current.innerHTML = '';
      noWinningMessage.current.innerHTML = '';
      WinningPrice.current.innerHTML = '낙첨되었습니다.';
      WinningPrice.current.style.color = 'black';
    } else {
      setMessage('축하합니다!');
      noWinningTotal.current.innerHTML = '총';
      WinningPrice.current.innerHTML = winningSum.toLocaleString() + '원';
      WinningPrice.current.style.color = '#047bc3';
      noWinningMessage.current.innerHTML = '당첨';
    }
  }, [winningSum]);

  const balls = [
    [3, 11, 29, 31, 39, 40],
    [12, 17, 25, 33, 34, 38],
    [7, 15, 19, 37, 39, 41],
    [6, 10, 18, 29, 37, 44], // 1등
    [1, 4, 29, 39, 43, 45],
    // [6, 10, 18, 29, 37, 11], // 2등
    // [6, 10, 18, 29, 37, 43], // 3등
    // [6, 18, 29, 37, 39, 41], // 4등
    // [18, 29, 37, 39, 41, 45], // 5등
  ];

  const color = {
    number_10: 'rgb(228, 168, 22)',
    number_20: 'rgb(25, 148, 218)',
    number_30: 'rgb(232, 99, 82)',
    number_40: 'rgb(143, 143, 143)',
    number_50: 'rgb(91, 181, 68)',
  };

  return (
    <>
      <div className="congratulations">
        <p>{message}</p>
        <span ref={noWinningTotal}>총</span>
        <span ref={WinningPrice}>원</span>
        <span ref={noWinningMessage}>당첨</span>
      </div>
      <div className="table">
        <table>
          <colgroup>
            <col style={{ width: '8%' }} />
            <col style={{ width: '16%' }} />
            <col />
          </colgroup>
          <tbody>
            {balls.map((ball, i) => {
              const index = String.fromCharCode(i + 65);
              let rank = '낙첨';
              let correctNum = 0;

              {
                ball.map((num) => {
                  if (answer.includes(num)) {
                    correctNum++;
                  }
                });

                if (correctNum >= 6) {
                  rank = '1등당첨';
                  winningSum += 2043589449;
                } else if (correctNum >= 5 && ball.includes(bonusNumber)) {
                  rank = '2등당첨';
                  winningSum += 55163461;
                } else if (correctNum >= 5) {
                  rank = '3등당첨';
                  winningSum += 1503340;
                } else if (correctNum >= 4) {
                  rank = '4등당첨';
                  winningSum += 50000;
                } else if (correctNum >= 3) {
                  rank = '5등당첨';
                  winningSum += 5000;
                }
              }

              return (
                <tr key={i}>
                  <th scope="row">{index}</th>
                  <td className="rank">{rank}</td>
                  <td className="first">
                    {ball.map((num, i) => {
                      if (0 < num && num <= 10 && answer.includes(num)) {
                        return (
                          <span className="clr clr1 under_10" key={i}>
                            {num}
                          </span>
                        );
                      } else if (
                        10 < num &&
                        num <= 20 &&
                        answer.includes(num)
                      ) {
                        return (
                          <span className="clr clr1 under_20" key={i}>
                            {num}
                          </span>
                        );
                      } else if (
                        20 < num &&
                        num <= 30 &&
                        answer.includes(num)
                      ) {
                        return (
                          <span className="clr clr1 under_30" key={i}>
                            {num}
                          </span>
                        );
                      } else if (
                        30 < num &&
                        num <= 40 &&
                        answer.includes(num)
                      ) {
                        return (
                          <span className="clr clr1 under_40" key={i}>
                            {num}
                          </span>
                        );
                      } else if (
                        40 < num &&
                        num <= 45 &&
                        answer.includes(num)
                      ) {
                        return (
                          <span className="clr clr1 under_45" key={i}>
                            {num}
                          </span>
                        );
                      } else if (correctNum === 5 && bonusNumber === num) {
                        return (
                          <span className="clr clr1 bonus_number" key={i}>
                            {num}
                          </span>
                        );
                      } else {
                        return (
                          <span className="clr clr1" key={i}>
                            {num}
                          </span>
                        );
                      }
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="check-lottery">
          -QR 당첨확인은 보조 확인수단이므로 반드시 실물과 대조하시기 바라며,
          당첨금은 실물 복권소지자에게 지급합니다.
        </p>
      </div>
    </>
  );
};

export default Table;
