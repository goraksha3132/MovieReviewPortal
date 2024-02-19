import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import L from './Login';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Cookies from 'js-cookie';



import axios from 'axios';

const Rf = () => {
  // ################ cookies section  ##############################

  const handleSetCookie = () => {
    // Set a cookie with a key-value pair
    Cookies.set('exampleCookie', 'cookieValue', { expires: 7 }); // Expires in 7 days
  };

  const handleGetCookie = () => {
    // Get the value of the cookie
    const cookieValue = Cookies.get('exampleCookie');
    console.log('Cookie Value:', cookieValue);
  };

    // ######################## database sectin ##########################
    const [validated, setValidated] = useState(false);
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [userid, setuserid] = useState('')
    const [password, setpassword] = useState('')
  
  
  const handleSubmit = (event) => {
    
  
    const setdata={
      fname:fname,
      lname:lname,
      email:email,
      phone:phone,
      userid:userid,
      password:password,
  
      
    };
    axios.post('http://localhost:8000/about/register',setdata)
    .then((res)=>{
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
    setValidated(true);
  
  
   
  };
  
  
      
          
      
      //const data={Username:"",Email:"",Password:"",Confirm:"",Name:"",Nicname:"",Website:"",bio:""}
      const [text,settext]=useState("")
  
  
      const change=(e)=>{
          settext({...text,[e.target.name]: e.target.value    })
          
      }
    // ################################################################################################
    
 
  return (
    <Row className='bgimg'>

        <Col lg="4">
        </Col>


        <Col lg="4" style={{ height: '431px' }} >
        <Card className='form1'><form className='form1' noValidate validated={validated} onSubmit={handleSubmit}>
            
    
                
                
                    <div className='form1'>
                            <h1>Registration Form</h1>
                    </div>
                    
                    
                    <table className='form1'>
                        <tr>
                            <td><label htmlFor="txt2"> Name </label></td>
                            <td><input type='text' id="txt2" placeholder='First' value={fname} onChange={(e)=>setfname(e.target.value)} name='Name'/></td>
                        </tr> 

                        <tr>
                            <td><label htmlFor="txt3"></label></td>
                            <td><input type='text' id="txt3" placeholder='Last' value={lname} onChange={(e)=>setlname(e.target.value)}name='Name1'/></td>
                        </tr> 

                        

                        <tr>
                            <td><label htmlFor="email1">Email </label></td>
                            <td><input type="email" id="email1" placeholder='@gmail.com' value={email} onChange={(e)=>setemail(e.target.value)} name='Email'/></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="phone"> Phone </label></td>
                            <td><input type='tel' id="phone" name='Phone'value={phone} onChange={(e)=>setphone(e.target.value)} placeholder='+91'/></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="txt">UserId</label></td>
                            <td><input type="text" id="txt"   name='Username'value={userid} onChange={(e)=>setuserid(e.target.value)} placeholder='Userid'/></td>
                        </tr>  

                        <tr>
                            <td><label htmlFor="pass">Password </label></td>
                            <td><input type='password' id="pass"  name='Password' value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Pass'/></td>
                        </tr> 



                        <tr>
                            <td><label htmlFor="pass1"> Confirm</label></td>
                            <td><input type='password' id="pass1"  name='Confirm'  value={text.Confirm} onSubmit={handleSubmit} onChange={change} placeholder='Confirm'/></td>
                        </tr>

                        

                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>


                    
     

                
                    
                        <div className='form1'>
                            <Button type='submit' className="button1" onClick={handleSetCookie}>Submit</Button>
                            <Button type='clear' className="button2">reset</Button>
                        
                            <p>If you already register <a href='/login'>Login</a> here  </p>
                            
                        </div>
                        </form>
                   
 
            
        </Card>
        </Col>
    </Row>
  )
}

export default Rf