import React from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar';

const Architecture = () => {
  return (
    <>
    <Navbar/>
    <br /><br />
     <div className="container food-Section mt-5">
        <h1 className="text-center" style={{ color: '#05472A', textTransform: 'uppercase' }}><b>DAE In Architecture Technology</b></h1><br />
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
                  <td>GEN111</td>
                  <td>Islamiat/Pakistan Studies</td>
                </tr>
                <tr>
                  <td>GEN111</td>
                  <td>Technical English</td>
                </tr>
                <tr>
                  <td>MATH113</td>
                  <td>Applied Mathematics 1</td>
                </tr>
                <tr>
                  <td>PHY113</td>
                  <td>Applied Physics</td>
                </tr>
                <tr>
                  <td>AR112</td>
                  <td>Building Material And Fabrication</td>
                </tr>
                <tr>
                  <td>AR123</td>
                  <td>Arch Drawing and Drafting</td>
                </tr>
                <tr>
                  <td>AR133</td>
                  <td>Basic Computer in Arch</td>
                </tr>
                <tr>
                  <td>AR112</td>
                  <td>Free Hand Drawing  & Rendring</td>
                </tr>
                <tr>
                  <td>AR153</td>
                  <td>Surveying and Leveling</td>
                </tr>

                {/* Second Year */}
                <tr>
                  <td colSpan="6">
                    <h4 style={{color:'#05472A'}}><b>Second Year</b></h4>
                  </td>
                </tr>
                <tr>
                  <td>GEN211</td>
                  <td>Islamiat/Pakistan Studies</td>
                </tr>
                <tr>
                  <td>MATH213</td>
                  <td>Applied Mathematics 2</td>
                </tr>
                <tr>
                  <td>AR212</td>
                  <td>Enviromental Study</td>
                </tr>
                <tr>
                  <td>AR214</td>
                  <td>Structure Mechanics RCC Design</td>
                </tr>
                <tr>
                  <td>AR224</td>
                  <td>Arch Design Drawing -1 </td>
                </tr>
                <tr>
                  <td>AR232</td>
                  <td>Auto-Cad 1 </td>
                </tr>
                <tr>
                  <td>AR242</td>
                  <td>Free hand drawing & Rendring-II</td>
                </tr>
                <tr>
                  <td>AR253</td>
                  <td>Building Construction -I</td>
                </tr>
                <tr>
                  <td>AR262</td>
                  <td>History of Architecture </td>
                </tr>

                {/* Third Year */}
                <tr>
                  <td colSpan="6">
                    <h4 style={{color:'#05472A'}}><b>Third Year</b></h4>
                  </td>
                </tr>
                <tr>
                  <td>GEN311</td>
                  <td>Islamiat/Pakistan Studies</td>
                </tr>
                <tr>
                  <td>MGM311</td>
                  <td>Industrial Management</td>
                </tr>
                <tr>
                  <td>AR312</td>
                  <td>Building Economics</td>
                </tr>
                <tr>
                  <td>AR324</td>
                  <td>Arch Design Drawing -II</td>
                </tr>
                <tr>
                  <td>AR333</td>
                  <td>Auto-Cad-II</td>
                </tr>
                <tr>
                  <td>AR342</td>
                  <td>Model Making / Projects</td>
                </tr>
                <tr>
                  <td>AR353</td>
                  <td>Building Construction -II</td>
                </tr>
                <tr>
                  <td>AR373</td>
                  <td>Estimation & Specification by Laws</td>
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

export default Architecture
