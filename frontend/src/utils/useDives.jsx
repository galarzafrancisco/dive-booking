import {useState, useEffect} from 'react';
import axios from 'axios';

// Hook
function useDives () {
    const [dives, setDives] = useState([]);

    useEffect(() => {
        axios.get('/dives').then(results => setDives(results.data))
    }, []);

    return dives;
}

export default useDives;