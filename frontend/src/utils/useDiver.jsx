import {useState, useEffect} from 'react';
import axios from 'axios';

// Hook
function useDiver ({diver_id}) {
    const [diver, setDiver] = useState({subscriptions: []});

    useEffect(() => {
        axios.get(`/divers/${diver_id}`).then(results => setDiver(results.data))
    }, [diver_id]);

    return diver;
}

export default useDiver;