import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {toast} from 'react-toastify'
import AxiosService from '../utils/ApiService'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


function Singup() {
  let [firstName,setFirstName] = useState("")
  let [lastName,setLastName]=useState("")
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  
  let navigate=useNavigate()

  let  handleSignup = async()=>{
    try {
      let res = await AxiosService.post('/user/signup',{
       firstName,
       lastName,
        email,
       password,
        
        
      })
      if(res.status===201)
      {
        navigate('/')
        toast.success(res.data.message)
       
      }
      
     
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return <>
  
    <div className='container-fluid  signup'>
      <div className='row'>
      <div className='col-4 p-2'>
      <img src='' className='image-row'></img>
        <div >
     </div>
      </div>
        <div className='col-3 b-2' style={{padding:"90px 10px",}}>
     {/* <h3 className='signup ' style={{textAlign:"center",background:""}}><i className="fa-solid fa-user-plus"></i>Signup Here!</h3>  */}
    <Card className='card singup-card ' style={{ width: '21rem', backgroundColor:" ",border:"1px solid block"}}>
      <Card.Body style={{ width: '21rem',height:"35rem" ,borderRadius:"10px"}}>
      <Form>
      <Form.Group className="mb-3" >
        <h5 style={{marginLeft:"65px",color:"blue"}}>singn up</h5>
          <Form.Label>First Name </Form.Label>
          <Form.Control type="text" placeholder="Enter FirstName" onChange={(e)=>setFirstName(e.target.value)}/>
         </Form.Group>
      <Form.Group className="mb-3" >
          <Form.Label>LastName </Form.Label>
          <Form.Control type="text" placeholder="Enter LastName" onChange={(e)=>setLastName(e.target.value)}/>
         </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
         </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
        <Button  variant="primary"  onClick={handleSignup} className='btn-login'>
          Signup
        </Button>
        &nbsp;
        &nbsp;
        &nbsp;
        <p style={{alignContent:"center"}}>Already have account?<a href='/'>Loging</a>Here</p>
      </Form>
      </Card.Body>
      </Card>
      </div>
      <div className='col-3'></div>
      </div>
    </div>
   
   
  </>
}

export default Singup