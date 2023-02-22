import React from 'react';
import './Project.css';
import crud from '../../assests/crud.png';
import covid from '../../assests/covid.jpeg';
import port from '../../assests/port.jpeg';
import wheather from '../../assests/wheather.jpeg';
import web from '../../assests/uni.png';
import redux1 from '../../assests/redux.png';

const Projects = () => {
  return (
    <>
    <div className='project-section' id="projects">
   <h1 className='project'>Projects</h1>
   <div>
    <div className='container'>
      <div className='row'>
         <div className='col-4'>
         <div className="card" style={{width:'18rem'}}>
  <img src={covid} className="card-img-top" alt="..." />
  <div className="card-body" style={{backgroundColor:"yellow", color:"blue"}}>
    <h5 className="card-title">REACT COVID19 TRACKER</h5>
    <p className="card-text" style={{color:"blue"}}>
    With the help of Line, Bar and Pie chart you can ﬁnd the total number of Conﬁrmed, Recovered and
Deaths in global as well as any part of Country or indiviual State. For CSS I have applied Material UI.
    </p>
  </div>
  <div className="card-body link" >
  <a href="https://github.com/coderSatya/covidchart" target="_blank" className="card-link">Github Link</a>
    <a href="https://coviddatachart.netlify.app/" target="_blank" className="card-link">View Project</a>
  
  </div>
</div>
         </div>
         <div className='col-4'>
         <div className="card" style={{width:'18rem'}}>
  <img src={crud} className="card-img-top" alt="..." />
  <div className="card-body" style={{backgroundColor:"yellow", color:"blue"}}>
    <h5 className="card-title">REACT CRUD OPERATION</h5>
    <p className="card-text">
    Performed CRUD operation using React. Instead of backend services, here I have taken help of JSON server. You can run the command npm run json-server which will open in port 3002 and then perform crud operation.

    </p>
  </div>
  <div className="card-body">
  <a href="https://github.com/coderSatya/crudapp" target="_blank" className="card-link">Github Link</a>
  
  </div>
</div>
            </div>

            <div className='col-4'>
            <div className="card" style={{width:'18rem'}}>
  <img src={port} className="card-img-top" alt="..." />
  <div className="card-body" style={{backgroundColor:"yellow", color:"blue"}}>
    <h5 className="card-title" style={{textAlign:'center'}}>Portfolio Project</h5>
    <p className="card-text">
      I have created my portfolio project v1 using react and bootrsap. In this I have mentioned my skills, 
      projects, experience, my contact and  about myself. Hope you like this project.
    </p>
  </div>

  <div className="card-body">
  <a href="https://github.com/coderSatya/myportfolio" target="_blank" className="card-link">Github Link</a>
    {/* <a href="https://coviddatachart.netlify.app/" target="_blank" className="card-link">In Project</a> */}
  
  </div>
</div>
            </div>


            <div className='row' style={{marginTop:"25px"}}>
                <div className='col-4'>
                <div className="card" style={{width:'18rem'}}>
  <img src={wheather} className="card-img-top" alt="..." />
  <div className="card-body" style={{backgroundColor:"yellow", color:"blue"}}>
    <h5 className="card-title">REACT WEATHER APP</h5>
    <p className="card-text">
    Find the Temperature of any world of city including humidity, wind speed, pressure and sunrise.
Topics like async await, hooks, state helped me to create this project.
    </p>
  </div>

  <div className="card-body">
  <a href="https://github.com/coderSatya/weatherapp" target="_blank" className="card-link">Github Link</a>
    <a href="https://ecstatic-mclean-431fab.netlify.app/" target="_blank" className="card-link">View Project</a>
  
  </div>
</div>
                </div>

                <div className='col-4'>
                <div className="card" style={{width:'18rem'}}>
  <img src={web} className="card-img-top" alt="..." />
  <div className="card-body" style={{backgroundColor:"yellow", color:"blue"}}>
    <h5 className="card-title">UNIVERSITY WEBSITE</h5>
    <p className="card-text">
      With the help of HTML and CSS I have designed a fully responsive dummy responsive university website. 
      Sections like Home, About, Contact included in this website & google map in the Contact section.

    </p>
  </div>
 
  <div className="card-body">
  <a href="https://github.com/coderSatya/University-Website" target="_blank" className="card-link">Github Link</a>
    <a href="https://codersatya.github.io/University-Website/" target="_blank" className="card-link">View Project</a>
  
  </div>
</div>
                </div>
  
                <div className='col-4'>
                <div className="card" style={{width:'18rem'}}>
  <img style={{height:"180px"}} src={redux1} className="card-img-top" alt="..." />
  <div className="card-body" style={{backgroundColor:"yellow", color:"blue"}}>
    <h5 className="card-title">Redux E-Commerce Store</h5>
    <p className="card-text">
      In this project I have implemented the basics of redux creating store and using dispatch, action and reducers.
       With the help of axios I have fetched the fakeapi and using redux cycle we rendered the UI. Also concept of dyanmic routing is implemented.
    </p>
  </div>

  <div className="card-body">
  <a href="https://github.com/coderSatya/redux-store" target="_blank" className="card-link">Github Link</a>
    <a href="https://ecommercestoreredux.netlify.app/" target="_blank" className="card-link">View Project</a>
  
  </div>
</div>
                </div>
            </div>

            
      </div>
    </div>

   </div>
    </div>
    </>
  )
}

export default Projects