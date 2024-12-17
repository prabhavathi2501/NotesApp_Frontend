import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import useLogout from '../hooks/UseLogout';


function Home() {
    let userData=JSON.parse(sessionStorage.getItem('userData'))
    let navigate=useNavigate();
    let logout=useLogout()

    useEffect(()=>{
        if(!userData){
           logout
        }
        else{
    //  navigate('/create')
        }

    },[])
  return <>
  
  <Navbar bg="sucess" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{fontSize:"18px"}}>Notes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/create')} style={{color:"white"}}>create</Nav.Link>
           
            <div className='Logout-tag'>
            <Nav.Item style={{alignContent:"center"}}>{`${userData.firstName} ${userData.lastName}`}</Nav.Item>
             <Nav.Item onClick={logout} style={{cursor:"pointer"}}  >Logout</Nav.Item>
            </div>
          </Nav>
        </Container>
      </Navbar>

      
    </>
  
}


  

export default Home