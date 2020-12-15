import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useDispatch } from "react-redux"
import { bookRoom } from "../store/actions/actionHotel"
import {Button} from 'react-bootstrap'


export default function RoomDetail() {
  const dispatch = useDispatch()
  const { roomType } = useParams()
  const [userEmail, setEmail] = useState("")
  const [error, setError] = useState("")
  // const [vrURL, setURL] = useState("")
  // const [roomTitle, setRoomName] = useState("")

  // useEffect(()=>{
  //   if (roomType === 'superior') {
  //     setURL("https://hotelimage.s3-ap-southeast-1.amazonaws.com/index.html")
  //     setRoomName('Superior Room')
  //   }
  // },[roomType])
  function bookHandler() {
    if (!userEmail) {
      setError("Email cannot be empty")
    }else{
      dispatch(bookRoom(userEmail))
    }
  }
  

  return (
    <Container className='full-height text-center'>
      <h1 className='text-capitalize'>{`${roomType} Room`}</h1>
      <hr />
      {error &&
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          }
      <iframe src={`https://hotelimage.s3-ap-southeast-1.amazonaws.com/${roomType}/room.html`} width='100%' height='80%' frameborder="0"></iframe>

      <input type='email' className='mt-5 mb-3 form-control form-control-lg' name='emailAddress' placeholder='Enter your email address' onChange={(e) => setEmail(e.target.value)} />
      <Button onClick={bookHandler} block>Book This Room</Button>
    </Container>
  )
}