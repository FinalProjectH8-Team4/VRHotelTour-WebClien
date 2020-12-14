import React from 'react'
import {Container} from 'react-bootstrap'

export default function RoomDetail(){
    return (
        <Container className='full-height text-center'>
            <h1>Room Detail</h1>
            <hr/>
            <iframe src="https://hotelimage.s3-ap-southeast-1.amazonaws.com/index.html" width='100%' height='80%' frameborder="0"></iframe>
        </Container>
    )
}