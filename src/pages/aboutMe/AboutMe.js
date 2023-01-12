import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './aboutMe.css'
import NavBar from '../../components/navbar/NavBar'
import Layout from '../layout/Layout'

const AboutMe = () => {
  return (
    <div className='aboutMe'>
      <NavBar />
      <Layout />


      <Container>

        <Card className='aboutMeCard shadow' >
          <Card.Title>
            <Row>
              <Col className='aboutMeTitle'>
                Hi I'm İrem,

              </Col>
              <Col>
                <img className='aboutMeImg' src='https://avatars.githubusercontent.com/u/101289998?s=400&u=84dfb3b05d780e0424ebc181404f36093fbc6cfb&v=4' />
              </Col>
            </Row>

          </Card.Title>
          <Card.Body className='aboutMeContent'>
            With the theoretical education infrastructure that I gained with my engineering education, with competencies such as fast decision making, discipline and analytical thinking,
            As a person who is constantly improving, curious and open to learning with high concentration, I successfully passed the interviews held at Bahçeşehir University - Wissen Akademie and received 'Full Stack Programming' from experts in their fields for a period of 5 months.
            I have successfully completed my education. I aim to be successful in the sector with my projects and knowledge during the course.


          </Card.Body>
        </Card>
      </Container>
    </div>

  )
}

export default AboutMe