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
    <div className='full-height row'>
      <div className="column">
        {error &&
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            }
        <iframe src={`https://hotelimage.s3-ap-southeast-1.amazonaws.com/${roomType}/room.html`} width='50%' height='80%' frameborder="0"></iframe>
        <h5 className="mt-2">Room Facilities Included</h5>
      </div>
      <Icons/>
      

      <input type='email' className='mt-5 mb-3 form-control form-control-lg' name='emailAddress' placeholder='Enter your email address' onChange={(e) => setEmail(e.target.value)} />
      <Button onClick={bookHandler} block >Book This Room</Button>
      <h1> . . .</h1>
     
    </div>
  )
}