import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Send from '../assets/fa_send.png';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Link } from 'react-router';
import { MailOutlined } from '@mui/icons-material';
import WorkIcon from '@mui/icons-material/Work';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/contact.css'

function Contact() {
  return (
    <div className='contact-page'>
      <Navbar/>
      <div className="contact-topbar">
          <h2>Contact & Feedback</h2>
          <p>Reach the ifedore LGA office or send us your feedback</p>
      </div>
      <div className="contact-body">
        <div className="contact-left">
            <h2>Send Us A message</h2>
            <form action="" className="contact-form">
              <div className="label">
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder='Your Full Name'/>
              </div>
              <div className="labels">
                <div className="label">
                  <label htmlFor="">Phone Number</label>
                  <input type="text" placeholder='080 0000 0000'/>
                </div>
                <div className="label">
                  <label htmlFor="">Email</label>
                  <input type="text" placeholder='you@gmail.com'/>
                </div>
              </div>
              <div className="label">
                <label htmlFor="">Category</label>
                <input type="text" placeholder='Report An Issue'/>
              </div>
              <div className="label">
                <label htmlFor="">Your Ward/Community</label>
                <input type="text" placeholder='e.g Ward 3-Igbara-Oke'/>
              </div>
              <div className="label">
                <label htmlFor="">Your Message</label>
                <textarea placeholder='Write your feedback, complaint, inquiry or suggestion here'/>
              </div>
              <div className="form-button">
                <button>
                  <img src={Send} alt="" />
                  Submit Message
                </button>
              </div>
            </form>
        </div>
        <div className="contact-right">
            <h2>Office Contact</h2>
            <div className="contact-boxes">
              <div className="contact-box">
                <FmdGoodOutlinedIcon sx={{ color: '#00280e', background: '#C9FFB5', padding: '5px',
                  borderRadius: '5px'
                }}/>
                <div className="cb-right">
                  <p className="cb-header">
                    Address
                  </p>
                  <p className="cb-text">
                    LGA Secretariat, Isarun, Ifedore, Ondo State
                  </p>
                </div>
              </div>
              <div className="contact-box">
                <LocalPhoneIcon sx={{ color: '#00280e', background: '#C9FFB5', padding: '5px',
                  borderRadius: '5px'
                }}/>
                <div className="cb-right">
                  <p className="cb-header">
                    Office Line
                  </p>
                  <p className="cb-text">
                    080 0000 0000
                  </p>
                </div>
              </div>
              <div className="contact-box">
                <MailOutlined sx={{ color: '#00280e', background: '#C9FFB5', padding: '5px',
                  borderRadius: '5px'
                }}/>
                <div className="cb-right">
                  <p className="cb-header">
                    Email
                  </p>
                  <p className="cb-text">
                    info@ifedorelga.ng
                  </p>
                </div>
              </div>
              <div className="contact-box">
                <WorkIcon sx={{ color: '#00280e', background: '#C9FFB5', padding: '5px',
                  borderRadius: '5px'
                }}/>
                <div className="cb-right">
                  <p className="cb-header">
                    Office Hours
                  </p>
                  <p className="cb-text">
                    Mon-Fri, 8am - 4pm
                  </p>
                </div>
              </div>
            </div>
            <div className="social-media">
              <h2>Social Media Handles</h2>
              <div className="sm-handles">
                <Link to='https://www.facebook.com/share/1HpX74XCxd/'>
                  <FacebookIcon sx={{ color: '#00280e', background: '#C9FFB5', padding: '5px',
                  borderRadius: '5px'
                }}/>
                </Link>
                <Link to='https://www.instagram.com/ifedore_lg_updates?igsh=MWVxcXlrcmdxbmFucA=='>
                  <InstagramIcon sx={{ color: '#00280e', background: '#C9FFB5', padding: '5px',
                  borderRadius: '5px'
                }}/>
                </Link>
              </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact