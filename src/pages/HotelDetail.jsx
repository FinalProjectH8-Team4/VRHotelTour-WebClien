import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHotelById } from '../store/actions/actionHotel'
import { useHistory } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'

import FacilitiesIcon from '../components/FacilitiesIcon'

export default function HotelDetail() {
  const dispatch = useDispatch()
  const history = useHistory()
  const hotel = useSelector((state) => state.hotel)

  useEffect(() => {
    dispatch(fetchHotelById('5fd83f9209fe494d61c1a7f2'))
  }, [])

  function facilitiesClick(idx) {
    history.push(`/facility/${idx}`)
  }

  if (!hotel.facilities) {
    return (
      <div>
        <h1>LOADING.....</h1>
      </div>
    )
  }
  return (
    <Container>
      {/* <p>{JSON.stringify(hotel.facilities)}</p> */}
      <Container className='text-center p-5' style={{ backgroundColor: '#eee', borderRadius:10 }}>
        <h2>Hotel Facilities</h2>
        <hr/>
        <Container className='d-flex align-content-start flex-wrap'>
          {hotel.facilities.map((facility, index) => (
            // <Button onClick={() => facilitiesClick(index)} >{facility.name}</Button>
            <FacilitiesIcon key={index} name={facility.name} index={index} facilitiesClick={facilitiesClick}/>
          ))}
        </Container>
      </Container>
    </Container>
  )
}