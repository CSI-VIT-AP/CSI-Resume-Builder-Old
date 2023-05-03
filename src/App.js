import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Auth from './pages/Auth';
import Home from './pages/Home';
import PersonalInfo from './pages/PersonalInfo';
import CircularProgresss from './components/CircularProgresss';
import Education from './pages/Education';
import Skills from './pages/Skills';

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Auth />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/PersonalInfo" element={<PersonalInfo />} />
        <Route path="/circular" element={<CircularProgresss />} />
        <Route path="/education" element={<Education/>} />
        <Route path="/skills" element={<Skills/>} />
      </Routes>
    </Router>
  );
}

export default App;
