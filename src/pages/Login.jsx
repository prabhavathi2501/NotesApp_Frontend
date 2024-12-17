import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {toast} from 'react-toastify'
import AxiosService from '../utils/ApiService'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';



function Login() {
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  let navigate=useNavigate()

  let  handleLogin = async()=>{
    try {
      let res = await AxiosService.post('/user/login',{
        email,
        password
      })
      if(res.status===200)
      {
        toast.success(res.data.message)
        sessionStorage.setItem('token',res.data.token)
        sessionStorage.setItem('userData',JSON.stringify(res.data.userData))
        navigate('/notes')
      }
      
      else
      {
alert("login fail")
      }
     
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return <>

    <div className='container' style={{}}>
      <div className='row'>
      <div className='col-2 p-2'>
        <div>
       {/* <img src="/"  style={{width:"100%",borderRadius:"50%",background:"blue",border:"20px solid pink"}}></img>  */}
      </div>
      </div>

        <div className='col-4 b-3' style={{padding:"80px"}}>
    <h2 style={{textAlign:"center",color:"blue"}}></h2>
    <Card style={{width:"320px"}}>
      <Form style=
      {{ padding:"20px 20px"}}>
        <h6 className='login-text'>Login in Here!</h6>
        <Form.Group className="mb-3" >
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
         </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
        &nbsp;
        &nbsp;
        <Button variant="primary"  onClick={handleLogin} className='btn-login'>
          Submit
        </Button>
        &nbsp;
        &nbsp;
        <p className='p-text'>Don't you have account?<a href='/singup'>Register </a>Here</p>
       </Form>
      </Card>
      </div>
      {/* <div className=''></div> */}
      </div>
    </div>
  
  </>
}

export default Login