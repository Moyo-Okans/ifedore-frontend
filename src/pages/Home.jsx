import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../styles/home.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSlideshow from "../components/Heroslider";
import gallery1 from '../assets/gallery00.webp';
import gallery2 from '../assets/gallery01.webp';
import gallery3 from '../assets/gallery02.webp';
import gallery4 from '../assets/gallery04.webp';
import gallery5 from '../assets/gallery05.webp';
import attraction1 from '../assets/coa.jpeg';
import attraction2 from '../assets/sma.jpg';
import attraction3 from '../assets/igbh.png';
import attraction4 from '../assets/phs.jpg';
import AddRoadOutlinedIcon from '@mui/icons-material/AddRoadOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';

/* ─── STATIC DATA ───────────────────────────────────────── */

const galleryImages = [
  { src: gallery1, label: "Chairman",        bg: "#1a4a2e" },
  { src: gallery2, label: "Palm plants",     bg: "#27500a" },
  { src: gallery3, label: "Town hall — June 2026", bg: "#0c447c" },
  { src: gallery4, label: "Tomato Harvest",  bg: "#633806" },
  { src: gallery5, label: "Secretariat Building",  bg: "#3c3489" },
];

const attractions = [
  { name: "Cave Of Ashes (Ijare)",   ward: "Isa-Oworo",   img: attraction1 },
  { name: "Smokin Hills Golf Resort", ward: "Ilara-Mokin", img: attraction2 },
  { name: "Igbara-Oke Hills",         ward: "Igbara-Oke",  img: attraction3 },
  { name: "Premier Holiday Resort",  ward: "Igbara-Oke",  img: attraction4 },
];

const projects = [
  { icon: WaterDropOutlinedIcon, name: "Rural water supply scheme",    loc: "Ipinsa & Oke-Igbo communities", status: "Completed",   statusClass: "status-done" },
  { icon: BoltOutlinedIcon,      name: "Street lighting installation", loc: "Isarun township roads",          status: "In progress", statusClass: "status-prog" },
  { icon: LocalHospitalOutlinedIcon, name: "Health centre renovation", loc: "Ward 4 — Ogbese",               status: "Completed",   statusClass: "status-done" },
  { icon: WaterDropOutlinedIcon, name: "Rural water supply scheme",    loc: "Ipinsa & Oke-Igbo communities", status: "Completed",   statusClass: "status-done" },
];

/* ─── CATEGORY CONFIG ───────────────────────────────────── */

const categoryConfig = {
  Development: { icon: ConstructionOutlinedIcon, iconBg: "#4a2e09", tagClass: "tag-infra", color: '#d4af37', },
  News:        { icon: TextSnippetOutlinedIcon,  iconBg: "#262624", tagClass: "tag-news" , color: '#9d9d9c', },
  Education:   { icon: SchoolOutlinedIcon,       iconBg: "#2c591b", tagClass: "tag-edu" , color: '#6ceda3',  },
  Health:      { icon: LocalHospitalOutlinedIcon,iconBg: "#4a0909", tagClass: "tag-health", color: '#ba5454',},
  Agriculture: { icon: AgricultureOutlinedIcon,  iconBg: "#00280e", tagClass: "tag-agric", color: '#539c37', },
  default:     { icon: TextSnippetOutlinedIcon,  iconBg: "#262624", tagClass: "tag-news", color: '#9d9d9c',  },
}
const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('en-US', {
  year: 'numeric', month: 'long', day: 'numeric'
})

/* ─── HOMEPAGE ──────────────────────────────────────────── */

export default function Homepage() {
  const navigate = useNavigate()
  const [newsBlogs, setNewsBlogs] = useState([])
  const [newsLoading, setNewsLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('https://ifedore-backend.onrender.com/api/blog/all?limit=3')
        const data = await res.json()
        setNewsBlogs(data.blogs || [])
      } catch (error) {
        console.error(error)
      } finally {
        setNewsLoading(false)
      }
    }
    fetchNews()
  }, [])

  return (
    <div className="homee">

      <Navbar />
      <HeroSlideshow />

      {/* Chairman bar */}
      <div className="chairman-bar">
        <div className="chairman-avatar">OA</div>
        <div className="chairman-info">
          <div className="chairman-label">Executive Chairman</div>
          <div className="chairman-name">Hon. Oladipupo Ajibola. A</div>
          <div className="chairman-quote">
            "Our commitment is to deliver development that touches every household in Ifedore."
          </div>
        </div>
        <button className="chairman-link"      onClick={() => navigate('/chairman')}>View Profile →</button>
      </div>

      {/* Gallery */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Gallery</h2>
          <a href="#" className="view-all"  onClick={() => navigate('/projects')}>View all →</a>
        </div>
        <div className="gallery-strip">
          {galleryImages.map((img, i) => (
            <div className="gallery-item" key={i}>
              {img.src ? (
                <img src={img.src} alt={img.label} />
              ) : (
                <div style={{
                  width: "100%", height: "100%",
                  background: img.bg,
                  display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 36,
                }}>
                  {img.icon}
                </div>
              )}
              <div className="gallery-item-label">{img.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* News & Announcements */}
      <section className="section section-alt">
        <div className="section-header">
          <h2 className="section-title">Latest News & Announcements</h2>
          
           <a className="view-all"
            onClick={() => navigate('/blog')}
            style={{ cursor: 'pointer' }}
          >
            View all →
          </a>
        </div>

        {newsLoading ? (
          <p className="news-loading">Loading...</p>
        ) : newsBlogs.length === 0 ? (
          <p className="news-loading">No news available.</p>
        ) : (
          <div className="news-grid">
            {newsBlogs.map((blog) => {
              const config = categoryConfig[blog.categories] || categoryConfig.default
              const Icon = config.icon
              return (
                <div
                  className="news-card"
                  key={blog._id}
                  onClick={() => navigate(`/blog/${blog.slug}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="news-thumb" style={{ backgroundColor: config.iconBg, color: config.color }}>
                    {blog.image
                      ? <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      
                      : <Icon sx={{ fontSize: 50}} />
                    }
                  </div>
                  <div className="news-body">
                    <span className={`news-tag ${config.tagClass}`}>{blog.categories}</span>
                    <p className="news-headline">{blog.title}</p>
                    <p className="news-date">{formatDate(blog.createdAt)}</p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </section>

      {/* Tourist Attractions */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Tourist Attractions In Ifedore LGA</h2>
        </div>
        <div className="attractions-grid">
          {attractions.map((a, i) => (
            <div className="attraction-card" key={i}>
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `url(${a.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }} />
              <div className="attraction-overlay" />
              <div className="attraction-info">
                <div className="attraction-name">{a.name}</div>
                <span className="attraction-ward">{a.ward}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section section-alt">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <a href="#" className="view-all">View all →</a>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => {
            const ProjIcon = p.icon
            return (
              <div className="project-card" key={i}>
                <div className="project-icon">
                  <ProjIcon sx={{ fontSize: 24, color: "#1a4a2e" }} />
                </div>
                <div className="project-body">
                  <div className="project-name">{p.name}</div>
                  <div className="project-loc">{p.loc}</div>
                </div>
                <span className={`project-status ${p.statusClass}`}>{p.status}</span>
              </div>
            )
          })}
        </div>
      </section>

      <Footer />
    </div>
  )
}