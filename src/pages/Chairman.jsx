import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Logo from '../assets/Logo.png';
import Chairmanimg from '../assets/chairman1.jpg'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AddRoadOutlinedIcon from '@mui/icons-material/AddRoadOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import '../styles/chairman.css';

function Chairman() {
  return (
   
    <div className="chairman-container">
      <Navbar/>
      
      <div className="chairman-topbar">
        <div className="topleft">
          <div className="ec">
            <span className="ec-text">EC</span>
            <p>Executive Chairman</p>
          </div>
        </div>
        <div className="topright">
          <p className='office'>OFFICE OF THE EXECUTIVE CHAIRMAN</p>
          <h2>Hon. Oladipupo Ajibola. A</h2>
          <p className='location'>Ifedore Local Government Area · Ondo State</p>
          <p className='tenure'>In office since [Month, Year]</p>
          <div className="chairmanbtn">
            <button className="chairbtn">
              <EmailOutlinedIcon />
              Official mail
            </button>
            <button className="chairbtn">
              <LocalPhoneOutlinedIcon />
              Official Phone
            </button>
          </div>
        </div>
      </div>
        
      <div className='bio'>
        
      <div className="left">
        <div className="biography">
          <h2>Biography</h2>
          <p>Hon. Oladipupo Ajibola. A is the Executive Chairman of Ifedore Local Government Area, elected on a platform of grassroots development and transparent governance. He brings extensive experience in public administration and community leadership to the office.</p>
          <p>Born and raised in Ifedore, he pursued his education at [Institution] and has dedicated his career to the development of his people. Prior to his election as Executive Chairman, he served in [previous roles] and championed several development initiatives across the local government.</p>
        </div>
        <div className="hide">
            <div className="pic">
          <img src={Chairmanimg} alt="" />
        </div>
        <div className="officedeetss">
          <div className="deetsheader">
            <h2>Office Details</h2>
          </div>
          
          <div className="deets">
            <div className="deet">
              <p>Title</p>
              <span>Executive Chairman</span>
            </div>
            <div className="deet">
              <p>LGA</p>
              <span>Ifedore</span>
            </div>
            <div className="deet">
              <p>State</p>
              <span>Ondo State</span>
            </div>
            <div className="deet">
              <p>Status</p>
              <span>Current</span>
            </div>
          </div>
        </div>
        </div>

        <div className="achievements">
          <h2>Key Achievements In Office</h2>
            <div className="a1">
                <div className="iconachive">
                    <AddRoadOutlinedIcon />
                </div>
                <div className="txt">
                  <span>Road infrastructure upgrade</span>
                  <p>Rehabilitated 14km of roads across 6 communities within the first year</p>
                </div>
            </div>
            <div className="a1">
                <div className="iconachive">
                    <SchoolOutlinedIcon />
                </div>
                <div className="txt">
                  <span>Education investment</span>
                  <p>Construction and furnishing of 9 classroom blocks across primary schools</p>
                </div>
            </div>
            <div className="a1">
                <div className="iconachive">
                    <WaterDropOutlinedIcon />
                </div>
                <div className="txt">
                  <span>Rural water access</span>
                  <p>Water borehole projects serving over 4,000 residents in underserved wards</p>
                </div>
            </div>
        </div>

        <div className="development">
            <h2>Development Agenda</h2>
            <ul>
              <li className="dev">
                <CheckOutlinedIcon />
                <span>Expand primary healthcare access to all 10 wards</span>
              </li>
              <li className="dev">
                <CheckOutlinedIcon />
                <span>Market infrastructure and traders support programme</span>
              </li>
              <li className="dev">
                <CheckOutlinedIcon />
                <span>Youth empowerment and skills acquisition initiative</span>
              </li>
              <li className="dev">
                <CheckOutlinedIcon />
                <span>Street lighting for all ward headquarters</span>
              </li>
              <li className="dev">
                <CheckOutlinedIcon />
                <span>Digital governance and e-services integration</span>
              </li>
            </ul>
        </div>
      </div>
      <div className="right">
        <div className="pic">
          <img src={Chairmanimg} alt="" />
        </div>
        <div className="officedeets">
          <div className="deetsheader">
            <h2>Office Details</h2>
          </div>
          
          <div className="deets">
            <div className="deet">
              <p>Title</p>
              <span>Executive Chairman</span>
            </div>
            <div className="deet">
              <p>LGA</p>
              <span>Ifedore</span>
            </div>
            <div className="deet">
              <p>State</p>
              <span>Ondo State</span>
            </div>
            <div className="deet">
              <p>Status</p>
              <span>Current</span>
            </div>
          </div>
        </div>
        <div className="sendmessage">
          <p>Have a concern or suggestion for the Executive Chairman's office? We welcome your feedback.</p>
          <button className="messagebtn">Write to the Chairman</button>
        </div>
      </div>

    </div>
   
    <Footer/>
    </div>
  )
}

export default Chairman