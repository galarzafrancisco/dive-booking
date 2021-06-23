import React, {useState} from 'react';
import useGearChecklists from '../../../utils/useGearChecklists';
import ChecklistBox from './ChecklistBox'
import AddAChecklist from './AddAChecklist/AddAChecklist';

function GearChecklists({}) {
    
    const [randomId, setRandomId] = useState('123');

    const gearChecklists = useGearChecklists(randomId);
    const [addingChecklist, setAddingChecklist] = useState(false);

    return (
        <div className='container'>
            <h1>Gear checklists <p className='btn-large right' onClick={() => setAddingChecklist(true)}>+ add checklist</p></h1>
            <AddAChecklist addingChecklist={addingChecklist} setAddingChecklist={setAddingChecklist}/>
            {gearChecklists.map(checklist => <ChecklistBox checklist={checklist}/>)}
        </div>
    )
};

export default GearChecklists;
