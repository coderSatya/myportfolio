import React from 'react';
import './Skill.css';
import html from '../../assests/html.png';
import css1 from '../../assests/css1.png';
import js from '../../assests/js.jpeg';
import react from '../../assests/react.png';
import node from '../../assests/node.png';
import mui from '../../assests/mui.png';
import bootstrap from '../../assests/bootstrap.jpeg';
import redux from '../../assests/redux.png';
import ant from '../../assests/ant.jpeg';
import next from '../../assests/next1.png';
const Skill = () => {
  return (
        <div className='sill-section' id="skill">
         <h1 className='skill'>Skills</h1>
         <div className='container'>
              <div className='row'>
                 <div className='col'>
                 <img src={html} alt="html" />
                 <img src={bootstrap} alt="bootstrap" />
                 <img src={react} alt="react" />
                 </div>
                 <div className='col'>
                 <img src={css1} alt="css" />
                <img src={mui} alt="mui" />
               
                <img src={next} alt="next" />
                 </div>
                 <div className='col'>
                 <img src={js} alt="js" />
                 <img src={redux} alt="redux" />
                 <img src={node} alt="node" />
                 </div>

              </div>
         </div>
        </div>
  )
}

export default Skill