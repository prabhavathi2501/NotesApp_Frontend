import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom';
import AxiosService from '../utils/ApiService';
import { useParams } from 'react-router-dom';
import {toast} from 'react-toastify'


function CardTile({note}) {
  let params =useParams()
  let navigate=useNavigate()
  console.log(note)
  
  let deletNotes = async(id)=>{
   try {
    let res= await AxiosService.delete(`/notes/${id}`)
    if(res===200){
      toast.success(res.data.message)
    }
   } catch (error) {
    toast.error(error.response.data.message)
   }

  }
 
  return <>
   <Card style={{width:"25rem",height:"12rem",display:"flex"}}>
     <Card.Body>
        <Card.Title style={{color:"blue",alignContent:"center",fontWeight:"400"}}>{note.title}</Card.Title> 
        
        <Card.Text>
        <p style={{display:"flex",size:"10px"}}>
         {note.createdAt}
        </p>
        <div style={{}}>
         {
          note.notes
         }
          &nbsp;  &nbsp;  &nbsp; 
      
       {/* <i class="fa-solid fa-pen-to-square" style={{}}></i>
       &nbsp;  &nbsp; 
       <i className="fa-sharp fa-solid fa-trash"></i> */}
      
       </div>
        </Card.Text>
       {
        note.reminder
       }
       <div className='icon-tap'>
        <i className="fa-solid fa-pen-to-square" style={{marginLeft:"100px"}} onClick={()=>navigate(`/editnotes/${note._id}`)}></i>
      &nbsp;
      &nbsp;
      <i className="fa-sharp fa-solid fa-trash" onClick={()=>deletNotes(note._id)}></i>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </div>
      </Card.Body>
    </Card>
  </>
}

export default CardTile