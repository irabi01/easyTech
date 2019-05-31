import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import './w3.css';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import WorksPage from './pages/WorksPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <Switch>
          <Route path="/" exact component = {HomePage}/>
          <Route path="/about" component = {AboutPage}/>
          <Route path="/works" component = {WorksPage}/>
          <Route path="/contact" component = {ContactPage}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
