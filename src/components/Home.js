import React from 'react'
// import Header from './Header'
// import { Container } from 'react-bootstrap'
// import SimpleMap from './SimpleMap'


export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      {/* <SimpleMap /> */}

      {/* <Container> */}
      <div className="home" style={{
        backgroundImage: `url(${'plant-nature.png'})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5"
      }}>
        <h1>Welcome</h1>
        <h1>hello this is home </h1>
      </div>

      {/* </Container> */}

    </div>
  )
}
