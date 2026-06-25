import React from 'react';
import {Route, Routes, Router} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Chairman from '../pages/Chairman';
import Leadership from '../pages/Leadership';
import Projects from '../pages/Projects';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Navbar from '../components/Navbar';
import BlogDetails from '../pages/BlogDetails';
import AdminLogin from '../pages/AdminLogin';
import AddBlog from '../pages/AddBlog';
import AdminDashboard from '../pages/AdminDashboard';
import EditBlog from '../pages/EditBlog';


function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/chairman' element = {<Chairman/>}/>
        <Route path='/leadership' element={<Leadership/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/blog/:slug' element={<BlogDetails/>}/>
        <Route path='/admin/login' element={<AdminLogin/>}/>
        <Route path='/admin/create' element={<AddBlog/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/admin/edit/:id' element={<EditBlog/>}/>
        <Route/> 
    </Routes>
  )
}

export default AppRoutes;