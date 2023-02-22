import React from 'react';
import './Contact.css';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MarkunreadIcon from '@mui/icons-material/Markunread';

const Contact = () => {
  return (
  <>
  <div className='contact-section'>
   <h1 className='contact'>Contact Me</h1>
   <section class="location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4733.8138575900475!2d85.2218084510443!3d23.417234457262644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4dc31db927b45%3A0x9a62cb478addc87d!2sSunday%20Market%20Colony%2C%20Ratu%2C%20Ranchi%2C%20Jharkhand%20835222!5e1!3m2!1sen!2sin!4v1616810849355!5m2!1sen!2sin" 
            style={{width:"100%",height:"450px", border:"0"}}
           allowFullScreen="" loading="lazy"></iframe>
    </section>
    <div className='container contact-form' id="contact">
       <div className='row'>
        <div className='col-6'>
        <section className="contact-us">
        <div className="contact-col">
                <div>
                <HomeIcon style={{fontSize:'28px',color:'#f44336',margin:'10px',marginRight:'30px'  }}/>
                    <span>
                        <h5>Near Manav Seva Sadan, Sunday Market</h5>
                        <p>Ratu, Ranchi, Jharkhand</p>
                    </span>
                </div>
                <div>
               <PhoneIcon style={{fontSize:'28px',color:'#f44336',margin:'10px',marginRight:'30px'  }}/>
                    <span>
                        <h5>91-8506056814</h5>
                        <p>Monday to Saturday, 10a.m to 6p.m</p>
                    </span>
                </div>
                <div>
                   <MarkunreadIcon style={{fontSize:'28px',color:'#f44336',margin:'10px',marginRight:'30px'  }}/>
                    <span>
                        <h5>sprakash6233@gmail.com</h5>
                        <p>Email for any query</p>
                    </span>
                </div>
            </div>
          </section>
        </div>

        <div className='col-6'>
        <div className="contact-col">
            <form action="https://formspree.io/f/mwkjobkp" method="post">
           <input type="text" name="name" placeholder="Enter your name" required />
           <input type="email" name="email" placeholder="Enter your email" required />
           <input type="text" name="subject" placeholder="Enter your subject" required />
           <textarea rows="8" name="message" placeholder="Message" required></textarea>
           <button type="submit" className="hero-btn btn">Send Message</button>
                </form>
            </div>
        </div>
       </div>
    </div>
  </div>
  </>
  )
}

export default Contact