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
            <h1>Dive portal <div className='btn' onClick={() => setAddingDiver(true)}>+ add a diver</div></h1>
            <AddADiver addingDiver={addingDiver} setAddingDiver={setAddingDiver} dive={dive} triggerRefresh={() =>  setRandomId(uuidv4())}/>
            {/* <h1>Dive portal <Link to={`/dives/${dive_id}/addDiver`} className='btn'>+ add a diver</Link></h1> */}
            <div>
                <h3>Site</h3>
                <hr></hr>
                <p>{dive.site.name}</p>
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
