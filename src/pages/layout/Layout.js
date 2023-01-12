import NavBar from '../../components/navbar/NavBar'
import React, { useState,useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './layout.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/FirebaseConfig';
import { TbDoorExit } from "react-icons/tb";
import { logout } from '../../firebase/FirebaseConfig';
import { logout as logoutHandle } from '../../store/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Layout = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {user} = useSelector(state =>state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
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
    <>        
    <Button  className='contactBtn ' onClick={handleShow}>
        Account
      </Button>

      <Offcanvas className='canvas' style={{width:250}} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='fw-bold display-6'> Account  </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className=' canvasBody '>   
          
        {!auth.currentUser && <Link className='accountLink display-6' to='/register'>Register</Link> }
        <br></br>
          {!auth.currentUser && <Link className='accountLink display-6' to='/login'>Login</Link>  }    
          {auth.currentUser && <Link className='accountLink '  to='/${user.displayName}'>Update your profile</Link> }
          {auth.currentUser &&
          <Link className='accountLink' to='/${user.displayName}'> {user.photoURL && <img className='rounded-5 ' style={{width:50}} src={user.photoURL} />} {user.displayName} </Link>  
          

          }
         {auth.currentUser && <Link onClick={handleLogout} ><TbDoorExit className='accountLink'  size='2rem'  /></Link> }     
               
        
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Layout