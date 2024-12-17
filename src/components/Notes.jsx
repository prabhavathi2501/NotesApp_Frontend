import React from 'react';
import { useState, useEffect } from 'react';
import AxiosService from '../utils/ApiService';
import CardTile from "../common/CardTile"







function Notes() {
  let [notes, setNotes] = useState([])
  let getallNotes = async () => {
    try {
      let res = await AxiosService.get('/notes/getallnotes')
      if (res.status === 200) {
        setNotes(res.data.allNotes)
      }
        } catch (error) {
      toast.error(error.response.data.message)
        }
  }

  useEffect(() => {
    getallNotes()
 }, [])


  return <div className='note-card'>
    <>
      <div className='note-wraper'>
        {
          notes.map((e) => {
            return <CardTile note={e} key={e._id} />
             })
        }
      </div>
    </>
 </div>
}

export default Notes