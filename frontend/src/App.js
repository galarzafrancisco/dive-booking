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
            <Route exact path='/dives' component={Dives} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
