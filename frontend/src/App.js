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
import SubscriptionPortal from './components/SubscriptionPortal/SubscriptionPortal';
import Checkin from './components/Checkin/Checkin';
import Gear from './components/Gear/Gear';
import Items from './components/Gear/Items/Items';
import GearChecklists from './components/Gear/GearChecklists/GearChecklists';
import ItemPortal from './components/Gear/ItemPortal/ItemPortal';
import GearChecklistPortal from './components/Gear/GearChecklistPortal/GearChecklistPortal';

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
            {/* Dives */}
            <Route exact path='/dives' component={Dives} />
            <Route path='/dives/:dive_id' component={DivePortal}/>
            <Route path='/dives/:dive_id/addDiver' component={DivePortal}/>
            {/* Subscriptions */}
            <Route exact path='/checkin' component={Checkin} />
            <Route path='/subscriptions/:subscription_id' component={SubscriptionPortal}/>
            {/* Gear */}
            <Route exact path='/gear' component={Gear} />
            {/* Items */}
            <Route exact path='/gear/items' component={Items} />
            <Route path='/gear/items/:item_id' component={ItemPortal} />
            {/* Gear checklists */}
            <Route exact path='/gear/checklists' component={GearChecklists} />
            <Route path='/gear/checklists/:checklist_id' component={GearChecklistPortal} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
