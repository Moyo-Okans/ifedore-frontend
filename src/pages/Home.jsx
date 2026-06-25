import { useState } from "react";
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

/* ─── DATA ─────────────────────────────────────────────── */

const galleryImages = [
  { src: gallery1, label: "chairman", bg: "#1a4a2e",  },
  { src: gallery2, label: "Palm plants",  bg: "#27500a",  },
  { src: gallery3, label: "Town hall — June 2026",  bg: "#0c447c", },
  { src: gallery4, label: "Tomat Harvest",    bg: "#633806",  },
  { src: gallery5, label: "Sectariat Building",          bg: "#3c3489",  },
];

const news = [
  {
    tag: "Infrastructure", tagClass: "tag-infra",
    icon: AddRoadOutlinedIcon,   // ✅ component reference, no quotes
    iconBg: "#1a4a2e",
    headline: "New road rehabilitation begins in Igbara-Oke community",
    date: "June 11, 2026",
  },
  {
    tag: "Education", tagClass: "tag-edu",
    icon: SchoolOutlinedIcon,    // ✅ component reference, no quotes
    iconBg: "#27500a",
    headline: "Council commissions three new classrooms in primary schools",
    date: "June 5, 2026",
  },
  {
    tag: "Health", tagClass: "tag-health",
    icon: LocalHospitalOutlinedIcon, // ✅ component reference, no quotes
    iconBg: "#412402",
    headline: "Free medical outreach scheduled for rural wards this month",
    date: "May 29, 2026",
  },
];

const attractions = [
  { name: "Cave Of Ashes (Isarun)",   ward: "Isa-Oworo",   img: attraction1 },
  { name: "Smokin Hills Golf Resort", ward: "Ilara-Mokin", img: attraction2 },
  { name: "Igbara-Oke Hills",         ward: "Igbara-Oke",  img: attraction3 },
  { name: "Premier Holiday Resorts",  ward: "Igbara-Oke",  img: attraction4 },
];

const projects = [
  { icon: WaterDropOutlinedIcon, name: "Rural water supply scheme",    loc: "Ipinsa & Oke-Igbo communities", status: "Completed",   statusClass: "status-done" },
  { icon: BoltOutlinedIcon,      name: "Street lighting installation", loc: "Isarun township roads",          status: "In progress", statusClass: "status-prog" },
  { icon: LocalHospitalOutlinedIcon, name: "Health centre renovation", loc: "Ward 4 — Ogbese",               status: "Completed",   statusClass: "status-done" },
  { icon: WaterDropOutlinedIcon, name: "Rural water supply scheme",    loc: "Ipinsa & Oke-Igbo communities", status: "Completed",   statusClass: "status-done" },
];

/* ─── HOMEPAGE ──────────────────────────────────────────── */

export default function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  // ✅ Icon is NOT here — it belongs inside the map, see below

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
        <button className="chairman-link">View Profile →</button>
      </div>

      {/* Gallery */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Gallery</h2>
          <a href="#" className="view-all">View all →</a>
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
          <a href="#" className="view-all">View all →</a>
        </div>
        <div className="news-grid">
          {news.map((n, i) => {
            const Icon = n.icon; // ✅ inside the map, so n exists here
            return (
              <div className="news-card" key={i}>
                <div className="news-thumb" style={{ background: n.iconBg }}>
                  <Icon sx={{ fontSize: 40, color: "#D4AF37" }} /> {/* ✅ rendered as JSX */}
                </div>
                <div className="news-body">
                  <span className={`news-tag ${n.tagClass}`}>{n.tag}</span>
                  <p className="news-headline">{n.headline}</p>
                  <p className="news-date">{n.date}</p>
                </div>
              </div>
            );
          })}
        </div>
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
                position: "absolute", inset: 0,      // ✅ added position absolute
                backgroundImage: `url(${a.img})`,    // ✅ backgroundImage not background
                backgroundSize: "cover",              // ✅ cover not fill
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
            const ProjIcon = p.icon; // ✅ same pattern for project icons
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
            );
          })}
        </div>
      </section>

      <Footer />

    </div>
  );
}