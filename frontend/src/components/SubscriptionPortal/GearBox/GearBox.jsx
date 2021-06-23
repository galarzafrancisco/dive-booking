import React, { useEffect, useState } from 'react';
import M from 'materialize-css';
import axios from 'axios';

function GearBox({packing_list, item, subscription_id, triggerRefresh}) {
    
    const mode = packing_list ? 'update' : 'select';
    const [modalInstance, setModalInstance] = useState(undefined);
    const [selectedSize, selectSize] = useState(undefined);
    const [note, setNote] = useState('');

    
    useEffect(() => {
        if (mode === 'update') {
            if (packing_list.size) {selectSize(packing_list.size)};
            if (packing_list.note) {
                setNote(packing_list.note)
                document.getElementById(`note-text-${mode}-${item.item_id}`).value = packing_list.note;
            };
        }
        const elem = document.getElementById(`${mode}-item-${item.item_id}-modal`);
        const instance = M.Modal.init(elem, {
            dismissible: true
        });
        setModalInstance(instance);

        return () => modalInstance ? modalInstance.destroy() : '';
    }, [])

    function add() {
        axios.post('/packing-lists', {
            subscription_id: subscription_id,
            item_id: item.item_id,
            size: selectedSize,
            note: note
        })
            .then(r => r.data)
            .then(packingListLine => {
                modalInstance.close();
                triggerRefresh();
            })
    }
    function update() {
        axios.patch(`/packing-lists/${packing_list.packing_line_id}`, {
            subscription_id: subscription_id,
            item_id: item.item_id,
            size: selectedSize,
            note: note
        })
            .then(r => r.data)
            .then(packingListLine => {
                modalInstance.close();
                triggerRefresh();
            })
    }
    function remove() {
        axios.delete(`/packing-lists/${packing_list.packing_line_id}`)
            .then(r => r.data)
            .then(packingListLine => {
                modalInstance.close();
                triggerRefresh();
            })
    }

    return (
        <div className="col s6 m4 l3">
            <div className='gearBox z-depth-1' onClick={() => modalInstance.open()}>
                <div className='image-container'>
                    <h4 className='name'>{item.name}</h4>
                    <img src={item.photo_url} width='100%' alt='plan-background'></img>
                </div>
            </div>
            <div className='modal' id={`${mode}-item-${item.item_id}-modal`}>
                <div className="modal-content">
                    <h4>{item.name}</h4>
                    <h5>Size</h5>
                    {item.sizes.split(',').map(size => <span className={`btn ${size === selectedSize ? 'red' : 'grey'}`} style={{margin: '10px'}} onClick={() => selectSize(size)}>{size}</span>)}
                    <h5>Notes</h5>
                    <input type='text' id={`note-text-${mode}-${item.item_id}`} onChange={(e) => setNote(e.target.value)} ></input>
                </div>
                {/* Modal footer */}
                <div className="modal-footer">
                    {packing_list ? 
                        <React.Fragment>
                            <div className='btn white-text' tabIndex='4' id='login-btn' onClick={() => update()}>Update</div>
                            <div className='btn red white-text' tabIndex='4' id='login-btn' onClick={() => remove()}>Remove</div>
                        </React.Fragment>
                        :
                        <div className='btn white-text' tabIndex='4' id='login-btn' onClick={() => add()}>Add</div>
                    }
                    <div className='btn-flat' tabIndex='5' id='cancel-btn' onClick={() => modalInstance.close()}>Cancel</div>
                </div>
            </div>
        </div>
    )
};

export default GearBox;
