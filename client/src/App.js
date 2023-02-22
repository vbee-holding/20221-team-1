import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import AllMatches from './scenes/AllMatches/AllMatches';
// import { AllPost, PostAboutTeam } from './scenes/AllPosts/Post';
// import DetailMatch from './scenes/DetailMatch/DetailMatch';
// import DetailTeam from './scenes/DetailTeam/DetailTeam';
import MatchBracket from './scenes/MatchBracket/MatchBracket';
// import PlayerByTeam from './scenes/PlayerByTeam/PlayerByTeam';
// import RankByTeam from './scenes/RankByTeam/RankByTeam';
// import Ranking from './scenes/Ranking/Ranking';
import Statistic from './scenes/Statistic/Statistic';
import TopPlayers from './scenes/TopPlayer/TopPlayer'
import './App.css';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<AllMatches />}></Route>
          {/* <Route path='/matches/:id' element={<DetailMatch />}></Route> */}
          <Route path='/topPlayer' element={<TopPlayers />}></Route>
          <Route path='/statistic' element={<Statistic />}></Route>
          {/* <Route path='/posts' element={<AllPost />}></Route> */}
          {/* <Route path='/team/:id' element={<DetailTeam />}></Route> */}
          {/* <Route path='/team/:idTeam/post' element={<PostAboutTeam />}></Route> */}
          {/* <Route path='/team/:idTeam/players' element={<PlayerByTeam />}></Route> */}
          {/* <Route path='/team/:idTeam/rank' element={<RankByTeam />}></Route> */}
          <Route path='/bracket' element={<MatchBracket />}></Route>
          {/* <Route path='/rank' element={<Ranking />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
