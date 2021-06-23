import React from 'react';
import {Link} from 'react-router-dom';

function DiveBox(dive) {
    return (
        <div className='col s6'>
            <Link to={`/dives/${dive.dive_id}`}>
                <div className="hoverable cardWrapper z-depth-1 light-blue darken-1">
                    <div className='cardText white-text'>
                        <h5>{dive.site.name}</h5>
                        <p>{`${new Date(dive.date)}`.split('GMT')[0]}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default DiveBox;
