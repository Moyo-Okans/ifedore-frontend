import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';
import Logo from '../assets/Logo.png';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import RecyclingOutlinedIcon from '@mui/icons-material/RecyclingOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
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
                <GroupOutlinedIcon sx={{ color: '#34970E', fontSize: '35px'}}/>
                <p className="value">
                  Inclusion
                </p>
                <p className='value-text'>Serving all wards and communities equally</p>
              </div>
              <div className="core-value">
                <ViewInArOutlinedIcon sx={{ color: '#34970E', fontSize: '35px'}}/>
                <p className="value">
                  Development
                </p>
                <p className='value-text'>Committed to sustainable progress and growth</p>
              </div>
              <div className="core-value">
                <ShieldOutlinedIcon sx={{ color: '#34970E', fontSize: '35px'}}/>
                <p className="value">
                  Integrity
                </p>
                <p className='value-text'>Honest stewardship of public resources</p>
              </div>
              <div className="core-value">
                <SettingsSystemDaydreamOutlinedIcon sx={{ color: '#34970E', fontSize: '35px'}}/>
                <p className="value">
                  Service
                </p>
                <p className='value-text'>Putting the welfare of residents first always</p>
              </div>
              <div className="core-value">
                <RecyclingOutlinedIcon sx={{ color: '#34970E', fontSize: '35px'}}/>
                <p className="value">
                  Sustainability
                </p>
                <p className='value-text'>Honest stewardship of public resources</p>
              </div>
            </div>
          </div>
          <div className="communities">
            <h2>Communities and Wards</h2>
            <div className="communities-box">
    
                <div className="community">
                    
                    <p><LocationOnOutlinedIcon sx={{ color: '#34970E'}}/> Igbara Oke</p>
                    <h2 className="ward">W1</h2>
                </div>
                <div className="community">
                    
                    <p><LocationOnOutlinedIcon sx={{ color: '#34970E'}}/> Ipinsa</p>
                    <h2 className="ward">W2</h2>
                </div>
                <div className="community">
                    
                    <p><LocationOnOutlinedIcon sx={{ color: '#34970E'}}/> Isarun</p>
                    <h2 className="ward">W3</h2>
                </div>
                <div className="community">
                    
                    <p><LocationOnOutlinedIcon sx={{ color: '#34970E'}}/> Ogbese</p>
                    <h2 className="ward">W4</h2>
                </div>
                <div className="community">
                    
                    <p><LocationOnOutlinedIcon sx={{ color: '#34970E'}}/> Oke-Igbo</p>
                    <h2 className="ward">W5</h2>
                </div>
                <div className="community">
                    
                    <p><LocationOnOutlinedIcon sx={{ color: '#34970E'}}/> Alade</p>
                    <h2 className="ward">W6</h2>
                </div>
                <div className="community">
                    
                    <p><LocationOnOutlinedIcon sx={{ color: '#34970E'}}/> Ipogun</p>
                    <h2 className="ward">W7</h2>
                </div>
                <div className="community">
                    
                    <p><LocationOnOutlinedIcon sx={{ color: '#34970E'}}/> Ilara-Mokin</p>
                    <h2 className="ward">W8</h2>
                </div>
                <div className="community">
                    
                    <p><LocationOnOutlinedIcon sx={{ color: '#34970E'}}/> Iju</p>
                    <h2 className="ward">W9</h2>
                </div>
                <div className="community">
                    
                    <p><LocationOnOutlinedIcon sx={{ color: '#34970E'}}/> Oke-Aro</p>
                    <h2 className="ward">W10</h2>
                </div>
            </div>
          </div>
        </div>
        <div className="about-right">
            <h2>Quick Facts</h2>
            <div className="fact-box">
              <div className="fact-top">
                <p>Ifedore LGA at a glance</p>
              </div>
              <div className='fact'>
                  <p className='fact-right'>State</p>
                  <p className='fact-left'>Ondo State</p>
              </div>
              <div className='fact'>
                  <p className='fact-right'>HQ</p>
                  <p className='fact-left'>Isarun</p>
              </div>
              <div className='fact'>
                  <p className='fact-right'>Created</p>
                  <p className='fact-left'>1991</p>
              </div>
              <div className='fact'>
                  <p className='fact-right'>Population</p>
                  <p className='fact-left'>~180,000</p>
              </div>
              <div className='fact'>
                  <p className='fact-right'>Area</p>
                  <p className='fact-left'>573 km²</p>
              </div>
              <div className='fact'>
                  <p className='fact-right'>Wards</p>
                  <p className='fact-left'>10</p>
              </div>
              <div className='fact'>
                  <p className='fact-right'>Language</p>
                  <p className='fact-left'>Yoruba (Ondo)</p>
              </div>
              <div className='fact'>
                  <p className='fact-right'>Climate</p>
                  <p className='fact-left'>Tropical rainforest</p>
              </div>
              <div className='fact' style={{ borderBottom: 'none' }}>
                  <p className='fact-right'>Economy</p>
                  <p className='fact-left'>Agriculture, trade</p>
              </div>
            </div>
            <div className="part-box">
              <p className="part-heading">
                Part of Ondo State
              </p>
              <p className='part-text'>One of 18 local government areas in Ondo State, in the South-West geopolitical zone of Nigeria.</p>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About