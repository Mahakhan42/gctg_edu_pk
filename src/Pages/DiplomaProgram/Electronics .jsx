import React from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar';

const Electronics = () => {
  return (
    <div>
      <Navbar/>
      <br /><br />
      <div className="container food-Section mt-5">
        <h1 className="text-center" style={{ color: '#05472A' , textTransform: 'uppercase'}}><b>DAE In Electronics Technology</b></h1><br />
          <h3 className="text-center" style={{ color: '#05472A', textTransform: 'uppercase' }}><b><u>Scheme Of Studies</u></b></h3>
        
          {/* Table for First and Second Year */}
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
                  <td>Phy. 122</td>
                  <td>Applied Physics</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Ch. 132</td>
                  <td>Applied Chemistry</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Comp 112</td>
                  <td>Computer Fundamentals</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>El.TR 114</td>
                  <td>Electrical Circuits</td>
                  <td>3</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>El.TR 123(Rev.)</td>
                  <td>Electronics Devices</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>El.TR 132</td>
                  <td>Engineering Drawing & Computer Aided Design</td>
                  <td>0</td>
                  <td>6</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>El.TR 141(Rev.)</td>
                  <td>Electrical Wiring</td>
                  <td>0</td>
                  <td>3</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td></td>
                  <td><b>Total</b></td>
                  <td><b>14</b></td>
                  <td><b>24</b></td>
                  <td><b>22</b></td>
                </tr>

                {/* Second Year */}
                <tr>
                  <td colSpan="8">
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
                  <td>Coms 211</td>
                  <td>Communication Skills</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>El.TR 212(Rev.)</td>
                  <td>Propagation of Electromagnetic Waves</td>
                  <td>2</td>
                  <td>0</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>El.TR 225</td>
                  <td>Analog Electronics</td>
                  <td>3</td>
                  <td>6</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>El.TR 233(Rev.)</td>
                  <td>Electrical Instruments & Measurements</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>El.TR 243(Rev.)</td>
                  <td>Electrical Machines</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>El.TR 253</td>
                  <td>Communication Systems</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>El.TR 264</td>
                  <td>Digital Electronics</td>
                  <td>3</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>El.TR 271</td>
                  <td>PCB Fabrication</td>
                  <td>0</td>
                  <td>3</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td></td>
                  <td><b>Total</b></td>
                  <td><b>19</b></td>
                  <td><b>21</b></td>
                  <td><b>26</b></td>
                </tr>

                {/* Third Year */}
                <tr>
                  <td colSpan="8">
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
                  <td>Mgm 311</td>
                  <td>Industrial Management & Human Relations</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>OSHE 311</td>
                  <td>Occupational Safety, Health and Environment</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>El.TR 314</td>
                  <td>Computer Architecture</td>
                  <td>3</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>El.TR 303</td>
                  <td>Equipment Maintenance & Servicing</td>
                  <td>1</td>
                  <td>6</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>El.TR 332</td>
                  <td>Project</td>
                  <td>0</td>
                  <td>6</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>El.TR 343</td>
                  <td>Industrial Electronics</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>El.TR 353</td>
                  <td>Power Electronics</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>El.TR 363</td>
                  <td>Microcontroller Programming and Applications</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td></td>
                  <td><b>Total</b></td>
                  <td><b>13</b></td>
                  <td><b>24</b></td>
                  <td><b>21</b></td>
                </tr>
                <br />
              </tbody>
            </table>
          </div>
        </div>
        <br /><br />
        <Footer/>
    </div>
  )
}

export default Electronics