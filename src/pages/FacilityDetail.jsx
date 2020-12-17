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
    <div  style={{
      backgroundImage:
        `linear-gradient(to left bottom, rgba(245, 246, 252, 0.52), rgb(187, 197, 196), rgba(35, 8, 53, 1)),
        url('https://www.jmberlin.de/sites/default/files/glashof-front_keyvisual.jpg')`,
      height: '100vh',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      backgroundAttachment: "fixed",
      width: "100%"}}
    >
      {/* <div
      style={{
        background: 
        `linear-gradient(to top right, rgba(245, 246, 252, 0.52), rgba(82, 58, 115, 1), rgba(35, 8, 53, 1))`,
        height: '65vh', 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundAttachment:"fixed"}}
        className="mt-3"
      > */}
      <div >
        <div>
          <Carousel
            infiniteLoop={true}
            interval={2000}
            swipeable={true}        
          >
            {facility.images.map((image, index) => (
              <div key={index} style={{height:'50vh'}}>
                <img src={image} alt="carousel" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div>
        <div className="ml-5 mr-5" style={{width: '40%'}}>
          <h5 className='text-left' style={{color: 'white', fontWeight: 'bold', fontStyle: 'italic'}}>{facility.name}</h5>
          <p style={{fontSize: 14, color: 'white'}}>{facility.description}</p>
        </div>
      </div>
    </div>
  )
}

