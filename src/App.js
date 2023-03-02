import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import News from './pages/News';
import RecentEpisode from './pages/RecentEpisode';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/episode' element={<RecentEpisode/>} />
            <Route path='/news' element={<News/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
