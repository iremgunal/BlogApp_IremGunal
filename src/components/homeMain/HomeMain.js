import React, { useState } from 'react';
import './homeMain.css';
import { Card, Col, Container, NavLink, Row } from 'react-bootstrap';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/FirebaseConfig';


function HomeMain() {
  return (
    <div className='homeMain'>
      <Container className=' mt-5 justify-content-center align-items-center'>
        <Card className='homeCard'>
          <Row className='homeCardContent mt-5'>
            <Col className='homeCardLeft'>
              <Row className='fw-bold'>
                <span > İrem Günal </span>
              </Row>
              <Row>
                <span> Full Stack Developer</span>
              </Row>
              <Row>
                <Col className='homePageIcons'>
                  <a className='homePageLink' href='https://github.com/iremgunal' target='_blank'>  <FiGithub className='githubIcon me-3' size='2rem' /> </a>

                  <a className='homePageLink' href='https://twitter.com/iremgunal' target='_blank'>  <FiTwitter className='twIcon me-3' size='2rem' /> </a>

                  <a className='homePageLink' href='https://www.linkedin.com/in/irem-gunal/' target='_blank'>  <FiLinkedin className='linkedinIcon me-3' size='2rem' /> </a>
                  <a className='homePageLink' href="mailto:iremgunal5@gmail.com?body=My custom mail body" target='_blank'>  <FiMail className='mailIcon' size='2rem' /> </a>
                </Col>
              </Row>
            </Col>

            <Col className='homeCardRight' >
              {/* 2.kısım */}
              <Row>
                <Link className='homePageLink homePageNav' to='/#'>Home</Link>

              </Row>
              <Row>
                <Link className='homePageLink homePageNav' to='/about-me'>About Me</Link>


              </Row>
              <Row>
                <Link className='homePageLink homePageNav' to='/blogs'>Blogs</Link>

              </Row>
              <Row>
                <Link className='homePageLink homePageNav' to='/mywork'>My Works</Link>

              </Row>
              <Row>
              {auth.currentUser && 
                <Link className='homePageLink homePageNav' to='/createPost' >Create Post</Link>
              }
              </Row>
            </Col>
          </Row>

        </Card>     

      </Container>

    </div>

  )
}

export default HomeMain