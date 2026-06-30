import React from 'react';
import { Link } from 'react-router';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Logo from '../assets/logo.JPG';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={Logo} alt="" />
            <h2>IFEDORE LOCAL GOVERNMENT AREA</h2>
          </div>
          <p>Serving the people of Ifedore with transparency, accountability, and an 
unwavering commitment to sustainable development across all eleven wards.</p>
        </div>
        <div className="footer-right">
          <div className="quick-links">
            <h3>QUICK LINKS</h3>
            <Link to='/'>
                Home
            </Link>
            <Link to='/about'>
                About
            </Link>
            <Link to='/chairman'>
                Chairman
            </Link>
            <Link to='/leadership'>
                Leadership
            </Link>
            <Link to='/Projects'>
                Projects
            </Link>
          </div>
          <div className="quick-links">
            <h3>CONTACT US</h3>
            <div className="footer-deets">
              <EmailOutlinedIcon sx={{ color: '#00280e', background: '#C9FFB5', padding: '5px',
                  borderRadius: '5px'
                }}/>
              <div className="fd-text">
                <p>info@ifedorelga.ng</p>
                
              </div>
            </div>
            <div className="footer-deets">
              <LocalPhoneIcon sx={{ color: '#00280e', background: '#C9FFB5', padding: '5px',
                  borderRadius: '5px'
                }}/>
              <div className="fd-text">
                <p>080 0000 0000</p>
                
              </div>
            </div>
            <div className="footer-deets">
              <LocationOnOutlinedIcon sx={{ color: '#00280e', background: '#C9FFB5', padding: '5px',
                  borderRadius: '5px'
                }}/>
              <div className="fd-text">
                <p>LGA Secretariat, Igbara Oke, Ondo State</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {year} Ifedore Local Government Area · Ondo State, Nigeria · All rights reserved
        </p>
        <p className='footer-link'>
          Made with <FavoriteBorderIcon sx={{ color: '#62d894', fontSize: '13px'}}/> by <a href="https://www.thetrybeco.org/">TheTrybeCo</a> 
        </p>
      </div>
    </div>
  )
}

export default Footer