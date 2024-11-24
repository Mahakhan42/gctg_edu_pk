import React from 'react';
import Navbar from '../Components/Navbar';
import HomeSlider from './HomeSlider';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Footer from '../Components/Footer';
import { IoLibrary } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { GiMaterialsScience } from "react-icons/gi";
import { FaHospitalAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GrCafeteria } from "react-icons/gr";
import { MdComputer } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { FaPray } from "react-icons/fa";

const Home = () => {
  return (
    <>
   <Navbar/>
      <HomeSlider />
      <div className="container my-5"> {/* Added margin for spacing */}
        <h2 className="text-center" style={{ color: '#05472A' }}><b>WELCOME TO GCTG KARIMABAD</b></h2>
        <br />
        <h4 style={{ color: '#05472A' }}><b><u>BRIEF HISTORY</u></b> </h4>
        <br />
<p>Globalization generates new demands, structures, and systems requiring new skills and knowledge In today's global economy driven by knowledge, the foremost wealth of a firm is its human capital. Therefore, the Economic Development of a country strongly depends on the level of Human Development that in turn depends on the level of technically trained labour. Skilled labour results in improved productivity for Industry. A country with wide ranging Industrial base generates greater employment opportunities and reduces un-employment and poverty. For optimum performance by Industry, productive workforce is needed to meet economic and social objectives.</p>

<p>Pakistan with a labour surplus economy, on one side has rapidly increasing unemployed youth while on the other end its public and private sector employers desperately look for technically educated and trained workforce. The shortage of skilled labour is due to a mismatch between academic Programmes and market-oriented skills and trainings.</p>

<p>Keeping in view the changing domestic and international labour market requirements and in lime with the scheme of reorganization of Technical & Vocational Education and Training (TVET) Institutions adopted by other provinces, Sindh Technical Education and Vocational Training Authority (STEVTA) was established through the STEVTA Ordinance, 2007 (Ordinance XVII of 2007) to streamline the Technical Education and Vocational Training in the province.</p>

<p>After the approval of the Sindh Cabinet in its meeting held on February 28, 2009, the administrative control of all TVET Institutions have been entrusted to STEVTA and subsequently in 2009, the Sindh Assembly passed the STEVTA Bill, 2009 on March 29, 2010, and enacted as The Sindh Technical Education & Vocational Training Authority Act, 2009 on April 20, 2010.</p>

<p>In order to extend complete autonomy for reorganization and effective management, the policy making task has been entrusted to the STEVTA Board of Governors (BoG). The BoG comprises of 20 members, with representation from the Provincial Government (20%), Provincial Departments (50%), and Private Sector (30%).
        </p>
       
      </div>

      {/* Admission Section */}
      <div className="container-fluid" style={{ backgroundColor: '#99c29e', padding: '30px 0' }}> {/* Adjusted padding */}
        <div className="container">
          <div className="row">
            {/* Left side image */}
            <div className="col-md-6">
              <img width="100%" height="450" src=".\src\assets\img\Home3.png" alt="Admission" />
            </div>

            {/* Right side Admission Info */}
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2 style={{ color: '#fff' }}><b>ADMISSION</b></h2>
              <br />
              <ul className="list-unstyled">
                {admissionItems.map((item, index) => (
                  <li key={index} className="d-flex justify-content-between align-items-center" style={listItemStyle}>
                    <Link to={item.link} style={{ color: '#fff', textDecoration: 'none' }}>
                      <span>{item.text}</span>
                    </Link>
                    <FaLongArrowAltRight style={{ color: '#fff' }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="container text-center my-5">
        <h1 className="text-center" style={{ color: '#05472A' }}><b>FACILITIES</b></h1>
        <br />

        <div className="row justify-content-center">
          {/* Facility Items Row 1 */}
          {facilityItemsRow1.map((item, index) => (
            <div key={index} className="col-md-3 col-sm-6 col-12 mb-4">
              <div className="facility-box">
                {item.icon}
                <h4><b>{item.text}</b></h4>
              </div>
            </div>
          ))}
        </div>

        {/* Facility Items Row 2 */}
        <div className="row justify-content-center">
          {facilityItemsRow2.map((item, index) => (
            <div key={index} className="col-md-3 col-sm-6 col-12 mb-4">
              <div className="facility-box">
                {item.icon}
                <h4><b>{item.text}</b></h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

// Admission points data with links
const admissionItems = [
  { text: 'Policy and Guidelines', link: '/Admission#policy' },
  { text: 'Rules and Regulations', link: '/Admission#rules' },
  { text: 'Prospectus', link: '/Admission#pdf' },
  { text: 'Scholarship and Stipend', link: '/Admission#scholarship' }
];

// Facilities data
const facilityItemsRow1 = [
  { text: 'Library', icon: <IoLibrary size={50} /> },
  { text: 'Computer Lab', icon: <FaComputer size={50} /> },
  { text: 'Science Lab', icon: <GiMaterialsScience size={50} /> },
  { text: 'Dispensary', icon: <FaHospitalAlt size={50} /> },
];

const facilityItemsRow2 = [
  { text: 'Cafeteria', icon: <GrCafeteria size={50} /> },
  { text: 'E-Library', icon: <MdComputer size={50} /> },
  { text: 'Prayer Room', icon: <FaPray size={50} /> },
  { text: 'Gym Room', icon: <CgGym size={50} /> },
];

// Styling for list items
const listItemStyle = {
  padding: '15px 0',
  borderBottom: '1px solid #fff',
  fontSize: '16px',
};

export default Home;
