import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery'
import AddRoadOutlinedIcon from '@mui/icons-material/AddRoadOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
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
                      <h2>8</h2>
                      <span>Completed</span>
                  </div>
                  <div className="statscard">
                      <h2>4</h2>
                      <span>In Progress</span>
                  </div>
                  <div className="statscard">
                       <h2>3</h2>
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
                  <p>Started March 2026 · 65% done</p>
                  <div className="progressbar">
                    <div className="progressline0">

                    </div>
                  </div>
                </div>
                <span className="status0">In Progress</span>
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
                    <WaterDropOutlinedIcon />
                </div>
                <div className="txt0">
                  <span>Rural water supply — Ipinsa & Oke-Igbo</span>
                  <p>Rural water supply — Ipinsa & Oke-Igbo</p>
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
              
              <div className="gallerypic">
                <Gallery/>
              </div>
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default Projects