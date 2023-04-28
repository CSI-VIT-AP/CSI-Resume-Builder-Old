import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Auth from './pages/Auth';
import Home from './pages/Home';
import PersonalInfo from './pages/PersonalInfo';
import CircularProgresss from './components/CircularProgresss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Auth />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/PersonalInfo" element={<PersonalInfo />} />
        <Route path="/circular" element={<CircularProgresss />} />
      </Routes>
    </Router>
  );
}

export default App;
