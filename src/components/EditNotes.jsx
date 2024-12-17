import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../utils/ApiService';
import { toast } from "react-toastify"


function EditNotes() {
  let navigate = useNavigate()
  let params = useParams();
  let [title, setTitle] = useState("");
  let [notes, setNotes] = useState("");
  // let[note,setNote]=useState("")
  let [reminder, setReminder] = useState("");






  let getNotes = async () => {
    try {
      let res = await AxiosService.get(`/notes/${params.id}`);
      console.log(res);

      if (res.status === 200) {
        setTitle(res.data.notes.title);
        setNotes(res.data.notes.notes);
        setReminder(res.data.notes.reminder);
      }

    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    getNotes()

  }, [])


  let editNotes = async () => {

    try {
      let res = await AxiosService.put(`/notes/edit/${params.id}`, {
        title, notes, reminder

      })
      console.log(res);
      if (res.status === 200) {
        toast.success(res.data.message)
        navigate("/notes");
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
      if (error.response.status === 401) {
        logout()
      }
    }
  }
  return <>
    <div className='editnotes'>
      <Card className="create-content">
        <div className='title'>
          <Form style={{ width: "22rem" }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" value={title} placeholder="type the title here" onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>content</Form.Label>
              <Form.Control as="textarea" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Reminder</Form.Label>
              <Form.Control type="text" value={reminder} placeholder="type the remider here" onChange={(e) => setReminder(e.target.value)} />
            </Form.Group>
          </Form>
        </div>
        <div>
          <Button variant="primary" onClick={() => editNotes()}>save</Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="primary" onClick={() => navigate('/notes')}>cancel</Button>
        </div>
      </Card>

    </div>

  </>
}

export default EditNotes