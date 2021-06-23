import {useState, useEffect} from 'react';
import axios from 'axios';

// Hook
function useGearChecklists (dependencies = []) {
    const [gearChecklists, setGearChecklists] = useState([]);

    useEffect(() => {
        axios.get('/gear-required-lists').then(results => setGearChecklists(results.data))
    }, dependencies);

    return gearChecklists;
}

export default useGearChecklists;