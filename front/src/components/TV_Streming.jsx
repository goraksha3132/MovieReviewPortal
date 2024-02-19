import React from 'react'
import Falcon from './img/Falcon.jpeg'
import Secret from './img/Secret.jpeg'
import Scam from './img/Scam.jpeg'
import Loki from './img/Loki.jpeg'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'


const TV_Streaming = () => {
  const starEmoji = '⭐';
    return (
    <div className='bgColor'>
    {/* <video src={vid} alt="" autoPlay={true} loop muted /> */}
    

    <h1 style={{textAlign:'left'}}>Web Series...</h1>
    <Container style={{marginTop:'-30px'}}>
        <Row>
            <Col lg="3" style={{textAlign:'center'}} >
                <Card style={{paddingTop:'2px'}}>
                <Card.Img variant="top" src={Falcon} style={{height:'330px'}} />
                    <Card.Body>
                        <Card.Title>Falcon</Card.Title>
                        <Card.Text>
                            A storyy of an American soldier.
                        </Card.Text>
                        <Button variant="primary">IDBm Rating {starEmoji} 8.7/10</Button>
                    </Card.Body>
                </Card>
    

            </Col>
            <Col lg="3">
                <Card style={{paddingTop:'2px'}}>
                <Card.Img variant="top" src={Scam} style={{height:'330px'}} />
                    <Card.Body>
                        <Card.Title>Scam 1992</Card.Title>
                        <Card.Text>
                           A real story of a scammer Harshad Mehta.
                        </Card.Text>
                        <Button variant="primary">IDBm Rating {starEmoji} 8.0/10</Button>
                    </Card.Body>
                </Card>
    

            </Col>
            <Col lg="3">
                <Card style={{paddingTop:'2px'}}>
                <Card.Img variant="top" src={Loki} style={{height:'330px'}} />
                    <Card.Body>
                        <Card.Title>Loki</Card.Title>
                        <Card.Text>
                          Story of an Avengers villian.
                        </Card.Text>
                        <Button variant="primary">IDBm Rating {starEmoji} 7.2/10</Button>
                    </Card.Body>
                </Card>
    

            </Col>
            <Col lg="3">
                <Card style={{paddingTop:'2px'}}>
                <Card.Img variant="top" src={Secret} style={{height:'330px'}} />
                    <Card.Body>
                        <Card.Title>Secret</Card.Title>
                        <Card.Text>
                          This series as a secret invention.
                        </Card.Text>
                        <Button variant="primary">IDBm Rating {starEmoji} 6.8/10</Button>

                    </Card.Body>
                </Card>
    

            </Col>
        </Row>


        

    </Container>
    </div>
  )
}

export default TV_Streaming
