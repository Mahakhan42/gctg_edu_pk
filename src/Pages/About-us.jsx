import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const Aboutus = () => {
  return (
    <>
       <Navbar/>
       <br /><br />
       <div className="container">
        <div className="row">
          <div className="col-md-6">
          <h2  style={{color:'#05472A'}}><b>STEVTA</b></h2><br />
          <h4 style={{color:'#05472A'}}><b><u>VISION</u></b></h4><br />
          <p>Skill for employability and sustainable socio-economic development.</p><br />
          <br /> <h4 style={{color:'#05472A'}}><b><u>MISSION</u></b></h4><br />
          <p>Provide demand-driven skills training to prepare workforce for local and international labour market.</p>

          </div>
          <div className="col-md-6">
          <h2  style={{color:'#05472A'}}><b>GCTG</b></h2><br />
          <h4 style={{color:'#05472A'}}><b><u>VISION</u></b></h4><br />
          <p>To facilitate gender specific sustainable development for women by equipping them up-to-the-minute knowledge and cutting-edge technology.</p>
          <br /> <h4 style={{color:'#05472A'}}><b><u>MISSION</u></b></h4><br />
          <p>To provide quality education based on STEVTA regulations in market driven trades to females in safe and healthy environment with strong industrial linkages under trained teaching faculty to produce entrepreneurial oriented skilled work force which will serve national and international market to uplift socio-economic condition of country.</p>
          </div>
        </div>
       </div>


     <br /><br />
     <div style={{ textAlign: 'center' }}>
  <Link to='/Message'><button style={{ backgroundImage: 'linear-gradient(#99c29e, #05472A)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
    Message
  </button></Link>
</div>
     <br /><br />
     <Footer/>
    </>

  )
}

export default Aboutus
