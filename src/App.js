import './App.css';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Home from './pages';
import CrewPage from './pages/crew';
import Timeline from './pages/Timeline';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/CrewPage" element={<CrewPage/>}/>
        <Route exact path="/timeline" target="_blank" element={<Timeline/>} />
      </Routes>
    </Router>
  );
}

export default App;
