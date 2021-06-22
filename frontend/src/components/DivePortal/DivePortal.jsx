import React from 'react';
import useDive from '../../utils/useDive';
import { useParams, Link } from 'react-router-dom';

import DiverBox from './DiverBox';

function DivePortal({}) {
    const {dive_id} = useParams();
    const dive = useDive({dive_id});
    console.log(dive)
    return (
        <div className='container'>
            <h1>Dive portal <Link to={`/dives/${dive_id}/addDiver`} className='btn'>+ add a diver</Link></h1>
            <div>
                <h3>Site</h3>
                <hr></hr>
                <p>{dive.site.name}</p>
                <h3>Divers</h3>
                {dive.subscriptions.map(subscription => DiverBox({diver: subscription.diver}))}
            </div>
        </div>
    )
};

export default DivePortal;
