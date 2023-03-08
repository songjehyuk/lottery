import './App.scss';
import MainView from './pages/MainView/MainView';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<MainView />} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
