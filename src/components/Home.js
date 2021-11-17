import React, { Fragment } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import './Home.css'

const Home = () => {
  return (
    <Fragment>
      <div className='home'>
        <div className='home__overlay'></div>
        <h1 className='home__name'>Nolan Beyer</h1>
        <h2 className='home__content'>Junior Full Stack Web Developer</h2>
        <i className='fas fa-code home__icon'></i>
        <h3 className='home__skills'>
          React JS || HTML/CSS || Node || Express || MongoDB
        </h3>
      </div>

      <section className='about--me'>
        <h2>PROJECTS</h2>
      </section>

      <section className='cards'>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant='top'
                src='https://media.istockphoto.com/photos/investment-business-report-picture-id1286971516?b=1&k=20&m=1286971516&s=170667a&w=0&h=t3XYTkHV4DDzYIC_peiKO7uD5Bmvjc7rcQIC9X13ZYw='
              />
              <Card.Body>
                <Card.Title className='text-center text-black'>
                  Edge Ledger
                </Card.Title>
                <hr />
                <Card.Text>
                  Edge Ledger is a financial site thats fully responsive built
                  only with HTML and CSS.
                </Card.Text>
                <a
                  className='buttons btn btn-dark'
                  href='https://nolanbeyer.github.io/Edge-Ledger/'>
                  <i className='fab fa-chrome'> Site</i>
                </a>
                <a
                  className='buttons btn btn-dark'
                  href='https://github.com/NolanBeyer/Edge-Ledger'>
                  <i className='fab fa-github'> Code</i>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant='top'
                src='https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE='
              />
              <Card.Body>
                <Card.Title className='text-center text-black'>
                  Hotel BT
                </Card.Title>
                <hr />
                <Card.Text>
                  Hotel BT is a full responsive three page site built with only
                  HTML and CSS.
                </Card.Text>
                <a
                  className='buttons btn btn-dark'
                  href='https://nolanbeyer.github.io/Hotel-Site/'>
                  <i className='fab fa-chrome'> Site</i>
                </a>
                <a
                  className='buttons btn btn-dark'
                  href='https://github.com/NolanBeyer/Hotel-Site'>
                  <i className='fab fa-github'> Code</i>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section className='cards'>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant='top'
                src='https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80'
              />
              <Card.Body>
                <Card.Title className='text-center text-black'>
                  ProShop
                </Card.Title>
                <hr />
                <Card.Text>
                  ProShop is a ecommerce site with full authentication. Buy,
                  sell, and list any product you'd like.
                </Card.Text>
                <a
                  className='buttons btn btn-dark'
                  href='https://proshopapp127.herokuapp.com/'>
                  <i className='fab fa-chrome'> Site</i>
                </a>
                <a
                  className='buttons btn btn-dark'
                  href='https://github.com/NolanBeyer/MERN-ProShop'>
                  <i className='fab fa-github'> Code</i>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              width='70px'
              height='70px'
              className='text-center'
              style={{ width: '18rem' }}>
              <Card.Img
                variant='top'
                src='https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
              />
              <Card.Body>
                <Card.Title className='text-black'>Face Rec</Card.Title>
                <hr />
                <Card.Text>
                  A two factor authentication site with face id to store all
                  your passwords from various sites in.
                </Card.Text>
                <a
                  className='buttons btn btn-dark'
                  href='https://face-id.dev/#/'>
                  <i className='fab fa-chrome'> Site</i>
                </a>
                <a
                  className='buttons btn btn-dark'
                  href='https://github.com/NolanBeyer/image-recognition'>
                  <i className='fab fa-github'> Code</i>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Fragment>
  )
}

export default Home
