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
import HeadOfLga from '../assets/Head-LGA.webp'
import Agric from '../assets/Agric.jpg';
import Environment from '../assets/environment.jpg'
import Auditor from '../assets/auditor.jpg'
import PHC from '../assets/phc.jpg'
import Secretary from '../assets/Secretary.jpg'
import Yakubu from '../assets/Yakubu.webp'
import Aliju from '../assets/Alju.webp'
import IJWard1 from '../assets/IJ-ward1.webp'
import IJWard2 from '../assets/IJ-ward2.webp'
import IOWard1 from '../assets/IO-ward1.webp'
import IOWard2 from '../assets/IO-ward2.webp'
import Ipagun from '../assets/Ipagun.webp'
import Obagbe from '../assets/Obagbe.webp'
import HonWasiu from '../assets/HonWasiu.JPG'
import Yusuf from '../assets/Yusuf.jpg'
import Silifat from '../assets/silifat.jpg'
import Samuel from '../assets/samuel.jpg'
import Gabriel from '../assets/gabriel.jpg'
import Israel from '../assets/isrel.jpg'
import Jide from '../assets/jide.jpg'
import Advisor from '../assets/Advisor.webp'
import Fayose from '../assets/fayose.jpg'
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
              <div className="secretary">
                    <div className="chairmanpic"><img src={Secretary} alt="Executive Chairman" /></div>
                <div className="chairmaninfo">
                  <span>Secretary</span>
                  <h3>Hon. Awoseye .O. Collins, Esq</h3>
                  <p>Coordinates the day-to-day administration of the Local Government Council and oversees the implementation of council policies and decisions.</p>
                </div>
              </div>
            </div>
            
        </div>
        <div className="council">
          <h2>Political Leaders</h2>
          <div className="leaders">
            <div className="leader">
              <div className="picandname">
                  <img src={IJWard1} alt="" />
                  <h3>Hon. Fashua Orisumibare</h3>
              </div>
              <span className="post">Councillor representing Ijare ward 1</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={IJWard2} alt="" />
                  <h3>Hon. Akingbola Adedapo</h3>
              </div>
              <span className="post">Majority Leader Councillor representing Ijare ward 2</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={Aliju} alt="" />
                  <h3>Hon. Alju Jelil</h3>
              </div>
              <span className="post">Councillor representing Isarun/Erigi ward</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={Yakubu} alt="" />
                  <h3>Hon. Yakubu Gbadamosi</h3>
              </div>
              <span className="post">Deputy Majority Leader, Councillor representing Ilara Ward 2</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={HonWasiu} alt="" />
                  <h3>Hon. Wasiu Adekunle Oluyi </h3>
              </div>
              <span className="post">Leader Ifedore Local Government Legislature. Ilara-Mokin Ward 1</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={Yusuf} alt="" />
                  <h3>Hon. Yusuf Tunde </h3>
              </div>
              <span className="post">Deputy Leader Councillor representing Ero/Ibuji Mariwo Ward</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={Ipagun} alt="" />
                  <h3>Hon. Ofobutu Emmanuel</h3>
              </div>
              <span className="post">Chief Whip Councillor representing Ipagun/Ibule Ward</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={Obagbe} alt="" />
                  <h3>Hon. Adebayo Mayowa</h3>
              </div>
              <span className="post">Councillor representing Oba Ikota Obagbe Ward</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={IOWard1} alt="" />
                  <h3>Hon. Igbiloba Kolawole</h3>
              </div>
              <span className="post">Councillor for representing Igbara-Oke Ward 1</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={IOWard2} alt="" />
                  <h3>Hon. Jide Omolanwa</h3>
              </div>
              <span className="post">Councillor representing Igbara-Oke Ward 2</span>
            </div>

          </div>
        </div>
         <div className="council">
          <h2>Supervisors and Advisors</h2>
          <div className="leaders">
            <div className="leader">
              <div className="picandname">
                  <img src={Gabriel} alt="" />
                  <h3>Hon. Olusanya Gabriel</h3>
              </div>
              <span className="post">Statutory Adviser for People with Disbility, Humanitarian Service and Tradition Institution</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={Fayose} alt="" />
                  <h3>Hon. Fayose Joshua</h3>
              </div>
              <span className="post">Statutory Adviser for Security</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={Israel} alt="" />
                  <h3>Hon. Agboola Omotuyi Israel</h3>
              </div>
              <span className="post">Supervisor for Works</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={Samuel} alt="" />
                  <h3>Hon. Owoeye Sunday Samuel</h3>
              </div>
              <span className="post">Supervisor for Agriculture and Natural Resources</span>
            </div>
  
            <div className="leader">
              <div className="picandname">
                  <img src={Jide} alt="" />
                  <h3>Hon. Makoyawo Oluwaseyi Olajide</h3>
              </div>
              <span className="post">Supervisor for Health and Environment</span>
            </div>
            
            <div className="leader">
              <div className="picandname">
                  <img src={Silifat} alt="" />
                  <h3>Hon. Sobowale Silifat </h3>
              </div>
              <span className="post">Supervisor for Education</span>
            </div>
            <div className="leader">
            <div className="picandname">
                  <img src={Advisor} alt="" />
                  <h3>Hon. Ajape Michael Oluwaseun</h3>
              </div>
              <span className="post">Advisor on Youth Development and Community Service</span>
            </div>
          </div>
        </div>
        <div className="council">
          <h2>Non-Political Leaders</h2>
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
                  <img src={leader3} alt="" />
                  <h3>Mr. Ayodeji Olusanni Blackson</h3>
              </div>
              <span className="post">Director Of Financial Services</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={Auditor} alt="" />
                  <h3>Oniye Oluremi Olajumoke</h3>
              </div>
              <span className="post">Internal Auditor</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={Agric} alt="" />
                  <h3>Mrs. Adebisi Morayo</h3>
              </div>
              <span className="post">Director Of Agric and Natural resources</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={Environment} alt="" />
                  <h3>Mrs. Olaniyi Margaret Adetokunbo</h3>
              </div>
              <span className="post">Director Of Environmental Services</span>
            </div>
  
            <div className="leader">
              <div className="picandname">
                  <img src={leader4} alt="" />
                  <h3>Mrs. Osuntuyi Elizabeth Olayinka</h3>
              </div>
              <span className="post">Director Of Budget Planning, Research and Statistics</span>
            </div>
            
            <div className="leader">
              <div className="picandname">
                  <img src={leader5} alt="" />
                  <h3>Engr. Mrs. Aladekugbe Catherine </h3>
              </div>
              <span className="post">Director Of Works and Transport</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={leader6} alt="" />
                  <h3>Barrister Ayemo Akinwale</h3>
              </div>
              <span className="post">Director Of Legal services</span>
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
                  <img src={leader7} alt="" />
                  <h3>Mrs. Adeyemi Henrietta Adejoke</h3>
              </div>
              <span className="post">Director Of Social Development information, Education, Youth and Sport</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={leader8} alt="" />
                  <h3>Mr. Omoniyi Luqman</h3>
              </div>
              <span className="post">Local Government Accountant</span>
            </div>
            <div className="leader">
              <div className="picandname">
                  <img src={PHC} alt="" />
                  <h3>Dr. Adedayo Fayanju</h3>
              </div>
              <span className="post">Director of PHC</span>
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
                <h3>General Services and Administration Departmrnt</h3>
              </div>
              <div className="deptbody">
                <p>The General Services and Administration Department oversees the day-to-day administration of the local government, including personnel management, recruitment, staff welfare, training, promotions, and disciplinary matters. It also coordinates statutory meetings, maintains official records, and ensures administrative processes run efficiently across the council.</p>
              </div>
             
            </div>
            <div className="department">
              <div className="deptheader">
               
                <div className="iconachive">
                    <AttachMoneyOutlinedIcon />
                </div>
                <h3>Finance & Supply</h3>
              </div>
              <div className="deptbody">
               <p>The Finance and Supply Department manages the local government's finances by preparing budgets, collecting revenue, overseeing public funds, and producing financial reports in line with approved regulations. It is also responsible for procurement, treasury operations, and the proper management of government stores and supplies.</p>
              </div>
              
            </div>
            <div className="department">
              <div className="deptheader">
               
                <div className="iconachive">
                    <PrecisionManufacturingOutlinedIcon />
                </div>
                <h3>Works & Transport Department</h3>
              </div>
              <div className="deptbody">
                <p>The Works and Transport Department plans, constructs, and maintains public infrastructure such as roads, drainage systems, bridges, and government buildings across the local government area. It also prepares engineering designs, project estimates, and supervises construction works to ensure quality and durability.</p>
              </div>
              
            </div>
            <div className="department">
              <div className="deptheader">
               
                <div className="iconachive">
                    <PrecisionManufacturingOutlinedIcon />
                </div>
                <h3>Legal services Department</h3>
              </div>
              <div className="deptbody">
                <p>The Legal Services Department provides legal advice to the Chairman and the Local Government Council, ensuring that policies, contracts, and official actions comply with the law. It also represents the local government in court, handles legal disputes, and reviews agreements and other legal documents.</p>
              </div>
              
            </div>
            <div className="department">
              <div className="deptheader">
               
                <div className="iconachive">
                    <CleaningServicesOutlinedIcon />
                </div>
                <h3>Environmental Services Department</h3>
              </div>
              <div className="deptbody">
                <p>The Environmental Services Department promotes a clean and healthy environment through waste management, pollution control, environmental sanitation, and enforcement of public health regulations. It also conducts health inspections, manages pest control programs, and works to prevent environmental hazards within the community.</p>
              </div>
              
            </div>
            <div className="department">
              <div className="deptheader">
               
                <div className="iconachive">
                    <CleaningServicesOutlinedIcon />
                </div>
                <h3>Budget Planning Research & Statistics Department</h3>
              </div>
              <div className="deptbody">
                <p>The Budget, Planning, Research and Statistics Department prepares and monitors the local government's budget while supporting planning and policy decisions through research and data analysis. It also manages the council's computer systems, maintains statistical records, and provides reliable data for effective governance and development planning.</p>
              </div>
              
            </div>
            
          </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Leadership