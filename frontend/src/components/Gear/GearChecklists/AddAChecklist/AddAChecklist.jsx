import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import M from 'materialize-css';
import axios from 'axios';

function AddAChecklist({addingChecklist, setAddingChecklist}) {

    const history = useHistory();
    const [modalInstance, setModalInstance] = useState(undefined);

    useEffect(() => {
        if (modalInstance) {
            addingChecklist ? modalInstance.open() : modalInstance.close();
        }
    }, [addingChecklist])

    useEffect(() => {
        // Init modals
        const elem = document.getElementById('addChecklist-modal');
        const instance = M.Modal.init(elem, {
            dismissible: true,
            onCloseEnd: () => setAddingChecklist(false)
        });
        setModalInstance(instance);

        return () => modalInstance ? modalInstance.destroy() : '';

    }, [])
    
    function createChecklist() {
        const name = document.getElementById('input-name').value;
        const description = document.getElementById('input-description').value;
        axios.post('/gear-required-lists', {
            name,
            description
        })
            .then(r => r.data)
            .then(checklist => {
                history.push(`/gear/checklists/${checklist.list_id}`)
            })
    }

    return (
        <div className='addChecklist-modal-outerbox modal' id='addChecklist-modal' tabIndex='1'>
            
            <div className='modal-content'>
                
                <h4>Add a checklist</h4>
                <div className='input-field' id='input-name-field'>
                    <input type='text' id='input-name' tabIndex='1'></input>
                    <label htmlFor='input-name'>Checklist name</label>
                </div>
                <div className='input-field' id='input-description-field'>
                    <input type='text' id='input-description' tabIndex='2'></input>
                    <label htmlFor='input-description'>Description</label>
                </div>

                {/* Modal footer */}
                <div className="modal-footer">
                    <div className='btn white-text' tabIndex='3' id='login-btn' onClick={() => createChecklist()}>Add</div>
                    <div className='btn-flat' tabIndex='4' id='cancel-btn' onClick={() => setAddingChecklist(false)}>Cancel</div>
                </div>
            
            </div>

        </div> 
    )
};

export default AddAChecklist;
