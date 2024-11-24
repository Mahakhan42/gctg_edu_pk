import React from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const LifeAtCollege = () => {
  return (
    <>
      <Navbar />
      <br /><br />
      {/* Technology Buttons */}
      <div className="container text-center">
        <div className="d-flex flex-wrap justify-content-center gap-2">
        <Link className="custom-link" to="/LifeAtCollege" onClick={() => document.getElementById('secretarial').scrollIntoView({ behavior: 'smooth' })}>
    <button style={buttonStyle}>Secretarial</button>
  </Link>
  <Link className="custom-link" to='/LifeAtCollege' onClick={() => document.getElementById('food-preservation').scrollIntoView({ behavior: 'smooth' })}>
            <button style={buttonStyle}>Food</button>
          </Link>
          <Link className="custom-link" to='/LifeAtCollege' onClick={() => document.getElementById('architecture').scrollIntoView({ behavior: 'smooth' })}>
            <button style={buttonStyle}>Architecture</button>
          </Link>
          <Link className="custom-link" to='/LifeAtCollege' onClick={() => document.getElementById('electronics').scrollIntoView({ behavior: 'smooth' })}>
            <button style={buttonStyle}>Electronics</button>
          </Link>
          <Link className="custom-link" to='/LifeAtCollege' onClick={() => document.getElementById('garments').scrollIntoView({ behavior: 'smooth' })}>
            <button style={buttonStyle}>Garments</button>
          </Link>
          <Link className="custom-link" to='/LifeAtCollege'onClick={() => document.getElementById('cit-software').scrollIntoView({ behavior: 'smooth' })}>
            <button style={buttonStyle}>CIT</button>
          </Link>
          <Link className="custom-link" to='/LifeAtCollege' onClick={() => document.getElementById('cit-software').scrollIntoView({ behavior: 'smooth' })}>
            <button style={buttonStyle}>Software</button>
          </Link>
        </div>
      </div>
      <br /><br />
      <div className="container">
        {/* Secretarial Section */}
        <h4 className='text-center' style={{color:'#05472A', textTransform: 'uppercase'}} id="secretarial"><b><u>Secretarial Management</u></b></h4>
        <br />
        <div className="row">
          {[
            "1.jpeg", "2.jpeg", "6.jpeg", "5.jpeg",
            "7.jpeg", "8.jpeg", "14.jpeg", "3.jpeg",
          ].map((img, index) => (
            <div key={index} className="col-md-3 col-sm-6 col-12 mb-3" style={{ padding: 2 }}>
              <div style={{ backgroundColor: '#05472A', height: '300px', overflow: 'hidden' }}>
                <img 
                  src={`./src/assets/img/Secretarial/${img}`} 
                  alt="" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Food Preservation Section */}
        <br />
        <h4 className='text-center' style={{color:'#05472A', textTransform: 'uppercase'}} id="food-preservation"><b><u>Food Preservation</u></b></h4>
        <br />
        <div className="row">
          {[
            "1.jpeg", "2.jpeg", "5.jpeg", "3.jpeg",
            "15.jpeg", "19.jpeg", "8.jpeg", "18.jpeg",
            "10.jpeg", "4.jpeg", "9.jpeg", "7.jpeg",
          ].map((img, index) => (
            <div key={index} className="col-md-3 col-sm-6 col-12 mb-3" style={{ padding: 2 }}>
              <div style={{ backgroundColor: '#05472A', height: '300px', overflow: 'hidden' }}>
                <img 
                  src={`./src/assets/img/Food/${img}`} 
                  alt="" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Section */}
        <br />
        <h4 className='text-center' style={{color:'#05472A', textTransform: 'uppercase'}} id="architecture"><b><u>Architecture</u></b></h4>
        <br />
        <div className="row">
          {[
            "1.JPG", "2.JPG", "5.JPG", "3.JPG",
            "4.JPG", "6.JPG", "12.JPG", "7.JPG",
            "10.JPG", "8.JPG", "9.JPG", "13.JPG",
          ].map((img, index) => (
            <div key={index} className="col-md-3 col-sm-6 col-12 mb-3" style={{ padding: 2 }}>
              <div style={{ backgroundColor: '#05472A', height: '300px', overflow: 'hidden' }}>
                <img 
                  src={`./src/assets/img/Art/${img}`} 
                  alt="" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </div>
          ))}
        </div>

        {/* CIT / Software Section */}
        <br />
        <h4 className='text-center' style={{color:'#05472A', textTransform: 'uppercase'}} id="cit-software"><b><u>CIT / SOFTWARE</u></b></h4>
        <br />
        <div className="row">
          <div className="col-md-6">
            <img
              src="./src/assets/img/CIT or SOFT/1.PNG"
              alt="First Image"
              style={{ width: '100%', height: '460px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-6">
            <img
              src="./src/assets/img/CIT or SOFT/7.PNG"
              alt="Second Image"
              style={{ width: '100%', height: '460px', objectFit: 'cover' }}
            />
          </div>
        </div>

        <br />
        <div className="row g-1">
          {[
            "2.PNG", "14.PNG", "4.PNG", "15.PNG",
            "6.PNG", "8.PNG", "9.PNG", "11.PNG",
          ].map((img, index) => (
            <div key={index} className="col-md-3">
              <img
                src={`./src/assets/img/CIT or SOFT/${img}`}
                alt={`Image ${index + 3}`}
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>

        {/* Electronics Section */}
        <br />
        <h4 className='text-center' style={{color:'#05472A', textTransform: 'uppercase'}} id="electronics"><b><u>Electronics </u></b></h4>
        <br />
        <div className="row">
          {[
            "1.JPG", "2.JPG", "5.JPG", "3.JPG",
            "4.JPG", "6.JPG",
          ].map((img, index) => (
            <div key={index} className="col-md-4 col-sm-6 col-12 mb-3" style={{ padding: 2 }}>
              <div style={{ backgroundColor: '#05472A', height: '300px', overflow: 'hidden' }}>
                <img 
                  src={`./src/assets/img/Electronics/${img}`} 
                  alt="" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Garments Section */}
        <br />
        <h4 className='text-center' style={{color:'#05472A', textTransform: 'uppercase'}} id="garments"><b><u>Garments </u></b></h4>
        <br />
       <div className="container">
        <div className="row g-1">
          <div className="col-md-6">
            <img src=".\src\assets\img\Garments\1.PNG" alt=""   style={{ width: '100%', height: '460px', objectFit: 'cover' }} />
          </div>
          <div className="col-md-6">
            <img src=".\src\assets\img\Garments\2.PNG" alt=""   style={{ width: '100%', height: '460px', objectFit: 'cover' }} />
          </div>
        </div>
        <br />
        <div className="row  g-1">
<div className="col-md-4">
<img src=".\src\assets\img\Garments\3.PNG" alt=""   style={{ width: '100%', height: '460px', objectFit: 'cover' }} />
</div>
<div className="col-md-4">
<img  style={{ width: '100%', height: '460px', objectFit: 'cover' }} src=".\src\assets\img\Garments\4.PNG" alt="" />
</div>
<div className="col-md-4">
<img  style={{ width: '100%', height: '460px', objectFit: 'cover' }}src=".\src\assets\img\Garments\5.PNG" alt="" />
</div>
        </div>
       </div>
      </div>
      <br /><br />
      <Footer/>
    </>
  );
};

const buttonStyle = {
  backgroundImage: 'linear-gradient(#99c29e, #05472A)',
  color: 'white',
  border: 'none',
  padding: '8px 15px',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default LifeAtCollege;
