import React, {useState} from 'react';
import useDive from '../../utils/useDive';
import { useParams, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import AddADiver from './AddADiver';
import SubscriptionBox from './SubscriptionBox';

function DivePortal({}) {
    const [addingDiver, setAddingDiver] = useState(false);
    const [randomId, setRandomId] = useState('123');

    const {dive_id} = useParams();
    const dive = useDive({dive_id, dependencies: [randomId]});

    return (
        <div className='container'>
            <h1>Dive portal <p className='btn-large right' onClick={() => setAddingDiver(true)}>+ add a diver</p></h1>
            <AddADiver addingDiver={addingDiver} setAddingDiver={setAddingDiver} dive={dive} triggerRefresh={() =>  setRandomId(uuidv4())}/>
            {/* <h1>Dive portal <Link to={`/dives/${dive_id}/addDiver`} className='btn'>+ add a diver</Link></h1> */}
            <div>
                <h3>Site</h3>
                <hr></hr>
                <div className="row">
                    <div className="col s12 m6">
                        <Link to={`/sitess/${dive.site.site_id}`}><h4>{dive.site.name}</h4></Link>
                        <p>{dive.site.description}</p>
                        <p>Maximum depth: {dive.site.max_depth}m</p>
                        <p>Minimum certification required: {JSON.stringify(dive.cert_required.name)}</p>
                        <h5>Meeting point</h5>
                        <p>We meet at {dive.meeting_address} on {new Date(dive.date).toLocaleString()}</p>
                    </div>
                    <div className="col s12 m6">
                        <h5>Other divers</h5>
                        There is a total of {dive.subscriptions.length} divers subscribed to this dive. They are:
                        <ul>
                            {dive.subscriptions.map(subscription => <li>{subscription.diver.name_first} {subscription.diver.name_last}</li>)}
                        </ul>
                    </div>
                </div>
                <h3>Divers</h3>
                {/* {dive.subscriptions.map(s => <pre><code>{JSON.stringify(s, null, 2)}</code></pre>)} */}
                {dive.subscriptions.map(subscription => SubscriptionBox({subscription}))}
                <hr></hr>
                <h3>Packing list</h3>
            </div>
        </div>
    )
};

export default DivePortal;
