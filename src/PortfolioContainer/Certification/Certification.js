import React from 'react';
import './Certification.css';
import react from '../../assests//reactudemy.jpeg';
import Next from '../../assests//Next.jpg';
import node from '../../assests//node.jpg';

const Certification = () => {
  return (
    <>
    <div className='certification-section campus'>
        <h1 className='certificate'>Certifications</h1>
        <div className='certification-image'>
            <div className='col-4 course-col'>
                 <img className='image' src={react} alt="react"/>
                 <div className="layer">
                        <h3>React</h3>
                    </div>
            </div>
            <div className='col-4 course-col'>
                 <img className='image' src={Next} alt="react"/>
                 <div className="layer">
                        <h3>Next</h3>
                    </div>
            </div>
            <div className='col-4 course-col'>
                 <img className='image' src={node} alt="react"/>
                 <div className="layer">
                        <h3>Node</h3>
                    </div>
            </div>
            </div>
        </div>
       
    </>
  )
}

export default Certification