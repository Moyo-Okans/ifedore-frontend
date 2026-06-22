import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';
import Logo from '../assets/Logo.png';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import '../styles/about.css';

function About() {
  return (
    <div className="about-container">
      <Navbar/>
      <div className="about-topbar">
        <div className="top-right">
          <img src={Logo} alt="" />
          <div className="tr-text">
            <h2>Ifedore Local Government Area</h2>
            <p>Ondo State · South-West Nigeria Headquarters: Isarun · Established: 1991</p>
          </div>
        </div>
        <div className="top-left">
          <div className="stat">
            <h2>10</h2>
            <p>Wards</p>
          </div>
          <div className="stat">
            <h2>24+</h2>
            <p>Communities</p>
          </div>
          <div className="stat">
            <h2>~180k</h2>
            <p>Population</p>
          </div>
          <div className="stat">
            <h2>573km²</h2>
            <p>Land Area</p>
          </div>
        </div>
      </div>
      <div className="about-body">
        <div className="about-left">
          <div className="about-text">
            <h2>About Ifedore LGA</h2>
            <p>Ifedore Local Government Area is one of the eighteen local government areas of Ondo State, situated in the heart of the Ondo South Senatorial District. The LGA shares boundaries with Akure South, Akure North, Idanre, and Ile-Oluji/Okeigbo LGAs, and is home to a rich tapestry of communities known for agriculture, craftsmanship, and cultural heritage.</p>
            <p>The local government serves as the closest tier of government to the people, providing essential services including primary healthcare, basic education, road maintenance, sanitation, and community development. Its administrative headquarters is located in Isarun.</p>
          </div>
          <div className="history-text">
            <h2>
              Brief History
            </h2>
            <Timeline/>
          </div>
          <div className="core-values">
            <h2>Core Values</h2>
            <div className="core-valueBox">
              <div className="core-value">
                <VisibilityOutlinedIcon sx={{ color: '#34970E', fontSize: '35px'}}/>
                <p className="value">
                  Transparency
                </p>
                <p className='value-text'>Open governance and accountability to the people</p>
              </div>
              <div className="core-value">
                <VisibilityOutlinedIcon sx={{ color: '#34970E', fontSize: '35px'}}/>
                <p className="value">
                  Transparency
                </p>
                <p className='value-text'>Open governance and accountability to the people</p>
              </div>
              <div className="core-value">
                <VisibilityOutlinedIcon sx={{ color: '#34970E', fontSize: '35px'}}/>
                <p className="value">
                  Transparency
                </p>
                <p className='value-text'>Open governance and accountability to the people</p>
              </div>
              <div className="core-value">
                <VisibilityOutlinedIcon sx={{ color: '#34970E', fontSize: '35px'}}/>
                <p className="value">
                  Transparency
                </p>
                <p className='value-text'>Open governance and accountability to the people</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-right">

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About