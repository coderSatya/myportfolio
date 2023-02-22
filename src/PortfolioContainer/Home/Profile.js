import { Button } from 'bootstrap';
import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Typical from 'react-typical';
import AboutMe from '../AboutMe/AboutMe';
import Certification from '../Certification/Certification';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Skill from '../Skills/Skill';
import './Profile.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Profile = () => {
  return (
    <>

  
    <Navbar/>

       
    <div className='profile-container'>
        <div className='profile-parent'>    
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='https://m.facebook.com/sataya.prakash.58?_rdr' target="_blank">
                   <FacebookIcon style={{color:'white', margin:'5px'}}/>
                    </a>
                    <a href='https://www.linkedin.com/in/satya-prakash-91388b1b3/' target="_blank">
                    <LinkedInIcon style={{color:'white', margin:'5px'}}/>
                    </a>
                    <a href='#'>
                   <InstagramIcon style={{color:'white', margin:'5px'}}/>
                    </a>
                    <a href='https://www.youtube.com/@user-wc5hn8iw3q' target="_blank">
                    <YouTubeIcon style={{color:'white', margin:'5px'}}/>
                    </a>
                    <a href='#'>
                   <WhatsAppIcon style={{color:'white', margin:'5px'}}/>
                    </a>
                    </div>
                </div>
                <div className='profile-details-name'>
                  <span className='primary-text'>Hello, I'M <span className='highlighted-text'>Satya Prakash</span></span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        <h1>
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Frontend Dev",
                                1000,
                                "MERN Stack Dev",
                                1000,
                                "Cross Platform v",
                                1000,
                                "React Dev",
                                1000,
                            ]}
                            >

                            </Typical>
                        </h1>
                        <span className='profile-role-tagline'>
                            Use to build Frontend applications.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    {/* <button className='btn primary-btn' id="contact"> */}
                    <a className="nav-link active btn primary-btn" aria-current="page" href="#contact">
                        Hire Me
                        </a>
                    {/* </button> */}
                    
                    <a href="satyaprakashcv.pdf" download='satyaprakashcv.pdf'>
                        <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
             <div className='profile-picture-background'></div>
            </div>
        </div>
    </div>

    <div className='container'>
        <div className='row'>
          <div className='col'>
            <AboutMe/>
          </div>
        </div>
    </div>

    <div className='container'>
        <div className='row'>
          <div className='col'>
            <Skill/>
          </div>
        </div>
    </div>

    <div className='container'>
        <div className='row'>
          <div className='col'>
            <Experience/>
          </div>
        </div>
    </div>

    <div className='container'>
        <div className='row'>
          <div className='col'>
            <Projects/>
          </div>
        </div>
    </div>

    <div className='container'>
        <div className='row'>
          <div className='col'>
            <Certification />
          </div>
        </div>
    </div>

    <div className='container'>
        <div className='row'>
          <div className='col'>
            <Contact />
          </div>
        </div>
    </div>
    </>
  
  )
}

export default Profile