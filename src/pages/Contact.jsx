import React, { useState } from 'react';
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
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    category: '',
    ward: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: 'New Contact Form Submission: Ifedore LGA Website',
          name: form.name,
          phone: form.phone,
          email: form.email,
          category: form.category,
          ward: form.ward,
          message: form.message
        })
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '', category: '', ward: '', message: '' })
      } else {
        setStatus('error')
      }

    } catch (error) {
      console.error(error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='contact-page'>
      <Navbar/>
      <div className="contact-topbar">
          <h2>Contact & Feedback</h2>
          <p>Reach the Ifedore LGA office or send us your feedback</p>
      </div>
      <div className="contact-body">
        <div className="contact-left">
            <h2>Send Us A Message</h2>

            {status === 'success' && (
              <p className="form-status success">Your message has been sent successfully. We'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="form-status error">Something went wrong. Please try again.</p>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="label">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder='Your Full Name'
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="labels">
                <div className="label">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder='080 0000 0000'
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="label">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='you@gmail.com'
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="label">
                <label htmlFor="category">Category</label>
                <input
                  id="category"
                  name="category"
                  type="text"
                  placeholder='Report An Issue'
                  value={form.category}
                  onChange={handleChange}
                />
              </div>
              <div className="label">
                <label htmlFor="ward">Your Ward/Community</label>
                <input
                  id="ward"
                  name="ward"
                  type="text"
                  placeholder='e.g Ward 3-Igbara-Oke'
                  value={form.ward}
                  onChange={handleChange}
                />
              </div>
              <div className="label">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder='Write your feedback, complaint, inquiry or suggestion here'
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-button">
                <button type="submit" disabled={loading}>
                  <img src={Send} alt="" />
                  {loading ? 'Sending...' : 'Submit Message'}
                </button>
              </div>
            </form>

            <div className="contact-right-responsive">
              <h2>Office Contact</h2>
              <div className="contact-boxes">
                <div className="contact-box">
                  <FmdGoodOutlinedIcon sx={{ color: '#00280e', background: '#C9FFB5', padding: '5px', borderRadius: '5px' }}/>
                  <div className="cb-right">
                    <p className="cb-header">Address</p>
                    <p className="cb-text">LGA Secretariat, Isarun, Ifedore, Ondo State</p>
                  </div>
                </div>
                <div className="contact-box">
                  <LocalPhoneIcon sx={{ color: '#00280e', background: '#C9FFB5', padding: '5px', borderRadius: '5px' }}/>
                  <div className="cb-right">
                    <p className="cb-header">Office Line</p>
                    <p className="cb-text">080 0000 0000</p>
                  </div>
                </div>
                <div className="contact-box">
                  <MailOutlined sx={{ color: '#00280e', background: '#C9FFB5', padding: '5px', borderRadius: '5px' }}/>
                  <div className="cb-right">
                    <p className="cb-header">Email</p>
                    <p className="cb-text">info@ifedorelga.ng</p>
                  </div>
                </div>
                <div className="contact-box">
                  <WorkIcon sx={{ color: '#00280e', background: '#C9FFB5', padding: '5px', borderRadius: '5px' }}/>
                  <div className="cb-right">
                    <p className="cb-header">Office Hours</p>
                    <p className="cb-text">Mon-Fri, 8am - 4pm</p>
                  </div>
                </div>
              </div>
              <div className="social-media">
                <h2>Social Media Handles</h2>
                <div className="sm-handles">
                  <Link to='https://www.facebook.com/share/1HpX74XCxd/'>
                    <FacebookIcon sx={{ color: '#00280e', background: '#C9FFB5', padding: '5px', borderRadius: '5px' }}/>
                  </Link>
                  <Link to='https://www.instagram.com/ifedore_lg_updates?igsh=MWVxcXlrcmdxbmFucA=='>
                    <InstagramIcon sx={{ color: '#00280e', background: '#C9FFB5', padding: '5px', borderRadius: '5px' }}/>
                  </Link>
                </div>
              </div>
            </div>
        </div>

        <div className="contact-right">
            <h2>Office Contact</h2>
            <div className="contact-boxes">
              <div className="contact-box">
                <FmdGoodOutlinedIcon sx={{ color: '#00280e', background: '#C9FFB5', padding: '5px', borderRadius: '5px' }}/>
                <div className="cb-right">
                  <p className="cb-header">Address</p>
                  <p className="cb-text">LGA Secretariat, Isarun, Ifedore, Ondo State</p>
                </div>
              </div>
              <div className="contact-box">
                <LocalPhoneIcon sx={{ color: '#00280e', background: '#C9FFB5', padding: '5px', borderRadius: '5px' }}/>
                <div className="cb-right">
                  <p className="cb-header">Office Line</p>
                  <p className="cb-text">080 0000 0000</p>
                </div>
              </div>
              <div className="contact-box">
                <MailOutlined sx={{ color: '#00280e', background: '#C9FFB5', padding: '5px', borderRadius: '5px' }}/>
                <div className="cb-right">
                  <p className="cb-header">Email</p>
                  <p className="cb-text">info@ifedorelga.ng</p>
                </div>
              </div>
              <div className="contact-box">
                <WorkIcon sx={{ color: '#00280e', background: '#C9FFB5', padding: '5px', borderRadius: '5px' }}/>
                <div className="cb-right">
                  <p className="cb-header">Office Hours</p>
                  <p className="cb-text">Mon-Fri, 8am - 4pm</p>
                </div>
              </div>
            </div>
            <div className="social-media">
              <h2>Social Media Handles</h2>
              <div className="sm-handles">
                <Link to='https://www.facebook.com/share/1HpX74XCxd/'>
                  <FacebookIcon sx={{ color: '#00280e', background: '#C9FFB5', padding: '5px', borderRadius: '5px' }}/>
                </Link>
                <Link to='https://www.instagram.com/ifedore_lg_updates?igsh=MWVxcXlrcmdxbmFucA=='>
                  <InstagramIcon sx={{ color: '#00280e', background: '#C9FFB5', padding: '5px', borderRadius: '5px' }}/>
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