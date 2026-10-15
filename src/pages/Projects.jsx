import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery'
import AddRoadOutlinedIcon from '@mui/icons-material/AddRoadOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';import AgricultureIcon from '@mui/icons-material/Agriculture';
import WebIcon from '@mui/icons-material/Web';
import GroupIcon from '@mui/icons-material/Group';
import WcIcon from '@mui/icons-material/Wc';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import '../styles/projects.css';
import gallerymain from '../assets/gallerymain.webp'

function Projects() {
  return (
    <div className="projects-container">
      <Navbar />
        <div className='projects-body'>
          <div className='projects-topbar'> 
            <h2>Projects And Achievements</h2>
            <p>Recent photos from projects, events and community activities across ifedore.</p>
          </div>
            <div className="projects">
              <div className="textheader">
                <h2>Recent Projects</h2>
              <p>Tracking what has been done and what is underway across all wards</p>
              </div>
              
              <div className="projectmain">
                <div className="statsbar">
                  <div className="statscard">
                      <h2>25+</h2>
                      <span>Completed</span>
                  </div>
                  <div className="statscard">
                      <h2>1</h2>
                      <span>In Progress</span>
                  </div>
                  <div className="statscard">
                       <h2>4+</h2>
                      <span>Planned</span>
                  </div>
                  
                </div>


                <div className="projects-progress">
                      <div className="a1">
                <div className="iconachive">
                    <AddRoadOutlinedIcon />
                </div>
                <div className="txt0">
                  <span>Road infrastructure upgrade</span>
                  <p>Started March 2026 · Completed</p>
                  <div className="progressbar">
                    <div className="progressline">

                    </div>
                  </div>
                </div>
                <span className="status">Completed</span>
            </div>
            <div className="a1">
                <div className="iconachive">
                    <SchoolOutlinedIcon />
                </div>
                <div className="txt0">
                  <span>Education investment</span>
                  <p>Construction and furnishing of 9 classroom blocks across primary schools</p>
                  <div className="progressbar">
                    <div className="progressline">

                    </div>
                  </div>
                  
                </div>
                <span className="status">Completed</span>
            </div>
            <div className="a1">
                <div className="iconachive">
                    <WaterDropOutlinedIcon/>
                </div>
                <div className="txt0">
                  <span>Solar-powered borehole - Ijare & Igbara-Oke</span>
                  <p>Clean, reliable water access for communities, powered by the sun</p>
                  <div className="progressbar">
                    <div className="progressline">

                    </div>
                  </div>
                </div>
                <span className="status">Completed</span>
            </div>
            <div className="a1">
                <div className="iconachive">
                    <OilBarrelIcon/>
                </div>
                <div className="txt0">
                  <span>Palm distribution to farmers</span>
                  <p>Over 8,000 Palm seedlings distributed to farmers</p>
                  <div className="progressbar">
                    <div className="progressline">

                    </div>
                  </div>
                </div>
                <span className="status">Completed</span>
            </div>
            <div className="a1">
                <div className="iconachive">
                   <WcIcon/>
                </div>
                <div className="txt0">
                  <span>Women and youth aid</span>
                  <p>10M naira distributed to youths and women (100,000 to 100 beneficiaries)</p>
                  <div className="progressbar">
                    <div className="progressline">

                    </div>
                  </div>
                </div>
                <span className="status">Completed</span>
            </div>
            <div className="a1">
                <div className="iconachive">
                    <AgricultureIcon />
                </div>
                <div className="txt0">
                  <span>Distribution of fertilizers to farmers</span>
                  <p>100 bags of fertilizers to farmers</p>
                  <div className="progressbar">
                    <div className="progressline0">

                    </div>
                  </div>
                </div>
                <span className="status0">In Progress</span>
            </div>
            <div className="a1">
                <div className="iconachive">
                    <GroupIcon />
                </div>
                <div className="txt0">
                  <span>Proposed 30M naira aid to the aged</span>
                  <p>Proposed 30M naira to the aged (100,000 naira to 300 beneficiaries)</p>
                  <div className="progressbar">
                    <div className="progressline">

                    </div>
                  </div>
                </div>
                <span className="status">Completed</span>
            </div>
            <div className="a1">
                <div className="iconachive">
                    <WebIcon />
                </div>
                <div className="txt0">
                  <span>Website Creation</span>
                  <p>Official website creation for Ifedore Local Government</p>
                  <div className="progressbar">
                    <div className="progressline">

                    </div>
                  </div>
                </div>
                <span className="status">Completed</span>
            </div>
            <div className="a1">
                <div className="iconachive">
                    <AgricultureIcon />
                </div>
                <div className="txt0">
                  <span>Distribution of cocoa seedlings</span>
                  <p>5,000 cocoa seedlings distributed to farmers</p>
                  <div className="progressbar">
                    <div className="progressline">

                    </div>
                  </div>
                </div>
                <span className="status">Completed</span>
            </div>
            <div className="a1">
                <div className="iconachive">
                    <TimeToLeaveIcon/>
                </div>
                <div className="txt0">
                  <span>Royal Vehicle Distribution</span>
                  <p>Distribution of cars to traditional rulers</p>
                  <div className="progressbar">
                    <div className="progressline">

                    </div>
                  </div>
                </div>
                <span className="status">Completed</span>
            </div>
                </div>
              </div>
            </div>


            <div className="gallerymain">
              <div className="textheader">
                <h2>Gallery</h2>
               <p>Recent photos from projects, events and community activities across Ifedore</p>
              </div>
              
              
                <Gallery/>
              
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default Projects