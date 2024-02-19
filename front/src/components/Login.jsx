import React from 'react'
import Icon from './Icon.jpg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react';



const Login = () => {
  return ( 
    <Row className='bgimg'>
      
       
        
        <Col lg="4">
        </Col>
        

        <Col lg="4" style={{ height: '431px' }}>
            <Card className='border' >
                

            <div  className='form1'>
            
            <br />
                <img src={Icon} alt='Icon' height={100} width={100} />
                <br /><br />
                </div>
            
            <table className='form1' ><tr><td>

                <label for="User" >UserId</label> </td><td>
                <input type='text'  id='User' placeholder='Userid' /></td>
                </tr>
                <tr><td>
                <label for="pass">Password</label> <br/></td><td>
                <input type='password'  id='pass' placeholder='Pass' /></td>
                </tr>
        
                <br/>

                
                
                </table>
                
                
                <Button >Login</Button>
                
                
            
            
                
            </Card>
        </Col>

        
        
    </Row>
 
        
   
  )
}


export default Login