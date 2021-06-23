import {useState, useEffect} from 'react';
import axios from 'axios';

// Hook
function useDive ({dive_id, dependencies=[]}) {
    const [dive, setDive] = useState({site: {}, subscriptions: [], cert_required: {}});

    useEffect(() => {
        axios.get(`/dives/${dive_id}`).then(results => setDive(results.data))
    }, [dive_id, ...dependencies]);

    return dive;
}

export default useDive;