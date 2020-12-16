import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'

export default function FacilityDetail() {
  const history   = useHistory()
  const hotel     = useSelector((state) => state.hotel)
  const { idx }   = useParams()
  let facility
  if(hotel.facilities){
    facility = hotel.facilities[idx]
  }

  function homeBtn() {
    history.push('/')
  }

  if (!hotel.facilities) {
    return (
      <Container>
        <h1>OOPSS... SOMETHING WRONG, BACK TO HOME PAGE!</h1>
        <Button type='button' block onClick={homeBtn}>Home</Button>
      </Container>
    )
  }
  if (idx >= hotel.facilities.length) {
    return (
      <Container>
        <h1>OOPSS... NOT FOUND</h1>
        <Button type='button' block onClick={homeBtn}>Home</Button>
      </Container>
    )
  }

  return (
    <Container className="mb-5">
      <h4 className='text-center' style={{color: '#4d3572'}}>{facility.name}</h4>
      <hr />
      <Container className='pt-3'>
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
      <Button block type='button' onClick={homeBtn}>Home</Button>
    </Container>
  )
}

