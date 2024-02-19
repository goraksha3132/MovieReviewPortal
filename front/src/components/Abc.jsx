import React from 'react'
import Card from 'react-bootstrap/Card';
import DSA from "./DSA.jpg"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Abc() {
  return (
    <div className='abc'>
        <Container>
            <br/>
            <Row>
                <Col lg="3" className='center'>
                <Card>
                    <Card.Img  src={DSA} />
                    <Card.Body>
                        <Card.Title>DSA</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    
                        <Button>Add to Cart</Button>
            
                </Card>
                </Col>

                <Col lg="3" className='center'>
                <Card>
                    <Card.Img  src={DSA} />
                    <Card.Body>
                        <Card.Title>DSA</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    
                        <Button>Add to Cart</Button>
            
                </Card>
                </Col>


                <Col lg="3" className='center'>
                <Card>
                    <Card.Img  src={DSA} />
                    <Card.Body>
                        <Card.Title>DSA</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    
                        <Button>Add to Cart</Button>
            
                </Card>
                </Col>


                <Col lg="3" className='center'>
                <Card>
                    <Card.Img  src={DSA} />
                    <Card.Body>
                        <Card.Title>DSA</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    
                        <Button>Add to Cart</Button>
            
                </Card>
                </Col>


            </Row>

        </Container>

      
    </div>
  )
}

export default Abc

