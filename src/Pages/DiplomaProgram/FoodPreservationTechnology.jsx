import React from 'react';
import Navbar from '../../Components/Navbar';
import './style.css'; // Import your CSS file
import Footer from '../../Components/Footer';

const FoodPreservationTechnology = () => {
  return (
    <>
      <Navbar />
      <br /><br />
        <div className="container food-Section mt-5">
        <h1 className="text-center" style={{ color: '#05472A' , textTransform: 'uppercase'}}><b>DAE In Food Preservation Technology</b></h1><br />
          <h3 className="text-center" style={{ color: '#05472A' , textTransform: 'uppercase'}}><b><u>Scheme Of Studies</u></b></h3>
        
          {/* Table for First, Second, and Third Year */}
          <h4 style={{color:'#05472A'}}><b>First Year</b></h4>
          <div className="table-responsive">
            <table className="table table-bordered" >
              <thead className="table-light" style={{backgroundColor:'#05472A'}}>
                <tr>
                  <th  style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>Code</th>
                  <th  style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>Subject</th>
                  <th  style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>T</th>
                  <th  style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>P</th>
                  <th  style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>C</th>
                  <th  style={{ padding: '10px', backgroundColor: '#05472A', color: 'white' }}>Total (T+P)</th>
                </tr>
              </thead>
              <tbody>
                {/* First Year */}
                <tr>
                  <td>Gen 111</td>
                  <td>Islamiat/Pakistan Studies</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                  <td>32</td>
                </tr>
                <tr>
                  <td>Eng 112</td>
                  <td>English</td>
                  <td>2</td>
                  <td>0</td>
                  <td>2</td>
                  <td>64</td>
                </tr>
                <tr>
                  <td>Comp 142</td>
                  <td>Computer Applications</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                  <td>128</td>
                </tr>
                <tr>
                  <td>Ch 123</td>
                  <td>Applied Chemistry</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                  <td>160</td>
                </tr>
                <tr>
                  <td>Phy 113</td>
                  <td>Applied Physics</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                  <td>160</td>
                </tr>
                <tr>
                  <td>Math 123</td>
                  <td>Applied Mathematics-I</td>
                  <td>3</td>
                  <td>0</td>
                  <td>3</td>
                  <td>96</td>
                </tr>
                <tr>
                  <td>MTF 111</td>
                  <td>Engineering Drawing</td>
                  <td>0</td>
                  <td>3</td>
                  <td>1</td>
                  <td>96</td>
                </tr>
                <tr>
                  <td>MTF 121</td>
                  <td>Workshop Practice</td>
                  <td>0</td>
                  <td>3</td>
                  <td>1</td>
                  <td>96</td>
                </tr>
                <tr>
                  <td>FT 103</td>
                  <td>Introduction to Food Science and Technology</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                  <td>160</td>
                </tr>
                <tr>
                  <td>FT 123</td>
                  <td>General and Food Microbiology</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                  <td>160</td>
                </tr>
                <tr>
                  <td></td>
                  <td><b>Total</b></td>
                  <td><b>15</b></td>
                  <td><b>21</b></td>
                  <td><b>22</b></td>
                </tr>

                {/* Second Year */}
                <tr>
                  <td colSpan="6">
                    <h4 style={{color:'#05472A'}}><b>Second Year</b></h4>
                  </td>
                </tr>
                <tr>
                  <td>Gen 211</td>
                  <td>Islamiat/Pakistan Studies</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                  <td>32</td>
                </tr>
                <tr>
                  <td>Mgm 221</td>
                  <td>Business Management and Industrial Economics</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                  <td>32</td>
                </tr>
                <tr>
                  <td>Math 233</td>
                  <td>Applied Mathematics-II</td>
                  <td>3</td>
                  <td>0</td>
                  <td>3</td>
                  <td>96</td>
                </tr>
                <tr>
                  <td>FT 203</td>
                  <td>Food Chemistry & Analysis</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                  <td>160</td>
                </tr>
                <tr>
                  <td>FT 223</td>
                  <td>Fruits, Vegetables & Beverage Technology</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                  <td>160</td>
                </tr>
                <tr>
                  <td>FT 243</td>
                  <td>Meat, Poultry & Fish Technology</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                  <td>160</td>
                </tr>
                <tr>
                  <td>FT 262</td>
                  <td>Food Plant Layout and Hygiene</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                  <td>128</td>
                </tr>
                <tr>
                  <td>FT 271</td>
                  <td>Food Packaging</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                  <td>32</td>
                </tr>
                <tr>
                  <td>FT 282</td>
                  <td>Sugar & Confectionery Technology</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2</td>
                  <td>128</td>
                </tr>
                <tr>
                  <td>FT 291</td>
                  <td>Food Laws & Standards</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                  <td>32</td>
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
                  <td colSpan="6">
                    <h4 style={{color:'#05472A'}}><b>Third Year</b></h4>
                  </td>
                </tr>
                <tr>
                  <td>Gen 311</td>
                  <td>Islamiat/Pakistan Studies</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                  <td>32</td>
                </tr>
                <tr>
                  <td>Mgm 321</td>
                  <td>Business Communication</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                  <td>32</td>
                </tr>
                <tr>
                  <td>Mgm 331</td>
                  <td>Industrial Management & Human Relations</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                  <td>32</td>
                </tr>
                <tr>
                  <td>FT 313</td>
                  <td>Hospitality Management</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                  <td>160</td>
                </tr>
                <tr>
                  <td>FT 333</td>
                  <td>Nutrition & Dietetics</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                  <td>160</td>
                </tr>
                <tr>
                  <td>FT 303</td>
                  <td>Cereal & Baking Technology</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                  <td>160</td>
                </tr>
                <tr>
                  <td>FT 343</td>
                  <td>Dairy Technology</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                  <td>160</td>
                </tr>
                <tr>
                  <td>FT 353</td>
                  <td>Food Engineering</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                  <td>160</td>
                </tr>
                <tr>
                  <td>FT 363</td>
                  <td>Food Safety & Quality Assurance</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                  <td>160</td>
                </tr>
                <tr>
                  <td>FT 383</td>
                  <td>Waste Management</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                  <td>160</td>
                </tr>
                <tr>
                  <td>FT 391</td>
                  <td>Special Project</td>
                  <td>0</td>
                  <td>3</td>
                  <td>1</td>
                  <td>96</td>
                </tr>
                <tr>
                  <td></td>
                  <td><b>Total</b></td>
                  <td><b>17</b></td>
                  <td><b>21</b></td>
                  <td><b>24</b></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  <br /><br />

        <Footer/>
    </>
  );
};

export default FoodPreservationTechnology;



