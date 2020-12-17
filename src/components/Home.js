import React from 'react'
// import Header from './Header'
// import SimpleMap from './SimpleMap'
import { Carousel, Container } from 'react-bootstrap'


export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      {/* <SimpleMap /> */}

      {/* <div className="home" style={{
        backgroundImage: `url(${'plant-nature.png'})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5"
      }}> */}
      <div className="home">
        {/* <h1>Welcome</h1>
        <h1>hello this is home </h1> */}
        <Container className="home-page">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./131580028_838718286950872_2620090689156429786_n.jpg"
                alt="First slide"

              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./131589577_296857581762578_2111205858971358786_n.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="131726672_360622208424805_3486672123673266242_n.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>


    </div>
  )
}
