import { useState, useEffect, useCallback } from "react";
import slide1 from "../assets/ifedore3.webp";
import Hero from "../assets/health.webp";
import Youth from "../assets/waterpplant.webp";
import slide4 from '../assets/ifedore4.webp'
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import '../styles/heroslider.css';

const slides = [
  {
    tag: "Welcome",
    title: "Serving the people of Ifedore with transparency & progress",
    desc: "Your gateway to local government services, news, and development updates for all communities in Ifedore LGA, Ondo State.",
    img: slide1,
    actions: ["Explore Projects", "Meet The Chairman"],
    
  },
  {
    tag: "Infrastructure",
    title: "New road construction begins in Igbara-Oke community",
    desc: "A 3.2km internal road project is now underway, connecting key communities and improving transport across Ward 1.",
    img: slide4,
    actions: ["Read More", "View Projects"],
  },
  {
    tag: "Health",
    title: "Free medical outreach reaches 6 wards this June",
    desc: "The Department of Health & Environment is bringing free consultations, screenings and medications to communities across Ifedore.",
    img: Hero,
    actions: ["Learn More", "View Projects"],
  },
  {
    tag: "Achievement",
    title: "Water supply scheme completed — 4,200 residents benefit",
    desc: "The rural water supply project in Ipinsa and Oke-Igbo has been commissioned, delivering clean water to over 4,200 residents.",
    img: Youth,
    actions: ["View Projects", "Read More"],
  },
];
 
export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
 
  const goTo = useCallback((n) => {
    setCurrent((n + slides.length) % slides.length);
  }, []);
 
  const next = useCallback(() => goTo(current + 1), [current, goTo]);
 
  useEffect(() => {
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [next]);
 
  return (
    <div className="hero">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide${i === current ? " active" : ""}`}
        >
          <div
            className="hero-slide-bg"
            style={
    slide.img
      ? {
          backgroundImage: `url(${slide.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      : {
          backgroundColor: slide.bg,
        }
  }
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="hero-tag">{slide.tag}</span>
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-desc">{slide.desc}</p>
            {/* <div className="hero-actions">
              <button className="btn-primary">{slide.actions[0]}</button>
              <button className="btn-outline">{slide.actions[1]}</button>
            </div> */}
          </div>
        </div>
      ))}
 
      {/* <button
        className="hero-arrow left"
        onClick={() => goTo(current - 1)}
        aria-label="Previous slide"
      >‹</button>
      <button
        className="hero-arrow right"
        onClick={() => goTo(current + 1)}
        aria-label="Next slide"
      >›</button> */}
 
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === current ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}