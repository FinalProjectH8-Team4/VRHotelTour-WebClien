import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from 'react-bootstrap';

export default function FacilityDetail() {
    const hotel = useSelector((state) => state.hotel)
    const { idx } = useParams()
    const facility = hotel.facilities[idx]

    if (!hotel.facilities) {
        return (
            <Container>
                <h1>OOPSS... BACK TO HOME</h1>
            </Container>
        )
    }
    if (idx >= hotel.facilities.length) {
        return (
            <Container>
                <h1>OOPSS... NOT FOUND</h1>
            </Container>
        )
    }
    return (
        <Container>
            <h1 className='text-center'>{facility.name}</h1>
            <hr />
            <Container className='pt-3' style={{backgroundColor:'#dddddd'}}>
                <Carousel
                    infiniteLoop={true}
                    interval={2000}
                    swipeable={true}
                    axis='vertical'
                >
                    {facility.images.map((image, index) => (
                        <div key={index} style={{ height: '400px' }}>
                            <img src={image} alt="carousel" />
                        </div>
                    ))}
                </Carousel>
            </Container>
            <Container>
                <h2>Description : </h2>
                <p>{facility.description}</p>
            </Container>
        </Container>
    )
}

