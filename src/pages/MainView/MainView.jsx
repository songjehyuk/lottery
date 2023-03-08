import React from 'react';
import './MainView.scss';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';

const MainView = () => {
  return (
    <div className="mainview">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default MainView;
