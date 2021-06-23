import {useState, useEffect} from 'react';
import axios from 'axios';

// Hook
function useSubscription ({subscription_id, dependencies=[]}) {
    const [subscription, setSubscription] = useState({diver: {}, dive: {}});

    useEffect(() => {
        axios.get(`/subscriptions/${subscription_id}`).then(results => setSubscription(results.data))
    }, [subscription_id, ...dependencies]);

    return subscription;
}

export default useSubscription;