import React from 'react';
import {Link} from 'react-router-dom';
import useDives from '../../utils/useDives';

function DiveBox(dive) {
    return (
        <div className='col s6'>
            <div className="hoverable cardWrapper z-depth-1 light-blue darken-1">
                <Link to={`/dives/${dive.dive_id}`}>
                <div className='cardText white-text'>
                    <h5>{dive.site.name}</h5>
                    <p>{`${new Date(dive.date)}`.split('GMT')[0]}</p>
                </div>
                </Link>
            </div>
        </div>
    )
}
function Dives() {
    const dives = useDives().filter(dive => dive.date > new Date()).sort((a,b) => a.date - b.date);
    const todayDives = dives.filter(dive => dive.date > new Date());
    const thisWeekDives = dives.filter(dive => dive.date > new Date());
    const nextWeekDives = dives.filter(dive => dive.date > new Date());
    return (
        <div id='dives-outer-box'>
            <div className='container'>
                <h1>Dives <Link to='/dives/new' className='btn'>+ New</Link></h1>
                
                <h4>Today</h4>
                <hr></hr>
                <div className="row">
                    {todayDives.map(dive => DiveBox(dive))}
                </div>
                <h4>This week</h4>
                <hr></hr>
                <div className="row">
                    {thisWeekDives.map(dive => DiveBox(dive))}
                </div>
                <h4>Next week</h4>
                <hr></hr>
                <div className="row">
                    {nextWeekDives.map(dive => DiveBox(dive))}
                </div>
                <h4>All</h4>
                <hr></hr>
                <div className="row">
                    {dives.map(dive => DiveBox(dive))}
                </div>
            </div>
        </div>
    )
};

export default Dives;
