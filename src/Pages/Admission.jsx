import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { RxDotFilled } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Admission = () => {
  return (
    <div>
         <Navbar/>
         <br /><br />
         <div className="container">
      <h2 className='text-center' style={{color:'#05472A'}}><b>ADMISSION</b></h2>
      <br /><br />
      <h3 style={{color:'#05472A'}}  id="policy"> <b> ADMISSION POLICY OF DIPLOMA OF ASSOCIATE ENGINEERING (DAE)</b></h3><br />
      <p>The admission shall be institute-specific. All Candidates shall specify their preference for Institute and Technology on the admission from.</p>
      <br /><h3 style={{color:'#05472A'}}><b>ELIGIBILITY FOR ADMISSION</b></h3><br />
      <h4 style={{color:'#05472A'}}><u><b>ENTRY QUALIFICATION</b></u></h4><br />
      <p><RxDotFilled /> Secondary School Certificate (SSC)/Matric (all) er Expuivalent with minimum 40% Marks. </p>
      <p><RxDotFilled /> Technical School Certificate (TSC)/Matric (Technical) with minutnun 40% Marks.</p>

      <h4 style={{color:'#05472A'}}> <b><u>INELIGIBILITY</u></b></h4><br />
      <p><RxDotFilled />Less dan 40% marks in Secondary School Certificate (SSC)/Technical School Certif (150) Matric (all) or Equivalent</p>
      <p><RxDotFilled />Failing any Subject in Secondary School Certificate (SSC) Todnical School Canifa (150) Matric (all) or Equivalent</p>
      <p><RxDotFilled />Not within Age brackets as specified below,</p>
      <p><RxDotFilled />Any form without attachment of deposit voucher/slip.</p>
      <p><RxDotFilled /> In case of any entry in the Admission Form found to be incorrect, incomplete, or illegible.</p>

      <h4 style={{color:'#05472A'}}> <b><u>INELIGIBILITY</u></b></h4><br />
      <p><RxDotFilled /> Any attempt directly or indirectly to influence/ intimidate Admission authorities.</p>
      <p><RxDotFilled /> Any alteration or manipulation in the Admission Form / Documents.</p>
      <p><RxDotFilled /> Parallel admission in any other educational institution or Board in the surse shift.</p>

      <div className='container'>
      <h4  style={{color:'#05472A'}}> <b><u>Upper Age Limit</u></b> </h4> <br />
      
      <div className="w-full">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2 text-[#05472A] font-bold text-left" style={{color:'#fff',backgroundColor:'#05472A',opacity:'0.8'}}>Programme</th>
              <th className="border p-2 text-[#05472A] font-bold text-left" style={{color:'#fff',backgroundColor:'#05472A',opacity:'0.8'}}>Upper Age Limit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Regular Seats</td>
              <td className="border p-2">35 Years</td>
            </tr>
            <tr>
              <td className="border p-2">Self-Finance Basis Seats</td>
              <td className="border p-2">45 Years</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
     </div>
     <br />
     {/* -------------------------------rule  regulation------------------ */}
   <div className="container">
    <br /> <h3 style={{color:'#05472A'}}  id="rules"> <b> RULES AND REGULATIONS</b></h3><br />
    <p>STEVTA's 2024-2025 prospectus outlines comprehensive guidelines for institutional operations and student conduct. The institute maintains a Student Affairs Committee (SAC) dedicated to trainee welfare, providing counseling, vocational guidance, and supporting extracurricular activities. Safety is a paramount concern, with strict regulations regarding fire safety protocols and mandatory Personal Protective Equipment (PPE) in laboratories and workshops, though trainees must purchase their own safety equipment. The institute enforces a zero-tolerance policy towards harassment, bullying, and substance abuse, with clear definitions of prohibited behaviors including psychological, racial, religious, and sexual harassment. 

Any form of misconduct, including unauthorized entry into institute facilities, theft, vandalism, or possession of weapons and explosives, is strictly prohibited. The institute has established a structured lost-and-found system where all items must be logged and stored securely by the Head of Institute. Regarding attendance and leave, trainees must obtain prior permission except in medical emergencies, which require proper documentation. Academic assessment follows the Qualification Awarding Body (QAB) guidelines, and the institute maintains specific policies for security deposit refunds, which must be claimed within three years to avoid forfeiture.

The dress code requires strict adherence to the prescribed uniform, and all tobacco products are banned as per Pakistan's health ordinances. False representation, including forged documents or misleading information, results in disciplinary action. These regulations collectively aim to create a safe, productive learning environment while ensuring proper institutional management and student development.</p>
     </div>
     {/* ---------------------------------Scholarship----------------- */}
     <div className="container">
     <br /> <h3 style={{color:'#05472A'}} id="scholarship"> <b> SCHOLARSHIP</b></h3><br />
     <h4 style={{color:'#05472A'}}> <b><u>FULL/HALF FREE-SHIP</u></b></h4><br />
     <p>a. Fee concession of Full and Half Free-ship <b>for Morning and Double Shift programme Tuition fee, only,</b> may be available up to 10% of total enrolment per class.</p>
     <p>b. These Free-ships are awarded on annual basis to the deserving trainees, as per policy approved by the Government of Sindh from time to time.</p>
     <br /><h4 style={{color:'#05472A'}}> <b><u>MERIT SCHOLARSHIP</u></b></h4><br />
     <p>Merit Scholarship may be awarded on annual basis to the meritorious trainees, as per policy approved by the Government of Sindh from time to time.</p>
     </div>
     <br /><br />
    {/* Prospectus Button */}
    <br /><br />
        <div style={{ textAlign: 'center' }}  id="pdf">
        <a href='.\src\assets\Prospectus.pdf' target='_blank' rel='noopener noreferrer'>
  <button style={{ backgroundImage: 'linear-gradient(#99c29e, #05472A)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
    Prospectus
  </button>
</a>

        </div>
      <br /><br />
      <Footer/>
    </div>
  )
}

export default Admission
