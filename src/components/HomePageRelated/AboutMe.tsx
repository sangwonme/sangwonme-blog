import * as React from 'react';

import './AboutMe.scss'

const AboutMe = () => {
    return(
        <div className='aboutme-container'>
            <div className='aboutme-wrapper'>
                <div className='aboutme-text'>
                    <pre className='aboutme-name'>Sangwon<br/>Park</pre>
                    <p className='aboutme-description'>
                        Hi. I’m Sangwon Park. 
                        I'm really interested in the intersection of <b>HCI(Human-Computer Interaction)</b> and <b>AI(Artificial Intelligence)</b>. 
                        I design and build systems that help make our lives healthier and more connected. 
                    </p>
                </div>
                <div className='aboutme-figure'>

                </div>
            </div>
        </div>
    );
}

export default AboutMe;