import React from 'react';
import {Link} from 'react-router-dom';

function SubscriptionBox({subscription}) {
    return (
        <Link to={`/subscriptions/${subscription.subscription_id}`}>
            <div className='subscriptionBox'>
                <div className="row">
                    <div className="col s12 m6">
                        <h5>{subscription.diver.name_first} {subscription.diver.name_last}</h5>
                    </div>
                    <div className="col s6 m3">
                        <p>{subscription.paid ? 'paid' : 'not paid'}</p>
                    </div>
                    <div className="col s6 m3 ">
                        <p className='btn right'><Link to={`/subscriptions/${subscription.subscription_id}`} className='white-text'>Check in</Link></p>
                        
                    </div>
                </div>
            {/* <pre><code>{JSON.stringify(subscription, null ,2)}</code></pre> */}
            </div>
        </Link>
    )
};

export default SubscriptionBox;
