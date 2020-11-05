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
        <Container>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/healthy_hair_other/1800x1200_healthy_hair_other.jpg?resize=750px:*"
                alt="First slide"

              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/healthy_hair_other/1800x1200_healthy_hair_other.jpg?resize=750px:*"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/healthy_hair_other/1800x1200_healthy_hair_other.jpg?resize=750px:*"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>


    </div>
  )
}
