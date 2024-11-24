import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const FacultyAndStaff = () => {
  return (
    <div>
      <Navbar/>
      <br /><br />
      <h2 className='text-center' style={{color:'#05472A', textTransform: 'uppercase'}}><b>Faculty And Staff</b></h2>
      <br /><br />
      <div className="container">
        <div className="row g-3">
          <div className="col-md-4">
            <h4>Ms Samina Kulsoom</h4>
            <h6>(Associate Professor BPs 19)</h6>
          </div>
          <div className="col-md-4">
            <h4>Ms Sabahat Parveen</h4>
            <h6>(Assistant Professor BPs 18)</h6>
          </div>
          <div className="col-md-4">
            <h4>Mrs Aliya Mughal</h4>
            <h6>(Junior Instructor BPs 14)</h6>
          </div>
        </div>
        <br /><br />
        <div className="row g-3">
          <div className="col-md-4">
            <h4>Mrs Shaista Azeem</h4>
            <h6>(Assistant Professor / Incharge Architecture)</h6>
          </div>
          <div className="col-md-4">
            <h4>Ms Shagufta Sohail</h4>
            <h6>(Lecturer) </h6>
          </div>
          <div className="col-md-4">
            <h4>Ms Nahid Anjum </h4>
            <h6>(Shop Assistant)</h6>
          </div>
        </div>
        <br /><br />
        <div className="row  g-3">
          <div className="col-md-4">
            <h4>Mrs Falak Mahzaib Khan</h4>
            <h6>(Trade Instructor)</h6>
          </div>
          <div className="col-md-4">
            <h4>Mrs Afshan Naz</h4>
            <h6>(Incharge / HOD) </h6>
          </div>
          <div className="col-md-4">
            <h4>Mrs Sadaf Ghazala </h4>
            <h6>(Junior Instructor)</h6>
          </div>
        </div>
        <br /><br />
        <div className="row  g-3">
          <div className="col-md-4">
            <h4>Mrs Shabana Parveen</h4>
            <h6>(Junior Instructor)</h6>
          </div>
          <div className="col-md-4">
            <h4>Mrs Rubina Iqbal</h4>
            <h6>(Associate Professor BPs 19) </h6>
          </div>
          <div className="col-md-4">
            <h4>Mrs Ghosia Raza</h4>
            <h6>(Associate Professor BPs 18) </h6>
          </div>
        </div>
        <br /><br />
        <div className="col-md-4">
            <h4>Mrs Shumaila Saleem</h4>
            <h6>(Trade Instructor) </h6>
          </div>
      </div>
 
      <br /><br />
      <Footer/>
    </div>
  )
}

export default FacultyAndStaff
