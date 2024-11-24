import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import { RxDotFilled } from 'react-icons/rx'

const ShortCourses = () => {
  return (
    <div>
      <Navbar/>
{/* ----------------------------------Short Courses----------------------------- */}
<br /><br />
<div className="container">
  <div className="row">
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
      <h2 className='text-center' style={{ color: '#05472A', margin: '0', textTransform: 'uppercase' }}>
        <b>SHORT COURSES PROGRAMME BY</b>
      </h2>
      <Link to='https://navttc.gov.pk/' style={{ display: 'flex', alignItems: 'center' }}>
        <img width='110px' src=".\src\assets\img\navttc.png" alt="Navttc Logo" />
      </Link>
      <b>X</b>
      <Link to='https://stevta.gos.pk/' style={{ display: 'flex', alignItems: 'center' }}>
        <img width='80px' src="./src/assets/img/StevtaLogo.png" alt="Stevta Logo" />
      </Link>
    </div>

<br /><br />
 {/* -----------1year---------- */}
<div className='col-md-12 mt-4'><br />
<h6 style={{width:'150px',color:'#05472A',padding:'10px',borderRadius:'10px',borderColor:'4px solid grey'}}> <u> <b>1 Year (Course)</b></u> </h6>
<h5><li>Diploma Office Managements (DOM)</li></h5>
<h5><li>Diploma Information Technology (DIT)</li> </h5>
</div>
{'\n'}
{/* 6 month */}
<div className='col-md-12 mt-4'>
<h6 style={{width:'200px',color:'#05472A',padding:'10px',borderRadius:'10px',borderColor:'4px solid grey'}}> <u> <b>6 Month (Course)</b></u> </h6>
<h5><RxDotFilled />Dress Making & Fashion Designing </h5>
<h5><RxDotFilled />Graphics Designing</h5>
<h5><RxDotFilled />Web Designing</h5>
<h5><RxDotFilled />Office Professional</h5>
</div>
<br />
{'\n'}
<div className="col-md-12">
<br /><h5 style={{color:'#05472A'}}><b><u>Eligibility</u></b></h5><br />
  <p>Matric or Intermediate Required for Admission to Short Courses</p>
</div>
</div>
</div>
<br /><br />
<div className="container">
<h3 style={{color:'#05472A'}}> <b> SCOPE OF NATIONAL VOCATIONAL CERTIFICATE (NVC) PROGRAMME</b></h3><br />
<p>Industry largely depends on technicians for production, efficient maintenance, and back-up support. A technician play pivotal role in productivity of industry. In Vocational Training programme, hands-on skill training is provided to trainees to become employed. The Sindh Board of Technical Education (SBTE) & the Sindh Testing Board (STTB) awards the National Vocational Certificate (NVC) Lovel-2 to Level-5</p>
<br /><h3 style={{color:'#05472A'}}><b>JOB OPPORTUNITIES</b></h3><br />
<p>After successful completion of the NVC programme, trainees may get employment as a Technician, Sales Representative. Draughtsman, Service Technicion, Auto Technician. Agricultural Technician, Junior Instructora etc.</p>
<br /><h3  style={{color:'#05472A'}}><b>HIGHER EDUCATION OPPORTUNITIES</b></h3><br />
<p><RxDotFilled /> The Trainee who successfully complete National Vocational Certificate (NVC) Level-2 will be eligible to acquire the next level of NVC qualification up to level-5, which is equivalent to  Higher Secondary Certificate (HSC)/Intermediate, as per the National Vocational Qualification Framework (NVQF).</p>
<p><RxDotFilled /> Subsequently, they may also avail admission in the 4-year BS Engineering Technology programmes.</p>
</div>
<br /><br />
<Footer/>
    </div>
  )
}

export default ShortCourses
