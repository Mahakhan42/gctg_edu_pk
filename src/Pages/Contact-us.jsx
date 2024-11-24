import React from 'react'
import { MdLocalPhone } from "react-icons/md";
import Navbar from '../Components/Navbar';
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import Footer from '../Components/Footer';

const Contact = () => {
  return (
<>
<Navbar/>
 <br /><br />
<h2 className='text-center' style={{color:'#05472A'}}><b>CONTACT US</b></h2>
<br />
<div className="container text-center">
  <div className="row">
  <div className="col-md-4 contact">
  <div className="contact-box">
    <MdLocalPhone size={50} className="phone-icon" />
    <h4>Phone Number</h4>
    <h4>021-9945603</h4>
  </div>
</div>
    {/* 2 */}
    <div className="col-md-4 contact">
  <div className="contact-box">
    <IoMdMail  size={50} className="phone-icon" />
    <h4>Email</h4>
    <h4>gctg.karachi@gmail.com</h4>
  </div>
</div>

    {/* 3 */}
    <div className="col-md-4 contact">
  <div className="contact-box">
    <IoMdTime size={50} className="phone-icon" />
    <h4>Timing</h4>
    <h4>8:30am to 1:30pm</h4>
  </div>
</div>
  </div>
</div>
<br /><br />
<div className="container-fluid">
<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.4222065844124!2d67.04972807529822!3d24.91768294296561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0b7c6c73a7%3A0x5af15a5fa3632130!2sGovernment%20College%20Of%20Technology%20(Girls)%2C%20Karimabad%2C%20Karachi!5e0!3m2!1sen!2s!4v1728676671260!5m2!1sen!2s"
    width="100%" // Set width to 100% for responsiveness
    height="450"
    style={{border:'5px solid #05472A'}} // Use double curly braces for inline styles
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
<br /><br />
<Footer/>
</>
  )
}

export default Contact
