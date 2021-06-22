import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='page-footer blue-grey darken-4'>
          <div className='container'>
            <div className='row'>
              <div className='col l6 s12'>
                <h5><Link to='/home' className='white-text'>Divers check in</Link></h5>
              </div>
              <div className='col l3 offset-l2 s12'>
                <h5 className='white-text'>Links</h5>
                <ul>
                    <li>
                      <Link to='/' className='grey-text text-lighten-3'>Home</Link>
                    </li>
                </ul>
              </div>

            </div>
          </div>
          <div className='footer-copyright'>
            <div className='container'>
            © 2021 Divers check in
            </div>
          </div>
        </footer>
  )
};

export default Footer;
