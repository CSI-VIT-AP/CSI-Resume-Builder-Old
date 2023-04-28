import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Auth from './pages/Auth';
import Home from './pages/Home';
import PersonalInfo from './pages/PersonalInfo';
import CircularProgresss from './components/CircularProgressBar';

function App() {
  return (
    <Router>
      <Route path= "/" exact>
        <Auth/>
      </Route>
      <Route  path="/Home" exact>
        <Home/>
      </Route>
      <Route  path="/PersonalInfo" exact>
        <PersonalInfo/>
      </Route>
      <Route  path="/circular" exact>
        <CircularProgresss/>
      </Route>
    </Router>
  );
}

export default App;
