import React from 'react';
import { Route,Routes,Link } from 'react-router-dom';
import {Home,AboutUs,ContactUS,UserReg,GetUser} from './index';


export function MainFile() {
  return (
    <div>
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
            <a href='/Home' className='navbar-brand'> All components</a>

            <div className='navbar-nav mr-auto'>
                <li className='nav-item'>
                    <Link to="/Home" className='nav-link'>Home</Link>
                </li>

                <li className='nav-item'>
                    <Link to="/ContactUS" className='nav-link'>Contact Us</Link>
                </li>

                <li className='nav-item'>
                    <Link to="/AboutUs" className='nav-link'>About Us</Link>
                </li>
                
                <li className='nav-item'>
                    <Link to="/UserReg" className='nav-link'>Register</Link>
                </li>

                <li className='nav-item'>
                    <Link to="/GetUser" className='nav-link'>User Detail</Link>
                </li>
            </div>
        </nav>

        <Routes>
            <Route path='Home' element = {<Home/>} />
            <Route path='AboutUs' element = {<AboutUs/>} />
            <Route path='ContactUS' element = {<ContactUS/>} />
            <Route path='UserReg' element = {<UserReg/>}/>
            <Route path='GetUser/:id' element = {<GetUser/>}/>
        </Routes>
    </div>
  )
}
