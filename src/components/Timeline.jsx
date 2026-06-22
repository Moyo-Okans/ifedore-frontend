import React from "react";
import '../styles/components.css';
import EventIcon from '@mui/icons-material/Event';
import OutlinedFlagRoundedIcon from '@mui/icons-material/OutlinedFlagRounded';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';

const events = [
  {
    era: 'Pre-colonial era',
    title: 'Settlement and traditional governance',
    description: 'Communities now comprising Ifedore LGA were governed under traditional institutions, with Igbara-Oke, Isarun, and Ipinsa among the oldest established settlements in the region.',
    icon: <EventIcon sx={{ color: "#D4AF37" }}/>
  },
  {
    era: '1976',
    title: 'Local government reform',
    description: "Nigeria's nationwide local government reform brought organised administration to the area, laying the groundwork for formalised council structures across what would become Ifedore.",
    icon: <OutlinedFlagRoundedIcon sx={{ color: "#D4AF37" }}/>
  },
  {
    era: '1991',
    title: 'Creation of Ifedore LGA',
    description: 'Ifedore Local Government Area was officially created as part of a nationwide local government restructuring exercise.',
    icon: <MapsHomeWorkOutlinedIcon sx={{ color: "#D4AF37" }}/>
  },
  {
    era: 'Present day',
    title: 'Growth and active development',
    description: 'Today Ifedore LGA is a growing area with active investment in roads, healthcare, education, and rural infrastructure, serving a population across 10 wards and over 24 communities.',
    icon: <ArrowOutwardOutlinedIcon sx={{ color: "#D4AF37" }}/>
  }
]

function Timeline() {
  return (
    <section className="timeline-section">
      <div className="timeline-container">
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-icon">
                {event.icon}
              </div>
              {index !== events.length - 1 && (
                <div className="timeline-line"></div>
              )}
            </div>
            <div className="timeline-content">
              <span className="timeline-era">{event.era}</span>
              <h3 className="timeline-title">{event.title}</h3>
              <p className="timeline-text">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline