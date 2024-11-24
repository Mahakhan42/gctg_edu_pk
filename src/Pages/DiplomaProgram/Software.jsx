import React from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar';
const Software = () => {
  return (
<>
<Navbar/>
<br /><br />
<div className="container food-Section mt-5">
        <h1 className="text-center" style={{ color: '#05472A' , textTransform: 'uppercase'}}><b>DAE In Software Technology</b></h1><br />
          <h3 className="text-center" style={{ color: '#05472A', textTransform: 'uppercase' }}><b><u>SCHEME OF STUDIES</u></b></h3>
        
          <h4 style={{color:'#05472A'}}><b>First Year</b></h4>
          <div className="table-responsive">
            <table className="table table-bordered" >
              <thead className="table-light" style={{backgroundColor:'#05472A'}}>
                <tr>
                  <th style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>Code</th>
                  <th style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>Subject</th>
                  <th style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>Th</th>
                  <th style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>Pr</th>
                  <th style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>C</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gen 111</td>
                  <td>Islamiat & Pakistan Studies-I</td>
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
                  <td>DSE 111</td>
                  <td>MS-Office 2016</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>DSE 112</td>
                  <td>HTML5 and CSS</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>DSE 113</td>
                  <td>Introduction to PHP</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>DSE 114</td>
                  <td>Database Programming With MySQL</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>DSE 116</td>
                  <td>SEO</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
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
                  <td>Islamiat & Pak Studies-II</td>
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
                  <td>DSE 211</td>
                  <td>Introduction to Java</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>DSE 212</td>
                  <td>Introduction to OOP</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>DSE 213</td>
                  <td>Android Development</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>DSE 214</td>
                  <td>Web Application Development With PHP</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>DSE 215</td>
                  <td>Introduction to CMS (WordPress)</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>DSE 216</td>
                  <td>Web Development With Code Igniter</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td></td>
                  <td><b>Total</b></td>
                  <td><b>11</b></td>
                  <td><b>18</b></td>
                  <td><b>17</b></td>
                </tr>

                {/* Third Year */}
                <tr>
                  <td colSpan="5">
                    <h4 style={{color:'#05472A'}}><b>Third Year</b></h4>
                  </td>
                </tr>
                <tr>
                  <td>Gen 311</td>
                  <td>Islamiat & Pak Studies-III</td>
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
                  <td>DSE 311</td>
                  <td>Programming in C#</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>DSE 312</td>
                  <td>Web Programming in ASP.NET</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>DSE 313</td>
                  <td>Database Development in Microsoft SQL Server</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>DSE 314</td>
                  <td>Oracle ERP Essentials</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>DSE 315</td>
                  <td>Oracle ERP Financials</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>DSE 316</td>
                  <td>Oracle ERP Supply Chain</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td></td>
                  <td><b>Total</b></td>
                  <td><b>9</b></td>
                  <td><b>18</b></td>
                  <td><b>15</b></td>
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

export default Software
