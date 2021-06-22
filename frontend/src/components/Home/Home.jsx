import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

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
                    <div className='col s6'>
                        <Link to='/dives'>Dives</Link>
                    </div>
                    <div className='col s6'>
                        <Link to='/checkin'>Check in</Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col s6'>
                        <Link to='/packing-list'>Packing list</Link>
                    </div>
                </div>
                <hr></hr>
                <div className='row'>
                    <div className='col s6'>
                        <Link to='/sites'>Sites</Link>
                    </div>
                    <div className='col s6'>
                        <Link to='/gear'>Gear</Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col s6'>
                        <Link to='/divers'>Divers</Link>
                    </div>
                    <div className='col s6'>
                        <Link to='/certifiactions'>Certifications</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;
