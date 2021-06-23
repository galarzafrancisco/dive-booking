import {useState, useEffect} from 'react';
import axios from 'axios';

// Hook
function useItems (dependencies = []) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('/items').then(results => setItems(results.data))
    }, dependencies);

    return items;
}

export default useItems;