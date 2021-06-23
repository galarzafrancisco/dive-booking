import React from 'react';
import { Link } from 'react-router-dom';

function ItemBox({item}) {
    return (
        <div className='col s6 m4 l3'>
            <Link to={`/gear/items/${item.item_id}`} >
                <div className="gearBox z-depth-1">
                    <div className="image-container">
                        <h4 className="name">{item.name}</h4>
                        <img src={item.photo_url} alt={item.name} />
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default ItemBox;