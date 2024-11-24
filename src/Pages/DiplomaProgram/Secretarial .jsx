import React from 'react';
import Navbar from '../../Components/Navbar';
import './style.css'; // Import your CSS file
import Footer from '../../Components/Footer';

const SecretarialTechnology = () => {
  return (
    <>
      <Navbar />
      <br /><br />
        <div className="container food-Section mt-5">
        <h1 className="text-center" style={{ color: '#05472A', textTransform: 'uppercase' }}><b>DAE In Secretarial Technology</b></h1><br />
          <h3 className="text-center" style={{ color: '#05472A', textTransform: 'uppercase' }}><b><u>Scheme Of Studies</u></b></h3>
        
          {/* Table for First and Second Year */}
          <h4 style={{color:'#05472A'}}><b>First Year</b></h4>
          <div className="table-responsive">
            <table className="table table-bordered" >
              <thead className="table-light" style={{backgroundColor:'#05472A'}}>
                <tr>
                  <th  style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>Code</th>
                  <th  style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>Subject</th>
                  <th  style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>Th</th>
                  <th  style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>Pr</th>
                  <th  style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>C</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gen 111</td>
                  <td>Islamiat/Pakistan Studies</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>SET 122</td>
                  <td>Business Urdu</td>
                  <td>2</td>
                  <td>0</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>SET 124</td>
                  <td>Functional English</td>
                  <td>2</td>
                  <td>2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>SET 133</td>
                  <td>Office Practice & Management</td>
                  <td>2</td>
                  <td>3</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>SET 143</td>
                  <td>Commercial Knowledge</td>
                  <td>2</td>
                  <td>0</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>SET 153</td>
                  <td>Communicative Skill</td>
                  <td>1</td>
                  <td>6</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>SET 163</td>
                  <td>Typewriting</td>
                  <td>1</td>
                  <td>6</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>SET 173</td>
                  <td>Shorthand</td>
                  <td>1</td>
                  <td>6</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Comp 122</td>
                  <td>Introduction to Computer Applications</td>
                  <td>1</td>
                  <td>6</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td></td>
                  <td><b>Total</b></td>
                  <td><b>13</b></td>
                  <td><b>23</b></td>
                  <td><b>36</b></td>
                </tr>

                {/* Second Year */}
                <tr>
                  <td colSpan="8">
                    <h4 style={{color:'#05472A'}}><b>Second Year</b></h4>
                  </td>
                </tr>
                <tr>
                  <td>Gen 211</td>
                  <td>Islamiat/Pakistan Studies</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>SET 213</td>
                  <td>Business Urdu</td>
                  <td>2</td>
                  <td>0</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>SET 223</td>
                  <td>Secretarial Duties</td>
                  <td>2</td>
                  <td>3</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>SET 233</td>
                  <td>Functional & Business English</td>
                  <td>2</td>
                  <td>0</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>SET 244</td>
                  <td>Basic Accounting</td>
                  <td>2</td>
                  <td>0</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>SET 253</td>
                  <td>Shorthand</td>
                  <td>1</td>
                  <td>6</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>SET 263</td>
                  <td>Typing (Electronics/Word Processor)</td>
                  <td>1</td>
                  <td>6</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>SET 271</td>
                  <td>Window/Excel & Office Packages</td>
                  <td>0</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td></td>
                  <td><b>Total</b></td>
                  <td><b>11</b></td>
                  <td><b>18</b></td>
                  <td><b>29</b></td>
                </tr>

                {/* Third Year */}
                <tr>
                  <td colSpan="8">
                    <h4 style={{color:'#05472A'}}><b>Third Year</b></h4>
                  </td>
                </tr>
                <tr>
                  <td>Gen 311</td>
                  <td>Islamiat/Pakistan Studies</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>SET 313</td>
                  <td>Business Urdu</td>
                  <td>2</td>
                  <td>0</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>SET 323</td>
                  <td>Office Practice & Management</td>
                  <td>2</td>
                  <td>3</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>SET 343</td>
                  <td>Typewriting</td>
                  <td>1</td>
                  <td>6</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>SET 353</td>
                  <td>Shorthand</td>
                  <td>1</td>
                  <td>6</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>SET 371</td>
                  <td>Advanced Computer Application</td>
                  <td>0</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td></td>
                  <td><b>Total</b></td>
                  <td><b>7</b></td>
                  <td><b>18</b></td>
                  <td><b>25</b></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br /><br />
      <Footer />
    </>
  );
};

export default SecretarialTechnology;
