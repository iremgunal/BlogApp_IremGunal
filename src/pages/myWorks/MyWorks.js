import React from 'react'
import { Card, Container } from 'react-bootstrap'
import NavBar from '../../components/navbar/NavBar'
import Layout from '../layout/Layout'
import './myWorks.css'

function MyWorks() {
  return (
    <div className='myWorks'>
      <NavBar />
      <Layout />
      <Container>
        <Card className='mwCard shadow'>
          <Card.Title><h1>Bus Ticket Reservation Project</h1></Card.Title>
          <Card.Body>
            <ul>
              <li>Displaying the trips on the route chosen by the users with time, date and price information.</li>
              <li>Users can buy tickets by choosing a seat</li>
              <li>Creating, deleting and editing trips, cities, buses by the admin role.</li>
            </ul>
            <h3>Technologies:</h3>
            <p className='ms-3'>Entity Framework Core, Sqlite, Asp .Net Core MVC, C#, HTML, CSS, Bootstrap, ASP.Net Web API, Generic Repository Design Pattern, Code First</p>
            <a className='mwLink' href='https://github.com/iremgunal/Otobus-Bileti-Rezervasyon-Web-Projesi' target='_blank'>See on GitHub</a>
          </Card.Body>
        </Card>
        <Card className='mwCard shadow'>
          <Card.Title><h1>MiniShop E-Commerce Project</h1></Card.Title>
          <Card.Body>
            <ul>
              <li>Planning the project according to the Generic Repository Design Pattern.</li>
              <li>Creating the database by using EFCore and Code First technique.</li>
              <li>Creating User and Admin sections.</li>
              <li>Developing an interface where admins and authorized users can add, edit, delete and list products and categories.</li>
            </ul>
            <h3>Technologies:</h3>
            <p className='ms-3'>.NET , Asp.NetCore(MVC), C#, Generic Repository Design Pattern , Code First, HTML, CSS, JavaScript , Sqlite, Entity Framework Core, Bootstrap</p>
            <a className='mwLink' href='https://github.com/iremgunal/MiniShop-E-Ticaret-Projesi' target='_blank'>See on GitHub</a>
          </Card.Body>
        </Card>

      </Container>
    </div>
  )
}

export default MyWorks