import './App.css';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Home from './pages';
import  Signin  from './pages/signin';
import CrewPage from './pages/crew';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/CrewPage" element={<CrewPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
