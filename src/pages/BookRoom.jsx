import { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { bookRoom } from "../store/actions/actionHotel"

export default function BookRoom() {
  const { roomType } = useParams()
  const dispatch = useDispatch()
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
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Booking room</h3>
          <h5>Superior (type)</h5>
          {error &&
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          }
          <input type='email' className='form-control form-control-lg' name='emailAddress' placeholder='Enter your email address' onChange={(e) => setEmail(e.target.value)} />
          <a href="#" className="btn btn-success mt-2" onClick={bookHandler} >Book this room</a>
        </div>
      </div>
    </div>
  )
}