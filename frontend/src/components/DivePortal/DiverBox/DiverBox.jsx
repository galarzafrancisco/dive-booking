import React from 'react';
import useDiver from '../../../utils/useDiver';


function DiverBox({diver}) {
    return (
        <div>
            <p>{diver.name_first} {diver.name_last}</p>
            <p>{JSON.stringify(diver)}</p>
        </div>
    )
}

export default DiverBox;
