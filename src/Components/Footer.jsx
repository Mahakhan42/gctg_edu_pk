// import React from 'react';
// import { Link } from 'react-router-dom';
// import { MdLocalPhone } from "react-icons/md";
// import { IoMdMail } from "react-icons/io";
// import { IoLocation } from "react-icons/io5";
// import {FaFacebook  } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <>
//       <div className="container-fluid footer">
//         <br /><br />
//         <div className="container-fluid">
//           <div className="row justify-content-evenly">
//             {/* About Section */}
//             <div className="col-md-3 mx-auto me-5">
//               <h4 style={{textTransform: 'uppercase'}}><b>About Our Collage</b></h4>
//               <br />
//               <p>GCTG empowers women by providing high-quality, market-driven education in a safe environment, fostering entrepreneurial skills through cutting-edge technology and expert faculty. Our mission is to develop a skilled workforce that contributes to socio-economic growth locally and globally.</p>
//             </div>

//             {/* Links Section */}
//             <div className="col-md-2"> {/* Changed col-md-3 to col-md-2 */}
//               <h4 style={{textTransform: 'uppercase'}}><b>Quick Links</b></h4><br />
//               <ul className="footer-links"> {/* Add a class to style links */}
//                 <li><Link to='' style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></li>
//                 <li><Link to='' style={{ textDecoration: 'none', color: 'inherit' }}>About Us</Link></li>
//                 <li><Link to='' style={{ textDecoration: 'none', color: 'inherit' }}>Academics Program</Link></li>
//                 <li><Link to='' style={{ textDecoration: 'none', color: 'inherit' }}>Faculty and Staff</Link></li>
//                 <li><Link to='' style={{ textDecoration: 'none', color: 'inherit' }}>Life at College</Link></li>
//                 <li><Link to='' style={{ textDecoration: 'none', color: 'inherit' }}>Admission</Link></li>
//                 <li><Link to='' style={{ textDecoration: 'none', color: 'inherit' }}>Career</Link></li>
//                 <li><Link to='' style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link></li>
//               </ul>
//             </div>

//             {/* Contact Section */}
//             <div className="col-md-3">
//               <h4 style={{textTransform: 'uppercase'}}><b>Contact Us</b></h4><br />
//               <p><MdLocalPhone size={"20px"}  /> 021-9945603 </p>
//               <p><IoMdMail size={"20px"} /> gctg.karachi@gmail.com</p>
//               <Link className='custom-link' style={{color:'#fff'}} to='https://www.facebook.com/gctgkarimabadkarachi/?locale=nl_BE'><p><FaFacebook size={"20px"} /> GCT G Karimabad Karachi</p></Link>
//               <p><IoLocation size={"20px"} /> W392+4XP, Liaqatabad Flyover, Federal <br /> B Area Musa Colony Gulberg Town, Karachi, Karachi City, Sindh, Pakistan</p>
//             </div>

//             {/* Schedule Section */}
//             <div className="col-md-3">
//               <h4 style={{textTransform: 'uppercase'}}><b>Schedule</b></h4><br />
//               <p>Monday-Saturday</p>
//               <p>Time: 8:30am to 1:30pm</p>
//             </div>
//           </div>
//           </div>
//           <hr />
//           <h6 className='text-center'>© 2024 Government College of Technology (Girls) Karimabad, Karachi. All Rights Reserved.</h6>
        
//       </div>

//       {/* CSS for better alignment */}
//       <style jsx>{`
//         .footer-links {
//           list-style-type: none;
//           padding: 0;
//         }
//         .footer-links li {
//           margin-bottom: 10px;
//       }
//       `}</style>
//     </>
//   );
// }

// export default Footer;






import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocalPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import ScrollToTop from './ScrollToTop'; // Import the ScrollToTop component

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer">
        <br /><br />
        <div className="container-fluid">
          <div className="row justify-content-evenly">
            {/* About Section */}
            <div className="col-md-3 mx-auto me-5">
              <h4 style={{ textTransform: 'uppercase' }}><b>About Our College</b></h4>
              <br />
              <p>GCTG empowers women by providing high-quality, market-driven education in a safe environment, fostering entrepreneurial skills through cutting-edge technology and expert faculty. Our mission is to develop a skilled workforce that contributes to socio-economic growth locally and globally.</p>
            </div>

            {/* Links Section */}
            <div className="col-md-2">
              <h4 style={{ textTransform: 'uppercase' }}><b>Quick Links</b></h4><br />
              <ul className="footer-links">
                <li><Link to='' style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></li>
                <li><Link to='' style={{ textDecoration: 'none', color: 'inherit' }}>About Us</Link></li>
                <li><Link to='' style={{ textDecoration: 'none', color: 'inherit' }}>Academics Program</Link></li>
                <li><Link to='' style={{ textDecoration: 'none', color: 'inherit' }}>Faculty and Staff</Link></li>
                <li><Link to='' style={{ textDecoration: 'none', color: 'inherit' }}>Life at College</Link></li>
                <li><Link to='' style={{ textDecoration: 'none', color: 'inherit' }}>Admission</Link></li>
                <li><Link to='' style={{ textDecoration: 'none', color: 'inherit' }}>Career</Link></li>
                <li><Link to='' style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="col-md-3">
              <h4 style={{ textTransform: 'uppercase' }}><b>Contact Us</b></h4><br />
              <p><MdLocalPhone size={"20px"} /> 021-9945603 </p>
              <p><IoMdMail size={"20px"} /> gctg.karachi@gmail.com</p>
              <Link className='custom-link' style={{ color: '#fff' }} to='https://www.facebook.com/gctgkarimabadkarachi/?locale=nl_BE'>
                <p><FaFacebook size={"20px"} /> GCT G Karimabad Karachi</p>
              </Link>
              <p><IoLocation size={"20px"} /> W392+4XP, Liaqatabad Flyover, Federal <br /> B Area Musa Colony Gulberg Town, Karachi, Karachi City, Sindh, Pakistan</p>
            </div>

            {/* Schedule Section */}
            <div className="col-md-3">
              <h4 style={{ textTransform: 'uppercase' }}><b>Schedule</b></h4><br />
              <p>Monday-Saturday</p>
              <p>Time: 8:30am to 1:30pm</p>
            </div>
          </div>
        </div>
        <hr />
        <h6 className='text-center'>© 2024 Government College of Technology (Girls) Karimabad, Karachi. All Rights Reserved.</h6>
      </div>

      <ScrollToTop /> {/* Add ScrollToTop component here */}

      {/* CSS for better alignment */}
      <style jsx>{`
        .footer-links {
          list-style-type: none;
          padding: 0;
        }
        .footer-links li {
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
}

export default Footer;








