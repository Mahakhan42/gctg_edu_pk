import React from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar';

const GarmentsTechnolgy = () => {
  return (
    <>
    <Navbar/>
    <br /><br />
     <div className="container food-Section mt-5">
        <h1 className="text-center" style={{ color: '#05472A', textTransform: 'uppercase' }}><b>DAE In Garments Technology</b></h1><br />
          <h3 className="text-center" style={{ color: '#05472A', textTransform: 'uppercase' }}><b><u>Scheme Of Studies</u></b></h3>
            {/* Table for First, Second, and Third Year */}
            <h4 style={{color:'#05472A'}}><b>First Year</b></h4>
          <div className="table-responsive">
            <table className="table table-bordered" >
              <thead className="table-light" style={{backgroundColor:'#05472A'}}>
                <tr>
                  <th  style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>Code No</th>
                  <th  style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>Subject</th>
                </tr>
              </thead>
              <tbody>
                {/* First Year */}
                <tr>
                  <td>Gen-111</td>
                  <td>Islamiat/Pak Studies</td>
                </tr>
                <tr>
                  <td>Eng-112</td>
                  <td>English</td>
                </tr>
                <tr>
                  <td>Math-113</td>
                  <td>Applied Mathematics</td>
                </tr>
                <tr>
                  <td>Phy-113</td>
                  <td>Applied Physics</td>
                </tr>
                <tr>
                  <td>Comp-112</td>
                  <td>Computer Application</td>
                </tr>
                <tr>
                  <td>Gt-131</td>
                  <td>Drafting & Pattern Making</td>
                </tr>
                <tr>
                  <td>Gt-133</td>
                  <td>Sewing Techniques-I</td>
                </tr>
                <tr>
                  <td>Gt-141</td>
                  <td>Embroidery</td>
                </tr>
                <tr>
                  <td>Gt-152</td>
                  <td>Workshop Skills</td>
                </tr>

                {/* Second Year */}
                <tr>
                  <td colSpan="6">
                    <h4 style={{color:'#05472A'}}><b>Second Year</b></h4>
                  </td>
                </tr>
                <tr>
                  <td>Gen-211</td>
                  <td>Islamiat/Pak Studies</td>
                </tr>
                <tr>
                  <td>Ch-213</td>
                  <td>Applied Chemistry</td>
                </tr>
                <tr>
                  <td>Mgm-211</td>
                  <td>Business Management & Industrial Economics</td>
                </tr>
                <tr>
                  <td>Gt-112</td>
                  <td>Raw Material & Accessories</td>
                </tr>
                <tr>
                  <td>Gt-122</td>
                  <td>Production Planning & Control</td>
                </tr>
                <tr>
                  <td>Gt-231</td>
                  <td>Drafting & Pattern Making-II</td>
                </tr>
                <tr>
                  <td>Gt-211</td>
                  <td>Sewing Techniques-II</td>
                </tr>
                <tr>
                  <td>Gt-241</td>
                  <td>Knitting</td>
                </tr>
                <tr>
                  <td>Gt-261</td>
                  <td>Applied Electricity</td>
                </tr>
                <tr>
                  <td>Gt-262</td>
                  <td>Garments Machinery & Maintenance</td>
                </tr>
                <tr>
                  <td>Gt-272</td>
                  <td>Clothing Design</td>
                </tr>

                {/* Third Year */}
                <tr>
                  <td colSpan="6">
                    <h4 style={{color:'#05472A'}}><b>Third Year</b></h4>
                  </td>
                </tr>
                <tr>
                  <td>Gen-311</td>
                  <td>Islamiat/Pak Studies</td>
                </tr>
                <tr>
                  <td>Mgm-311</td>
                  <td>Business Communication</td>
                </tr>
                <tr>
                  <td>Mgm-511</td>
                  <td>Industrial Management & Human Relations</td>
                </tr>
                <tr>
                  <td>Elk-312</td>
                  <td>Motor & Generator</td>
                </tr>
                <tr>
                  <td>Gt-312</td>
                  <td>Textile Chemistry</td>
                </tr>
                <tr>
                  <td>Gt-331</td>
                  <td>Drafting & Pattern Making-III</td>
                </tr>
                <tr>
                  <td>Gt-333</td>
                  <td>Sewing Techniques-III</td>
                </tr>
                <tr>
                  <td>Gt-341</td>
                  <td>Fashion Designing & Re-Styling</td>
                </tr>
                <tr>
                  <td>Gt-351</td>
                  <td>Essential Of Garments Design</td>
                </tr>
                <tr>
                  <td>Gt-362</td>
                  <td>Garments Machinery & Maintenance</td>
                </tr>
                <tr>
                  <td>Gt-372</td>
                  <td>Computer Application to Garments Technology</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br /><br />
        <Footer />
    </>
  )
}

export default GarmentsTechnolgy
