import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHotelById } from '../store/actions/actionHotel'
import { useHistory } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'

export default function HotelDetail() {
    const dispatch = useDispatch()
    const history = useHistory()
    const hotel = useSelector((state) => state.hotel)

    useEffect(() => {
        dispatch(fetchHotelById('5fd365110121271e28d8fc46'))
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
            <p>{JSON.stringify(hotel.facilities)}</p>
            <Container style={{backgroundColor:'#ddd'}}>
                <h2>Hotel Facilities</h2>
                <Container className='d-flex flex-row'>
                    {hotel.facilities.map((facility, index) => (
                        <Button onClick={() => facilitiesClick(index)} >{facility.name}</Button>
                    ))}
                    <button onClick={() => facilitiesClick(hotel.facilities.length)}>SALAH KAMAR</button>
                </Container>
            </Container>

        </Container>
    )
}