import React from 'react';
import { useParams } from 'react-router-dom';

function GearChecklistPortal({}) {
    
    const {checklist_id} = useParams();

    return (
        <div className='container'>
            <h1>Gear checklist portal</h1>
        </div>
    )
};

export default GearChecklistPortal;
