import {useState, useEffect} from 'react';
import axios from 'axios';

// Hook
function useSubscription ({subscription_id}) {
    const [subscription, setSubscription] = useState({});

    useEffect(() => {
        axios.get(`/subscriptions/${subscription_id}`).then(results => setSubscription(results.data))
    }, [subscription_id]);

    return subscription;
}

export default useSubscription;