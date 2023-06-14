import * as React from 'react';
import logoGithub from '../../images/github.svg';
import logoMail from '../../images/envelope-solid.svg';
import blueprintSW from '../../images/blueprint_sw.webm';

import './UnderConstruction.scss'

const UnderConstruction = () => {
    return(
        <div className='under-container'>
            <div className='under-wrapper'>
                <p className='under-title'>UNDER<br />CONSTRUCTION</p>
                <p className='under-desc'>Coming Soon.</p>
            </div>
        </div>
    );
}

export default UnderConstruction;