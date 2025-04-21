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
                    {/* <Link to='/artwork'><p>Artwork</p></Link> */}
                    <a href='https://www.instagram.com/_chunguri_/' target='_blank'><p>Artwork</p></a>
                </div>
            </div>
        </div>
    </> );
}
 
export default Header;