import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

export default function Footer() {
  return (
    <Jumbotron className="footer">
      <div >
        <Container>
          <div className="row">
            <div className="col-6">
              <h1 style={{ color: 'white' }}>Angelojulianosalon</h1>
            </div>
            <div className="col-6">
              <i class="fas fa-phone-alt"></i><span>Phone Number</span>
              <h3>000-111-1100</h3>
            </div>
          </div>
          <div >
            <a href="">
              <i className="fab fa-facebook-square fa-2x icon"></i>
            </a>
            <a href="">
              <i className="fab fa-instagram fa-2x icon"></i>
            </a>
            {/* <i className="fab fa-twitter-square fa-2x icon"></i> */}

            <a href="">
              <i className="fab fa-youtube fa-2x icon"></i>

            </a>
          </div>
          <div className="rights">
            <p>© 2020 .  All rights reserved. </p>
          </div>
        </Container>
      </div>
    </Jumbotron>
  )

}