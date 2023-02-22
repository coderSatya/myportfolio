import React from 'react';
import './About.css';


const AboutMe = () => {
  return (
    <div className='about-data' id="about">
        <h1 className='about'>About Me</h1>
           <div className='container'>
            <div className='row'>
                <div className='col'>
                <div className='about-image'></div>
                </div>

                <div className='col' style={{marginTop:'100px', marginLeft:'10px'}}>
                <div className='about-info'>
                <p style={{color:'white', padding:'61px'}}>
                Seeking a role as a front-end developer so I can use my experience and knowledge in 
                different front-end frameworks and libraries for making interactive interfaces and better user experiences.Also, I want to gain conﬁdence and fame using my potential in the ﬁeld of "Web Development" and express my innovative creative skills for self and company growth.
                </p>
                </div>
             
                <div className='row'>
                   </div>
                </div>
                  
            </div>
           </div>
    </div>
  )
}

export default AboutMe