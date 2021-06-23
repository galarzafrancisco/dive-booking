import React from 'react';
import { useParams } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import useItem from '../../../utils/useItem';
import axios from 'axios';

function ItemPortal({}) {
    
    const histrory = useHistory();

    const {item_id} = useParams();
    const item = useItem({item_id});

    function deleteItem() {
        axios.delete(`/items/${item.item_id}`)
            .then(r => r.data)
            .then(item => {
                histrory.goBack();
            })        
    }

    return (
        <div className='container'>
            <h1>Item portal</h1>
            <hr></hr>
            <div className="row">
                <div className="col s12 m6">
                    <h2>{item.name}</h2>
                    <h4>Sizes</h4>{item.sizes}
                    <h4>Rent price</h4>${item.rent_price}
                    <h4>Used in this checklists</h4>
                    <ul>
                        {item.gear_required_list_lines.map(line => line.list).map(list => <li><Link to={`/gear/checklists/${list.list_id}`}>{list.name}</Link></li>)}
                    </ul>
                </div>
                <div className="col s12 m6">
                    <img src={item.photo_url} alt={item.name} className='right' style={{maxWidth: '400px', maxHeight: '400px'}}></img>
                </div>
            </div>
            <div className="btn red" onClick={() => deleteItem()}>Delete item</div>
        </div>
    )
};

export default ItemPortal;
