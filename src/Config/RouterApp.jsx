import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from '../Pages/Home'
import Aboutus from '../Pages/About-us'
import AcademicsProgram from '../Pages/AcademicsProgram'
import FacultyAndStaff from '../Pages/FacultyAndStaff'
import LifeAtCollege from '../Pages/LifeAtCollege'
import Admission from '../Pages/Admission'
import Career from '../Pages/Career'
import Contactus from '../Pages/Contact-us'
import FoodPreservationTechnology from '../Pages/DiplomaProgram/FoodPreservationTechnology'
import Secretarial from '../Pages/DiplomaProgram/Secretarial '
import Architecture from '../Pages/DiplomaProgram/Architecture'
import MessageEDU from '../Pages/MessageEDU'
import CIT from '../Pages/DiplomaProgram/CIT'
import Software from '../Pages/DiplomaProgram/Software'
import GarmentsTechnolgy from '../Pages/DiplomaProgram/GarmentsTechnolgy'
import Electronics from '../Pages/DiplomaProgram/Electronics '
import ShortCourses from '../Pages/ShortCourses'

  
const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/About-us' element={<Aboutus/>}/>
        <Route path='/AcademicsProgram' element={<AcademicsProgram/>}/>
        <Route path='/FacultyAndStaff' element={<FacultyAndStaff/>}/>
        <Route path='/LifeAtCollege' element={<LifeAtCollege/>}/>
        <Route path='/Admission' element={<Admission/>}/>
        <Route path='/Career' element={<Career/>}/>
        <Route path='/Contact-us' element={<Contactus/>}/>
        <Route path='/FoodPreservationTechnology' element={<FoodPreservationTechnology/>}/>
        <Route path='/Secretarial' element={<Secretarial/>}/>
        <Route path='/Architecture' element={<Architecture/>}/>
        <Route path='/Message' element={<MessageEDU/>}/>
        <Route path='/Computer Information' element={<CIT/>}/>
        <Route path='/Software' element={<Software/>}/>
        <Route path='/Garments Technolgy' element={<GarmentsTechnolgy/>}/>
        <Route path='/Electronics Technolgy' element={<Electronics/>}/>
        <Route path='/ShortCourses' element={<ShortCourses/>}/>
    </Route>
))
 
const RouterApp = () => {
  return (
  <>
     <RouterProvider router={router}/>
 </> 
  )
}

export default RouterApp
