import {useState, useEffect} from 'react';
import axios from 'axios';

// Hook
function useItem ({item_id}) {
    const [item, setItem] = useState({gear_required_list_lines: []});

    useEffect(() => {
        axios.get(`/items/${item_id}`).then(results => setItem(results.data))
    }, [item_id]);

    return item;
}

export default useItem;