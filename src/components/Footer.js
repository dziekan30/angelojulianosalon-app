import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
  return (
    // <Jumbotron className="footer">
    <div className="footer">
      <Container>
        <div className="row footer-text" >
          <div className="col-6">
            <h2 className="text-name">ANGELO JULIANO SALON</h2>
            <div>
              <a href="https://www.facebook.com/aFUNk89/">
                <i className="fab fa-facebook-square fa-2x icon"></i>
              </a>
              <a href="https://www.instagram.com/angelo.juliano.salon/">
                <i className="fab fa-instagram fa-2x icon"></i>
              </a>
            </div>
          </div>
          <div className="col-5 footer-text"  >
            {/* <i class="fas fa-phone-alt"></i><span className="phone" >Phone Number</span> */}
            <h5 className="footer-text">Phone Number</h5>
            <h6 className="footer-text" >773-993-0832</h6>
            <h5 className="footer-text" >Our Hours</h5>
            <h6 className="footer-text" >Mon-Friday: 10am - 6pm</h6>
            <h5 className="footer-text" >Address</h5>
            <h6 className="footer-text" >3329 N Harlem Ave Chicago IL 60634</h6>
          </div>
        </div>
        <div className="absolute rights">
          <p>© 2020.  All rights reserved. </p>
        </div>
      </Container>
    </div>
    // </Jumbotron>
  )

}