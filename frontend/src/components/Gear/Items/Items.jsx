import React, {useState} from 'react';
import useItems from '../../../utils/useItems';
import AddAnItem from './AddAnItem/AddAnItem';
import ItemBox from './ItemBox/ItemBox';
import { v4 as uuidv4 } from 'uuid';

function Items({}) {

    const [randomId, setRandomId] = useState('123');

    const items = useItems([randomId]);
    const [addingItem, setAddingItem] = useState(false);

    return (
        <div className='container'>
            <h1>Items <p className='btn-large right' onClick={() => setAddingItem(true)}>+ add new item</p></h1>
            <AddAnItem addingItem={addingItem} setAddingItem={setAddingItem} triggerRefresh={() => setRandomId(uuidv4())}/>
            <div className="row">
                {items.map(item => <ItemBox item={item}/>)}
            </div>
        </div>
    )
};

export default Items;
