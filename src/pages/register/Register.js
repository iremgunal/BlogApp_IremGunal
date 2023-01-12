import React, { useContext } from 'react'
import './register.css';
import { register } from '../../firebase/FirebaseConfig';
import { AppContext } from '../../context/AppContext';
import { Container, Form, Button } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import NavBar from '../../components/navbar/NavBar';
import Layout from '../layout/Layout';

function Register() {



  const context = useContext(AppContext);
  const handleSubmit = async e => {
    e.preventDefault()
    const user = await register(context.email, context.password)
  }

  return (
    <>
    <NavBar />
    <Layout />
      <div className=' d-flex align-items-center justify-content-center mt-5 '>
        <Toaster />
        <Form className='align-items-center justify-content-center registerBox shadow' onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={context.email} onChange={e => context.setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={context.password} onChange={e => context.setPassword(e.target.value)} />
          </Form.Group>

          <Button type='submit' className='registerBtn container-fluid'>Register</Button>
        </Form>
      </div>
    </>
  )
}

export default Register 