import React, {useState, useEffect} from 'react';
import M from 'materialize-css';
import DiversList from './DiversList';
import axios from 'axios';

function AddADiver({addingDiver, setAddingDiver, dive, triggerRefresh}) {

    const [modalInstance, setModalInstance] = useState(undefined);
    const [selectedDiver, setSelectedDiver] = useState({});

    useEffect(() => {
        if (modalInstance) {
            addingDiver ? modalInstance.open() : modalInstance.close();
        }
    }, [addingDiver])

    useEffect(() => {
        // Init modals
        const elem = document.getElementById('addDiver-modal');
        const instance = M.Modal.init(elem, {
            dismissible: true,
            onCloseEnd: () => {
                setAddingDiver(false);
                setSelectedDiver({});
            },
            onOpenEnd: () => {document.getElementById('input-search').focus()}
        });
        setModalInstance(instance);

        return () => modalInstance ? modalInstance.destroy() : '';

    }, [])
    
    function createSubscription(diver) {
        axios.post('/subscriptions', {
            dive_id: dive.dive_id,
            diver_id: diver.diver_id,
            subscription_ts: Date.now(),
            paid: false
        })
            .then(r => r.data)
            .then(subscription => {
                triggerRefresh();
                setAddingDiver(false);
            })
    }

    return (
        <div className='addDiver-modal-outerbox modal' id='addDiver-modal' tabIndex='1'>
            
            <div className='modal-content'>
                
                <h4>Add a diver</h4>
                {/* Divers list */}
                <DiversList selectedDiver={selectedDiver} setSelectedDiver={setSelectedDiver}/>
                {/* Modal footer */}
                <div className="modal-footer">
                    <div className='btn  white-text' tabIndex='4' id='login-btn' onClick={() => createSubscription(selectedDiver)}>Add</div>
                    <div className='btn-flat' tabIndex='5' id='cancel-btn' onClick={() => setAddingDiver(false)}>Cancel</div>
                </div>
            
            </div>

        </div> 
    )
};

export default AddADiver;
