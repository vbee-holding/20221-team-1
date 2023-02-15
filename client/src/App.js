import './App.css';
import Navbar from './Components/navbar.js'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>

    </div>
  );
}

export default App;
