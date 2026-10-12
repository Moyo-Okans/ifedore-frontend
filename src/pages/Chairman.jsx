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
          <p className='tenure'>In office since [February, 2025]</p>
          <div className="chairmanbtn">
            
            <a href="mailto:info@ifedorelga.ng" className="chairbtn">
              <EmailOutlinedIcon />
              Official Mail
            </a>

            <a href="tel:+2349050942799" className="chairbtn">
              <LocalPhoneOutlinedIcon />
              Official Phone
            </a>
          </div>
        </div>
      </div>
        
      <div className='bio'>
        
      <div className="left">
        <div className="biography">
          <h2>Biography</h2>
          <p>Hon. Oladipupo Ajibola was born about 55 years ago in Ifedore and rose through education, private enterprise and party politics to the leadership of his local government. His career shows how dedication and perseverance can be turned into service to the people.</p>
          <p>
            He began his education at St. Peter's Primary School, Ijare, between 1977 and 1983. He completed his secondary education at Anglican Grammar School, Ijare, in 1989. He later earned a Higher National Diploma (HND) from the Federal Polytechnic, Ado-Ekiti, in 1998 and served his country as a youth corps member from 1999 to 2000. In 2001 he gained admission to the University of Ado-Ekiti for a Master of Business Administration (MBA), which he completed in 2003.
          </p>
          <p>
            His professional career began in 1998 at Standard Commodities and Handling Services. Through diligence and consistent performance, he rose from Warehouse Officer to Director of the company. The discipline and enterprise he built over those years later became the foundation of his public service.
          </p>
          <p>
            He joined active politics in 2013 as one of the pioneer members of the All Progressives Congress (APC) in Ifedore Local Government Area. In 2014, he contested the party's primary for the Ifedore State Constituency seat. He lost, but he supported the party's candidate in the general election. In 2015 and 2016, he was among the Aketi supporters in the party primary and governorship election. These experiences showed his loyalty to his party and his commitment to its collective success.
          </p>
          <p>
            In April 2017, he was appointed Caretaker Chairman of Ifedore Local Government Area. In that role, he championed development initiatives aimed at improving the welfare of residents. The role also gave him a deeper understanding of local governance.

His political commitment continued with his service as Secretary of the Grassroot Democracy Defenders, a group founded in September 2021 to support the governorship ambition of His Excellency, Dr Lucky Orimisan Aiyedatiwa.
          </p>
          <p>
            He is now the elected Executive Chairman of Ifedore Local Government Area, elected on a platform of grassroots development and transparent governance. He brings his private-sector experience and administrative knowledge to the task of promoting the social and economic well-being of the people. His leadership rests on dedication, perseverance, diligence, transparency and the fear of God. These values, formed in private practice, now guide his public administration.

Outside public life, Hon. Ajibola is a married man and a father.

In recognition of his contributions to local government administration and his commitment to grassroots development, Southwest Heralds Magazine celebrates Hon. Oladipupo Ajibola as a public servant dedicated to community advancement and responsible governance.
          </p>
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
          <a href="mailto:info@ifedorelga.ng" className="messagebtn">
            
            Write to the Chairman

          </a>
        </div>
      </div>

    </div>
   
    <Footer/>
    </div>
  )
}

export default Chairman