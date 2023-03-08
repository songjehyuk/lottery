import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <p>
          로또 당첨 시간에는 서버가 원활하지 않아 시간이 소요될 수 있습니다..
        </p>
      </div>
    </div>
  );
};

export default Home;
