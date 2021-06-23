import React, {useState} from 'react';
import { useHistory } from 'react-router';
import useDives from '../../utils/useDives';
import useDivers from '../../utils/useDivers';
import useDiver from '../../utils/useDiver';
import DiversList from '../DivePortal/AddADiver/DiversList';
import DiveBox from '../Dives/DiveBox/DiveBox';

function Checkin({}) {
    // const dives = useDives();
    // const divers = useDivers();
    const history = useHistory();
    
    const [selectedDiver, setSelectedDiver] = useState({subscriptions: []});
    const diver = useDiver({diver_id: selectedDiver.diver_id});
    
    if (diver.subscriptions.length === 1) {
        // There's only one dive for this diver, go straight to it
        history.push(`/subscriptions/${diver.subscriptions[0].subscription_id}`)    
    }

    return (
        <div className='container'>
            <h1>Check in</h1>
            <DiversList selectedDiver={selectedDiver} setSelectedDiver={setSelectedDiver}/>
            {/* <pre><code>{JSON.stringify(diver,null,2)}</code></pre> */}
            <div className="row">
                {diver.subscriptions.map(subscription => DiveBox(subscription.dive))}
            </div>
        </div>
    )
};

export default Checkin;
