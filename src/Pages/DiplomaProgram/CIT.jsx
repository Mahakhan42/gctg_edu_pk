import React from 'react'
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const CIT = () => {
  return (
    <>
    <Navbar/>
    <br /><br />
    <div className="container food-Section mt-5">
        <h1 className="text-center" style={{ color: '#05472A', textTransform: 'uppercase' }}><b>DAE In Computer Information Technology (CIT)</b></h1><br />
          <h3 className="text-center" style={{ color: '#05472A' , textTransform: 'uppercase'}}><b><u>SCHEME OF STUDIES</u></b></h3>
        
          <h4 style={{color:'#05472A'}}><b>First Year</b></h4>
          <div className="table-responsive">
            <table className="table table-bordered" >
              <thead className="table-light" style={{backgroundColor:'#05472A'}}>
                <tr>
                  <th style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>Code</th>
                  <th style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>Subject</th>
                  <th style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>T</th>
                  <th style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>P</th>
                  <th style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>C</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gen 111</td>
                  <td>Islamiat & Pakistan Studies</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Eng 112</td>
                  <td>English</td>
                  <td>2</td>
                  <td>0</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Math 123</td>
                  <td>Applied Mathematics-I</td>
                  <td>3</td>
                  <td>0</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Phy 132</td>
                  <td>Applied Physics</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Ch 132</td>
                  <td>Applied Chemistry</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>OHSE 111</td>
                  <td>Occupational Health, Safety & environment</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>CIT 112</td>
                  <td>Computer Application Software</td>
                  <td>0</td>
                  <td>6</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>CIT 113</td>
                  <td>Introduction to Computer Programming</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>CIT 121</td>
                  <td>General Engineering Workshop</td>
                  <td>0</td>
                  <td>3</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>CIT 134</td>
                  <td>Electronics-I</td>
                  <td>3</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td></td>
                  <td><b>Total</b></td>
                  <td><b>14</b></td>
                  <td><b>21</b></td>
                  <td><b>21</b></td>
                </tr>

                {/* Second Year */}
                <tr>
                  <td colSpan="5">
                    <h4 style={{color:'#05472A'}}><b>Second Year</b></h4>
                  </td>
                </tr>
                <tr>
                  <td>Gen 211</td>
                  <td>Islamiat & Pak Studies</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Math 233</td>
                  <td>Applied Mathematics-II</td>
                  <td>3</td>
                  <td>0</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Mgn 211</td>
                  <td>Business Communication</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>CIT 212</td>
                  <td>Object-Oriented Programming with JAVA</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>CIT 223</td>
                  <td>Computer Networks</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>CIT 235</td>
                  <td>Micro-Processor Architecture</td>
                  <td>3</td>
                  <td>6</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>CIT 244</td>
                  <td>Electronics-II</td>
                  <td>3</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>CIT 283</td>
                  <td>Relational Data-Base Management System</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td></td>
                  <td><b>Total</b></td>
                  <td><b>16</b></td>
                  <td><b>18</b></td>
                  <td><b>22</b></td>
                </tr>

                {/* Third Year */}
                <tr>
                  <td colSpan="5">
                    <h4 style={{color:'#05472A'}}><b>Third Year</b></h4>
                  </td>
                </tr>
                <tr>
                  <td>Gen 311</td>
                  <td>Islamiat & Pak Studies</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Eng 311</td>
                  <td>Technical Report Writing</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Mgt 331</td>
                  <td>Management</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>CIT 303</td>
                  <td>Web Development with JAVA</td>
                  <td>1</td>
                  <td>6</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>CIT 324</td>
                  <td>Network Administration</td>
                  <td>2</td>
                  <td>6</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>CIT 333</td>
                  <td>Operating System</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>CIT 344</td>
                  <td>Graphic Designing</td>
                  <td>2</td>
                  <td>6</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>CIT 352</td>
                  <td>PC System and Peripherals Repair</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>CIT 392</td>
                  <td>Project</td>
                  <td>0</td>
                  <td>6</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td></td>
                  <td><b>Total</b></td>
                  <td><b>11</b></td>
                  <td><b>30</b></td>
                  <td><b>21</b></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br /><br />
        <Footer/>
    </>
  )
}

export default CIT