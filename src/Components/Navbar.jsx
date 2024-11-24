import React from 'react'
 import '../App.css'
import { MdLocalPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom';
import {FaFacebook  } from "react-icons/fa";

const Navbar = () => {
  return (
   <>
{/* header1 */}
<div className="container-fluid" style={{backgroundColor:'#99c29e'}}>
  <div className="container">
<div className="row">
  <div className="col-md-3 mt-2">
  <h6 style={{ color: 'white' }}>For any queries please contact:</h6>
  </div>
  <div className="col-md-3 mt-2">
  <MdLocalPhone size={"20px"} style={{ color: '#05472A' }} />  <span style={{color:'#fff'}}>021-9945603</span>
  </div>
  <div className="col-md-3 mt-2">
  <Link to='https://g.co/kgs/pUfebwu' className='custom-link d-flex align-items-center' style={{ gap: '5px', color: '#05472A' }}><IoMdMail size={"20px"} /> <span style={{color:'#fff'}}>gctg.karachi@gmail.com</span></Link>
  </div>
  <div className="col-md-3 mt-2">
  <Link to='https://www.facebook.com/gctgkarimabadkarachi/?locale=nl_BE' className='custom-link d-flex align-items-center' style={{ gap: '5px', color: '#05472A' }}><FaFacebook size={"20px"} /> <span style={{color:'#fff'}}>GCT G Karimabad Karachi</span></Link>
  </div>
</div>
  </div>
</div>
{/* _________________________________________________________ */}
{/* Header 2 */}
<nav className="navbar navbar-expand-md navbar-light">
  <div className="container-fluid d-flex justify-content-between align-items-center">
    {/* Left Logo */}
    <Link className="navbar-brand" to="/">
      <img
        src="./src/assets/img/GCTGLogo.png"
        alt="GCTG Logo"
        className="logo logo-left"
      />
    </Link>

    {/* College Name Center */}
    <div className="mx-auto">
      <h2 className="mb-0 college-name" style={{ color: '#05472A' }}>
        <b>GOVERNMENT COLLEGE OF TECHNOLOGY (GIRLS) KARIMABAD, KARACHI</b>
      </h2>
    </div>

    {/* Right Logo */}
    <Link className="navbar-brand" to="https://stevta.gos.pk/">
      <img
        src="./src/assets/img/StevtaLogo.png"
        alt="Stevta Logo"
        className="logo logo-right"
      />
    </Link>
  </div>
</nav>

{/* ____________________________________________________________________ */}
{/* 3 Header */}
<nav class="navbar navbar-expand-lg navbar-light header3">
  <div class="container-fluid">
    <button class="navbar-toggler color-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon color-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-auto">
        <Link class="nav-link" aria-current="page" to="/">Home</Link>
        <Link class="nav-link" to="/About-us">About Us</Link>
        
        {/* Dropdown for Academics Program */}
        <div class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" id="academicsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Academics Program
          </Link>
          <ul class="dropdown-menu" aria-labelledby="academicsDropdown">
            <li><Link class="dropdown-item" to="/AcademicsProgram">DAE Program</Link></li>
            <li><Link class="dropdown-item" to="/ShortCourses">Short Courses</Link></li>
          </ul>
        </div>

        <Link class="nav-link" to="/FacultyAndStaff">Faculty and Staff</Link>
        <Link class="nav-link" to="/LifeAtCollege">Life at College</Link>
        <Link class="nav-link" to="/Admission">Admission</Link>
        <Link class="nav-link" to="/Career">Career</Link>
        <Link class="nav-link" to="/Contact-us">Contact Us</Link>
      </div>
    </div>
  </div>
</nav>





    </>
  )
}

export default Navbar
