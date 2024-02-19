import React from 'react'
import Aedil from './img/Aedilhaimushkil.jpg'
import Tujhoothi from './img/Tujhoothi.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Luka from './img/Lukachuppi.jpg'
import Barfi from './img/Barfi.webp'





const Collection = () => {
  const starEmoji = '⭐';

  return (
    <>
    <div className='bgColor'>
    <h1 style={{textAlign:'left'}}>Romantic...</h1> 
    <Container className='home'>
        <Row >
            <Col lg="3" style={{textAlign:'center'}} >
                <Card style={{paddingTop:'2px'}}>
                <Card.Img variant="top" src={Aedil} style={{height:'330px'}} />
                    <Card.Body>
                        <Card.Title>Ae Dil Hai Mushkil</Card.Title>
                        <Card.Text>
                            A Bollywood blockbuster staring Ranbir Kapoor is a love story.
                        </Card.Text>
                        <Button variant="primary">IDBm Rating {starEmoji} 7.7/10</Button>
                    </Card.Body>
                </Card>
    

            </Col>
            <Col lg="3">
                <Card style={{paddingTop:'2px'}}>
                <Card.Img variant="top" src={Tujhoothi} style={{height:'330px'}} />
                    <Card.Body>
                        <Card.Title>Tu Jhoothi Mai Makkar</Card.Title>
                        <Card.Text>
                        A romantic movie of couple and their love story with some comedy.
                        </Card.Text>
                        <Button variant="primary">IDBm Rating {starEmoji} 7.7/10</Button>

                    </Card.Body>
                </Card>
    

            </Col>
            <Col lg="3">
                <Card style={{paddingTop:'2px'}}>
                <Card.Img variant="top" src={Luka} style={{height:'330px'}} />
                    <Card.Body>
                        <Card.Title>Luka Chuppi</Card.Title>
                        <Card.Text>
                        The movie normalises disgusting the culture of live-in relation.
                        </Card.Text>
                        <Button variant="primary">IDBm Rating {starEmoji} 7.7/10</Button>
                    </Card.Body>
                </Card>
    

            </Col>
            <Col lg="3">
                <Card style={{paddingTop:'2px'}}>
                <Card.Img variant="top" src={Barfi} style={{height:'330px'}} />
                    <Card.Body>
                        <Card.Title>Barfi</Card.Title>
                        <Card.Text>
                          A story that has a character who is deaf and dumb and his struggles.
                        </Card.Text>
                        <Button variant="primary">IDBm Rating {starEmoji} 7.7/10</Button>

                    </Card.Body>
                </Card>
    
{/* 
            </Col>
        </Row>


        <Row>
            <Col lg="3">
                <Card>
                <Card.Img variant="top" src={Jawan} style={{height:'330px'}} />
                    <Card.Body>
                        <Card.Title>Jawan</Card.Title>
                        <Card.Text>
                        Action movie that shakes the roots of our Indian political system and its mafias.
                        </Card.Text>
                        <Button variant="primary">IDBm Rating {starEmoji} 7.7/10</Button>

                    </Card.Body>
                </Card>
    

            </Col>
            <Col lg="3">
                <Card>
                <Card.Img variant="top" src={Kisikabhai} style={{height:'330px'}} />
                    <Card.Body>
                        <Card.Title>Kisi Ka Bhai Kisi Ki jaan</Card.Title>
                        <Card.Text>
                        A simple love story in which societal norms of age gaps for marriage are broken.
                        </Card.Text>
                        <Button variant="primary">IDBm Rating {starEmoji} 7.7/10</Button>

                    </Card.Body>
                </Card>
    

            </Col>
            <Col lg="3">
                <Card>
                <Card.Img variant="top" src={Pathan} style={{height:'330px'}} />
                    <Card.Body>
                        <Card.Title>Pathan</Card.Title>
                        <Card.Text>
                        Movie is about an officer who fights against a terrorist to save the nation.
                        </Card.Text>
                        <Button variant="primary">IDBm Rating {starEmoji} 7.7/10</Button>

                    </Card.Body>
                </Card>
    

            </Col>
            <Col lg="3">
                <Card>
                <Card.Img variant="top" src={Tujhoothi} style={{height:'330px'}} />
                    <Card.Body>
                        <Card.Title>Tu Jhoothi Mai Makkar</Card.Title>
                        <Card.Text>
                        A romantic movie of couple and their love story with some comedy.
                        </Card.Text>
                        <Button variant="primary">IDBm Rating {starEmoji} 7.7/10</Button>

                    </Card.Body>
                </Card>
     */}

            </Col>
        </Row>

    </Container>
    </div>
    </>
  )
}

export default Collection
