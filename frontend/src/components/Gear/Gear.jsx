import React from 'react';
import OptionBox from '../Home/OptionBox/OptionBox';

function Gear({}) {
    return (
        <div className='container'>
            <h1>Gear</h1>
            <div className="row">
                {OptionBox({url: '/gear/checklists', title: 'Gear checklists'})}
                {OptionBox({url: '/gear/items', title: 'Items'})}
            </div>
        </div>
    )
};

export default Gear;
