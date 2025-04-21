import { Link } from 'gatsby';
import * as React from 'react';

import './Header.scss';

const Header = () => {
    return ( <>
        <div className='head-container'>
            <div className='head-nav-wrapper'>
                <Link to='/'><p>Home</p></Link>
                <div className='head-nav'>
                    <Link to='/publication'><p>Publication</p></Link>
                    {/* <Link to='/building'><p>Project</p></Link> */}
                    <Link to='/building'><p>Artwork</p></Link>
                    <Link to='/building'><p>CV</p></Link>
                </div>
            </div>
        </div>
    </> );
}
 
export default Header;