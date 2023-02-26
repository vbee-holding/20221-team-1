import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import AllMatches from './scenes/AllMatches/AllMatches';
import { PostAboutTeam } from './scenes/PostForMatchTeam/Post';
import Post from './scenes/AllPosts/AllPosts';
import DetailMatch from './scenes/DetailMatch/DetailMatch';
import DetailTeam from './scenes/DetailTeam/DetailTeam';
import MatchBracket from './scenes/MatchBracket/MatchBracket';
import PlayerByTeam from './scenes/PlayerByTeam/PlayerByTeam';
import RankByTeam from './scenes/RankByTeam/RankByTeam';
import Ranking from './scenes/Ranking/Ranking';
import Statistic from './scenes/Statistic_v2/Statistic';
import TopPlayers from './scenes/TopPlayers/TopPlayers'
import './App.css';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<AllMatches />}></Route>
          <Route path='/matches/:id' element={<DetailMatch />}></Route>
          <Route path='/topPlayer' element={<TopPlayers />}></Route>
          <Route path='/statistic' element={<Statistic />}></Route>
          <Route path='/posts' element={<Post />}></Route>
          <Route path='/team/:id' element={<DetailTeam />}></Route>
          <Route path='/team/:idTeam/postbyteam' element={<PostAboutTeam />}></Route>
          <Route path='/team/:idTeam/playersbyteam' element={<PlayerByTeam />}></Route>
          <Route path='/team/:idTeam/rankbyteam' element={<RankByTeam />}></Route>
          <Route path='/bracket' element={<MatchBracket />}></Route>
          <Route path='/rank' element={<Ranking />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
