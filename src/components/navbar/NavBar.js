import React, { useRef, useState } from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import {auth} from '../../firebase/FirebaseConfig';
import { Link } from 'react-router-dom';
import './navbar.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../firebase/FirebaseConfig';
import { logout as logoutHandle } from '../../store/auth';
import { useNavigate } from 'react-router-dom';
import UpdateProfile from '../../components/updateProfile/UpdateProfile';
import { TbDoorExit } from "react-icons/tb";



const NavBar = () => {
 
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector(state =>state.auth)
  const handleLogout = async ()=> {
    await logout()
    dispatch(logoutHandle())
    navigate('/login', {
      replace: true
    })
  }
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <Container>
      <header >
        <nav ref={navRef} className='align-items-center'>
          <Link to='/'>Home</Link>
          <Link to='/mywork'>My Work</Link>
          <Link to='/blogs'>Blogs</Link>
          <Link to='/about-me'>About Me</Link>          
         
               
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars />
        </button>
      </header>

    </Container>

  );
}

export default NavBar
// {!isAuth ? <Link to='/login'>Login</Link> : <button onClick={signUserOut} >Log out</button>}   