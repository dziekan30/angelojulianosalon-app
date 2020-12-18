import React from 'react'
import { Card, CardDeck, Container } from 'react-bootstrap'

export default function About() {
  return (
    <Container className="about">
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="131726672_360622208424805_3486672123673266242_n.jpg" />
          <Card.Body>
            <Card.Title>Bradni Aliz</Card.Title>
            <Card.Text>
              Something about
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Apoitment only</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="./131589577_296857581762578_2111205858971358786_n.jpg" />
          <Card.Body>
            <Card.Title>Angelo Juliano</Card.Title>
            <Card.Text>
              Something about
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Apoitment only</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="./131673798_1120072005092664_4768713147242061875_n.jpg" />
          <Card.Body>
            <Card.Title>Rosa</Card.Title>
            <Card.Text>
              Something about
             </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Apoitment only</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Container>
  )

}