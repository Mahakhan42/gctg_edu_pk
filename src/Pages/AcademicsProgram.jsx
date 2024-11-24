import React from 'react'
import { Link } from 'react-router-dom/dist'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { RxDotFilled } from "react-icons/rx";

const AcademicsProgram = () => {
  return (
    <>
       <Navbar/>
        <br /><br /><br />
    <div className="container">
    <h2 className='text-center' style={{color:'#05472A', textTransform: 'uppercase'}}>
  <b>Sindh Board Of Technical Education Diploma Of Associate Engineer</b>
</h2>
<br />
<h2 className='text-center' style={{color:'#05472A', textTransform: 'uppercase'}}>
  <b>(Three Year Programme)</b>
</h2>

      <br /><br />
      <div className="row">
        {/* 1 */}
        <div className="col-md-4  mt-4">
        <div className="card" style={{width: '18rem;'}}>
        <img width='100%' height='240' src=".\src\assets\img\art tech.jpg" class="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title"  style={{color:'#05472A'}}>Architecture Technology</h5><br />
        <Link
  className="btn btn-primary"
  to="/Architecture"
  style={{ backgroundImage: 'linear-gradient(#99c29e, #05472A)', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}
>
  Click Here
</Link>
        </div>
        </div>
       </div>
       {/* 2 */}
       <div className="col-md-4  mt-4">
        <div className="card" style={{width: '18rem;'}}>
        <img width='100%' height='240'  src=".\src\assets\img\electronic.jpg" class="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title" style={{color:'#05472A'}}>Electronics Technology</h5><br />
        <Link to='/Electronics Technolgy' className="btn btn-primary"  style={{ backgroundImage: 'linear-gradient(#99c29e, #05472A)', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }} >Click Here</Link>
        </div>
        </div>
       </div>
       {/* 3 */}
       <div className="col-md-4  mt-4">
        <div className="card" style={{width: '18rem;'}}>
        <img width='100%' height='240'  src=".\src\assets\img\foodpic.jpg" class="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title" style={{color:'#05472A'}}>Food Preservation Technology </h5><br />
        <Link className="btn btn-primary" to='/FoodPreservationTechnology' style={{ backgroundImage: 'linear-gradient(#99c29e, #05472A)', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}>Click Here</Link>
        </div> 
        </div>
       </div>
       <br /><br /><br />
       {/* 4 */}
       <div className="col-md-4 mt-4">
        <div className="card" style={{width: '18rem;'}}>
        <img width='100%' height='240'  src=".\src\assets\img\fashionDesign.jpg" class="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title" style={{color:'#05472A'}}>Garments Technolgy</h5><br />
        <Link to='/Garments Technolgy' className="btn btn-primary" style={{ backgroundImage: 'linear-gradient(#99c29e, #05472A)', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}>Click Here</Link>
        </div>
        </div>
       </div>
       {/* 5 */}
       <div className="col-md-4 mt-4">
        <div className="card" style={{width: '18rem;'}}>
        <img width='100%' height='240'  src=".\src\assets\img\SecretarialTech.png" class="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title" style={{color:'#05472A'}}>Secretarial Management</h5><br />
        <Link className="btn btn-primary"  to='/Secretarial'style={{ backgroundImage: 'linear-gradient(#99c29e, #05472A)', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}>Click Here</Link>
        </div>
        </div>
       </div>
       {/* 6 */}
       <div className="col-md-4 mt-4">
        <div className="card" style={{width: '18rem;'}}>
        <img width='100%' height='240'  src=".\src\assets\img\CIT.jpg" class="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title" style={{color:'#05472A'}}>Computer Information</h5><br />
        <Link to='/Computer Information' className="btn btn-primary" style={{ backgroundImage: 'linear-gradient(#99c29e, #05472A)', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}>Click Here</Link>
        </div>
        </div>
       </div>
       {/* 7 */}
       <div className="col-md-4 mt-4">
        <div className="card" style={{width: '18rem;'}}>
        <img width='100%' height='240'  src="https://media.licdn.com/dms/image/v2/D5612AQFqBiqJhzJc1g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1713101291424?e=2147483647&v=beta&t=8DHa6mOZYskAqNrxt1n7dtsmuI5LDgb_5Ok-riES17A" class="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title" style={{color:'#05472A'}}>Software Technology</h5><br />
        <Link to='/Software' className="btn btn-primary"  style={{ backgroundImage: 'linear-gradient(#99c29e, #05472A)', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}>Click Here</Link>
       </div>
        </div>
       </div>
</div>
</div><br /><br />
{/* ---------------------------------------------------------------------- */}
<div className="container">
  <h3 style={{color:'#05472A'}}> <b> SCOPE OF DIPLOMA OF ASSOCIATE ENGINEERING (DAE) PROGRAMME</b></h3><br />
  <p>Industry largely depends on technicians for production, efficient operation & maintenance, and back-up support. An Associate Engineer can extend scientific knowledge & skills for qualitative productivity. The Sindh Board of Technical Education (SBTE) in 25 Technologies awards the Diploma of Associate Engineering (DAE) certificates The Government of Pakistan recognizes 3-Year DAE equivalent to Intermediate for further vertical mobility towards higher studies.</p>
<br /><h3 style={{color:'#05472A'}}><b>JOB OPPORTUNITIES</b></h3><br />
<p>The DAE pass-outs can either proceed for further studies or get employment as Supervisors, Foremen, Salem Engineers, Shift Engineers, Sub-Engineers, Surveyors, Service Station Managers, Auto Engineers, Agricultura Overseers, Farm Managers, Instructors. Workshop Superintendents. IT related Jobs such as Data Consultan Operators, Website developer, Hardware & Software Technicians, Architect, Office Management (Midda Management) in Public & Private Sector etc.</p>
<p>Moreover, pass-outs may have many opportunities of self-employment (Entrepreneurship) as well.</p>
<br /><h3  style={{color:'#05472A'}}><b>HIGHER EDUCATION OPPORTUNITIES</b></h3><br />
<p>DAE is equivalent to Intermediate (Pre-Engineering). Diploma holders are eligible for following opportunities further education:</p>
<p><RxDotFilled /> Rachelor in Science Engineering Technology (BS Engineering Technology)</p>  
<p><RxDotFilled /> Bachelor of Engineering (B.E./BS Engineering) offered by the Engineering Universities as per their policy.</p>
<p> <RxDotFilled /> Bachelor în Science/Computer/Commerce/Administration/Humanities & Arts</p>
</div>
<br /><br />

<Footer/>
    </>
  )
}

export default AcademicsProgram
