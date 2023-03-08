import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="inner">
        <div className="btns">
          <Link to="/result" className="link">
            <img class="home-img" src="../../img/home.png" alt="" />
          </Link>
          <Link to="/" className="link">
            <img class="logo-img" src="../../img/logo.png" alt="" />
          </Link>
          <Link to="/result" className="link">
            <img class="close-img" src="../../img/cross.png" alt="" />
          </Link>
        </div>

        <div className="game-list">
          <h2>복권정보</h2>
          <ul>
            <li className="move-game">
              <Link to="/result" className="link">
                <img src="../../img/lotto645.png" alt="" />
                <div>로또6/45</div>
              </Link>
            </li>
            <li className="move-game">
              <Link
                to="https://m.dhlottery.co.kr/lotto720.do?method=pensionMoblieMain"
                className="link">
                <img src="../../img/lotto720.png" alt="" />
                <div>연금복권720+</div>
              </Link>
            </li>
            <li className="move-game">
              <Link
                to="https://m.dhlottery.co.kr/gameInfo.do?method=speettoGameMethod"
                className="link">
                <img src="../../img/spitto.png" alt="" />
                <div>스피또</div>
              </Link>
            </li>
            <li className="move-game">
              <Link
                to="https://m.dhlottery.co.kr/lottoControl.do?method=powerBallGameMainView"
                className="link">
                <img src="../../img/powerball.png" alt="" />
                <div>파워볼</div>
              </Link>
            </li>
            <li className="move-game">
              <Link
                to="https://m.dhlottery.co.kr/lottoControl.do?method=tripleLuckGameMainView"
                className="link">
                <img src="../../img/tripleluck.png" alt="" />
                <div>트리플럭</div>
              </Link>
            </li>
            <li className="move-game">
              <Link
                to="https://m.dhlottery.co.kr/lottoControl.do?method=speedKenoGameMainView"
                className="link">
                <img src="../../img/speedkino.png" alt="" />
                <div>스피드키노</div>
              </Link>
            </li>
            <li className="move-game">
              <Link
                to="https://m.dhlottery.co.kr/lottoControl.do?method=megaBingoGameMainView"
                className="link">
                <img src="../../img/megabingo.png" alt="" />
                <div>메가빙고</div>
              </Link>
            </li>
            <li className="move-game">
              <Link
                to="https://m.dhlottery.co.kr/lottoControl.do?method=hunterGameMainView"
                className="link">
                <img src="../../img/treasure.png" alt="" />
                <div>트레져헌터</div>
              </Link>
            </li>
            <li className="move-game">
              <Link
                to="https://m.dhlottery.co.kr/lottoControl.do?method=doubleJackGameMainView"
                className="link">
                <img src="../../img/midus.png" alt="" />
                <div>더블젝마이더스</div>
              </Link>
            </li>
            <li className="move-game">
              <Link
                to="https://m.dhlottery.co.kr/lottoControl.do?method=catchMeGameMainView"
                className="link">
                <img src="../../img/catchme.png" alt="" />
                <div>캐치미</div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="etc-menu">
          <ul>
            <li>
              <div>
                <h2>당첨결과</h2>
                {/* <img src="../../img/down.png" alt="" /> */}
              </div>
              <ul>
                <Link to="/result" className="link">
                  <li>로또6/45</li>
                </Link>
                <Link
                  to="https://m.dhlottery.co.kr/gameResult.do?method=win720"
                  className="link">
                  <li>연금복권720+</li>
                </Link>
                <Link
                  to="https://m.dhlottery.co.kr/gameResult.do?method=winList"
                  className="link">
                  <li>전자복권</li>
                </Link>
                <Link
                  to="https://m.dhlottery.co.kr/gameResult.do?method=statByNumber"
                  className="link">
                  <li>로또6/45 당첨통계</li>
                </Link>
                <Link
                  to="https://m.dhlottery.co.kr/gameResult.do?method=index720"
                  className="link">
                  <li>연금복권720+ 당첨통계</li>
                </Link>
                <Link
                  to="https://m.dhlottery.co.kr/gameResult.do?method=notReceiveInfo"
                  className="link">
                  <li>로또6/45 미수령 당첨금</li>
                </Link>
                <Link
                  to="https://m.dhlottery.co.kr/gameResult.do?method=highWin"
                  className="link">
                  <li>당첨자인터뷰</li>
                </Link>
              </ul>
            </li>

            <li>
              <div>
                <h2>판매점</h2>
                {/* <img src="../../img/down.png" alt="" /> */}
              </div>
              <ul>
                <Link
                  to="https://m.dhlottery.co.kr/store.do?method=sellerInfo645"
                  className="link">
                  <li>복권 판매점</li>
                </Link>

                <Link
                  to="https://m.dhlottery.co.kr/store.do?method=topStore&pageGubun=L645"
                  className="link">
                  <li>당첨 판매점</li>
                </Link>
              </ul>
            </li>

            <li>
              <div>
                <h2>이벤트</h2>
                {/* <img src="../../img/down.png" alt="" /> */}
              </div>
              <ul>
                <Link
                  to="https://m.dhlottery.co.kr/event.do?method=Eventend"
                  className="link">
                  <li>이벤트</li>
                </Link>
              </ul>
            </li>

            <li>
              <div>
                <h2>행복공감</h2>
                {/* <img src="../../img/down.png" alt="" /> */}
              </div>
              <ul>
                <Link
                  to="https://m.dhlottery.co.kr/happy.do?method=healthCultureRule"
                  className="link">
                  <li>건전한 복권문화</li>
                </Link>
                <Link
                  to="https://m.dhlottery.co.kr/happy.do?method=healthCulturePrevent"
                  className="link">
                  <li>복권 과몰입 예방법</li>
                </Link>
                <Link
                  to="https://m.dhlottery.co.kr/happy.do?method=fundInfo"
                  className="link">
                  <li>복권기금</li>
                </Link>
              </ul>
            </li>

            <li>
              <div>
                <h2>마이페이지</h2>
                {/* <img src="../../img/down.png" alt="" /> */}
              </div>
              <ul>
                <Link
                  to="https://m.dhlottery.co.kr/user.do?method=loginm"
                  className="link">
                  <li>마이페이지</li>
                </Link>
                <Link
                  to="https://m.dhlottery.co.kr/user.do?method=loginm"
                  className="link">
                  <li>구매/당첨</li>
                </Link>
                <Link
                  to="https://m.dhlottery.co.kr/user.do?method=loginm"
                  className="link">
                  <li>건전구매 프로그램</li>
                </Link>
                <Link
                  to="https://m.dhlottery.co.kr/myPage.do?method=campainTest"
                  className="link">
                  <li>셀프진단평가</li>
                </Link>
                <Link
                  to="https://m.dhlottery.co.kr/user.do?method=loginm"
                  className="link">
                  <li>셀프구매계획</li>
                </Link>
                <Link
                  to="https://m.dhlottery.co.kr/user.do?method=loginm"
                  className="link">
                  <li>예치금</li>
                </Link>
                <Link
                  to="https://m.dhlottery.co.kr/user.do?method=loginm"
                  className="link">
                  <li>회원탈퇴</li>
                </Link>
              </ul>
            </li>
          </ul>
        </div>

        <div className="menu-footer">
          <ul>
            <li>
              <Link
                to="https://m.dhlottery.co.kr/counsel.do?method=callCenter"
                className="link">
                고객센터
              </Link>
            </li>
            <li>
              <Link
                to="https://m.dhlottery.co.kr/service.do?method=noticeList"
                className="link">
                공지사항
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
