import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useDispatch } from "react-redux"
import { bookRoom } from "../store/actions/actionHotel"
import {Button} from 'react-bootstrap'
import Icons from '../components/icons'

export default function RoomDetail() {
  const dispatch = useDispatch()
  const { roomType } = useParams()
  const [userEmail, setEmail] = useState("")
  const [error, setError] = useState("")

  function bookHandler() {
    if (!userEmail) {
      setError("Email cannot be empty")
    }else{
      dispatch(bookRoom(userEmail))
    }
  }
  
  return (
    <div style={{height: '100vh'}}>
      <div className='full-height row'>
        <div className="col-9">
          {error &&
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              }
          <iframe src={`https://hotelimage.s3-ap-southeast-1.amazonaws.com/${roomType}/room.html`} width='100%' height='100%' frameborder="0"></iframe>
        </div>
        <div className="col-3 justify-content-center">
          <p className="mt-3 ml-5" style={{fontSize: 12}}>Enter your email to book this room</p>
          <input 
            type='email' 
            className='mb-2 ml-4 form-control' 
            name='emailAddress' 
            placeholder='Enter your email address...' 
            onChange={(e) => setEmail(e.target.value)} 
            style={{width: "80%", height: 35, borderColor: '#231535'}}
          />
          <Button onClick={bookHandler} className="ml-4" style={{width: "80%"}}>Book This Room</Button>
          <h5 className="mt-3 text-center">Facilities Included</h5>
          <Icons/>
        </div>
      </div>
    </div>
  )
}