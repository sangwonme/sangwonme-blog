import { Link } from 'gatsby';
import * as React from 'react';

import './Header.scss';

const Header = () => {
    return ( <>
        <div className='head-dummy'></div>
        <div className='head-container'>
            <Link to='/'><p>Home</p></Link>
            <div className='head-nav'>
                <Link to='/building'><p>Publication</p></Link>
                <Link to='/archive'><p>Archive</p></Link>
                <Link to='/diary'><p>Diary</p></Link>
                {/* <Link to='/cv'><p>CV</p></Link> */}
            </div>
        </div>
    </> );
}
 
export default Header;