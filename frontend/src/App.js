// CSS
import './App.css';

// Imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Dives from './components/Dives';
import DivePortal from './components/DivePortal/DivePortal';

function App() {
  return (
    <React.Fragment>
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/dives' component={Dives} />
            <Route path='/dives/:dive_id' component={DivePortal}/>
            <Route path='/dives/:dive_id/addDiver' component={DivePortal}/>
          </Switch>
        </main>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
