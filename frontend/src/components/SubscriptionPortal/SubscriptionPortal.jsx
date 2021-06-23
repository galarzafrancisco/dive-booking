import React, { useState } from 'react';
import {useParams, Link, useHistory} from 'react-router-dom';
import useSubscription from '../../utils/useSubscription'
import useDive from '../../utils/useDive'
import GearBox from './GearBox';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function SubscriptionPortal({}) {
    
    const histrory = useHistory();

    const [randomId, setRandomId] = useState('123');

    const {subscription_id} = useParams();
    const subscription = useSubscription({subscription_id, dependencies: [randomId]});
    const dive = useDive({dive_id: subscription.dive_id});
    
    let itemsRequired = [];
    try {
        itemsRequired = subscription.dive.gear_required_list.lines.map(line => {return {...line.item, optional: line.optional}});
    } catch {}

    function removeSubscription(subscription_id) {
        axios.delete(`/subscriptions/${subscription_id}`)
            .then(r => r.data)
            .then(subscription => {
                histrory.goBack();
            })
    }

    return (
        <div className="container">
            <h1>Subscription portal</h1>
            <div>
                <h3>Gear</h3>
                <hr></hr>
                <h4>Required</h4>
                <div className="row">
                    {itemsRequired.filter(item => !subscription.packing_lists.map(i => i.item.item_id).includes(item.item_id)).map(item => <GearBox item={item} subscription_id={subscription_id} triggerRefresh={() => setRandomId(uuidv4())}/>)}
                </div>
                <h4>Selected</h4>
                <div className="row">
                    {subscription.packing_lists ? subscription.packing_lists.map(packing_list => <GearBox packing_list={packing_list} item={packing_list.item} subscription_id={subscription_id} triggerRefresh={() => setRandomId(uuidv4())}/>) : ''}
                </div>

                <h3>Diver</h3>
                <hr></hr>
                <h4>{subscription.diver.name_first} {subscription.diver.name_last}</h4>
                <h5>{subscription.diver.email}</h5>
                <div className='btn red' onClick={() => {removeSubscription(subscription_id)}}>Remove from this dive</div>

                {/* <pre><code>{JSON.stringify(subscription.diver, null, 2)}</code></pre> */}

                {/* <h3>Subscription</h3>
                <hr></hr>
                <pre><code>{JSON.stringify(subscription, null, 2)}</code></pre> */}


                <Link to={`/dives/${dive.dive_id}`}><h3>Dive</h3></Link>
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
                {/* <pre><code>{JSON.stringify(dive, null, 2)}</code></pre> */}
                
            </div>
        </div>
    )
};

export default SubscriptionPortal;
