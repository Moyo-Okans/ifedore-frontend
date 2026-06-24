import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import chairman from '../assets/chairmanleader.webp';
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
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
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
                  <h3>Hon. Oladipupo Ajibola. A</h3>
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
                <ul>
                  <li>Personnel management and staff welfare</li>
                  <li>Office administration and records management</li>
                  <li>Council meetings and official correspondence</li>
                </ul>
              </div>
              <div className="deptfooter">
                <PeopleOutlineOutlinedIcon/>
                <p>14 Staffs</p>
              </div>
            </div>
            <div className="department">
              <div className="deptheader">
               
                <div className="iconachive">
                    <ApartmentOutlinedIcon />
                </div>
                <h3>General Services and Administration</h3>
              </div>
              <div className="deptbody">
                <ul>
                  <li>Personnel management and staff welfare</li>
                  <li>Office administration and records management</li>
                  <li>Council meetings and official correspondence</li>
                </ul>
              </div>
              <div className="deptfooter">
                <PeopleOutlineOutlinedIcon/>
                <p>14 Staffs</p>
              </div>
            </div><div className="department">
              <div className="deptheader">
               
                <div className="iconachive">
                    <ApartmentOutlinedIcon />
                </div>
                <h3>General Services and Administration</h3>
              </div>
              <div className="deptbody">
                <ul>
                  <li>Personnel management and staff welfare</li>
                  <li>Office administration and records management</li>
                  <li>Council meetings and official correspondence</li>
                </ul>
              </div>
              <div className="deptfooter">
                <PeopleOutlineOutlinedIcon/>
                <p>14 Staffs</p>
              </div>
            </div><div className="department">
              <div className="deptheader">
               
                <div className="iconachive">
                    <ApartmentOutlinedIcon />
                </div>
                <h3>General Services and Administration</h3>
              </div>
              <div className="deptbody">
                <ul>
                  <li>Personnel management and staff welfare</li>
                  <li>Office administration and records management</li>
                  <li>Council meetings and official correspondence</li>
                </ul>
              </div>
              <div className="deptfooter">
                <PeopleOutlineOutlinedIcon/>
                <p>14 Staffs</p>
              </div>
            </div><div className="department">
              <div className="deptheader">
               
                <div className="iconachive">
                    <ApartmentOutlinedIcon />
                </div>
                <h3>General Services and Administration</h3>
              </div>
              <div className="deptbody">
                <ul>
                  <li>Personnel management and staff welfare</li>
                  <li>Office administration and records management</li>
                  <li>Council meetings and official correspondence</li>
                </ul>
              </div>
              <div className="deptfooter">
                <PeopleOutlineOutlinedIcon/>
                <p>14 Staffs</p>
              </div>
            </div><div className="department">
              <div className="deptheader">
               
                <div className="iconachive">
                    <ApartmentOutlinedIcon />
                </div>
                <h3>General Services and Administration</h3>
              </div>
              <div className="deptbody">
                <ul>
                  <li>Personnel management and staff welfare</li>
                  <li>Office administration and records management</li>
                  <li>Council meetings and official correspondence</li>
                </ul>
              </div>
              <div className="deptfooter">
                <PeopleOutlineOutlinedIcon/>
                <p>14 Staffs</p>
              </div>
            </div><div className="department">
              <div className="deptheader">
               
                <div className="iconachive">
                    <ApartmentOutlinedIcon />
                </div>
                <h3>General Services and Administration</h3>
              </div>
              <div className="deptbody">
                <ul>
                  <li>Personnel management and staff welfare</li>
                  <li>Office administration and records management</li>
                  <li>Council meetings and official correspondence</li>
                </ul>
              </div>
              <div className="deptfooter">
                <PeopleOutlineOutlinedIcon/>
                <p>14 Staffs</p>
              </div>
            </div><div className="department">
              <div className="deptheader">
               
                <div className="iconachive">
                    <ApartmentOutlinedIcon />
                </div>
                <h3>General Services and Administration</h3>
              </div>
              <div className="deptbody">
                <ul>
                  <li>Personnel management and staff welfare</li>
                  <li>Office administration and records management</li>
                  <li>Council meetings and official correspondence</li>
                </ul>
              </div>
              <div className="deptfooter">
                <PeopleOutlineOutlinedIcon/>
                <p>14 Staffs</p>
              </div>
            </div>
          </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Leadership