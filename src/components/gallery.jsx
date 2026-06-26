import { useState, useEffect, useCallback, useRef } from "react";
import gallery01 from '../assets/gallery001.jpg';
import gallery02 from '../assets/gallery002.jpg';
import gallery03 from '../assets/gallery003.jpg';
import gallery04 from '../assets/gallery004.jpg';
import gallery05 from '../assets/gallery005.jpg';
import gallery06 from '../assets/gallery006.jpg';
import gallery07 from '../assets/gallery007.jpg';
import gallery08 from '../assets/gallery008.jpg';
import gallery09 from '../assets/gallery009.jpg';
import gallery10 from '../assets/gallery010.jpg';
import gallery11 from '../assets/gallery011.jpg';
import gallery12 from '../assets/gallery012.jpg';
import gallery13 from '../assets/gallery013.jpg';
import gallery14 from '../assets/gallery014.jpg';
import gallery16 from '../assets/gallery016.jpg';
import gallery17 from '../assets/gallery017.jpg';
import gallery18 from '../assets/gallery018.jpg';
import gallery19 from '../assets/gallery019.jpg';
import gallery20 from '../assets/gallery020.jpg';
import styles from "../styles/Gallery.module.css";   // ← CSS Module import

const images = [
  {
    id: 1,
    src: gallery01,                                   // ← always use the imported variable
    alt: "Community members and children gathered at Hope Orphanage with donated food items",
    caption: "Chairman at community event",
    category: "Community",
    span: "portrait",
  },
  {
    id: 2,
    src: gallery02,
    alt: "Medical outreach team posing in front of the Medical Outreach banner",
    caption: "community Outreach",
    category: "Outreach",
    span: "landscape",
  },
  {
    id: 3,
    src: gallery03,
    alt: "Volunteers distributing medical supplies and medications at an outreach table",
    caption: "APC Banner",
    category: "Community",
    span: "landscape",
  },
  {
    id: 4,
    src: gallery04,
    alt: "Coordinator in white attire at the community outreach event",
    caption: "Medical Outreach",
    category: "Healthcare",
    span: "portrait",
  },
  
  {
    id: 5,
    src: gallery06,
    alt: "Volunteer team group photo outdoors in matching white t-shirts",
    caption: "Road Development Project",
    category: "Community",
    span: "landscape",
  },
  {
    id: 6,
    src: gallery07,
    alt: "Team gathered in front of the Medical Outreach banner — I Care Therefore I Act",
    caption: 'Road Development Project',
    category: "Community",
    span: "landscape",
  },
  {
    id: 7,
    src: gallery08,
    alt: "Volunteers with stacked food supplies inside a community hall",
    caption: "Mr chairman at communty event",
    category: "Leadership",
    span: "landscape",
  },
  {
    id: 8,
    src: gallery09,
    alt: "Team photo in front of Medical Outreach backdrop",
    caption: "Building Development Project",
    category: "Community",
    span: "landscape",
  },
  {
    id: 9,
    src: gallery10,
    alt: "Volunteers assembled outdoors for a group photograph before the outreach",
    caption: "Pre-Event Assembly",
    category: "Leadership",
    span: "landscape",
  },
  {
    id: 10,
    src: gallery11,
    alt: "Volunteer addressing seated community members at an outdoor health talk",
    caption: "Palm Planting",
    category: "Commmunity",
    span: "landscape",
  },
  { id: 11, src: gallery12, alt: "Gallery image 12", caption: "Community Event", category: "Community", span: "landscape" },
  { id: 12, src: gallery13, alt: "Gallery image 13", caption: "Outreach Activity", category: "Outreach", span: "landscape" },
  { id: 13, src: gallery14, alt: "Gallery image 14", caption: "Tomato Planting", category: "Healthcare", span: "landscape" },
  { id: 14, src: gallery16, alt: "Gallery image 16", caption: "Community Gathering", category: "Community", span: "landscape" },
  { id: 15, src: gallery17, alt: "Gallery image 17", caption: "Sectariat Building", category: "Community", span: "landscape" },
  { id: 16, src: gallery18, alt: "Gallery image 18", caption: "Leadership Meeting", category: "Leadership", span: "landscape" },
  { id: 17, src: gallery19, alt: "Gallery image 19", caption: "Sectariat Building", category: "Community", span: "landscape" },
  { id: 18, src: gallery20, alt: "Gallery image 20", caption: "Sectariat Building", category: "Community", span: "landscape" },
];

const CATEGORIES = ["All", "Outreach", "Healthcare", "Community", "Leadership"];

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState(null);
  const [filter, setFilter] = useState("All");
  const [visible, setVisible] = useState({});
  const overlayRef = useRef(null);
  const closeRef = useRef(null);

  const filtered =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  const openLightbox = (idx) => setActiveIdx(idx);
  const closeLightbox = useCallback(() => setActiveIdx(null), []);
  const prev = useCallback(
    () => setActiveIdx((i) => (i - 1 + filtered.length) % filtered.length),
    [filtered.length]
  );
  const next = useCallback(
    () => setActiveIdx((i) => (i + 1) % filtered.length),
    [filtered.length]
  );

  useEffect(() => {
    if (activeIdx === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIdx, closeLightbox, prev, next]);

  useEffect(() => {
    if (activeIdx !== null) {
      document.body.style.overflow = "hidden";
      setTimeout(() => closeRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeIdx]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((v) => ({ ...v, [entry.target.dataset.id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "120px" }
    );
    document.querySelectorAll("[data-id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filter]);

  const activeImage = activeIdx !== null ? filtered[activeIdx] : null;

  return (
    <section className={styles.section} aria-label="Community Gallery">
      <div className={styles.bgLayer} aria-hidden="true">
        <svg className={styles.bgSvg} viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
              <polygon points="30,2 58,16 58,44 30,58 2,44 2,16" fill="none" stroke="#c8922a" strokeWidth="0.6" opacity="0.18" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex)" />
        </svg>
        <div className={styles.bgGradient} />
      </div>

      <div className={styles.container}>
        

        <nav className={styles.filterBar} aria-label="Filter gallery by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${filter === cat ? styles.filterActive : ""}`}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
            >
              {cat}
            </button>
          ))}
        </nav>

        <div className={styles.grid} role="list">
          {filtered.map((img, idx) => (
            <div
              key={img.id}
              data-id={img.id}
              className={[
                styles.item,
                styles[img.span] || "",
                visible[img.id] ? styles.revealed : "",
              ].join(" ")}
              role="listitem"
            >
              <button
                className={styles.itemBtn}
                onClick={() => openLightbox(idx)}
                aria-label={`Open photo: ${img.caption}`}
              >
                {visible[img.id] && (
                  <img src={img.src} alt={img.alt} className={styles.img} loading="lazy" />
                )}
                <div className={styles.hoverOverlay} aria-hidden="true">
                  <div className={styles.hoverInner}>
                    <span className={styles.categoryTag}>{img.category}</span>
                    <p className={styles.itemCaption}>{img.caption}</p>
                    <span className={styles.viewHint}>↗ View</span>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>No photos found in this category.</p>
        )}

        
      </div>

      {activeImage && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${activeIdx + 1} of ${filtered.length}: ${activeImage.caption}`}
          ref={overlayRef}
          onClick={(e) => { if (e.target === overlayRef.current) closeLightbox(); }}
        >
          <div className={styles.lightboxInner}>
            <div className={styles.lightboxTop}>
              <span className={styles.counter}>
                {activeIdx + 1}&thinsp;/&thinsp;{filtered.length}
              </span>
              <button
                ref={closeRef}
                className={styles.closeBtn}
                onClick={closeLightbox}
                aria-label="Close lightbox (Escape)"
              >
                ✕
              </button>
            </div>

            <div className={styles.lightboxStage}>
              <button
                className={`${styles.navBtn} ${styles.navPrev}`}
                onClick={prev}
                aria-label="Previous image (left arrow key)"
              >
                ‹
              </button>

              <figure className={styles.lightboxFigure}>
                <img
                  key={activeImage.id}
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className={styles.lightboxImg}
                />
                <figcaption className={styles.lightboxMeta}>
                  <span className={styles.lightboxCategory}>{activeImage.category}</span>
                  <span className={styles.lightboxCaption}>{activeImage.caption}</span>
                </figcaption>
              </figure>

              <button
                className={`${styles.navBtn} ${styles.navNext}`}
                onClick={next}
                aria-label="Next image (right arrow key)"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}