import {useState, useEffect} from 'react';
import axios from 'axios';

// Hook
function useDivers (dependencies = []) {
    const [divers, setDivers] = useState([]);

    useEffect(() => {
        axios.get('/divers').then(results => setDivers(results.data))
    }, dependencies);

    return divers;
}

export default useDivers;