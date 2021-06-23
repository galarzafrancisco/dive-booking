import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import OptionBox from './OptionBox/OptionBox';

function Home() {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo({top:0, left:0, behavior: 'smooth'})
    }, [])

    return (
        <div id='home-outer-box'>
            <div className='container'>
                <h1>Home</h1>
                <div className='row'>
                    {OptionBox({url: '/dives', title: 'Dives'})}
                    {OptionBox({url: '/checkin', title: 'Check in'})}
                </div>
                <div className='row'>
                    {OptionBox({url: '/packing-list', title: 'Packing list'})}
                </div>
                <hr></hr>
                <div className='row'>
                        {OptionBox({url: '/sites', title: 'Sites'})}
                        {OptionBox({url: '/gear', title: 'Gear'})}
                </div>
                <div className='row'>
                        {OptionBox({url: '/divers', title: 'Divers'})}
                        {OptionBox({url: '/certifiactions', title: 'Certifications'})}
                </div>
            </div>
        </div>
    )
};

export default Home;
