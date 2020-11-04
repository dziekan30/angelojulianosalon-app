import React from 'react'
import { Card, CardDeck, Container } from 'react-bootstrap'

export default function About() {
  return (
    <Container>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="https://media3.giphy.com/media/ZD3eIZqnR7DV2vVHeE/giphy.gif?cid=ecf05e476hofkmqyfirxe4l3y335yz5ksq171vzantgu7a0j&rid=giphy.gif" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://media3.giphy.com/media/ZD3eIZqnR7DV2vVHeE/giphy.gif?cid=ecf05e476hofkmqyfirxe4l3y335yz5ksq171vzantgu7a0j&rid=giphy.gif" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://media3.giphy.com/media/ZD3eIZqnR7DV2vVHeE/giphy.gif?cid=ecf05e476hofkmqyfirxe4l3y335yz5ksq171vzantgu7a0j&rid=giphy.gif" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
             </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Container>
  )

}