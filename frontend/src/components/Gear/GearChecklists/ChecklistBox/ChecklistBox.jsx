import React from 'react';
import {Link} from 'react-router-dom';

function ChecklistBox({checklist}) {
    return (
        <Link to={`/gear/checklists/${checklist.list_id}`}>
            <div className='subscriptionBox'>
                <div className="row">
                    <div className="col s12 m6">
                        <h5>{checklist.name}</h5>
                        <div>{checklist.description}</div>
                    </div>
                </div>
            {/* <pre><code>{JSON.stringify(subscription, null ,2)}</code></pre> */}
            </div>
        </Link>
    )
};

export default ChecklistBox;
