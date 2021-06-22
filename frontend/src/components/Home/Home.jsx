import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

function Home() {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo({top:0, left:0, behavior: 'smooth'})
    }, [])
    
    function OptionBox(option) {
        return (
            <div className="col s6">
                <Link to={option.url}>
                    <div className="hoverable cardWrapper z-depth-1 light-blue darken-1">
                        <div className="cardText white-text">
                            <h4>{option.title}</h4>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }

    return (
        <div id='home-outer-box'>
            <div className='container'>
                <h1>Home</h1>
                <div className='row'>
                    {OptionBox({url: '/dives', title: 'Dives'})}
                    {OptionBox({url: '/check in', title: 'Check in'})}
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
