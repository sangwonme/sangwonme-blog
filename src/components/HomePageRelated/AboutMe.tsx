import * as React from 'react';
import { useState } from 'react';
import blueprintSW from '../../images/blueprint_sw.webm';
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";



import './AboutMe.scss'

const AboutMe = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text:string) => {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); // Hide message after 3 seconds
      }).catch(err => {
        console.error("Failed to copy text: ", err);
      });
    };
  

    return(
        <div className='aboutme-container'>
            <div className='aboutme-wrapper'>

                <pre className='aboutme-name'>SANGWON PARK</pre>

                <div className='aboutme-figure'>
                    <video autoPlay loop muted>
                        <source src={blueprintSW} type="video/webm"/>
                    </video>
                </div>
                <p className='aboutme-description'>
                    Hi, I’m Sangwon Park, an HCI researcher and MS/PhD student at the  <a href="https://hcs.snu.ac.kr/" target='_blank' className='underline-animation'>
                        <b>Human-Centered Computer Systems Lab</b>
                    </a> at Seoul National University. 
                    I’m passionate about designing AI-powered systems that support adaptive scaffolding for early learning. 
                    If you're interested in similar topics or just want to chat, feel free to reach out!
                </p>
                <div className='aboutme-icon-wrapper'>
                    {copied && (
                        <div className="email-copied-message-dummy">
                            Email Copied!
                        </div>
                    )}
                    
                    <a href="https://github.com/sangwonme" target='_blank'><FaGithub className='aboutme-icon'/></a>
                    <a href="https://kr.linkedin.com/in/sangwon-park-300113251/ko?trk=people-guest_people_search-card" target='_blank'><FaLinkedin className='aboutme-icon'/></a>
                    <button onClick={() => copyToClipboard("sangwon.park@hcs.snu.ac.kr")}>
                        <FaEnvelope className='aboutme-icon'/>
                    </button>

                    {copied && (
                    <div className="email-copied-message">
                        Email Copied!
                    </div>
                    )}
                </div>


            </div>
        </div>
    );
}

export default AboutMe;