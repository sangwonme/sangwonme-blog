import { Link } from 'gatsby';
import * as React from 'react';

import './Header.scss';

const Header = () => {
    return ( <>
        <div className='head-dummy'></div>
        <div className='head-container'>
            <Link to='/'><p>Home</p></Link>
            <div className='head-nav'>
                <Link to='/publication'><p>Publication</p></Link>
                <Link to='/building'><p>Archive</p></Link>
                <Link to='/building'><p>Diary</p></Link>
                <Link to='/building'><p>CV</p></Link>
            </div>
        </div>
    </> );
}
 
export default Header;