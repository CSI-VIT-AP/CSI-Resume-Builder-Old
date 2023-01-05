import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Auth from './pages/Auth';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Route path= "/" exact>
        <Auth/>
      </Route>
      <Route  path="/Home" exact>
        <Home/>
      </Route>
    </Router>
  );
}

export default App;
