import * as React from 'react';
import logoGithub from '../../images/github.svg';
import logoMail from '../../images/envelope-solid.svg';
import blueprintSW from '../../images/blueprint_sw.webm';

import './AboutMe.scss'

const AboutMe = () => {
    return(
        <div className='aboutme-container'>
            <div className='aboutme-wrapper'>
                <div className='aboutme-text'>
                    <pre className='aboutme-name'>SANGWON<br/>PARK</pre>
                    <p className='aboutme-description'>
                        I am a Ph.D. student at the <a href="https://hcs.snu.ac.kr/" target='_blank' className='underline-animation'>
                            <b>Human-Centered Computer Systems Lab</b>
                        </a> at Seoul National University advised by Prof. Youngki Lee.
                        I'm really interested in the intersection of <b>HCI</b> (Human-Computer Interaction) and <b>AI</b> (Artificial Intelligence). 
                        I design and build systems that help make our lives healthier and more connected. 
                    </p>
                    <div className='aboutme-icon-wrapper'>
                        <a href="https://github.com/sangwonme" target='_blank'><img src={logoGithub} alt="github" /></a>
                        <img className="aboutme-icon-mail" src={logoMail} alt="mail" />
                    </div>
                </div>
                <div className='aboutme-figure'>
                    <video autoPlay loop muted>
                        <source src={blueprintSW} type="video/webm"/>
                    </video>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;