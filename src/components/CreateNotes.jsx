import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AxiosService from '../utils/ApiService';

function CreateNotes() {
  let [title, setTitle] = useState("");
  let [notes, setNotes] = useState("");
  let [reminder, setReminder] = useState("");
  let navigate = useNavigate();

  let CreateNotes = async () => {
    try {
      let res = await AxiosService.post('/notes/create', { title, notes, reminder })

      if (res.status === 201) {
        toast.success(res.data.message)
        navigate('/notes')
      }
    } catch (error) {
      toast.error(error.response.data.message)

    }

  }
  return <>
    <div>
      <Card className="create-content">
        <div className='title'>
          <Form style={{ width: "22rem" }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="type the title here" onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>content</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => setNotes(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Reminder</Form.Label>
              <Form.Control type="text" placeholder="type the remider here" onChange={(e) => setReminder(e.target.value)} />
            </Form.Group>
          </Form>
        </div>
        <Button variant="primary" onClick={() => CreateNotes()}>ADD</Button>
      </Card>

    </div>
  </>
}

export default CreateNotes