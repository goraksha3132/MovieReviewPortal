import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Animal from './img/Animal.jpeg';
import Dunki from './img/Dunki.jpeg';
import Sam from './img/Sam.jpeg';
import Tiger3 from './img/Tiger3.jpeg';
import Jawan from './img/Jawan.jpg';
import Kisikabhai from './img/Kisikabhai.jpg';
import Pathan from './img/Pathan.jpg';
import Tujhoothi from './img/Tujhoothi.jpg'




const Home = () => {

    const starEmoji = '⭐';
    return (
    <div className='bgColor'>
    {/* <video src={vid} alt="" autoPlay={true} loop muted /> */}
        
    <h1 style={{textAlign:'left'}}>Newly Released...</h1>
    <Container className='home'>
        <Row>
            <Col lg="3" style={{textAlign:'center'}} >
                <Card style={{paddingTop:'2px'}}>
                <Card.Img variant="top" src={Animal} style={{height:'330px'}} />
                    <Card.Body>
                        <Card.Title>Animal</Card.Title>
                        <Card.Text>
                            A Bollywood blockbuster staring Ranbir Kapoor as a loving son of father.
                        </Card.Text>
                        <Button variant="primary">IDBm Rating {starEmoji} 7.7/10</Button>
                    </Card.Body>
                </Card>
    

            </Col>
            <Col lg="3">
                <Card style={{paddingTop:'2px'}}>
                <Card.Img variant="top" src={Tiger3} style={{height:'330px'}} />
                    <Card.Body>
                        <Card.Title>Tiger3</Card.Title>
                        <Card.Text>
                        An action thriller movie staring Salman Khan give you a ride of comedy and joy.
                        </Card.Text>
                        <Button variant="primary">IDBm Rating {starEmoji} 7.7/10</Button>
                    </Card.Body>
                </Card>
    

            </Col>
            <Col lg="3">
                <Card style={{paddingTop:'2px'}}>
                <Card.Img variant="top" src={Dunki} style={{height:'330px'}} />
                    <Card.Body>
                        <Card.Title>Dunki</Card.Title>
                        <Card.Text>
                        The Movie highlights real donkey process of migration in Uttarakhand.
                        </Card.Text>
                        <Button variant="primary">IDBm Rating {starEmoji} 8.4/10</Button>
                    </Card.Body>
                </Card>
    

            </Col>
            <Col lg="3">
                <Card style={{paddingTop:'2px'}}>
                <Card.Img variant="top" src={Sam} style={{height:'330px'}} />
                    <Card.Body>
                        <Card.Title>Sam Bahadur</Card.Title>
                        <Card.Text>
                        A real story of Indias bravest army man Sam Manikshaw and his struggles.
                        </Card.Text>
                        <Button variant="primary">IDBm Rating {starEmoji} 8.0/10</Button>

                    </Card.Body>
                </Card>
    

            </Col>
        </Row>


        <Row >
            <Col lg="3">
                <Card style={{paddingTop:'2px'}}>
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
                <Card style={{paddingTop:'2px'}}>
                <Card.Img variant="top" src={Kisikabhai} style={{height:'330px'}} />
                    <Card.Body>
                        <Card.Title>Kisi Ka Bhai Kisi Ki jaan</Card.Title>
                        <Card.Text>
                        A simple love story in which societal norms of age gaps for marriage are broken.
                        </Card.Text>
                        <Button variant="primary">IDBm Rating {starEmoji} 6.0/10</Button>

                    </Card.Body>
                </Card>
    

            </Col>
            <Col lg="3">
                <Card style={{paddingTop:'2px'}}>
                <Card.Img variant="top" src={Pathan} style={{height:'330px'}} />
                    <Card.Body>
                        <Card.Title>Pathan</Card.Title>
                        <Card.Text>
                        Movie is about an officer who fights against a terrorist to save the nation.
                        </Card.Text>
                        <Button variant="primary">IDBm Rating {starEmoji} 7.8/10</Button>

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
                        <Button variant="primary">IDBm Rating {starEmoji} 6.9/10</Button>

                    </Card.Body>
                </Card>
    

            </Col>
        </Row>

    </Container>
    </div>
  )
}

export default Home
