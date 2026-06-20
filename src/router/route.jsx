import React from 'react';
import {Route, Routes, Router} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Chairman from '../pages/Chairman';
import Council from '../pages/Council';
import Projects from '../pages/Projects';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';


function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/chairman' element = {<Chairman/>}/>
        <Route path='/council' element={<Council/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default AppRoutes;