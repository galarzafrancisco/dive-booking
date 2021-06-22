import './Navbar.css';

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar-fixed' id='navbar-outer-box'>
            <nav>
                <div className='nav-wrapper blue-grey darken-4'>
                    <div className='containerX' style={{paddingRight: '14px', paddingLeft: '14px'}}>
                        <Link to='/' className='brand-logos' style={{fontSize: '1.8rem'}}>Divers checkin</Link>
                        <ul className='right valign-wrappers'>
                            <div id='logged-navbar'>
                                <li className=''><Link to='/account/dashboard'>Hello</Link></li>
                                <li className='grey-text'>|</li>
                                <li className=''><Link to='/docs'>Docs</Link></li>
                                <li className='grey-text'>|</li>
                                <li className=''><Link to='/logout'>Log out</Link></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;
