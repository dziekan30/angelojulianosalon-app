import React from 'react'
import { Container } from 'react-bootstrap'

export default function Services() {
  return (
    <Container className="service" >
      <div className="text-service" style={{ textAlign: "center" }}>
        <h1 className="text-service">Hair Salon Services</h1>
        <h3 className="text-service">Bridal Pricelist</h3>
        <h4 className="text-service"> TRIALS  </h4>
        <ul>
          <li>HAIR - $100 </li>
          <li>MAKE-UP - $150</li>
          <li>STRIP EYELASHES - $10</li>
        </ul>

        <h4 className="text-service">DAY OF</h4>
        <ul>
          <li>BRIDAL HAIR -$200</li>
          <li>BRIDAL MAKE-UP-$200</li>
          <li>STRIP EYELASHES-$10</li>
        </ul>

        <h4 className="text-service"> Brides Maids </h4>
        <ul>
          <li>BRIDESMAIDS/MOB HAIR-($100)</li>
          <li>BRIDESMAIDS/ MOB MAKE-UP-$100</li>
          <li>EYES ONLY APPLICATION-$50</li>
          <li>STRIP EYELASHES-$10</li>
        </ul>
      </div>
    </Container>

  )

}