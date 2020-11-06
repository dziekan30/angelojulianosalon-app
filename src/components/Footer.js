import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

export default function Footer() {
  return (
    <Jumbotron className="footer">
      <div >
        <Container>
          <div className="row footer-text" >
            <div className="col-6">
              <h1 className="text-name">Angelojulianosalon</h1>
              <div >
                <a href="https://www.facebook.com/aFUNk89/">
                  <i className="fab fa-facebook-square fa-2x icon"></i>
                </a>
                <a href="https://www.instagram.com/angelo.juliano.salon/">
                  <i className="fab fa-instagram fa-2x icon"></i>
                </a>
                {/* <i className="fab fa-twitter-square fa-2x icon"></i> */}
                {/* <a href="">
                  <i className="fab fa-youtube fa-2x icon"></i>
                </a> */}
              </div>
              <div className="absolute rights">
                <p>© 2020.  All rights reserved. </p>
              </div>

            </div>
            <div className="col-6 footer-text"  >
              <i class="fas fa-phone-alt"></i><span className="phone" >Phone Number</span>
              <h3 className="footer-text" >000-111-1100</h3>
              <h3 className="footer-text" >Our Hours</h3>
              <h4 className="footer-text" >Mon-Friday: 10am - 6pm</h4>
            </div>
          </div>
        </Container>
      </div>
    </Jumbotron>
  )

}