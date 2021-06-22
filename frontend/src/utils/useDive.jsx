import {useState, useEffect} from 'react';
import axios from 'axios';

// Hook
function useDive ({dive_id}) {
    const [dive, setDive] = useState({site: {}, subscriptions: []});

    useEffect(() => {
        axios.get(`/dives/${dive_id}`).then(results => setDive(results.data))
    }, [dive_id]);

    return dive;
}

export default useDive;