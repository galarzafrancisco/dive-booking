import React from 'react';
import {useParams, Link} from 'react-router-dom';
import useSubscription from '../../utils/useSubscription'
import useDive from '../../utils/useDive'

function SubscriptionPortal({}) {
    const {subscription_id} = useParams();
    const subscription = useSubscription({subscription_id});
    const dive = useDive({dive_id: subscription.dive_id});
    
    let itemsRequired = [];
    try {
        itemsRequired = subscription.dive.gear_required_list.lines.map(line => {return {...line.item, optional: line.optional}});
    } catch {}
    return (
        <div className="container">
            <h1>Subscription portal</h1>
            <div>
                <h3>Gear</h3>
                <h4>Required</h4>
                <pre><code>{JSON.stringify(itemsRequired,null,2)}</code></pre>
                <h4>Selected</h4>
                <pre><code>{JSON.stringify(subscription.packing_lists, null, 2)}</code></pre>
                <hr></hr>
                <h3>Subscription</h3>
                <hr></hr>
                <pre><code>{JSON.stringify(subscription, null, 2)}</code></pre>
                <h3>Diver</h3>
                <hr></hr>
                <p>{subscription.diver.name_first} {subscription.diver.name_last}</p>
                <pre><code>{JSON.stringify(subscription.diver, null, 2)}</code></pre>
                <h3>Dive</h3>
                <hr></hr>
                <pre><code>{JSON.stringify(dive, null, 2)}</code></pre>
                
            </div>
        </div>
    )
};

export default SubscriptionPortal;
