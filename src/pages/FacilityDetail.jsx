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
    <div
    style={{
      background: 
      `linear-gradient(to top right, rgba(245, 246, 252, 0.52), rgba(82, 58, 115, 1), rgba(35, 8, 53, 1))`,
      height: '80vh', 
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      backgroundAttachment:"fixed"}}
    >
      <div>
        <Carousel
          infiniteLoop={true}
          interval={2000}
          swipeable={true}        
        >
          {facility.images.map((image, index) => (
            <div key={index} style={{height:'500px'}}>
              <img src={image} alt="carousel" />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="ml-5 mr-5">
        <h5 className='text-left' style={{color: '#4d3572', fontWeight: 'bold'}}>{facility.name}</h5>
        <p style={{fontSize: 12}}>{facility.description}</p>
      </div>
    </div>
  )
}

