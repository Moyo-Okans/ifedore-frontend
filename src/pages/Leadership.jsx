import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import chairman from '../assets/chairmanleader.png';
import vicechairman from '../assets/vcleader.webp'
import leader1 from '../assets/frame139.webp'
import leader2 from '../assets/frame140.webp'
import leader3 from '../assets/frame141.webp'
import leader4 from '../assets/frame142.webp'
import leader5 from '../assets/frame143.webp'
import leader6 from '../assets/frame144.webp'
import leader7 from '../assets/frame145.webp'
import leader8 from '../assets/frame146.webp'
import leader9 from '../assets/frame147.webp'
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import '../styles/leadership.css';

function Leadership() {
  return (
    <div className="leadership-container">
        <Navbar/>
        <div className="leadership-topbar">
            <h1>Council leadership & departments</h1>
            <p>The elected council and administrative structure of Ifedore Local Government Area</p>

        </div>

        <div className="executive">
            <h2>Executive Leadership</h2>

            <div className="executivesec">
              <div className="chairman">
                <div className="chairmanpic"><img src={chairman} alt="Executive Chairman" /></div>
                <div className="chairmaninfo">
                  <span>Executive Chairman</span>
                  <h3>Hon. Oladipupo Ajibola. A</h3>
                  <p>Overall administration, policy direction, and development coordination for all of Ifedore LGA</p>
                </div>
              </div>
              <div className="vice">
                    <div className="chairmanpic"><img src={vicechairman} alt="Executive Chairman" /></div>
                <div className="chairmaninfo">
                  <span>Vice Chairman</span>
                  <h3>Hon. Mrs. Ajibola Ijimakinwa</h3>
                  <p>Supports the Executive Chairman and oversees supervisory councilor activities and ward coordination</p>
                </div>
              </div>
            </div>
            
        </div>
        <div className="council">
          <h2>Council Leaders</h2>
          <div className="leaders">
            <div className="leader">
              <div className="picandname">
                  <img src={leader1} alt="" />
                  <h3>Mrs. Wole - Awolere I.A</h3>
              </div>
              <span className="post">Head Of Local Government Area</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={leader2} alt="" />
                  <h3>Mr. Kazeem Bashiru Lekan</h3>
              </div>
              <span className="post">Director Of General Services and Administration</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={leader3} alt="" />
                  <h3>Mr. Olusanmi Ayodeji Blacksore</h3>
              </div>
              <span className="post">Director Of Financial Services</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={leader4} alt="" />
                  <h3>Mrs. Osuntuyi</h3>
              </div>
              <span className="post">Director Of Budget Planning and Related Services</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={leader5} alt="" />
                  <h3>Engr. Mrs. Catherine Aladekungbe</h3>
              </div>
              <span className="post">Director Of Works</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={leader6} alt="" />
                  <h3>Mr. Akinwale Ayemo</h3>
              </div>
              <span className="post">Director Of Legal</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={leader7} alt="" />
                  <h3>Mrs. Adeyemi Adejoke</h3>
              </div>
              <span className="post">Director Of Community</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={leader8} alt="" />
                  <h3>Mr. John Doe</h3>
              </div>
              <span className="post">Ifedore Accountant</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={leader9} alt="" />
                  <h3>RT. Hon. Wasiu Adekunle Oluyi</h3>
              </div>
              <span className="post">Ifedore legislative Leader</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src="" alt="" />
                  <h3></h3>
              </div>
              <span className="post"></span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src="" alt="" />
                  <h3></h3>
              </div>
              <span className="post"></span>
            </div>
          </div>
        </div>
        <div className="admindepartments">
          
          <h2>Administrative Departments</h2>
          
          <div className="departments">
            <div className="department">
              <div className="deptheader">
               
                <div className="iconachive">
                    <ApartmentOutlinedIcon />
                </div>
                <h3>General Services and Administration</h3>
              </div>
              <div className="deptbody">
                <p>Handles day-to-day general administration, human resource management, staff recruitment, training, and record-keeping. It serves as the backbone of the LGA’s workforce coordination and ensures smooth internal operations.</p>
              </div>
             
            </div>
            <div className="department">
              <div className="deptheader">
               
                <div className="iconachive">
                    <PrecisionManufacturingOutlinedIcon />
                </div>
                <h3>Works & Infrastructure</h3>
              </div>
              <div className="deptbody">
                <p>This department is responsible for the planning, construction, rehabilitation, and maintenance of roads, bridges, public buildings, and other critical infrastructure. It plays a vital role in improving connectivity across the 10 wards, ensuring durable roads for transportation, and overseeing general public works projects that support economic growth and daily mobility in the LGA.</p>
              </div>
              
            </div><div className="department">
              <div className="deptheader">
               
                <div className="iconachive">
                    <SchoolRoundedIcon />
                </div>
                <h3>Education</h3>
              </div>
              <div className="deptbody">
                <p>Focused on primary and basic education, this department manages local schools, oversees teacher welfare, implements government education policies, and coordinates infrastructure improvements in learning environments. It works to enhance access to quality education, support student enrollment, and partner with state and federal agencies for programs that benefit children and youth in Ifedore.</p>
              </div>
              
            </div><div className="department">
              <div className="deptheader">
               
                <div className="iconachive">
                    <MonitorHeartOutlinedIcon />
                </div>
                <h3>Health</h3>
              </div>
              <div className="deptbody">
                <p>The Health Department manages primary healthcare centers, organizes medical outreaches, immunization programs, maternal and child health services, and sanitation initiatives. It is instrumental in delivering accessible healthcare to residents, responding to public health challenges, and promoting preventive care across communities.</p>
              </div>
              
            </div><div className="department">
              <div className="deptheader">
               
                <div className="iconachive">
                    <AgricultureOutlinedIcon />
                </div>
                <h3>Agriculture & Natural Resources</h3>
              </div>
              <div className="deptbody">
                <p>his department supports farmers through extension services, provision of improved seedlings, livestock support, and rural development programs. It promotes food security, modern farming techniques, agro-processing, and sustainable management of natural resources to boost agricultural productivity in the area.</p>
              </div>
              
            </div><div className="department">
              <div className="deptheader">
               
                <div className="iconachive">
                    <AttachMoneyOutlinedIcon />
                </div>
                <h3>Finance & Treasury</h3>
              </div>
              <div className="deptbody">
               <p>Responsible for revenue generation, budgeting, financial accounting, and expenditure control. This department ensures transparent management of LGA funds, timely payment of salaries, and proper allocation of resources for developmental projects.</p>
              </div>
              
            </div><div className="department">
              <div className="deptheader">
               
                <div className="iconachive">
                    <RouteOutlinedIcon />
                </div>
                <h3>Planning & Budget</h3>
              </div>
              <div className="deptbody">
                <p>Coordinates long-term development planning, project prioritization, budgeting processes, and monitoring of government programs. It aligns local initiatives with state and national development goals for sustainable growth in Ifedore.</p>
              </div>
              
            </div>
            <div className="department">
              <div className="deptheader">
               
                <div className="iconachive">
                    <PeopleOutlinedIcon />
                </div>
                <h3>Community Development / Social Services</h3>
              </div>
              <div className="deptbody">
                <p>Focuses on youth and women empowerment, social welfare programs, poverty alleviation, and community engagement initiatives. It promotes inclusive development through skill acquisition, cooperative societies, and support for vulnerable groups.</p>
              </div>
              
            </div>
            <div className="department">
              <div className="deptheader">
               
                <div className="iconachive">
                    <CleaningServicesOutlinedIcon />
                </div>
                <h3>Environmental / Sanitation:</h3>
              </div>
              <div className="deptbody">
                <p>Deals with waste management, environmental protection, public hygiene, and pollution control. This department enforces sanitation laws, organizes clean-up exercises, and works to maintain a clean and healthy living environment for residents.</p>
              </div>
              
            </div>
          </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Leadership