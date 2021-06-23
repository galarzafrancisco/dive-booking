import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import M from 'materialize-css';
import axios from 'axios';

function AddAnItem({addingItem, setAddingItem, triggerRefresh}) {

    const history = useHistory();
    const [modalInstance, setModalInstance] = useState(undefined);

    useEffect(() => {
        if (modalInstance) {
            addingItem ? modalInstance.open() : modalInstance.close();
        }
    }, [addingItem])

    useEffect(() => {
        // Init modals
        const elem = document.getElementById('addItem-modal');
        const instance = M.Modal.init(elem, {
            dismissible: true,
            onCloseEnd: () => setAddingItem(false)
        });
        setModalInstance(instance);

        return () => modalInstance ? modalInstance.destroy() : '';

    }, [])
    
    function createItem() {
        const name = document.getElementById('input-name').value;
        const photo_url = document.getElementById('input-photo_url').value;
        const sizes = document.getElementById('input-sizes').value;
        const rent_price = parseFloat(document.getElementById('input-rent_price').value);
        axios.post('/items', {
            name,
            photo_url,
            sizes,
            rent_price
        })
            .then(r => r.data)
            .then(item => {
                triggerRefresh();
                setAddingItem(false);
            })
    }

    return (
        <div className='addItem-modal-outerbox modal' id='addItem-modal' tabIndex='1'>
            
            <div className='modal-content'>
                
                <h4>Add an item</h4>
                <div className='input-field' id='input-name-field'>
                    <input type='text' id='input-name' tabIndex='1'></input>
                    <label htmlFor='input-name'>Item name</label>
                </div>
                <div className='input-field' id='input-photo_url-field'>
                    <input type='text' id='input-photo_url' tabIndex='2'></input>
                    <label htmlFor='input-photo_url'>Link to picture</label>
                </div>
                <div className='input-field' id='input-sizes-field'>
                    <input type='text' id='input-sizes' tabIndex='3'></input>
                    <label htmlFor='input-sizes'>Sizes available (comma separated)</label>
                </div>
                <div className='input-field' id='input-rent_price-field'>
                    <input type='text' id='input-rent_price' tabIndex='4'></input>
                    <label htmlFor='input-rent_price'>Rent price</label>
                </div>

                {/* Modal footer */}
                <div className="modal-footer">
                    <div className='btn white-text' tabIndex='5' id='login-btn' onClick={() => createItem()}>Add</div>
                    <div className='btn-flat' tabIndex='6' id='cancel-btn' onClick={() => setAddingItem(false)}>Cancel</div>
                </div>
            
            </div>

        </div> 
    )
};

export default AddAnItem;
